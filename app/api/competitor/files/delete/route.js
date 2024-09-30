export async function DELETE(request) {
  try {
    const body = await request.json();
    const { url } = body;

    // Vérification de l'URL
    if (!url) {
      return new Response(
        JSON.stringify({ error: "L'URL du fichier est manquante" }),
        { status: 400 }
      );
    }

    // Appelle la fonction pour supprimer le blob
    await deleteBlobFile(url);

    return new Response(
      JSON.stringify({ message: 'Fichier supprimé avec succès' }),
      { status: 200 }
    );
  } catch (error) {
    console.error('Erreur lors de la suppression du fichier:', error);
    return new Response(
      JSON.stringify({ error: 'Erreur lors de la suppression du fichier' }),
      { status: 500 }
    );
  }
}

async function deleteBlobFile(url) {
  console.log(`Suppression du fichier : ${url}`);
  
  const response = await fetch(url, {
    method: 'DELETE',
    headers: {
      'Authorization': `Bearer ${process.env.TTF_TOKEN}`,
      'Content-Type': 'application/json'
    }
  });

  if (!response.ok) {
    const errorData = await response.json(); // Lire la réponse pour plus de détails sur l'erreur
    throw new Error(`Erreur lors de la suppression du fichier : ${response.statusText}, ${errorData.message}`);
  }

  console.log(`Fichier supprimé : ${url}`);
}
