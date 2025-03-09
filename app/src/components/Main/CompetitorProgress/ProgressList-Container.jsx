
"use client";
import { useEffect, useState } from "react";
import TeamResultList from "./ProgressList";

const TeamResultsListContainer = () => {
  const [files, setFiles] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchFiles = async () => {
    try {
      const response = await fetch(`/api/files`);
      if (!response.ok) {
        throw new Error("Erreur lors de la récupération des fichiers");
      }
      const data = await response.json();
      setFiles(data);
      setIsLoading(false);
    } catch (error) {
      console.error("Erreur:", error);
      setError(error.message);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchFiles();
  }, []);

  if (isLoading) {
    return <div>Chargement des fichiers...</div>;
  }

  if (error) {
    return <div>Erreur : {error}</div>;
  }
  return <TeamResultList resultsFiles={files} />;
};

export default TeamResultsListContainer;