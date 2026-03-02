import type { Metadata } from "next";
import LenisProvider from "@/app/lenisProvider";
import LoadingWrapper from "@/components/LoadingWrapper";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Ardan - Junior Web Developer",
    template: "%s | Ardan Portfolio",
  },
  description:
    "Portfolio website of Ardan Ramadhan Putra Hidayat - Junior Web Developer",
  icons: {
    icon: "icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body>
        <LoadingWrapper>
          <LenisProvider>
            {children}
          </LenisProvider>
        </LoadingWrapper>
      </body>
    </html>
  );
}