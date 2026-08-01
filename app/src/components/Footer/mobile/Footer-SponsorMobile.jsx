import { FshSponsor, GirondeSponsor, SuperuSponsor } from "../../UI/Icons";

export default function FooterSponsor() {
  return (
    <div className="flex w-full flex-wrap justify-center items-center gap-x-4 gap-y-1">
      <div className="w-32 h-32">
        <FshSponsor width={120} height={120} />
      </div>

      <div className="w-32 h-32">
        <GirondeSponsor width={120} height={120} />
      </div>

      <div className="w-32 h-32">
        <SuperuSponsor width={120} height={120} />
      </div>
    </div>
  );
}
