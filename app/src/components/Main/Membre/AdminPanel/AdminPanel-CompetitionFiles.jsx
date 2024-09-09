"use client";
import useCompetitionFiles from "../../../../utils/useCompetitionFiles";
import AdminPanelFileSection from "./AdminPanel-FileSection";

export default function AdminPanelCompetitionFiles() {

  const {competitionFiles, competitionHandleDelete, competitionHandleSuccess, subjectFile} = useCompetitionFiles();

  return (
    <div className="flex flex-col w-full items-center gap-20">
          <div className="flex flex-col p-4 w-[80%]">
        <h2 className="text-2xl m-auto mb-8">
          Fiches &quot;Résultats compétitions par équipes&quot;.
        </h2>
        <ul className="flex flex-col gap-10">
          <AdminPanelFileSection
            title="Championnat de France régional"
            files={competitionFiles.regionale}
            category="regionale"
            onDelete={competitionHandleDelete}
            onSuccess={() => competitionHandleSuccess("regionale")}
            subjectFile={subjectFile}
          />
          <AdminPanelFileSection
            title="Championnat de France départemental"
            files={competitionFiles.departementale}
            category="departementale"
            onDelete={competitionHandleDelete}
            onSuccess={() => competitionHandleSuccess("departementale")}
            subjectFile={subjectFile}
          />
          <AdminPanelFileSection
            title="Critérium de Gironde"
            files={competitionFiles.honneur}
            category="honneur"
            onDelete={competitionHandleDelete}
            onSuccess={() => competitionHandleSuccess("honneur")}
            subjectFile={subjectFile}
          />
        </ul>
      </div>
    </div>
  );
}
