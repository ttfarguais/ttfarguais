import { FshSponsor, GirondeSponsor, SuperuSponsor } from "../../UI/Icons";

export default function FooterSponsor() {
  return (
    <div className="flex gap-6">
     <FshSponsor width={60} height={60}/>
     <GirondeSponsor width={60} height={60}/>
     <SuperuSponsor width={60} height={60}/>
    </div>
  );
}
