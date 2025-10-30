import { NextResponse } from "next/server";
import transporter from "../../src/lib/transporter";
export async function POST(request) {
  const {
    lastName,
    firstName,
    email,
    message,
    tel,
    age,
    municipality,
    typePlayer,
    description,
  } = await request.json();

  const mailOptions = {
    from: email,
    to: `${process.env.USER_EMAIL_SEND1}, ${process.env.USER_EMAIL_SEND2}, ${process.env.USER_EMAIL_SEND3}`,
    subject: `Nouveau message de contact TTF`,
    text: `
      Nom: ${lastName}
      Prénom: ${firstName}
      Email: ${email}
      Téléphone: ${tel}
      
      Age: ${age}
      Ville: ${municipality}
      Type de joueur: ${typePlayer}
      Comment avez-vous connu le club: ${description}
      Message: ${message} `,
    html: `<p><strong>Nom</strong> : ${lastName}</p>
    <p><strong>Prénom</strong> : ${firstName}</p>
    ${tel ? `<p><strong>Téléphone</strong> : ${tel}</p>` : ""}
    <p><strong>Email</strong> : ${email}</p>
    <p><strong>Age</strong> : ${age}</p>
    ${municipality ? `<p><strong>Ville</strong> : ${municipality}</p>` : ""}
    ${typePlayer ? `<p><strong>Type de joueur</strong> : ${typePlayer}</p>` : ""}
    ${description ? `<p><strong>Comment avez-vous connu le club</strong> : ${description}</p>` : ""}
    <p><strong>Message</strong> : ${message}</p>`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json(
      { message: "Formulaire soumis avec succès" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Erreur lors de l'envoi de l'email:", error);
    return NextResponse.json(
      { message: "Erreur lors de l'envoi de l'email." },
      { status: 500 }
    );
  }
}await transporter.sendMail({
  from: process.env.USER_EMAIL,
  to: process.env.USER_EMAIL, // juste pour tester
  subject: "Test Yahoo Nodemailer",
  text: "Ceci est un test",
});
