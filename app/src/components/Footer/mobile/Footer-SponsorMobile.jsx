import { FshSponsor, GirondeSponsor, SuperuSponsor } from "../../UI/Icons";

export default function FooterSponsor() {
  return (
    <div className="flex gap-6">
     <FshSponsor width={70} height={70}/>
     <GirondeSponsor width={70} height={70}/>
     <SuperuSponsor width={70} height={70}/>
    </div>
  );
}
