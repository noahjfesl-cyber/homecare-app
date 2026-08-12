import { PrismaClient } from "@/generated/prisma/client";

// Prevents exhausting the connection pool from hot-reload creating a new
// PrismaClient on every file change in dev.
const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

export const db = globalForPrisma.prisma ?? new PrismaClient();

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = db;
}
