import { NextResponse } from "next/server";
import prisma from "@/db";

export async function POST(req: Request) {
  try {
    const data = await req.json();

    if (!data || !data.name || !data.email || !data.message) {
      throw new Error("Request payload is missing");
    }

    const order = await prisma.contact.create({
      data: {
        name: data.name,
        email: data.email,
        message: data.message,
      },
    });

    return new Response(JSON.stringify(order), { status: 201 });
  } catch (error) {
    console.error(error);
    return new Response(
      JSON.stringify({ error: `Error creating order: ${error}` }),
      { status: 500 }
    );
  }
}
