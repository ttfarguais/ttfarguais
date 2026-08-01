import { FshSponsor, GirondeSponsor, SuperuSponsor } from "../../UI/Icons";

export default function FooterSponsor() {
  return (
    <div className="flex w-full flex-wrap justify-center items-center gap-4">
      <FshSponsor width={80} height={80} />
      <SuperuSponsor width={80} height={80} />
      <GirondeSponsor width={80} height={80} />

      {/* futur 4e logo ici */}
    </div>
  );
}
