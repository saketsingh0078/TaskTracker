"use client";
import { authOptions } from "@/lib/authOptions";
import { getServerSession } from "next-auth";
import { useRouter } from "next/router";

export default async function Home() {
  const session: any = getServerSession(authOptions);
  const router = useRouter();
  console.log(session);

  return <div></div>;
}
