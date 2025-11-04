"use client";

import { useState } from 'react';
import { isValidEmail, isValidPhoneNumber } from '../../../utils/verificationContact';
import Contact from './Contact';

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
    description: "",
  });

  const [responseMessage, setResponseMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isValidStatus, setIsValidStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    const emailValid = isValidEmail(formData.email);
    const phoneValid = isValidPhoneNumber(formData.tel);

    if (!emailValid) {
      setIsValidStatus(false);
      setResponseMessage("Veuillez entrer une adresse email valide");
      return;
    }

    if (!phoneValid) {
      setIsValidStatus(false);
      setResponseMessage("Veuillez entrer un numéro de téléphone valide");
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
        throw new Error("Erreur lors de la soumission du formulaire Api Contact");
      }

      const data = await res.json();
      setIsValidStatus(true);
      setResponseMessage(data.message);
      setFormData({
        lastName: "",
        firstName: "",
        email: "",
        message: "",
        tel: "",
        age: "",
        municipality: "",
        typePlayer: "",
        description: "",
      });
    } catch (error) {
      console.error("Erreur:", error);
      setIsValidStatus(false);
      setResponseMessage("Erreur lors de la soumission du formulaire Reponse Mess");
    } finally {
      setIsSubmitted(false);
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
    />
  );
}
