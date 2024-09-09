"use client";
import useCompetitionFiles from "../../../../utils/useCompetitionFiles";
import AdminPanelFileSection from "./AdminPanelFileSection";

export default function AdminPanelCompetitionFiles() {
  const {
    competitionFiles,
    competitionHandleDelete,
    competitionHandleSuccess,
    subjectFile,
  } = useCompetitionFiles();

  return (
    <div className="flex flex-col w-full items-center gap-20">
      <div className="flex flex-col p-4 w-[80%]">
        <h2 className="text-2xl m-auto mb-8">
          Fiches &quot;Résultats compétitions par équipes&quot;.
        </h2>

        <div className="mb-10">
          <p className="font-bold text-red-500 mb-2">
            Merci de supprimer le fichier déjà présent avant d'ajouter le
            nouveau
          </p>
          <p className="font-bold text-red-500 mb-2">
            Merci de faire correspondre les fichiers comme suit:
          </p>
          <p className="font-bold mb-2">
            La(es) première(s) lettre(s) correspond(ent) à la division de
            l'équipe et le reste du nom du fichier correspond à l'équipe.
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
