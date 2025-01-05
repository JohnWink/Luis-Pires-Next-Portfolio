import "@sass/spaceTraders/main.scss";
import type { Metadata } from "next";
import Head from "next/head";
import Sidebar from "@components/sidebar";
export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
