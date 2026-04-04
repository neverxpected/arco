import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import StructuredData from "./components/StructuredData";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.arcofitgym.com"),
  title: {
    default:
      "Arco Fit Gym & Wellness | Strength Training & Group Fitness in Fulshear, TX",
    template: "%s | Arco Fit Gym & Wellness",
  },
  description:
    "Arco Fit Gym & Wellness is a 27,000 sq ft strength training and group fitness facility in Fulshear, TX. We offer personal training, group fitness classes, reformer Pilates, yoga, custom saunas, a kids club, and a smoothie bar. Open to all fitness levels.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.arcofitgym.com",
    siteName: "Arco Fit Gym & Wellness",
    title:
      "Arco Fit Gym & Wellness | Strength Training & Group Fitness in Fulshear, TX",
    description:
      "Arco Fit Gym & Wellness is a 27,000 sq ft strength training and group fitness facility in Fulshear, TX. We offer personal training, group fitness classes, reformer Pilates, yoga, custom saunas, a kids club, and a smoothie bar. Open to all fitness levels.",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Arco Fit Gym & Wellness | Strength Training & Group Fitness in Fulshear, TX",
    description:
      "Arco Fit Gym & Wellness is a 27,000 sq ft strength training and group fitness facility in Fulshear, TX. We offer personal training, group fitness classes, reformer Pilates, yoga, custom saunas, a kids club, and a smoothie bar. Open to all fitness levels.",
    images: ["/images/og-image.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icons/icon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/icons/icon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/icons/apple-touch-icon.png" }],
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover" as const,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <StructuredData />
        {children}
      </body>
    </html>
  );
}
