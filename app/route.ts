import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  return new NextResponse(
    `
                <!DOCTYPE html>
                <html>
                  <head>
                        <meta property="fc:frame" content="vNext" />
                        <meta property="fc:frame:image" content="https://motherfuckingframe.com/1.png" />
                        <meta property="fc:frame:button:1" content="Next ➡" />
                        <meta property="fc:frame:post_url" content="https://motherfuckingframe.com/?n=1" />
                  </head>
                </html>
                `,
    { status: 200, headers: { "content-type": "text/html" } }
  );
}

export async function POST(request: NextRequest) {
  const data = await request.json();

  const button = data.untrustedData.buttonIndex;

  const n = Number(new URL(request.url).searchParams.get("n") as string);

  if (n === 1) {
    return new NextResponse(
      `
                    <!DOCTYPE html>
                    <html>
                      <head>
                            <meta property="fc:frame" content="vNext" />
                            <meta property="fc:frame:image" content="https://motherfuckingframe.com/1.png" />
                            <meta property="fc:frame:button:1" content="Next ➡" />
                            <meta property="fc:frame:post_url" content="https://motherfuckingframe.com/?n=1" />
                      </head>
                    </html>
                    `,
      { status: 200, headers: { "content-type": "text/html" } }
    );
  }

  if (n === 6) {
    return new NextResponse(
      `
                    <!DOCTYPE html>
                    <html>
                      <head>
                            <meta property="fc:frame" content="vNext" />
                            <meta property="fc:frame:image" content="https://motherfuckingframe.com/6.png" />
                            <meta property="fc:frame:button:1" content="⬅ Back" />
                            <meta property="fc:frame:post_url" content="https://motherfuckingframe.com/?n=5" />
                      </head>
                    </html>
                    `,
      { status: 200, headers: { "content-type": "text/html" } }
    );
  }

  if (button === 1) {
    return new NextResponse(
      `
                      <!DOCTYPE html>
                      <html>
                        <head>
                              <meta property="fc:frame" content="vNext" />
                              <meta property="fc:frame:image" content="https://motherfuckingframe.com/${
                                n - 1
                              }.png" />
                              <meta property="fc:frame:button:1" content="⬅ Back" />
                              <meta property="fc:frame:button:2" content="Next ➡" />
                              <meta property="fc:frame:post_url" content="https://motherfuckingframe.com/?v=${
                                n - 1
                              }" />
                        </head>
                      </html>
                      `,
      { status: 200, headers: { "content-type": "text/html" } }
    );
  }

  return new NextResponse(
    `
                  <!DOCTYPE html>
                  <html>
                    <head>
                          <meta property="fc:frame" content="vNext" />
                          <meta property="fc:frame:image" content="https://motherfuckingframe.com/${
                            n + 1
                          }.png" />
                          <meta property="fc:frame:button:1" content="⬅ Back" />
                          <meta property="fc:frame:button:2" content="Next ➡" />
                          <meta property="fc:frame:post_url" content="https://motherfuckingframe.com/?v=${
                            n + 1
                          }" />
                    </head>
                  </html>
                  `,
    { status: 200, headers: { "content-type": "text/html" } }
  );
}