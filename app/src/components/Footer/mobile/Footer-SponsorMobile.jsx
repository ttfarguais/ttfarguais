import { FshSponsor, GirondeSponsor, SuperuSponsor } from "../../UI/Icons";

export default function FooterSponsor() {
  return (
    <div className="flex w-full flex-wrap justify-center items-center gap-4">
      <div className="w-20 h-20">
        <FshSponsor width={80} height={80} />
      </div>

      <div className="w-20 h-20">
        <GirondeSponsor width={80} height={80} />
      </div>

      <div className="w-20 h-20">
        <SuperuSponsor width={80} height={80} />
      </div>
      
      {/* futur 4e logo ici */}
    </div>
  );
}
