"use client";
import { useState } from "react";
import AdminPanelCompetitionFiles from "./AdminPanelCompetitionFiles";
import AdminPanelCompetitorFiles from "./AdminPanelCompetitorFiles";

export default function AdminPanelComponent() {
  const [typeFile, setTypeFile] = useState("");

  const handleChange = (e) => {
    setTypeFile(e.target.value);
  };

  return (
    <div className="flex flex-col w-full items-center gap-10">
      <h1 className="text-3xl m-auto p-10">Espace bureau</h1>

      <form
        action=""
        className="text-lg flex items-center gap-4 p-4 bg-green-100 rounded-xl mb-10"
      >
        <label htmlFor="selectTypeFile">
          Choisir le type de fichier à modifier :
        </label>
        <select
          className="text-center p-2"
          name="selectTypeFile"
          id="selectTypeFile"
          onChange={handleChange} // Déplace onChange ici
        >
          <option value="">-- Choisir un type de fichier --</option>
          <option value="competition">Résultats Compétition par équipes</option>
          <option value="competitor">
            Classement et progression des joueurs
          </option>
        </select>
      </form>

      {typeFile === "competition" && <AdminPanelCompetitionFiles />}
      {typeFile === "competitor" && <AdminPanelCompetitorFiles />}
    </div>
  );
}
