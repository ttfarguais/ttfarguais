import { list } from '@vercel/blob';

export async function GET(request) {
  const { blobs } = await list();  // Liste tous les blobs
  // Filtrer les blobs pour exclure les dossiers
  const files = blobs.filter(blob => 
    blob.pathname.includes("Competitor/Stage/") &&  blob.pathname.endsWith("jpg") // Exclure les fichiers qui ne contiennent pas "Phase"
  );
  
  return Response.json(files);  // Renvoie uniquement les blobs (fichiers) en réponse JSON
}
