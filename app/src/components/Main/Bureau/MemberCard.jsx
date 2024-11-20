import Image from "next/image";
export default function MemberCard({ membre }) {
    return (
        <article className="flex flex-col gap-4 bg-contrast-2 rounded-xl shadow p-10 w-50">
            {membre.img ? (
                <Image
                    src={membre.img}
                    width={300}
                    height={300}
                    alt={membre.alt}
                    className="m-auto w-40 h-40 object-cover object-top rounded-full"
                />
            ) : (
                <div className="m-auto w-40 h-40 bg-emerald-100 rounded-full"></div>
            )}
            <strong className="text-center text-lg text-solid font-extrabold">
                {membre.lastname} {membre.firstname}
            </strong>
            <p className="text-center text-sm">{membre.job}</p>
        </article>
    );
}
