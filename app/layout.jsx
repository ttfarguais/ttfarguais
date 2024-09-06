import { Exo_2 } from "next/font/google";
import "./globals.css";
import Footer from "./src/components/Footer/Footer";
import AnnouceBar from "./src/components/Header/AnnouceBar";
import Nav from './src/components/Header/Navigation/Nav';
import ArrowUp from './src/components/Main/ArrowUp';

const exo2 = Exo_2({ 
  subsets: ["latin"],
  weight: '400',
});




export const metadata = {
  title: "T.T. Farguais - Accueil",
  description: "Bienvenue sur le site du T.T.Farguais. Retrouvez toutes les informations relatives au club. Venez nous rejoindre !",
};

export default function RootLayout({ children }) {

  const announce = "Les entraînements reprennent en septembre, on vous attend nombreux !";
  const link = "/inscription";

  return (
    <html lang="fr">
      <head>
      <meta name="google-site-verification" content="Pk4o8AF5fkwB0KfjHtSMkAs0b_37p4QRD9u61_cPLxc" />
      </head>
      <body className={`${exo2.className}`}>
        <header>
          <AnnouceBar text={announce} link={link}/>
          <Nav />
        </header>
        <main>
        {children}
          <ArrowUp />
        </main>
        <footer>
          <Footer />
        </footer>
        </body>
    </html>
  );
}
