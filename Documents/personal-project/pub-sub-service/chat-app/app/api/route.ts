import { NextResponse } from "next/server";

export async function POST(req: Request) {
    const { message } = await req.json();
    console.log("Received message:", message);
    return NextResponse.json({ reply: `Echo: ${message}` });
}
