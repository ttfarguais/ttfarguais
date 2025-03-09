export const dynamic = "force-dynamic";

import { list } from "@vercel/blob";

export async function GET(request) {
  const { blobs } = await list(); // Liste tous les blobs

  // Filtrer les blobs pour exclure les dossiers
  const competitorFiles = blobs.filter(
    (blob) =>
      blob.pathname.includes("competiteur/")
  );
  const competitionFiles = blobs.filter(
    (blob) =>
      blob.pathname.includes("competition/")
  );

  const monthlyProgressFiles = competitorFiles.filter((files) =>
    files.pathname.includes("mensuelle")
  );
  const seasonProgressFiles = competitorFiles.filter((files) =>
    files.pathname.includes("saison")
  );
  const stageProgressFiles = competitorFiles.filter((files) =>
    files.pathname.includes("phase")
  );

  const critCompetiton = competitionFiles.filter((files) =>
    files.pathname.includes("criterium")
  );
  const departementaleCompetition = competitionFiles.filter((files) =>
    files.pathname.includes("departementale")
  );
  const regionaleCompetition = competitionFiles.filter((files) =>
    files.pathname.includes("regionale")
  );

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