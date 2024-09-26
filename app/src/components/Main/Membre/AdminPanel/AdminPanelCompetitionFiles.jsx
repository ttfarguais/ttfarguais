"use client";
// import useCompetitionFiles from "../../../../utils/useCompetitionFiles";
import { useEffect, useState } from "react";
import classementType from "../../../../utils/filesNames";
import AdminPanelFileSection from "./AdminPanelFileSection";
export default function AdminPanelCompetitionFiles() {
  const [files, setFiles] = useState([]);
  const [classement, setClassement] = useState([]); // State pour stocker les types de classements
  const [regionaleFiles, setRegionaleFiles] = useState([]);
  const [departementaleFiles, setDepartementaleFiles] = useState([]);
  const [honneurFiles, setHonneurFiles] = useState([]);
  const fetchFiles = async () => {
    try {
      const response = await fetch(`/api/competition/files/get`);
      if (!response.ok) {
        throw new Error("Erreur lors de la récupération des fichiers");
      }
      const data = await response.json();
      setFiles(data); // Met à jour les fichiers dans le state
    } catch (error) {
      console.error("Erreur:", error);
    }
  };

  useEffect(() => {
    fetchFiles();
  }, []);

  useEffect(() => {
    if (files.length > 0) {
      const classementData = classementType(files); // Générer les types de classements avec les fichiers
      setClassement(classementData); // Mettre à jour le classement avec les types classés
    }
  }, [files]);

  useEffect(() => {
    if (classement.length > 0) {
      classement.forEach((classementItem) => {
        if (classementItem.title === "Championnat de France Régional") {
          setRegionaleFiles(classementItem.category);
        } else if (classementItem.title === "Championnat de France Départemental") {
          setDepartementaleFiles(classementItem.category);
        } else if (classementItem.title === "Critérium de Gironde / Honneur") {
          setHonneurFiles(classementItem.category);
        }
      });
    }
  }, [classement]);


  const competitionHandleDelete = (fileToDelete) => {
    setFiles((prevFiles) => prevFiles.filter((file) => file.url !== fileToDelete.url));
   
  };

  
  return (
    <div className="flex flex-col w-full items-center gap-20">
      <div className="flex flex-col p-4 w-[80%]">
        <h2 className="text-2xl m-auto mb-8">
          Fiches &quot;Résultats compétitions par équipes&quot;.
        </h2>

        <div className="mb-10">
          <p className="font-bold text-red-500 mb-2">
            Merci de supprimer le fichier déjà présent avant d&apos;ajouter le
            nouveau.
          </p>
          <p className="font-bold text-red-500 mb-2">
            Merci de faire correspondre les fichiers comme suit:
          </p>
          <p className="font-bold mb-2">
            La(es) première(s) lettre(s) correspond(ent) à la division de
            l&apos;équipe et le reste du nom du fichier correspond à
            l&apos;équipe.
          </p>
          <ul>
            <li>Régionale 3 = R3_EQUIP1.jpg / R3_EQUIP2.jpg / etc</li>
            <li>Pré-régionale 1 = PR_EQUIP1.jpg / PR_EQUIP2.jpg / etc</li>
            <li>départementale 2 = D2_EQUIP1.jpg / D2_EQUIP2.jpg / etc</li>
            <li>Critérium = CRIT_EQUIP1.jpg / CRIT_EQUIP2.jpg / etc</li>
          </ul>
        </div>

        <ul className="flex flex-col gap-10">
          <AdminPanelFileSection
            title="Championnat de France régional"
            files={regionaleFiles}
            category="regionale"
            onDelete={competitionHandleDelete}
        
          />
          <AdminPanelFileSection
            title="Championnat de France départemental"
            files={departementaleFiles}
            category="departementale"
            onDelete={competitionHandleDelete}
  
          />
          <AdminPanelFileSection
            title="Critérium de Gironde"
            files={honneurFiles}
            category="honneur"
            onDelete={competitionHandleDelete}
          
          />
        </ul>
      </div>
    </div>
  );
}