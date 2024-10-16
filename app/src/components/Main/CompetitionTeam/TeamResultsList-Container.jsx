"use client";
import { useEffect, useState } from "react";
import filterResultsFiles from "../../../utils/filterResultsFiles";
import TeamResultList from "./TeamResultsList";

const TeamResultsListContainer = () => {
  const [files, setFiles] = useState({
    regionaleResultsFiles: [],
    departementaleResultsFiles: [],
    critResultsFiles: [],
  });
  const [resultsFiles, setResultsFiles] = useState([]);

  const fetchFiles = async (type) => {
    try {
      const response = await fetch(`/api/competition/files/get/${type}`);
      if (!response.ok) {
        throw new Error("Erreur lors de la récupération des fichiers");
      }
      return response.json(); // Retourne les données au lieu de mettre à jour directement l'état
    } catch (error) {
      console.error("Erreur:", error);
      return []; // En cas d'erreur, retourne un tableau vide
    }
  };

  useEffect(() => {
    const fetchAllFiles = async () => {
      const [critFiles, departementaleFiles, regionaleFiles] = await Promise.all([
        fetchFiles("crit"),
        fetchFiles("departementale"),
        fetchFiles("regionale")
      ]);

      // Mise à jour de l'état en une seule fois avec les trois catégories
      setFiles({
        critResultsFiles: critFiles,
        departementaleResultsFiles: departementaleFiles,
        regionaleResultsFiles: regionaleFiles,
      });
    };

    fetchAllFiles();
  }, []);

  useEffect(() => {
    if (
      files.critResultsFiles.length > 0 || 
      files.departementaleResultsFiles.length > 0 || 
      files.regionaleResultsFiles.length > 0
    ) {
      const resultsFilesData = filterResultsFiles(files);
      setResultsFiles(resultsFilesData); // Mise à jour des résultats triés
    }
  }, [files]);

  return <TeamResultList resultsFiles={resultsFiles} />;
};

export default TeamResultsListContainer;
