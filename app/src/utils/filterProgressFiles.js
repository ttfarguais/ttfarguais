// Description: This function filters the progress files and returns an array of objects with the title and category of each file.
const progressFiles = (files) => {
  return [
    {
      title: "Phase",
      category: files.stageProgressFiles
        .filter((file) => file.pathname.includes("PHASE"))
        .map((file) => {
          let name = "Phase";
          if (file.pathname.includes("1")) name += " 1";
          else if (file.pathname.includes("2")) name += " 2";
          else if (file.pathname.includes("3")) name += " 3";
          return { name, url: file.url }; // return the name of the file ex: Phase 1 and the url of the blob file
        }),
    },
    {
      title: "Mensuelles",
      category: files.monthlyProgressFiles
        .filter((file) =>
          [
            "JANVIER",
            "FEVRIER",
            "MARS",
            "AVRIL",
            "MAI",
            "JUIN",
            "JUILLET",
            "AOUT",
            "SEPTEMBRE",
            "OCTOBRE",
            "NOVEMBRE",
            "DECEMBRE",
          ].some((month) => file.pathname.includes(month))
        )
        .map((file) => {
          let name = "";
          if (file.pathname.includes("JANVIER")) name += "Janvier";
          else if (file.pathname.includes("FEVRIER")) name += "Février";
          else if (file.pathname.includes("MARS")) name += "Mars";
          else if (file.pathname.includes("AVRIL")) name += "Avril";
          else if (file.pathname.includes("MAI")) name += "Mai";
          else if (file.pathname.includes("JUIN")) name += "Juin";
          else if (file.pathname.includes("JUILLET")) name += "Juillet";
          else if (file.pathname.includes("AOUT")) name += "Août";
          else if (file.pathname.includes("SEPTEMBRE")) name += "Septembre";
          else if (file.pathname.includes("OCTOBRE")) name += "Octobre";
          else if (file.pathname.includes("NOVEMBRE")) name += "Novembre";
          else if (file.pathname.includes("DECEMBRE")) name += "Décembre";

          return { name, url: file.url }; // return the name of the file ex: Janvier and the url of the blob file
        }),
    },
    {
      title: "Saisons",
      category: files.seasonProgressFiles
        .filter((file) => {
          const yearMatch = file.pathname.match(/\b\d{4}\b/); // verify if the file contains a year
          return yearMatch !== null;
        })
        .map((file) => {
          let name = "";

          const yearMatch = file.pathname.match(/\b\d{4}\b/); // get the year from the file

          if (yearMatch) {
            const year = parseInt(yearMatch[0], 10); // convert the year to an integer
            name += `${year - 1} / ${year}`; // asign to the name the year and the next year
          } else {
            console.warn(
              "Aucune année trouvée dans le fichier :",
              file.pathname
            );
            return null; // return null if no year is found
          }

          return { name, url: file.url }; // return the name of the file ex: Saison 2024 / 2025 and the url of the blob file
        })
        .filter((file) => file !== null), 
    },
  ];
};

export default progressFiles;
