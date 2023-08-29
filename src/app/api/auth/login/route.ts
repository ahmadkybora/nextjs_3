import { NextResponse } from "next/server";
import AuthController from "@/server/controllers/auth/auth.controller";

export async function POST(req: Request) {
  const { username, password } = await req.json();
  const data = AuthController.get();
  return NextResponse.json({
    data
    },
    { 
      status: 200
    });
}

export async function GET() {
  return NextResponse.json({
    message: "is get method"
    },
    { 
      status: 200 
    });
}