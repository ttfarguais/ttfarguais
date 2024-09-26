"use client";
import { useEffect, useState } from "react";
import classementType from "../../../utils/filesNames";
import ClassementList from "./ClassementList";

const CompContainer = () => {
  const [files, setFiles] = useState([]);
  const [classement, setClassement] = useState([]); // State pour stocker les types de classements

  const fetchFiles = async () => {
    try {
      const response = await fetch(`/api/competition/files/get`);
      if (!response.ok) {
        throw new Error("Erreur lors de la récupération des fichiers");
      }
      const data = await response.json();
      setFiles(data); // Met à jour les fichiers dans le state
    } catch (error) {
      console.error("Erreur:", error);
    }
  };

  useEffect(() => {
    fetchFiles();
  }, []);

  useEffect(() => {
    if (files.length > 0) {
      const classementData = classementType(files); // Générer les types de classements avec les fichiers
      setClassement(classementData); // Mettre à jour le classement avec les types classés
    }
  }, [files]); // Met à jour dès que les fichiers sont chargés

  return <ClassementList classementType={classement} />; // Passer les données classées à ClassementList
};

export default CompContainer;
