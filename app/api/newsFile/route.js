import { list } from '@vercel/blob';

export async function GET(request) {
  const { blobs } = await list();
  const files = blobs.filter(blob => 
    blob.pathname.startsWith("actualite/")
  );

  const filesWithoutFirst = files.slice(1);
  
  return Response.json(filesWithoutFirst);
}