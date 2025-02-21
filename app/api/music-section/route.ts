import { NextResponse } from "next/server";
import prisma from "@/db";

export async function POST(req: Request) {
    console.log("Prisma Models : ", Object.keys(prisma)); 
  try {
    const data = await req.json();
    console.log("Received Data:", data); 

    if (!data || !data.name || !data.email || !data.occasion || !data.requirement) {
      throw new Error("Request payload is missing");
    }

    const order = await prisma.music.create({
      data: {
          name: data.name,
          email: data.email,
          occasion: data.occasion,
          requirement: data.requirement,
      },
    });

    return new Response(JSON.stringify(order), { status: 201 });
  } catch (error) {
    console.error(error);
    return new Response(
      JSON.stringify({ error: `Error creating music requirement: ${error}` }),
      { status: 500 }
    );
  }
}
