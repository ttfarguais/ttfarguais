"use client";
import { useEffect, useState } from "react";
import { FaPen } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";

export default function MembrePage() {
  const [files, setFiles] = useState({
    honneur: [],
    departementale: [],
    regionale: [],
  });

  // Fonction générique pour récupérer les images
  const fetchImages = async (type) => {
    try {
      const response = await fetch(`/api/membre/images/list/planning/${type}/list`);
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
      const response = await fetch(`/api/membre/images/list/upload/`, {
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
          />
          <FileSection
            title="Championnat de France départemental"
            files={files.departementale}
            category="departementale"
            onDelete={handleDelete}
          />
          <FileSection
            title="Critérium de Gironde"
            files={files.honneur}
            category="honneur"
            onDelete={handleDelete}
          />
        </ul>
      </div>
    </div>
  );
}

const FileSection = ({ title, files, category, onDelete }) => (
  <li className="p-4 border">
    <h3 className="text-xl mb-6">{title}</h3>
    <ul className="flex flex-col gap-4 mb-6">
      {files && files.length > 0 ? (
        files.map((image, index) => (
          <li key={index} className="flex gap-4">
         
            <p className="p-2 border bg-slate-200 w-full">
              Nom du fichier : <span className="font-extrabold">{image}</span>
            </p>
            <button onClick={() => onDelete(image, category)}>
              <MdDeleteForever color="red" size={30} />
            </button>
            <button>
              <FaPen size={25} />
            </button>
          </li>
        ))
      ) : (
        <p>Aucune fiche n&apos;est répertoriée</p>
      )}
    </ul>
    <form action="POST" className="p-2 border text-bold">
      <p className="text-sm font-bold text-red-500 mb-2">
        Le nom des fichiers doit correspondre au type de fiche renseignée
        (ex: Départementale 4 = D4.jpg). Merci de contacter Romain si
        vous avez un doute.
      </p>
      <div className="p-4">

      <label htmlFor={`fileUpload-${category}`}>Ajouter une nouvelle fiche : </label>
      <input type="file" name={`fileUpload-${category}`} id={`fileUpload-${category}`} className="mb-4 sm:mb-0"/>
      <button type="submit" className="px-4 py-1 bg-blue-500 rounded-lg text-white">
        Valider la sélection
      </button>
      </div>
    </form>
  </li>
);
