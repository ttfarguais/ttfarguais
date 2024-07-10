import { NextResponse } from "next/server";
import transporter from "../../src/lib/transporter";
export async function POST(request) {
  const { nom, prenom, email, message, tel, objet, birthdate, municipality, typePlayer } = await request.json();
  const mailOptions = {
    from: email,
    // to: `${process.env.USER_EMAIL_SEND1}, ${process.env.USER_EMAIL_SEND2}, ${process.env.USER_EMAIL_SEND3}`,  
    to: 'romshdz1@gmail.com',
    subject: `Nouveau message de contact TTF`,
    text: `
      Nom: ${nom}
      Prénom: ${prenom}
      Email: ${email}
      Téléphone: ${tel}
      Aniversaire: ${birthdate}
      Ville: ${municipality}
      Type de joueur: ${typePlayer}
      objet: ${objet}
      Message: ${message} `,
    html:`<p><strong>Nom</strong>: ${nom}</p>
    <p><strong>Prénom</strong>: ${prenom}</p>
    <p><strong>Téléphone</strong>: ${tel}</p>
    <p><strong>Email</strong>: ${email}</p>
    <p><strong>Date de naissance</strong>: ${birthdate}</p>
    <p><strong>Ville</strong>: ${municipality}</p>
    <p><strong>Type de joueur</strong>: ${typePlayer}</p>
    <p><strong>Objet</strong>: ${objet}</p>
    <p><strong>Message</strong>: ${message}</p>`
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: 'Formulaire soumis avec succès'},{ status: 200});
  } catch (error) {
    console.error('Erreur lors de l\'envoi de l\'email:', error);
    return NextResponse.json({ message: 'Erreur lors de l\'envoi de l\'email.' }, { status: 500 });
  }
}

