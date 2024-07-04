import { Roboto } from "next/font/google";
import "./globals.css";
import Footer from "./src/components/Footer/Footer";
import AnnouceBar from "./src/components/Header/AnnouceBar";
import Navbar from "./src/components/Header/MobileNav";
const inter = Roboto({ 
  subsets: ["latin"],
  weight:'400',
});

export const metadata = {
  title: "TTFarguais - Accueil",
  description: "Club de tennis de table de Fargues Saint Hilaire. Retrouvez toutes les informations relatives au club.",
};

export default function RootLayout({ children }) {

  const announce = "Rejoignez-nous pour les championnats régionaux ce samedi !";

  return (
    <html lang="fr">
      <body className={`${inter.className}`}>
        <header>
          <AnnouceBar text={announce} />
          <Navbar />
        </header>
        <main>
        {children}
        </main>
        <footer>
          <Footer />
        </footer>
        </body>
    </html>
  );
}
