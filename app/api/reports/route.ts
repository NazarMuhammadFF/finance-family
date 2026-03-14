import { NextResponse } from "next/server";

import { getFamilyReport } from "@/services/reportService";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const familyId = searchParams.get("familyId");

  if (!familyId) {
    return NextResponse.json(
      { error: "familyId query param is required" },
      { status: 400 },
    );
  }

  try {
    const data = await getFamilyReport(familyId);
    return NextResponse.json({ data });
  } catch (error) {
    return NextResponse.json({ error: (error as Error).message }, { status: 500 });
  }
}