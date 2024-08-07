import Tournaments from '../src/components/Main/Tournaments/Tournaments';

export const metadata = {
  title: "T.T. Farguais - Tournois",
  description: "Découvrez l'historique des tournois internes du club de tennis de table de Fargues-Saint-Hilaire. Les vainqueurs, les finalistes et les photos des trophées.",
};

export default function TournoisPage() {

  const trophys = [
    {
      bio: [
        { year: 2022, name: "SOETAERT P.", vs: "DUARTE A.J." },
        { year: 2019, name: "VANBAUCE F.", vs: "THEVENET J." },
        { year: 2018, name: "TAUZIA D.", vs: "SOETAERT P." },
        { year: 2017, name: "TAUZIA D.", vs: "SOETAERT P." },
        { year: 2016, name: "JAMBON J.", vs: "LEYRAT V." },
        { year: 2015, name: "CHATEAUREYNAUD J.", vs: "AIMÉE S." },
        { year: 2014, name: "TAUZIA D.", vs: "PIRAVEAU A." },
        { year: 2013, name: "CHATEAUREYNAUD J.", vs: "DUARTE A.J." },
      ],
      image: "/tournaments/tournament_trophy_2013.jpg",
      alt: "Trophée du tournoi interne de 2013 à 2022",
      titleTrophy: "Trophée du tournoi interne de 2013 à 2022",
    },
    {
      bio: [
        { year: 2012, name: "DUARTE A.J." },
        { year: 2011, name: "DARRACK L." },
        { year: 2010, name: "DARRACK L." },
        { year: 2009, name: "LEJARD J.C." },
        { year: 2008, name: "GUIGNER Y." },
        { year: 2007, name: "PIRES M." },
        { year: 2006, name: "RAMON C." },
        { year: 2005, name: "TAUZIA D." },
        { year: 2004, name: "GOUIN S." },
        { year: 2003, name: "DEFLANDRE S." },
        { year: 2002, name: "DEFLANDRE S." },
        { year: 2001, name: "AIMEE S." },
        { year: 2000, name: "BAILLY T." },
        { year: 1999, name: "DEFLANDRE S." },
        { year: 1998, name: "HAUTIER J.P." },
        { year: 1997, name: "POUGET C." },
        { year: 1996, name: "MOTILLON A." },
        { year: 1995, name: "DUBOURDEAUX M." },
        { year: 1994, name: "LEJARD J.C." },
        { year: 1993, name: "LEJARD J.C." },
      ],
      image: "/tournaments/tournament_trophy_1993.jpg",
      alt: "Trophée du tournoi interne de 1993 à 2012",
      titleTrophy: "Trophée du tournoi interne de 1993 à 2012",
    },
  ];

  return (
   <Tournaments trophys={trophys}></Tournaments>
  )
}