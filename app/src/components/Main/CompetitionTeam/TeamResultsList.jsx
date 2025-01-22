import Link from "next/link";
import cacheBustingUrl from "../../../utils/cacheBustingUrl";

const TeamResultList = ({ resultsFiles }) => {
  return (
    <section className="p-6 md:w-4/6 m-auto 2xl:w-3/6 flex flex-col gap-4">
      <h1 className="text-xl text-center font-bold p-4 mb-8">
        Classement et progression des compétiteurs
      </h1>
      {resultsFiles.competitorFiles.map((files, index) => (
        <div key={index} className="flex flex-col gap-3 border-b mb-10">
          <h2 className="font-bold text-lg mb-4 underline underline-offset-8">
            {files.name}
          </h2>
          <div className="flex gap-4 flex-wrap">
            {files.files?.map((file, i) => (
              <div key={i} className={`flex flex-col mb-6 max-w-60 `}>
                <Link
                  href={cacheBustingUrl(file.url)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-lg bg-green-100 hover:bg-solid hover:text-contrast-1"
                >
                  {file.pathname
                    .split("/")
                    .pop()
                    .replace(/_/g, " ")
                    .slice(0, -4)}
                </Link>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default TeamResultList;
