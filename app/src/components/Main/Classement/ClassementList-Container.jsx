"use client"
import { useEffect, useState } from "react";
import ClassementList from "./ClassementList";

const CompContainer = () => {
  const [files, setFiles] = useState({
    monthlyFiles: [],
    seasonFiles: [],
    stageFiles: [],
  });

  const fetchImages = async (type) => {
    try {
      const response = await fetch(`/api/membre/files/competitorResults/get/${type}`);
      if (!response.ok)
        throw new Error(`Erreur lors de la récupération des images de ${type}`);
      const data = await response.json();
      setFiles((prevFiles) => ({ ...prevFiles, [`${type}Files`]: data }));
    } catch (error) {
      console.error("Erreur:", error);
    }
  };

  useEffect(() => {
    fetchImages("monthly");
    fetchImages("season");
    fetchImages("stage");
  }, []);

  const classementType = [
    {
      title: "Phase :",
      category: files.stageFiles.map((file) => {
        let name = "Phase";
        if (file.includes("1")) name += " 1";
        else if (file.includes("2")) name += " 2";
        else if (file.includes("3")) name += " 3";
        return { name, file: `/competition/progress/stageProgress/${file}` };
      }),
    },
    {
      title: "Mensuelles :",
      category: files.monthlyFiles.map((file) => {
        let name = "";
        if (file.includes("JANVIER")) name = "Janvier";
        else if (file.includes("FEVRIER")) name = "Février";
        else if (file.includes("MARS")) name = "Mars";
        else if (file.includes("AVRIL")) name = "Avril";
        else if (file.includes("MAI")) name = "Mai";
        else if (file.includes("JUIN")) name = "Juin";
        else if (file.includes("JUILLET")) name = "Juillet";
        else if (file.includes("AOUT")) name = "Août";
        else if (file.includes("SEPTEMBRE")) name = "Septembre";
        else if (file.includes("OCTOBRE")) name = "Octobre";
        else if (file.includes("NOVEMBRE")) name = "Novembre";
        else if (file.includes("DECEMBRE")) name = "Décembre";
        return { name, file: `/competition/progress/monthlyProgress/${file}` };
      }),
    },
    {
      title: "Saisons :",
      category: files.seasonFiles.map((file) => {
        let name = "Saison";
      
        // Récupérer l'année dans le fichier
        const yearMatch = file.match(/\b\d{4}\b/); // Recherche une année dans le fichier
      
        if (yearMatch) {
          const year = parseInt(yearMatch[0], 10); // Convertir l'année en nombre
          name += ` ${year} / ${year + 1}`; // Ajouter l'année et l'année suivante
        }
      
        return { name, file: `/competition/progress/seasonProgress/${file}` };
      }),
    },
  ];

  return <ClassementList classementType={classementType} />;
};

export default CompContainer;
