"use client";
import { useEffect, useState } from "react";
import ProgressList from "./TeamResultsList";

const ProgressListContainer = () => {
  const [files, setFiles] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchFiles = async () => {
    try {
      const response = await fetch(`/api/files`,  { cache: "no-store" });
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

  return <ProgressList progressFiles={files} />;
};

export default ProgressListContainer;
