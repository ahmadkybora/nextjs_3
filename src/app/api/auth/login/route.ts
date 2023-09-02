import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    message: "is get method"
    },
    { 
      status: 200 
    });
}

export async function POST(req: Request) {
  return NextResponse.json({
    message: "you are logged in"
    },
    { 
      status: 200
    });
}
