import { Roboto } from "next/font/google";
import "./globals.css";
import Footer from "./src/components/Footer/Footer";
import AnnouceBar from "./src/components/Header/AnnouceBar";
import Nav from './src/components/Header/Nav';
const inter = Roboto({ 
  subsets: ["latin"],
  weight:'400',
});

export const metadata = {
  title: "T.T.Farguais - Accueil",
  description: "Bienvenue sur le site du T.T.Farguais. Retrouvez toutes les informations relatives au club. Venez nous rejoindre !",
};

export default function RootLayout({ children }) {

  const announce = "Les entraînements reprennent en septembre 2024, on vous attend nombreux !";
  const link = "/inscription";

  return (
    <html lang="fr">
      <body className={`${inter.className}`}>
        <header>
          <AnnouceBar text={announce} link={link}/>
          <Nav />
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
