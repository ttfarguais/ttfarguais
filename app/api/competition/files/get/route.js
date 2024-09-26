import { list } from '@vercel/blob';

export async function GET(request) {
  const { blobs } = await list();  // Liste tous les blobs
  return Response.json(blobs);     // Renvoie les blobs en réponse JSON
}
