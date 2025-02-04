export const dynamic = "force-dynamic";

import { list } from "@vercel/blob";

export async function GET(request) {
  const { blobs } = await list(); // Liste tous les blobs

  // Filtrer les blobs pour exclure les dossiers
  const competitorFiles = blobs.filter(
    (blob) =>
      blob.pathname.includes("Competitor/") && blob.pathname.endsWith("jpg")
  );
  const competitionFiles = blobs.filter(
    (blob) =>
      blob.pathname.includes("Competition/") && blob.pathname.endsWith("jpg")
  );

  const monthlyProgressFiles = competitorFiles.filter((files) =>
    files.pathname.includes("Mounthly")
  );
  const seasonProgressFiles = competitorFiles.filter((files) =>
    files.pathname.includes("Season")
  );
  const stageProgressFiles = competitorFiles.filter((files) =>
    files.pathname.includes("Stage")
  );

  const critCompetiton = competitionFiles.filter((files) =>
    files.pathname.includes("Crit")
  );
  const departementaleCompetition = competitionFiles.filter((files) =>
    files.pathname.includes("Departementale")
  );
  const regionaleCompetition = competitionFiles.filter((files) =>
    files.pathname.includes("Regionale")
  );

//   return Response.json({
//     competitionFiles: [
//       { name: "Championnat de France Régional", files: regionaleCompetition },
//       {
//         name: "Championnat de France Départemental",
//         files: departementaleCompetition,
//       },
//       { name: "Critérium de Gironde / Honneur", files: critCompetiton },
//     ],
//     competitorFiles: [
//       { name: "Phase", files: stageProgressFiles },
//       { name: "Mensuelles", files: monthlyProgressFiles },
//       { name: "Saison", files: seasonProgressFiles },
//     ],
//   });
// }

const responseData = {
  competitionFiles: [
    { name: "Championnat de France Régional", files: regionaleCompetition },
    {
      name: "Championnat de France Départemental",
      files: departementaleCompetition,
    },
    { name: "Critérium de Gironde / Honneur", files: critCompetiton },
  ],
  competitorFiles: [
    { name: "Phase", files: stageProgressFiles },
    { name: "Mensuelles", files: monthlyProgressFiles },
    { name: "Saison", files: seasonProgressFiles },
  ],
};

// Ajouter les en-têtes à la réponse
const response = new Response(JSON.stringify(responseData), {
  status: 200,
  headers: {
    "Content-Type": "application/json", // Déclare le type de contenu en JSON
    "Cache-Control": "no-store, no-cache, must-revalidate", // Pas de cache
  },
});

return response;
}