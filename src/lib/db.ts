// Configuración para Prisma con Turso que evita los problemas de importación

// Importaciones básicas
import { PrismaClient } from '@prisma/client';

// Interfaces para el adaptador y el cliente (para evitar importar directamente)
interface LibSQLDatabase {
  execute: (sql: string, params?: any[]) => Promise<any>;
}

// Intento de conexión sin importar los archivos problemáticos
const createPrismaClient = () => {
  let prisma: PrismaClient;
  
  try {
    // Este bloque intenta importar de forma dinámica solo cuando se necesita
    // lo que evita que webpack procese los archivos durante la compilación
    // con eslint-disable-next-line @typescript-eslint/no-var-requires
    const { createClient } = require('@libsql/client');
    // con eslint-disable-next-line @typescript-eslint/no-var-requires
    const { PrismaLibSQL } = require('@prisma/adapter-libsql');
    
    const libsql = createClient({
      url: `${process.env.TURSO_DATABASE_URL}`,
      authToken: `${process.env.TURSO_AUTH_TOKEN}`,
    });
    
    const adapter = new PrismaLibSQL(libsql);
    prisma = new PrismaClient({ adapter });
  } catch (error) {
    // Si hay algún error, crear un cliente Prisma normal
    console.warn('Error al configurar Prisma con Turso, usando configuración estándar:', error);
    prisma = new PrismaClient();
  }
  
  return prisma;
};

// Manejo de instancia única para el entorno de desarrollo
const globalForPrisma = globalThis as unknown as { 
  prisma: PrismaClient | undefined;
};

// Reutilizar la conexión durante el desarrollo
export const prisma = globalForPrisma.prisma ?? createPrismaClient();

if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.prisma = prisma;
}

export const db = prisma;