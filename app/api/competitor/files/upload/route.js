import { put } from '@vercel/blob';
import { NextResponse } from 'next/server';

export async function POST(request) {
  const { searchParams } = new URL(request.url);
  const filename = searchParams.get('filename');
  const folder = searchParams.get('folder'); // Récupération du paramètre dossier
  
  // Si le dossier est fourni, ajoutez-le au nom du fichier
  const fullPath = folder ? `Competitor/${folder}/${filename}` : `Competitor/${filename}`;
  console.log(fullPath)
  // On doit lire le contenu du body, notamment si c'est un fichier
  const content = await request.arrayBuffer(); // Ou utilisez request.blob() si vous travaillez avec un fichier binaire

  // Utilisation de fullPath au lieu de filename pour sauvegarder dans le bon dossier
  const blob = await put(fullPath, content, {
    access: 'public',
  });

  return NextResponse.json(blob);
}
