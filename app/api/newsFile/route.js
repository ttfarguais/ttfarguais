export const dynamic = "force-dynamic";
import { list } from "@vercel/blob";

export async function GET(request) {
    const { blobs } = await list();
    const files = blobs.filter((blob) =>
        blob.pathname.startsWith("actualite/")
    );
    const filesWithoutFirst = files.slice(1);

    const response = new Response(JSON.stringify(filesWithoutFirst), {
        status: 200,
        headers: {
            "Content-Type": "application/json", // Déclare le type de contenu en JSON
            "Cache-Control": "no-store, no-cache, must-revalidate", // Pas de cache
        },
    });
    return response;
}
