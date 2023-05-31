import { NextRequest, NextResponse } from "next/server";

export function GET(request: NextRequest) {
  const cookies = request.cookies;
  const foo = cookies.getAll();

  console.log(foo);
  if (foo[0].name == "__cookie.0" && foo[1].name == "__cookie.1") {
    return new Response(undefined, { status: 200 });
  }
  return new Response(undefined, { status: 400 });
}
