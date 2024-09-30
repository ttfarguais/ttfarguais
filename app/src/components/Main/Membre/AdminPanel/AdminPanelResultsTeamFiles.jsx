"use client";
// import useCompetitionFiles from "../../../../utils/useCompetitionFiles";
import { useEffect, useState } from "react";
import filterResultsFiles from "../../../../utils/filterResultsFiles";
import AdminPanelFileSection from "./AdminPanelFileSection";
export default function AdminPanelCompetitionFiles() {
 
  const [regionaleFiles, setRegionaleFiles] = useState([]);
  const [departementaleFiles, setDepartementaleFiles] = useState([]);
  const [critFiles, setCritFiles] = useState([]);

  const competitionHandleDelete = (fileToDelete) => {
    setFiles((prevFiles) =>
      prevFiles.filter((file) => file.url !== fileToDelete.url)
    );
  };

  const [files, setFiles] = useState({
    regionaleResultsFiles: [],
    departementaleResultsFiles: [],
    critResultsFiles: [],
  });
  const [resultsFiles, setResultsFiles] = useState([]);

  const fetchFiles = async (type) => {
    try {
      const response = await fetch(`/api/competition/files/get/${type}`);
      if (!response.ok) {
        throw new Error("Erreur lors de la récupération des fichiers");
      }
      const data = await response.json();
      // Set the files in the right category
      setFiles((prevFiles) => ({
        ...prevFiles,
        [`${type}ResultsFiles`]: data,
      }));
    } catch (error) {
      console.error("Erreur:", error);
    }
  };
  useEffect(() => {
    const fetchAllFiles = async () => {
      await Promise.all([
        fetchFiles("crit"),
        fetchFiles("departementale"),
        fetchFiles("regionale"),
      ]);
    };

    fetchAllFiles();
  }, []);

  useEffect(() => {
    if (
      files.critResultsFiles.length > 0 ||
      files.departementaleResultsFiles.length > 0 ||
      files.regionaleResultsFiles.length > 0
    ) {
      const resultsFilesData = filterResultsFiles(files);
      setResultsFiles(resultsFilesData); // Update the progression data
    }
  }, [files]);

  useEffect(() => {
    if (resultsFiles.length > 0) {
      resultsFiles.forEach((resultFile) => {
        if (resultFile.title === "Championnat de France Régional") {
          setRegionaleFiles(resultFile.category);
        } else if (
          resultFile.title === "Championnat de France Départemental"
        ) {
          setDepartementaleFiles(resultFile.category);
        } else if (resultFile.title === "Critérium de Gironde / Honneur") {
          setCritFiles(resultFile.category);
        }
      });
    }
  }, [resultsFiles]);
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
            category="Regionale"
            onDelete={competitionHandleDelete}
            type={"competition"}
          />
          <AdminPanelFileSection
            title="Championnat de France départemental"
            files={departementaleFiles}
            category="Departementale"
            onDelete={competitionHandleDelete}
            type={"competition"}
          />
          <AdminPanelFileSection
            title="Critérium de Gironde"
            files={critFiles}
            category="Crit"
            onDelete={competitionHandleDelete}
            type={"competition"}
          />
        </ul>
      </div>
    </div>
  );
}
