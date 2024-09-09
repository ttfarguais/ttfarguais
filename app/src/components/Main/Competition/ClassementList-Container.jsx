"use client"
import { useEffect, useState } from "react";
import ClassementList from "./ClassementList";

const CompContainer = () => {
  const [files, setFiles] = useState({
    regionaleFiles: [],
    departementaleFiles: [],
    honneurFiles: [],
  });

  const fetchImages = async (type) => {
    try {
      const response = await fetch(`/api/membre/files/competitionResults/get/${type}`);
      if (!response.ok)
        throw new Error(`Erreur lors de la récupération des images de ${type}`);
      const data = await response.json();
      setFiles((prevFiles) => ({ ...prevFiles, [`${type}Files`]: data }));
    } catch (error) {
      console.error("Erreur:", error);
    }
  };

  useEffect(() => {
    fetchImages("regionale");
    fetchImages("departementale");
    fetchImages("honneur");
  }, []);

  const classementType = [
    {
      title: "Championnat de France Régional",
      category: files.regionaleFiles.map((file) => {
        let name = "Régionale";
        if (file.includes("R4")) name += " 4";
        else if (file.includes("R3")) name += " 3";
        else if (file.includes("R2")) name += " 2";
        else if (file.includes("R1")) name += " 1";
        return { name, file: `/competition/planning/regionale/${file}` };
      }),
    },
    {
      title: "Championnat de France Départemental",
      category: files.departementaleFiles.map((file) => {
        let name = "Départementale";
        if (file.includes("PR")) name = "Pré-Régionale";
        else if (file.includes("D1")) name += " 1";
        else if (file.includes("D2")) name += " 2";
        else if (file.includes("D3")) name += " 3";
        else if (file.includes("D4")) name += " 4";
        return { name, file: `/competition/planning/departementale/${file}` };
      }),
    },
    {
      title: "Critérium de Gironde / Honneur",
      category: files.honneurFiles.map((file) => {
        let name = "Equipe";
        if (file.includes("EQUIP1")) name += " 1";
        else if (file.includes("EQUIP2")) name += " 2";
        return { name, file: `/competition/planning/honneur/${file}` };
      }),
    },
  ];

  return <ClassementList classementType={classementType} />;
};

export default CompContainer;
