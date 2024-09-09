import fs from 'fs';
import path from 'path';

const imagesDirectory = path.join(process.cwd(), 'public','competition', 'planning', 'departementale');

export async function GET(request) {
  try {
    const files = fs.readdirSync(imagesDirectory);
    const imageFiles = files.filter(file => /\.(jpg|jpeg|png|gif)$/.test(file));
    return new Response(JSON.stringify(imageFiles), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Erreur lors de la lecture du dossier' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}