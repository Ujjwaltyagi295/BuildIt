import type { Metadata } from "next";
import { Anton, Geist, Geist_Mono, Inter_Tight } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const Integrated = localFont({
  src: [{ path: "./fonts/Integrated.otf", weight: "400", style: "normal" }],
  variable: "--font-integrated",
  display: "swap",
});

const Helvetica = localFont({
  src: [
    { path: "./fonts/HelveticaNeueLight.otf", weight: "400", style: "normal" },
    { path: "./fonts/HelveticaNeueBold.otf", weight: "800", style: "normal" },
  ],
  variable: "--font-helvetica",
  display: "swap",
});

const ppMonument = localFont({
  src: [
    { path: "./fonts/MonumentExtended-Regular.otf", weight: "400", style: "normal" },
  ],
  variable: "--font-pp-monument",
  display: "swap",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const anton = Anton({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-anton",
});

const inter = Inter_Tight({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Build It | Tech Agency for Web, App & Digital Growth",
  description:
    "Build It is a creative tech agency that builds websites, apps, and digital experiences. We also offer social media management and content creation to help your brand grow online.",
  keywords: [
    "build",
     "buildit service",,
     "buildit",
    "build it",
    "tech agency",
    "web development",
    "app development",
    "digital marketing",
    "social media management",
    "content creation",
    "UI/UX design",
    "Build It",
    "Build It Service",
  ],
  authors: [{ name: "Build It", url: "https://builditservice.com" }],
  metadataBase: new URL("https://builditservice.com"),
  openGraph: {
    title: "Build It | Tech Agency for Web, App & Digital Growth",
    description:
      "We design and develop custom web and app solutions, manage social media, and create digital content that drives growth.",
    url: "https://builditservice.com",
    siteName: "Build It",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Build It - Tech Agency",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Build It | Tech Agency for Web, App & Digital Growth",
    description:
      "Build It builds apps, websites, and digital strategies for brands that want to grow.",
    creator: "@builditservice", 
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  alternates: {
    canonical: "https://builditservice.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <body
        className={`${geistSans.variable} ${Helvetica.variable} ${inter.variable} ${anton.variable} ${Integrated.variable} ${ppMonument.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
