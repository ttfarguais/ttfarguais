import { FshSponsor, GirondeSponsor, SuperuSponsor } from "../../UI/Icons";

export default function FooterSponsor() {
  return (
  <div className="flex w-full flex-wrap justify-center items-center gap-x-4 gap-y-4">
      <FshSponsor width={120} height={120} />
          <SuperuSponsor width={120} height={120} />
      <GirondeSponsor width={120} height={120} />

    </div>
  );
}
