# Prediction Temperature and Humidity

Prediction Temperature and Humidity 


-----

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started
Nodejs version v20.18.0 and Next.js version v13.4.12  React 18.2.0

Create `.env` file:

```bash
DATABASE_URL=
```

First
```bash
npm install
```
run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

> **Note:** In Supabase, set the connection to **session mode**. It does not work in **transition mode**.

[Supabase](https://supabase.com/)

<p align="center">
  <img src="README-images/selectionConectionDB.PNG" alt="Step1">
</p>

### Prism Commands

`npx prisma migrate dev --name init`

```bash
npx prisma migrate dev --name init
```

This command is used to **create and apply migrations** in a development environment.

`npx prisma db push`

```bash
npx prisma db push
```

On the other hand, the `npx prisma db push` command is used to **directly synchronize the Prisma schema with the database** without creating migration files.

----
Please verify .env in gitignore if you do deploy

> **Note:** In the file `.env`, set the `NEXTAUTH_SECRET` to the generated number from the [secret generator](https://generate-secret.vercel.app/32) or [visit documentation](https://next-auth.js.org/deployment#vercel) for more information.

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

Created by [Diego Ivan Perea Montealegre](https://github.com/diegoperea20)

---