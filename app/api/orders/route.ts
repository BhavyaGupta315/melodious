import { NextResponse } from "next/server";
import prisma from "@/db";

export async function POST(req: Request) {
  try {
    const data = await req.json();
    console.log("Received Data:", data); // Debugging Line ✅

    if (!data || !data.plan || !data.amount || !data.customerDetails) {
      throw new Error("Request payload is missing");
    }

    const order = await prisma.orders.create({
      data: {
        plan: data.plan,
        name: data.customerDetails.name,
        email: data.customerDetails.email,
        phone: data.customerDetails.phone,
        amount: data.amount,
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
