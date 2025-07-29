import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "수상한 녀석들",
  description: "공모전 출품작 분석 AI 서비스",
  icons: {
    icon: [
      {
        url: "/favicon.ico",
        sizes: "any",
      },
      {
        url: "/logo.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "/logo.png",
        sizes: "16x16",
        type: "image/png",
      },
    ],
    apple: [
      {
        url: "/logo.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
    shortcut: "/favicon.ico",
  },
  manifest: "/manifest.json",
  openGraph: {
    title: "수상한 녀석들",
    description: "수상한 녀석들 플랫폼",
    url: "https://soosanghan.site",
    siteName: "수상한 녀석들",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "수상한 녀석들",
      },
    ],
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "수상한 녀석들",
    description: "수상한 녀석들 플랫폼",
    images: ["/og-image.png"],
  },
};

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div>{children}</div>;
}
