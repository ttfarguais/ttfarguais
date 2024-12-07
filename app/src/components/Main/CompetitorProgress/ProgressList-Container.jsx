"use client";
import { useEffect, useState } from "react";
import filterProgressFiles from "../../../utils/filterProgressFiles";
import ProgressList from "./ProgressList";

const ProgressListContainer = () => {

    const [files, setFiles] = useState({
        monthlyProgressFiles: [],
        seasonProgressFiles: [],
        stageProgressFiles: [],
    });
    const [progressFiles, setProgressFiles] = useState([]);

    const fetchFiles = async (type) => {
        try {
            const response = await fetch(`/api/competitor/files/get/${type}`
              
            );
            if (!response.ok) {
                throw new Error("Erreur lors de la récupération des fichiers");
            }
            const data = await response.json();
            // Set the files in the right category
            setFiles((prevFiles) => ({
                ...prevFiles,
                [`${type}ProgressFiles`]: data,
            }));
        } catch (error) {
            console.error("Erreur:", error);
        }

    };
    useEffect(() => {
        const fetchAllFiles = async () => {
            await Promise.all([
                fetchFiles("monthly"),
                fetchFiles("season"),
                fetchFiles("stage"),
            ]);
            // setLoading(false); // Files have been fetched
        };

        fetchAllFiles();
    }, []);
    useEffect(() => {
        if (
            files.monthlyProgressFiles.length > 0 ||
            files.seasonProgressFiles.length > 0 ||
            files.stageProgressFiles.length > 0
        ) {
            const progressDataFiles = filterProgressFiles(files);
            setProgressFiles(progressDataFiles); // Update the progression data
        }
    }, [files]);

    return <ProgressList progressFiles={progressFiles} />;

};

export default ProgressListContainer;
