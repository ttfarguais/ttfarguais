const classementType = (files) => {
  return [
    {
      title: "Championnat de France Régional",
      category: files
        .filter(
          (file) =>
            file.pathname.includes("R1") ||
            file.pathname.includes("R2") ||
            file.pathname.includes("R3") ||
            file.pathname.includes("R4")
        )
        .map((file) => {
          let name = "Régionale";
          if (file.pathname.includes("R1")) name += " 1";
          else if (file.pathname.includes("R2")) name += " 2";
          else if (file.pathname.includes("R3")) name += " 3";
          else if (file.pathname.includes("R4")) name += " 4";

          return {
            name,
            url: file.url, // URL du fichier blob
          };
        }),
    },
    {
      title: "Championnat de France Départemental",
      category: files
        .filter((file) => file.pathname.includes("D") || file.pathname.includes("PR"))
        .map((file) => {
          let name = "Départementale";
          if (file.pathname.includes("PR")) name = "Pré-Régionale";
          else if (file.pathname.includes("D1")) name += " 1";
          else if (file.pathname.includes("D2")) name += " 2";
          else if (file.pathname.includes("D3")) name += " 3";
          else if (file.pathname.includes("D4")) name += " 4";

          return {
            name, // Nom formaté (Départementale/Pré-Régionale + numéro)
            url: file.url, // URL du fichier blob
          };
        }),
    },
    {
      title: "Critérium de Gironde / Honneur",
      category: files
        .filter((file) => file.pathname.includes("CRIT"))
        .map((file) => {
          let name = "Équipe";
          if (file.pathname.includes("EQUIP1")) name += " 1";
          else if (file.pathname.includes("EQUIP2")) name += " 2";

          return {
            name,
            url: file.url, // URL du fichier blob
          };
        }),
    },
  ];
};

export default classementType;
