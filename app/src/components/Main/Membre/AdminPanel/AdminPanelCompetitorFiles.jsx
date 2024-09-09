"use client";
import useCompetitorFiles from "../../../../utils/useCompetitorFiles";
import AdminPanelFileSection from "./AdminPanelFileSection";
export default function AdminPanelCompetitorFiles() {
  const {
    competitorFiles,
    competitorHandleDelete,
    competitorHandleSuccess,
    subjectFile,
  } = useCompetitorFiles();

  return (
    <div className="flex flex-col w-full items-center gap-20">
      <div className="flex flex-col p-4 w-[80%]">
        <h2 className="text-2xl m-auto mb-10">
          Fiches &quot;Progression et classement des joueurs&quot;.
        </h2>

        <div className="mb-10">
          <p className="font-bold text-red-500 mb-2">
            Merci de supprimer le fichier déjà présent avant d&apos;ajouter le
            nouveau
          </p>
          <p className="font-bold text-red-500 mb-2">
            Merci de faire correspondre les fichiers comme suit :
          </p>
          <ul>
            <li>Phase = PHASE1.jpg / PHASE2.jpg</li>
            <li>
              Mensuelles = JANVIER.jpg / FEVRIER.jpg / etc{" "}
              <span className="text-red-500">(Ne pas mettre d'accents.)</span>
            </li>
            <li>
              Saison = 2024.jpg / 2025.jpg / 2026.jpg{" "}
              <span className="text-red-500">
                (Mettre seulement la date du début de l'année.)
              </span>
            </li>
          </ul>
        </div>

        <ul className="flex flex-col gap-10">
          <AdminPanelFileSection
            title="Classement et progression par phase"
            files={competitorFiles.stage}
            category="stageProgress"
            onDelete={competitorHandleDelete}
            onSuccess={() => competitorHandleSuccess("stage")}
            subjectFile={subjectFile}
          />
          <AdminPanelFileSection
            title="Classement et progression par mois"
            files={competitorFiles.monthly}
            category="monthlyProgress"
            onDelete={competitorHandleDelete}
            onSuccess={() => competitorHandleSuccess("monthly")}
            subjectFile={subjectFile}
          />
          <AdminPanelFileSection
            title="Classement et progression par saison"
            files={competitorFiles.season}
            category="seasonProgress"
            onDelete={competitorHandleDelete}
            onSuccess={() => competitorHandleSuccess("season")}
            subjectFile={subjectFile}
          />
        </ul>
      </div>
    </div>
  );
}
