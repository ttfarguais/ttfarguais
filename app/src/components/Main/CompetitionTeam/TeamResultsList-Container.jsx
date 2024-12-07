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
                throw new Error(
                    `Erreur lors de la récupération des fichiers ${type}`
                );
            }

            const data = await response.json();

            setFiles((prevFiles) => ({
                ...prevFiles,
                [`${type}ResultsFiles`]: data, 
            }));
        } catch (error) {
            console.error("Erreur:", error);
        }
    };

    useEffect(() => {
        const fetchAllFiles = async () => {
            await Promise.all([
                fetchFiles("crit"),
                fetchFiles("departementale"),
                fetchFiles("regionale"),
            ]);
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
            setResultsFiles(resultsFilesData); 
        }
    }, [files]);

    return <TeamResultList resultsFiles={resultsFiles} />; 
};

export default TeamResultsListContainer;
