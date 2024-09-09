"use client";
import useCompetitorFiles from "../../../../utils/useCompetitorFiles";
import FileSection from "./FileSection";
export default function AdminPanelCompetitorFiles() {

  const {competitorFiles, competitorHandleDelete, competitorHandleSuccess} = useCompetitorFiles();

  return (
    <div className="flex flex-col w-full items-center gap-20">
          <div className="flex flex-col p-4 w-[80%]">
        <h2 className="text-2xl m-auto mb-8">
          Fiches &quot;Progression et classement des joueurs&quot;.
        </h2>
        <ul className="flex flex-col gap-10">
          <FileSection
            title="Classement et progression par phase"
            files={competitorFiles.stage}
            category="stageProgress"
            onDelete={competitorHandleDelete}
            onSuccess={() => competitorHandleSuccess("stage")}
          />
          <FileSection
            title="Classement et progression par mois"
            files={competitorFiles.monthly}
            category="monthlyProgress"
            onDelete={competitorHandleDelete}
            onSuccess={() => competitorHandleSuccess("monthly")}
          />
          <FileSection
            title="Classement et progression par saison"
            files={competitorFiles.season}
            category="seasonProgress"
            onDelete={competitorHandleDelete}
            onSuccess={() => competitorHandleSuccess("season")}
          />
        </ul>
      </div>
    </div>
  );
}
