// Importation des modules nécessaires
import { NextResponse } from 'next/server';

export async function POST(req) {
  try {
    const { login, password } = await req.json();

    // Récupérer les variables d'environnement côté serveur
    const adminLogin = process.env.NEXT_PUBLIC_ADMINLOGIN;
    const adminPass = process.env.NEXT_PUBLIC_ADMINPASSWORD;

    // Vérifier les identifiants
    if (login === adminLogin && password === adminPass) {
      return NextResponse.json({ success: true });
    } else {
      return NextResponse.json({ success: false, message: "Mauvais couple Identifiant / Mot de passe" }, { status: 401 });
    }
  } catch (error) {
    // En cas d'erreur interne
    return NextResponse.json({ success: false, message: "Erreur interne du serveur" }, { status: 500 });
  }
}
