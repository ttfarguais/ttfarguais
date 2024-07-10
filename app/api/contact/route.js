import { NextResponse } from "next/server";
import transporter from "../../src/lib/transporter";
export async function POST(request) {
  const { nom, prenom, email, message, tel, objet } = await request.json();
  console.log({nom, prenom, email, message, tel, objet})
  const mailOptions = {
    from: email,
    to: (process.env.USER_EMAIL_SEND1, process.env.USER_EMAIL_SEND2, process.env.USER_EMAIL_SEND3),  
    subject: `Nouveau message de contact TTF`,
    text: `
      Nom: ${nom}
      Prénom: ${prenom}
      Email: ${email}
      Téléphone: ${tel}
      objet: ${objet}
      Message: ${message} `,
    html:`<p><strong>Nom</strong>: ${nom}</p>
    <p><strong>Prénom</strong>: ${prenom}</p>
    <p><strong>Téléphone</strong>: ${tel}</p>
    <p><strong>Email</strong>: ${email}</p>
    <p><strong>Objet</strong>: ${objet}</p>
    <p><strong>Message</strong>: ${message}</p>`
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: 'Formulaire soumis avec succès et email envoyé!' });
  } catch (error) {
    console.error('Erreur lors de l\'envoi de l\'email:', error);
    return NextResponse.json({ message: 'Formulaire soumis, mais erreur lors de l\'envoi de l\'email.' }, { status: 500 });
  }
}

