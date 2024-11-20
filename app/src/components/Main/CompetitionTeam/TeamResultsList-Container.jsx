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
            const response = await fetch(`/api/competition/files/get/${type}`, {
                headers: {
                    'Content-Type': 'application/json',
                    'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
                    'Pragma': 'no-cache',
                    'Expires': '0',
                },
            });

            if (!response.ok) {
                throw new Error(`Erreur lors de la récupération des fichiers ${type}`);
            }

            const data = await response.json();

            // Mise à jour de l'état avec les fichiers récupérés
            setFiles((prevFiles) => ({
                ...prevFiles,
                [`${type}ResultsFiles`]: data, // Mettez à jour la catégorie spécifique (crit, regionale, etc.)
            }));
        } catch (error) {
            console.error("Erreur:", error);
        }
    };

    // Utiliser useEffect pour récupérer les fichiers au lancement du composant
    useEffect(() => {
        const fetchAllFiles = async () => {
            await Promise.all([
                fetchFiles("crit"),
                fetchFiles("departementale"),
                fetchFiles("regionale"),
            ]);
        };

        fetchAllFiles();
    }, []); // L'effet ne s'exécute qu'une fois, lors du premier rendu du composant

    // Filtrer les fichiers lorsque les données sont mises à jour
    useEffect(() => {
        if (
            files.critResultsFiles.length > 0 ||
            files.departementaleResultsFiles.length > 0 ||
            files.regionaleResultsFiles.length > 0
        ) {
            const resultsFilesData = filterResultsFiles(files);  // Appliquer le filtrage
            setResultsFiles(resultsFilesData); // Mettre à jour les résultats filtrés
        }
    }, [files]); // Exécuter cet effet lorsque l'état des fichiers change

    return <TeamResultList resultsFiles={resultsFiles} />; // Passer les résultats filtrés au composant enfant

};

export default TeamResultsListContainer;
