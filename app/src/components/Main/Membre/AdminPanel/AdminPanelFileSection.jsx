"use client";
import { useRef, useState } from "react";
import { MdDeleteForever } from "react-icons/md";

const AdminPanelFileSection = ({ title, files, category, onDelete }) => {
  const inputFileRef = useRef(null);
  const [blob, setBlob] = useState(null);

  // Fonction pour gérer l'upload des fichiers
  const handleSubmit = async (e) => {
    e.preventDefault();

    const file = inputFileRef.current.files[0];
    if (!file) return;

    try {
      const response = await fetch(
        `/api/competition/files/upload?filename=${file.name}`,
        {
          method: "POST",
          body: file,
        }
      );

      if (response.ok) {
        const newBlob = await response.json();
        setBlob(newBlob); // Mise à jour du blob
        alert("Fichier uploadé avec succès");
      } else {
        throw new Error("Erreur lors de l'upload du fichier");
      }
    } catch (error) {
      console.error("Erreur:", error);
      alert("Erreur lors de l'upload du fichier.");
    }
  };

  // Fonction pour gérer la suppression des fichiers
  const handleDelete = async (file) => {
    const confirmDelete = confirm(`Voulez-vous vraiment supprimer ${file.name} ?`);
    if (!confirmDelete) return;

    try {
        const response = await fetch(`/api/competition/files/delete`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ url: file.url }), // Assurez-vous que l'URL est correcte
        });

        if (response.ok) {
            onDelete(file, category); // Appel à la fonction de suppression dans le parent
            alert("Fichier supprimé avec succès");
        } else {
            throw new Error("Erreur lors de la suppression du fichier");
        }
    } catch (error) {
        console.error("Erreur:", error);
        alert("Erreur lors de la suppression du fichier.");
    }
};


  return (
    <li className="p-4 border">
      <h3 className="text-xl mb-6">Fiches du {title}</h3>

      {/* Affichage des fichiers */}
      <ul className="flex flex-col gap-4 mb-6">
        {files && files.length > 0 ? (
          files.map((image, index) => (
            <li key={index} className="flex gap-4">
              <p className="p-2 border bg-slate-200 w-full">
                Nom du fichier :{" "}
                <span className="font-extrabold">{image.name}</span>
              </p>
              <button onClick={() => handleDelete(image)}>
                <MdDeleteForever color="red" size={30} />
              </button>
            </li>
          ))
        ) : (
          <p>Aucune fiche n&apos;est répertoriée</p>
        )}
      </ul>

      {/* Formulaire pour uploader un nouveau fichier */}
      <form className="p-2 border text-bold" onSubmit={handleSubmit}>
        <div className="p-4">
          <label htmlFor={`fileUpload-${category}`}>
            Ajouter une nouvelle fiche :{" "}
          </label>
          <input
            type="file"
            name="fileUpload"
            id={`fileUpload-${category}`}
            accept=".jpg"
            className="mb-4 sm:mb-0"
            ref={inputFileRef}
            required
          />
          <button
            type="submit"
            className="px-4 py-1 bg-blue-500 rounded-lg text-white"
          >
            Valider la sélection
          </button>
        </div>
      </form>
    </li>
  );
};

export default AdminPanelFileSection;
