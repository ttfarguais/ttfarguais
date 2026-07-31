import { FshSponsor, GirondeSponsor } from "../../UI/Icons";

export default function FooterSponsor() {
  return (
    <div className="flex gap-6">
    <FshSponsor width={100} height={100}/>
    <GirondeSponsor width={100} height={100}/>
    <superu width={100} height={100}/>
    </div>
  );
}
