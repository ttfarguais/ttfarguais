"use client";
import { useEffect, useState } from "react";
import { FaPen } from "react-icons/fa";

import { MdDeleteForever } from "react-icons/md";
export default function MembrePage() {
  const [honneurFiles, setHonneurFiles] = useState([]);
  const [departementaleFiles, setDepartementaleFiles] = useState([]);
  const [regionaleFiles, setRegionaleFiles] = useState([]);
  
  useEffect(() => {
    async function fetchImages() {
      try {
        const response = await fetch("/api/membre/images/list/planning/honneur");
        if (!response.ok)
          throw new Error("Erreur lors de la récupération des images");
        const dataHonneur = await response.json();
        console.log(dataHonneur);
        
        setHonneurFiles(dataHonneur);
      } catch (error) {
        console.error("Erreur:", error);
      }
    }

    fetchImages();
  }, []);

  useEffect(() => {
    async function fetchImages() {
      try {
        const response = await fetch("/api/membre/images/list/planning/departementale");
        if (!response.ok)
          throw new Error("Erreur lors de la récupération des images");
        const dataDepartementale = await response.json();
        console.log(dataDepartementale)
        setDepartementaleFiles(dataDepartementale);
      } catch (error) {
        console.error("Erreur:", error);
      }
    }

    fetchImages();
  }, []);

  useEffect(() => {
    async function fetchImages() {
      try {
        const response = await fetch("/api/membre/images/list/planning/regionale");
        if (!response.ok)
          throw new Error("Erreur lors de la récupération des images");
        const dataRegionale = await response.json();
        console.log(dataRegionale)
        setRegionaleFiles(dataRegionale);
      } catch (error) {
        console.error("Erreur:", error);
      }
    }

    fetchImages();
  }, []);

  return (
    <div className="flex flex-col w-full">
      <h1 className="text-3xl m-auto p-10">Espace bureau</h1>

      <div className="flex flex-col p-4">
        <h2 className="text-2xl m-auto mb-8">
          Fiches &quot;Résultats compétitions par équipes&quot;.
        </h2>
        <ul className="flex flex-col gap-10">
          <li className="p-4 border">
            <h3 className="text-xl mb-6">Chamionnat de France régional</h3>
            <ul className="flex flex-col gap-4 mb-6">
              {regionaleFiles.map((image, index) => (
               <li key={index} className="flex gap-4">
               <p className="p-2 border bg-slate-200 w-full">Nom du fichier : <span className="font-extrabold">{image}</span></p>
               <button>
                 <MdDeleteForever color="red" size={30} />
               </button>
               <button>
                 <FaPen size={25} />
               </button>
             </li>
              ))}
            </ul>
            <form action="" className="p-2 border text-bold">
              <p className="text-sm font-bold text-red-500 mb-2">Le nom des fichier doit correspondre type de fiche renseignées (ex: Départementale 4 = D4.jpg). Merci de contacter Romain si vous avez un doute.</p>
            <label htmlFor="">Ajouter une nouvelle fiche : </label>
            <input type="file" name="" id=""/>
           </form>

          </li>

          <li className="p-4 border">
            <h3 className="text-xl mb-6">Chamionnat de France départemental</h3>
            <ul className="flex flex-col gap-4 mb-6">
              {departementaleFiles.map((image, index) => (
               <li key={index} className="flex gap-4">
               <p className="p-2 border bg-slate-200 w-full">Nom du fichier : <span className="font-extrabold">{image}</span></p>
               <button>
                 <MdDeleteForever color="red" size={30} />
               </button>
               <button>
                 <FaPen size={25} />
               </button>
             </li>
              ))}
            </ul>
            <form action="" className="p-2 border text-bold">
              <p className="text-sm font-bold text-red-500 mb-2">Le nom des fichier doit correspondre type de fiche renseignées (ex: Départementale 4 = D4.jpg). Merci de contacter Romain si vous avez un doute.</p>
            <label htmlFor="">Ajouter une nouvelle fiche : </label>
            <input type="file" name="" id=""/>
           </form>
          </li>

          <li className="p-4 border">
            <h3 className="text-xl mb-6">Critérium de Gironde</h3>
            <ul className="flex flex-col gap-4 mb-6">
              {honneurFiles.map((image, index) => (
               <li key={index} className="flex gap-4">
               <p className="p-2 border bg-slate-200 w-full">Nom du fichier : <span className="font-extrabold">{image}</span></p>
               <button>
                 <MdDeleteForever color="red" size={30} />
               </button>
               <button>
                 <FaPen size={25} />
               </button>
             </li>
              ))}
            </ul>
            <form action="" className="p-2 border text-bold">
              <p className="text-sm font-bold text-red-500 mb-2">Le nom des fichier doit correspondre type de fiche renseignées (ex: Départementale 4 = D4.jpg). Merci de contacter Romain si vous avez un doute.</p>
            <label htmlFor="">Ajouter une nouvelle fiche : </label>
            <input type="file" name="" id=""/>
           </form>
          </li>
        </ul>
      </div>
    </div>
  );
}
