import { NextResponse } from "next/server";
import transporter from "../../src/lib/transporter";
export async function POST(request) {
  const { nom, prenom, email, message } = await request.json();
  console.log({nom, prenom, email, message})
  const mailOptions = {
    from: email,
    to: process.env.USER_EMAIL, 
    subject: `Nouveau message de contact TTF`,
    text: `
      Nom: ${nom}
      Prénom: ${prenom}
      Email: ${email}
      Message: ${message} `,
    html:`<p><strong>Nom</strong>: ${nom}</p>
    <p><strong>Prénom</strong>: ${prenom}</p>
    <p><strong>Email</strong>: ${email}</p>
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

