export default function cacheBustingUrl(url) {
    const timestamp = new Date().getTime(); // Génère un timestamp actuel
    return `${url}?t=${timestamp}`; // Ajoute le timestamp à l'URL
  };
