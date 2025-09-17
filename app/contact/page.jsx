import ContactContainer from "../src/components/Main/contact/Contact-Container";

export const metadata = {
  title: "T.T. Farguais - Contact",
  description:
    "Contactez le club de tennis de table de Fargues Saint Hilaire. Nous vous répondrons dans les plus brefs délais.",
};

export default function ContactPage() {
 
  return (
    <>
    <head>
    <link rel="canonical" href="https://www.ttfarguais.fr/contact" />
    </head>
    <ContactContainer></ContactContainer>
    </>
  );
}
