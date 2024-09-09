import { useRef } from 'react';
import { MdDeleteForever } from "react-icons/md";

export default function FileSection({ title, files, category, onDelete, onSuccess, subjectFile }) {
  const fileInput = useRef(null);

  async function uploadFile(e) {
    e.preventDefault(); // Prévenir le comportement par défaut du formulaire

    const file = fileInput.current.files[0]; // Obtenir le fichier sélectionné
    if (!file) {
      alert("Veuillez sélectionner un fichier.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);
    formData.append("category", category); // Ajouter la catégorie pour le backend

    try {
      const response = await fetch(`/api/membre/files/${subjectFile}/add`, {
        method: "POST",
        body: formData,
      });

      const result = await response.json();
      if (response.ok) {
        alert("Fichier téléchargé avec succès !");
        if (onSuccess) onSuccess(); // Appeler la fonction de rappel après un ajout réussi
      } else {
        throw new Error(result.error || 'Erreur lors du téléchargement du fichier.');
      }
      
    } catch (error) {
      console.error("Erreur:", error);
      alert("Erreur lors du téléchargement du fichier.");
    }
  }

  return (
    <li className="p-4 border">
      <h3 className="text-xl mb-6">Fiches du {title}</h3>
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
            </li>
          ))
        ) : (
          <p>Aucune fiche n&apos;est répertoriée</p>
        )}
      </ul>
      <form className="p-2 border text-bold" onSubmit={uploadFile}>
        <p className="text-sm font-bold text-red-500 mb-2">
          Le nom des fichiers doit correspondre au type de fiche renseignée (ex:
          Départementale 4 équipe 1 = D4_EQUIP1.jpg). Merci de contacter Romain si vous avez un
          doute.
        </p>
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
            ref={fileInput}
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
}
