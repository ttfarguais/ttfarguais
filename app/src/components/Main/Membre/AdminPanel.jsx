"use client";
import { useEffect, useState } from 'react';
import FileSection from './FileSection';
export default function AdminPanelComponent() {
  const [files, setFiles] = useState({
    honneur: [],
    departementale: [],
    regionale: [],
  });

  // Fonction générique pour récupérer les images
  const fetchImages = async (type) => {
    try {
      const response = await fetch(`/api/membre/images/get/${type}`);
      if (!response.ok) throw new Error(`Erreur lors de la récupération des images ${type}`);
      const data = await response.json();
      setFiles((prevFiles) => ({ ...prevFiles, [type]: data }));
    } catch (error) {
      console.error("Erreur:", error);
    }
  };

  useEffect(() => {
    fetchImages("honneur");
    fetchImages("departementale");
    fetchImages("regionale");
  }, []);

  // Fonction pour gérer la suppression des images
  const handleDelete = async (image, category) => {
    try {
      const response = await fetch(`/api/membre/images/delete/`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ image, category }),
      });

      if (!response.ok) throw new Error("Erreur lors de la suppression de l'image");

      // Recharger les fichiers après suppression
      fetchImages(category);
    } catch (error) {
      console.error("Erreur:", error);
    }
  };

  // const handleAddFile = async (image, category) => {
  //   try {
  //     const response = await fetch(`/api/membre/images/add/`, {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({ image, category }),
  //     });

  //     if (!response.ok) throw new Error("Erreur lors de la suppression de l'image");

  //     fetchImages(category);
  //   } catch (error) {
  //     console.error("Erreur:", error);
  //   }
  // };

  return (
    <div className="flex flex-col w-full">
    <h1 className="text-3xl m-auto p-10">Espace bureau</h1>

    <div className="flex flex-col p-4">
      <h2 className="text-2xl m-auto mb-8">
        Fiches &quot;Résultats compétitions par équipes&quot;.
      </h2>
      <ul className="flex flex-col gap-10">
        <FileSection
          title="Championnat de France régional"
          files={files.regionale}
          category="regionale"
          onDelete={handleDelete}
          // onSubmit={handleAddFile}
        />
        <FileSection
          title="Championnat de France départemental"
          files={files.departementale}
          category="departementale"
          onDelete={handleDelete}
          // onSubmit={handleAddFile}
        />
        <FileSection
          title="Critérium de Gironde"
          files={files.honneur}
          category="honneur"
          onDelete={handleDelete}
          // onSubmit={handleAddFile}
        />
      </ul>
    </div>
  </div>
  );
}