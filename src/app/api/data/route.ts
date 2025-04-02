import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import { db } from "@/lib/db";

// GET: Obtener todos los registros
export async function GET() {
  try {
    const data = await db.data.findMany();
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Error al obtener los datos" }, { status: 500 });
  }
}

// POST: Crear un nuevo registro
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { date, hours, minutes, temperatureC, humidityporc } = body;

    if (
      typeof date !== "string" ||
      typeof hours !== "string" ||
      typeof minutes !== "string" ||
      typeof temperatureC !== "number" ||
      typeof humidityporc !== "number"
    ) {
      return NextResponse.json({ error: "Datos inválidos" }, { status: 400 });
    }

    const newData = await db.data.create({
      data: { date, hours, minutes, temperatureC, humidityporc },
    });

    return NextResponse.json(newData, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Error al crear el registro" }, { status: 500 });
  }
}