import { FshSponsor, GirondeSponsor, SuperuSponsor } from "../../UI/Icons";

export default function FooterSponsor() {
  return (
    <div className="flex w-full flex-wrap justify-center items-center gap-4">
      <div className="w-28 h-28">
        <FshSponsor width={112} height={112} />
      </div>

      <div className="w-28 h-28">
        <GirondeSponsor width={112} height={112} />
      </div>

      <div className="w-28 h-28">
        <SuperuSponsor width={112} height={112} />
      </div>
    </div>
  );
}
