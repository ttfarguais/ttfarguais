import { writeFile } from "fs/promises";
import { NextResponse } from "next/server";
import path from "path";

// Définir le gestionnaire POST pour le téléchargement de fichiers
export const POST = async (req) => {
  try {
    // Extraire les données du formulaire
    const formData = await req.formData();
    const category = formData.get("category"); // Obtenir la catégorie
    const file = formData.get("file"); // Obtenir le fichier

    // Vérifier si un fichier a été reçu
    if (!file) {
      return NextResponse.json({ error: "No file received." }, { status: 400 });
    }

    // Convertir les données du fichier en Buffer
    const buffer = Buffer.from(await file.arrayBuffer());

    // Remplacer les espaces dans le nom du fichier par des underscores
    const filename = file.name.replaceAll(" ", "_");

    // Construire le chemin de fichier
    const filePath = path.join(process.cwd(), `public/competition/progress/${category}`, filename);

    // Écrire le fichier dans le répertoire spécifié
    await writeFile(filePath, buffer);

    // Retourner une réponse JSON avec un message de succès
    return NextResponse.json({ message: "Success" }, { status: 201 });
  } catch (error) {
    // En cas d'erreur, retourner une réponse JSON avec un message d'erreur
    console.error("Error occurred", error);
    return NextResponse.json({ message: "Failed", error: error.message }, { status: 500 });
  }
};
