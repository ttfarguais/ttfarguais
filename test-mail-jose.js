import nodemailer from "nodemailer";
import "dotenv/config"; // pour charger ton .env.local

const transporter = nodemailer.createTransport({
  host: "smtp.yahoo.com", // change selon ton service
  port: 587,
  secure: false,
  auth: {
    user: process.env.USER_EMAIL,
    pass: process.env.USER_PASS,
  },
});

transporter.verify((error, success) => {
  if (error) {
    console.error("❌ Erreur de connexion SMTP :", error);
  } else {
    console.log("✅ Connexion SMTP réussie !");
  }
});
