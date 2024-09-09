"use client";
import { useEffect, useState } from "react";

export const subjectFile = "competitionResults";

export default function useCompetitionFiles() {
  const [competitionFiles, setCompetitionFiles] = useState({
    honneur: [],
    departementale: [],
    regionale: [],
  });

  // Fonction générique pour récupérer les images
  const fetchImages = async (type) => {
    try {
      const response = await fetch(`/api/membre/files/${subjectFile}/get/${type}`);
      if (!response.ok) throw new Error(`Erreur lors de la récupération des images ${type}`);
      const data = await response.json();
      setCompetitionFiles((prevFiles) => ({ ...prevFiles, [type]: data }));
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
  const competitionHandleDelete = async (image, category) => {
    try {
      const response = await fetch(`/api/membre/files/${subjectFile}/delete/`, {
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

  // Fonction de rappel pour mettre à jour les fichiers après l'ajout
  const competitionHandleSuccess = (category) => {
    fetchImages(category);
  };

 return { competitionFiles, competitionHandleDelete, competitionHandleSuccess, subjectFile };
}
