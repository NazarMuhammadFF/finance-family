import { NextResponse } from "next/server";

import {
  createBusiness,
  listBusinesses,
  setBusinessActiveState,
} from "@/services/businessService";

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
    const data = await listBusinesses(familyId);
    return NextResponse.json({ data });
  } catch (error) {
    return NextResponse.json(
      { error: (error as Error).message },
      { status: 500 },
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const created = await createBusiness(body);
    return NextResponse.json({ data: created }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: (error as Error).message },
      { status: 500 },
    );
  }
}

export async function PATCH(request: Request) {
  try {
    const body = await request.json();
    const { id, is_active } = body as { id?: string; is_active?: boolean };

    if (!id || typeof is_active !== "boolean") {
      return NextResponse.json(
        { error: "id and is_active are required" },
        { status: 400 },
      );
    }

    const updated = await setBusinessActiveState(id, is_active);
    return NextResponse.json({ data: updated });
  } catch (error) {
    return NextResponse.json(
      { error: (error as Error).message },
      { status: 500 },
    );
  }
}
