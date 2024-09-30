"use client";
import { useEffect, useState } from "react";
import filterProgressFiles from "../../../../utils/filterProgressFiles";
import AdminPanelFileSection from "./AdminPanelFileSection";
export default function AdminPanelCompetitorFiles() {
  const [seasonFiles, setSeasonFiles] = useState([]);
  const [stageFiles, setStageFiles] = useState([]);
  const [monthlyFiles, setMonthlyFiles] = useState([]);

  const progressionHandleDelete = (fileToDelete) => {
    setFiles((prevFiles) =>
      prevFiles.filter((file) => file.url !== fileToDelete.url)
    );
  };
  const [files, setFiles] = useState({
    monthlyProgressFiles: [],
    seasonProgressFiles: [],
    stageProgressFiles: [],
  });
  const [progressFiles, setProgressFiles] = useState([]);

  const fetchFiles = async (type) => {
    try {
      const response = await fetch(`/api/competitor/files/get/${type}`);
      if (!response.ok) {
        throw new Error("Erreur lors de la récupération des fichiers");
      }
      const data = await response.json();
      // Set the files in the right category
      setFiles((prevFiles) => ({
        ...prevFiles,
        [`${type}ProgressFiles`]: data,
      }));
    } catch (error) {
      console.error("Erreur:", error);
    }
  };
  useEffect(() => {
    const fetchAllFiles = async () => {
      await Promise.all([
        fetchFiles("monthly"),
        fetchFiles("season"),
        fetchFiles("stage"),
      ]);
    };

    fetchAllFiles();
  }, []);

  useEffect(() => {
    if (
      files.monthlyProgressFiles.length > 0 ||
      files.seasonProgressFiles.length > 0 ||
      files.stageProgressFiles.length > 0
    ) {
      const progressDataFiles = filterProgressFiles(files);
      setProgressFiles(progressDataFiles); // Update the progression data
    }
  }, [files]);

  useEffect(() => {
    if (progressFiles.length > 0) {
      progressFiles.forEach((progressFile) => {
        if (progressFile.title === "Phase") {
          setStageFiles(progressFile.category);
        } else if (progressFile.title === "Mensuelles") {
          setMonthlyFiles(progressFile.category);
        } else if (progressFile.title === "Saisons") {
          setSeasonFiles(progressFile.category);
        }
      });
    }
  }, [progressFiles]);
  return (
    <div className="flex flex-col w-full items-center gap-20">
      <div className="flex flex-col p-4 w-[80%]">
        <h2 className="text-2xl m-auto mb-10">
          Fiches &quot;Progression et classement des joueurs&quot;.
        </h2>

        <div className="mb-10">
          <p className="font-bold text-red-500 mb-2">
            Merci de supprimer le fichier déjà présent avant d&apos;ajouter le
            nouveau.
          </p>
          <p className="font-bold text-red-500 mb-2">
            Merci de faire correspondre les fichiers comme suit :
          </p>
          <ul>
            <li>Phase = PHASE1.jpg / PHASE2.jpg</li>
            <li>
              Mensuelles = JANVIER.jpg / FEVRIER.jpg / etc{" "}
              <span className="text-red-500">
                (Ne pas mettre d&apos;accents.)
              </span>
            </li>
            <li>
              Saison = 2024.jpg / 2025.jpg / 2026.jpg{" "}
              <span className="text-red-500">
                (Mettre seulement la date du début de l&apos;année.)
              </span>
            </li>
          </ul>
        </div>

        <ul className="flex flex-col gap-10">
          <AdminPanelFileSection
            title="Classement et progression par phase"
            files={stageFiles}
            category="Stage"
            onDelete={progressionHandleDelete}
            type={"competitor"}
          />
          <AdminPanelFileSection
            title="Classement et progression par mois"
            files={monthlyFiles}
            category="Mounthly"
            onDelete={progressionHandleDelete}
            type={"competitor"}
          />
          <AdminPanelFileSection
            title="Classement et progression par saison"
            files={seasonFiles}
            category="Season"
            onDelete={progressionHandleDelete}
            type={"competitor"}
          />
        </ul>
      </div>
    </div>
  );
}
