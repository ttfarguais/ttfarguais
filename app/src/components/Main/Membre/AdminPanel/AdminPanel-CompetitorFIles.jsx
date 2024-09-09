"use client";
import useCompetitorFiles from "../../../../utils/useCompetitorFiles";
import AdminPanelFileSection from "./AdminPanel-FileSection";
export default function AdminPanelCompetitorFiles() {

  const {competitorFiles, competitorHandleDelete, competitorHandleSuccess, subjectFile} = useCompetitorFiles();

  return (
    <div className="flex flex-col w-full items-center gap-20">
          <div className="flex flex-col p-4 w-[80%]">
        <h2 className="text-2xl m-auto mb-8">
          Fiches &quot;Progression et classement des joueurs&quot;.
        </h2>
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
