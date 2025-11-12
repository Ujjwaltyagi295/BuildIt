import type { Metadata } from "next";
import { Anton, Geist, Geist_Mono, Inter_Tight } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import SmoothScroll from "./components/SmoothScroll"; 

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
    {
      path: "./fonts/MonumentExtended-Regular.otf",
      weight: "400",
      style: "normal",
    },
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
    "Build It is a tech agency specializing in web development, app development, digital marketing, UI/UX design, and social media management. At Build It, we create websites, apps, and digital strategies that help brands grow online through creative design, content creation, and data-driven solutions.",
  keywords: [
    "build",
    "buildit service",
    "buildit",
    "build it",
    "build it agency",
    "build it tech",
    "build it web development",
    "build it app development",
    "build it digital marketing",
    "tech agency",
    "web development",
    "app development",
    "digital marketing",
    "social media management",
    "content creation",
    "UI/UX design",
    "branding",
    "creative agency",
    "Build It",
    "Build It Service",
    "Build It Tech Agency",
    "custom website design",
    "responsive web design",
    "e-commerce development",
    "SaaS product development",
    "mobile app design",
    "iOS app development",
    "Android app development",
    "full-stack development",
    "front-end development",
    "back-end development",
    "search engine optimization",
    "SEO services",
    "PPC management",
    "online advertising",
    "lead generation",
    "conversion rate optimization",
    "digital growth solutions",
    "website redesign services",
    "tech agency for startups",
  ],
  authors: [{ name: "Build It", url: "https://builditservice.com" }],
  metadataBase: new URL("https://builditservice.com"),
  openGraph: {
    title: "Build It | Tech Agency for Web, App & Digital Growth",
    description:
      "Build It designs and develops custom websites, apps, and digital marketing solutions. We help businesses grow online through design, content, and strategy.",
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
      "Build It builds apps, websites, and digital marketing strategies that help brands scale online.",
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
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
