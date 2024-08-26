"use client";
import { useEffect, useState } from "react";
import ImageAndClick from "../ImageAndClick";
export default function CompComponent() {
  const [files, setFiles] = useState({
    regionaleFiles: [],
    departementaleFiles: [],
    honneurFiles: [],
  });

  const fetchImages = async (type) => {
    try {
      const response = await fetch(
        `/api/membre/images/list/planning/${type}/list`
      );
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

  useEffect(() => {
    files.departementaleFiles.map((file) => {
      console.log(file);
    });
  }, [files.departementaleFiles]);

  
  const classementType = [
    {
      title: "Championnat de France régional",
      category: files.regionaleFiles.map((file) => {
        let name = "Régionale"; 
        if (file.includes("R4")) name += " 4";
        else if (file.includes("R3")) name += " 3";
        else if (file.includes("R2")) name += " 2";
        else if (file.includes("R1")) name += " 1";
        return { name,  file: `/competition/planning/regionale/${file}`
      };
      }),
    },
    {
      title: "Championnat de France départemental",
      category: files.departementaleFiles.map((file) => {
        let name = "Départementale"; 
        if (file.includes("PR")) name = "Pré-Régionale";
        else if (file.includes("D1")) name += " 1";
        else if (file.includes("D2")) name += " 2";
        else if (file.includes("D3")) name += " 3";
        else if (file.includes("D4")) name += " 4";
        return { name, 
        file: `/competition/planning/departementale/${file}`
      };
      }),
    },
    {
      title: "Critérium de Gironde",
      category: files.honneurFiles.map((file) => {
        let name = "Honneur"; 
        if (file.includes("CRIT1")) name += " 1";
        else if (file.includes("CRIT2")) name += " 2";
        return { name, file: `/competition/planning/honneur/${file}`
      };
      }),
    },
  ];
  
  return (
    <section className="p-6 md:w-4/6 m-auto 2xl:w-3/6 flex flex-col gap-4">
    <h1 className="text-xl text-center font-bold p-4 mb-8">
      Résultats Compétitions par équipes
    </h1>
    {classementType.map((classement, index) => (
      classement.category.length > 0 && (
        <section key={index} className="flex flex-col gap-3 border-b mb-10">
          <h2 className="font-bold text-lg mb-4 underline underline-offset-8">
            {classement.title}
          </h2>
          <div className="flex gap-4 flex-wrap justify-around">
            {classement.category.map((item, index) => (
              <div key={index} className="flex flex-col mb-6 max-w-60">
                <h3 className="mb-2 font-bold">{item.name} :</h3>
                <div className="flex gap-5 m-auto justify-center">
                  {item.file && (
                    <ImageAndClick
                      src={item.file}
                      href={item.file}
                      alt={item.name}
                      actionTitle="Voir la fiche"
                    />
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
      )
    ))}
  </section>

  );
}
