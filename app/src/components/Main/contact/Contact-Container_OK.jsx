"use client";

import { useState } from "react";
import {
  isValidEmail,
  isValidPhoneNumber,
} from "../../../utils/verificationContact";
import Contact from "./Contact";

export default function ContactContainer() {
  const [formData, setFormData] = useState({
    lastName: "",
    firstName: "",
    email: "",
    message: "",
    tel: "",
    age: "",
    municipality: "",
    typePlayer: "",
    source: "",
  });

  const [responseMessage, setResponseMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isValidStatus, setIsValidStatus] = useState(null);
  const [isFormVisible, setIsFormVisible] = useState(true);

  // État uniquement destiné au bouton
  const [isSending, setIsSending] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Empêche un double clic
    if (isSending) return;

    setIsSending(true);
    setIsSubmitted(true);

    const emailValid = isValidEmail(formData.email);
    const phoneValid = isValidPhoneNumber(formData.tel);

    if (!emailValid) {
      setIsValidStatus(false);
      setResponseMessage(
        "Veuillez entrer une adresse email valide"
      );
      setIsSending(false);
      return;
    }

    if (!phoneValid) {
      setIsValidStatus(false);
      setResponseMessage(
        "Veuillez entrer un numéro de téléphone valide"
      );
      setIsSending(false);
      return;
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        throw new Error(
          "Erreur lors de la soumission du formulaire Api Contact"
        );
      }

      const data = await res.json();

      setIsValidStatus(true);
      setResponseMessage(data.message);

      // Petite pause pour laisser voir "Envoi en cours..."
      await new Promise((resolve) => setTimeout(resolve, 500));

      setIsFormVisible(false);

      setFormData({
        lastName: "",
        firstName: "",
        email: "",
        message: "",
        tel: "",
        age: "",
        municipality: "",
        typePlayer: "",
        source: "",
      });
    } catch (error) {
      console.error("Erreur:", error);

      setIsValidStatus(false);

      setResponseMessage(
        "Le formulaire n'a pas été envoyé.\n" +
          "Merci d'envoyer un mail à notre Président :\n\n" +
          "jeanpaul.vergote@neuf.fr"
      );
    } finally {
      setIsSubmitted(false);
      setIsSending(false);
    }
  };

  return (
    <Contact
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      formData={formData}
      validateEmail={() => isValidEmail(formData.email)}
      validatePhone={() => isValidPhoneNumber(formData.tel)}
      responseMessage={responseMessage}
      isSubmitted={isSubmitted}
      isValidStatus={isValidStatus}
      isFormVisible={isFormVisible}
      isSending={isSending}
    />
  );
}
