import type { Metadata } from "next";
import { ThemeProvider } from "@/contexts";
import { Sofia_Sans } from "next/font/google";
import "./globals.css";

const sofia_Sans = Sofia_Sans({
  subsets: ["latin"],
  style: ["normal"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-sofia-sans",
});

export const metadata: Metadata = {
  title: "Carnaval 2025 - Informações e Programação",
  description:
    "Encontre todos os bloquinhos de carnaval de 2025 e fique por dentro da programação dos melhores eventos de rua!",
};

type Props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${sofia_Sans.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
