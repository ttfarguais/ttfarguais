import { list } from "@vercel/blob";

export async function GET(request) {
  const { blobs } = await list(); // Liste tous les blobs
  // Filtrer les blobs pour exclure les dossiers
  const files = blobs.filter(
    (blob) =>
      blob.pathname.includes("Competition/Departementale/") &&
      blob.pathname.endsWith("jpg")
  );
  console.log(files);
  return Response.json(files);
}
