import fs from 'fs';
import path from 'path';

export async function DELETE(request) {
  try {
    // Extraire le nom du fichier depuis le corps de la requête
    const { image, category } = await request.json();
    // Construire le chemin du fichier
    const pathFile = path.join(process.cwd(), 'public', 'competition', 'planning', category, image);

    // Supprimer le fichier
    fs.unlink(pathFile, (err) => {
      if (err) {
        throw new Error('Erreur lors de la suppression du fichier');
      }
    });

    // Retourner une réponse réussie
    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
