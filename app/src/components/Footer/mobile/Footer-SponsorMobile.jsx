import { FshSponsor, GirondeSponsor } from "../../UI/Icons";

export default function FooterSponsor() {
  return (
    <div className="flex gap-6">
     <FshSponsor width={80} height={80}/>
     <GirondeSponsor width={80} height={80}/>
    </div>
  );
}
