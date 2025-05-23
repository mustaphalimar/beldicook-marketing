import Header from "@/components/layout/Header";
import "../styles/main.scss";
import { Analytics } from "@vercel/analytics/react";

import { Cairo } from "next/font/google";

export const metadata = {
  title: "BeldiCook | Moroccan Taste",
  description: "BeldiCook | Moroccan Taste",
  authors: [{ name: "BeldiCook" }],
  creator: "Mustapha Limar",
  keywords:
    "BeldiCook, Beldi Cook, Agadir, Food Agadir, Traditional Moroccan Food,beldi-cook",
};

const cairo = Cairo({
  subsets: ["latin"],
  weight: ["1000", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-cairo",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`overflow-x-hidden ${cairo.variable}`}>
        <Header />
        {children}
        <Analytics
          debug={process.env.NODE_ENV === "production" ? false : true}
        />
      </body>
    </html>
  );
}
