import { Roboto } from "next/font/google";
import "./globals.css";
import Header from "./src/components/Header/Header";
const inter = Roboto({ 
  subsets: ["latin"],
  weight:'400' 
});

export const metadata = {
  title: "TTFarguais - Accueil",
  description: "Club de tennis de table de Fargues Saint Hilaire. Retrouvez toutes les informations relatives au club.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main>
        {children}
        </main>
        </body>
    </html>
  );
}
