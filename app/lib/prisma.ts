import { PrismaClient } from "../generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import pg from "pg";

let prisma: PrismaClient;

const pool = new pg.Pool({ connectionString: process.env.DATABASE_URL });
const adapter = new PrismaPg(pool);

if (process.env.NODE_ENV === "production") {
    prisma = new PrismaClient({ adapter });
} else {
    if (!(global as any).prisma) {
        (global as any).prisma = new PrismaClient({ adapter });
    }
    prisma = (global as any).prisma;
}

export { prisma };
