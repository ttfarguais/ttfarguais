import Awards from '../src/components/Main/Palmares/Awards';
export const metadata = {
  title: "T.T. Farguais - Palmarès",
  description:
    "Retrouvez ici le palmarès du T.T. Farguais. Les titres remportés par les joueurs du club de tennis de table de Fargues-Saint-Hilaire.",
};

export default function AwardsPage() {

  const awards = [
    {date: 1993, title: "Champion de Gironde Seniors Messieurs Division 3."},
    {date: 1994, title: "Champion de Gironde Seniors Messieurs Division 1."},
    {date: 1995, title: "Vice-Champion de Gironde Seniors du Critérium Féminin."},
    {date: 1996, title: "Champion de Gironde Poussins/Benjamins Garçons."},
    {date: 1997, title: "Vainqueur de la Coupe de Gironde Messieurs Non-Classé / 55."},
    {date: 1998, title: "Champion d’Aquitaine Seniors Messieurs Division 2. Champion de Gironde Cadets Garçons Division 3. Vainqueur de la Coupe A de Gironde Benjamins Garçons. Vainqueur de la Coupe B de Gironde Minimes Garçons."},
    {date: 1999, title: "Vainqueur de la Coupe B de Gironde Minimes Garçons."},
    {date: 2002, title: "Vainqueur de la Coupe D de Gironde Cadets Garçons."},
    {date: 2003, title: "Vainqueur de la Coupe C de Gironde Juniors Garçons."},
    {date: 2004, title: "Vainqueur de la Coupe C de Gironde Juniors Garçons."},
    {date: 2005, title: "Vainqueur de la Coupe B de Gironde Juniors Garçons. Champion de Gironde Juniors Garçons."},
    {date: 2007, title: "Champion de Gironde Juniors Filles."},
    {date: 2008, title: "Champion de Gironde Seniors Messieurs Division 1. Champion de Gironde Division 3 Juniors Garçons."},
    {date: 2010, title: "Champion d’Aquitaine Séniors Messieurs Division 3. Vainqueur de la Coupe D de Gironde Benjamins Garçons."},
    {date: 2011, title: "Champion de Gironde Seniors Messieurs Division 2."},
    {date: 2012, title: "Champion de Gironde Poussins Garçons. Vice-Champion de Gironde Poussins Garçons."},
    {date: 2014, title: "Champion de Gironde Division Elite Benjamins Garçons."},
    {date: 2015, title: "Champion de Gironde Division Honneur Minimes Garçons."},

  ]

  return (
    <>
    <head>
    <link rel="canonical" href="https://www.ttfarguais.fr/palmares" />
    </head>
   <Awards awards={awards}></Awards>
    </>
  );
}
