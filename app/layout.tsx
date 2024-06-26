import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "This is a motherfucking frame",
  description: "And it's fucking perfect",
  openGraph: {
    images: ["https://motherfuckingframe.com/1.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta property="fc:frame" content="vNext" />
        <meta
          property="fc:frame:image"
          content="https://motherfuckingframe.com/1.png"
        />
        <meta property="fc:frame:button:1" content="Next" />
        <meta
          property="fc:frame:post_url"
          content="https://motherfuckingframe.com/frame?n=1"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
