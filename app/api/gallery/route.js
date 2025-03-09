export const dynamic = "force-dynamic";
import { list } from "@vercel/blob";

export async function GET(request) {
  const { blobs } = await list(); 

  const files = blobs.filter((blob) =>
    blob.pathname.includes("galerie/") && (blob.pathname.includes(".JPG") || blob.pathname.includes(".jpg") || blob.pathname.includes(".jpeg") || blob.pathname.includes(".JPEG") || blob.pathname.includes(".png") || blob.pathname.includes(".PNG"))
  );
  return Response.json(files);
}