import { NextRequest, NextResponse } from "next/server";
import { getLinkPreview } from "link-preview-js";

export const dynamic = "force-static";

export async function POST(request: NextRequest) {
  const { url } = await request.json();
  const preview = await getLinkPreview(url, {
    followRedirects: "follow",
    headers: {
      "user-agent": "googlebot",
    },
  });
  return NextResponse.json({
    preview,
  });
}
