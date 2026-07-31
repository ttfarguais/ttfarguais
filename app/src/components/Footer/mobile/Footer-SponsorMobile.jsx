import { FshSponsor, GirondeSponsor, SuperuSponsor } from "../../UI/Icons";

export default function FooterSponsor() {
  return (
    <div className="flex justify-center items-center gap-3 w-full overflow-hidden">
     <FshSponsor width={80} height={80}/>
     <GirondeSponsor width={80} height={80}/>
     <SuperuSponsor width={80} height={80}/>
    </div>
  );
}
