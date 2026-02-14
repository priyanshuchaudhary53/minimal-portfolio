import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { GoogleAnalytics } from '@next/third-parties/google'
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  minimumScale: 1,
}

export const metadata = {
  title: "Priyanshu Chaudhary - WordPress Developer",
  description: "Portfolio of Priyanshu Chaudhary, a WordPress developer specializing in custom themes and plugins. Based in Lucknow, India, showcasing work and side projects.",
};

export default function RootLayout({ children }) {
  let gaID = process.env.GA_ID ? process.env.GA_ID : "";
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} antialiased`}
      >
        {/* <div className="isolate"> */}
        <div className="max-w-screen overflow-x-hidden">
          <div className="grid min-h-dvh grid-cols-1 grid-rows-[1fr_1px_auto_1px_auto] justify-center [--gutter-width:2.5rem] md:-mx-4 md:grid-cols-[var(--gutter-width)_minmax(0,var(--breakpoint-sm))_var(--gutter-width)] lg:mx-0">
            <div className="col-start-1 row-span-full row-start-1 hidden border-x border-x-(--pattern-fg) bg-[repeating-linear-gradient(315deg,var(--pattern-fg)_0,var(--pattern-fg)_1px,transparent_0,transparent_50%)] bg-size-[10px_10px] bg-fixed [--pattern-fg:var(--color-black)]/5 md:block "></div>
            <div className="flex flex-col">
              <Header />
              {children}
              <Footer className="mt-auto" />
            </div>
            <div className="row-span-full row-start-1 hidden border-x border-x-(--pattern-fg) bg-[repeating-linear-gradient(315deg,var(--pattern-fg)_0,var(--pattern-fg)_1px,transparent_0,transparent_50%)] bg-size-[10px_10px] bg-fixed [--pattern-fg:var(--color-black)]/5 md:col-start-3 md:block"></div>
          </div>
        </div>
        {/* </div> */}
        <SpeedInsights />
        <GoogleAnalytics gaId={gaID} />
      </body>
    </html>
  );
}
