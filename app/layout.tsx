import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const ABCCameraPlainVariable = localFont({
  src: [
    {
      path: "./fonts/ABCCameraPlainVariable-Trial.ttf",
      weight: "400",
      style: "regular italic",
    },
    {
      path: "./fonts/ABCCameraPlainVariable-Trial.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-abccameraplainvariable",
});

export const metadata: Metadata = {
  title: "norm cultura",
  description: "WIP",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${ABCCameraPlainVariable.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
