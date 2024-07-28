import NextAuth from "next-auth";
import { authOptions } from "@/lib/authOptions";

const handle = NextAuth(authOptions);

export const GET = handle;
export const POST = handle;
