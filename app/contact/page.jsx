"use client";
import { useState } from "react";
import Contact from "../src/components/Main/contact/Contact";

export default function Home() {
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    email: "",
    message: "",
  });

  const [responseMessage, setResponseMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        throw new Error("Erreur lors de la soumission du formulaire");
      }

      const data = await res.json();
      setResponseMessage(data.message);
      setFormData({ nom: "", prenom: "", email: "", message: "" }); // Reset du formulaire
    } catch (error) {
      console.error("Erreur:", error);
      setResponseMessage("Erreur lors de la soumission du formulaire");
    }
  };

  return (
   <Contact responseMessage={responseMessage} formData={formData} handleChange={handleChange} handleSubmit={handleSubmit}></Contact>
  );
}
