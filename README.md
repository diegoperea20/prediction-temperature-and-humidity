# Prediction Temperature and Humidity

Prediction Temperature and Humidity 
"next": "13.4.12"  "react": "18.2.0"

Create .env file:

```bash
#DATABASE_URL="file:./dev.db" #only use once
TURSO_DATABASE_URL=
TURSO_AUTH_TOKEN=
NEXTAUTH_SECRET=
NEXTAUTH_URL=http://localhost:3000
```

json example in http://localhost:3000/api/data :
```bash
{
  "date": "2025-03-20",
  "hours": "16",
  "minutes": "37",
  "temperatureC": 24,
  "humidityporc": 50
}

```
----

DB with turso [turso db sqlite](https://turso.tech/)

> [!WARNING]
> install Cli turso first follow of steps
>

Steps for conection read:
1. [turso](https://docs.turso.tech/sdk/ts/orm/prisma)
2. [prisma documentation](https://www.prisma.io/docs/orm/overview/databases/turso)

Or 

Tutorial the conection turso with prisma [youtube](https://www.youtube.com/watch?v=YajUh0gbQPE)


----

Created by [Diego Ivan Perea Montealegre](https://github.com/diegoperea20)