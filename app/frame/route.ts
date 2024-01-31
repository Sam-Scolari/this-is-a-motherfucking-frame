import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const data = await request.json();

  const button = data.untrustedData.buttonIndex;

  const n = Number(new URL(request.url).searchParams.get("n") as string);

  if (n === 1 && button === 1) {
    return new NextResponse(
      `
                        <!DOCTYPE html>
                        <html>
                          <head>
                                <meta property="fc:frame" content="vNext" />
                                <meta property="fc:frame:image" content="https://motherfuckingframe.com/2.png" />
                                <meta property="fc:frame:button:1" content="Back" />
                                <meta property="fc:frame:button:2" content="Next" />
                                <meta property="fc:frame:post_url" content="https://motherfuckingframe.com/frame?n=2" />
                          </head>
                        </html>
                        `,
      { status: 200, headers: { "content-type": "text/html" } }
    );
  }

  if (n === 2 && button === 1) {
    return new NextResponse(
      `
                        <!DOCTYPE html>
                        <html>
                          <head>
                                <meta property="fc:frame" content="vNext" />
                                <meta property="fc:frame:image" content="https://motherfuckingframe.com/1.png" />
                                <meta property="fc:frame:button:1" content="Next" />
                                <meta property="fc:frame:post_url" content="https://motherfuckingframe.com/frame?n=1" />
                          </head>
                        </html>
                        `,
      { status: 200, headers: { "content-type": "text/html" } }
    );
  }

  if (n === 7 && button === 2) {
    return new NextResponse(
      `
                        <!DOCTYPE html>
                        <html>
                          <head>
                                <meta property="fc:frame" content="vNext" />
                                <meta property="fc:frame:image" content="https://motherfuckingframe.com/8.png" />
                                <meta property="fc:frame:button:1" content="Back" />
                                <meta property="fc:frame:post_url" content="https://motherfuckingframe.com/frame?n=8" />
                          </head>
                        </html>
                        `,
      { status: 200, headers: { "content-type": "text/html" } }
    );
  }

  if (n === 8 && button === 1) {
    return new NextResponse(
      `
                        <!DOCTYPE html>
                        <html>
                          <head>
                                <meta property="fc:frame" content="vNext" />
                                <meta property="fc:frame:image" content="https://motherfuckingframe.com/7.png" />
                                <meta property="fc:frame:button:1" content="Back" />
                                <meta property="fc:frame:button:2" content="Next" />
                                <meta property="fc:frame:post_url" content="https://motherfuckingframe.com/frame?n=7" />
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
                                button === 1 ? n - 1 : n + 1
                              }.png" />
                              <meta property="fc:frame:button:1" content="Back" />
                              <meta property="fc:frame:button:2" content="Next" />
                              <meta property="fc:frame:post_url" content="https://motherfuckingframe.com/frame?n=${
                                button === 1 ? n - 1 : n + 1
                              }" />
                        </head>
                      </html>
                      `,
    { status: 200, headers: { "content-type": "text/html" } }
  );
}
