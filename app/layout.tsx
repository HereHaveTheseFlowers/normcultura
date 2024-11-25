import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { cookies } from "next/headers";

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

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const theme = cookieStore.get("theme");

  return (
    <html lang="en" data-theme={theme}>
      <body className={`${ABCCameraPlainVariable.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
