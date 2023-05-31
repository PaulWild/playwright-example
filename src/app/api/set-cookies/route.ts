import { NextResponse } from "next/server";

export function GET() {
  const response = NextResponse.json({
    a: "test",
  });

  response.cookies.set("__cookie.0", "A");
  response.cookies.set("__cookie.1", "A");

  return response;
}
