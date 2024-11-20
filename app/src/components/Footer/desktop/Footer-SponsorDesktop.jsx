import { FshSponsor, GirondeSponsor } from "../../UI/Icons";

export default function FooterSponsor() {
  return (
    <div className="flex gap-6">
    <FshSponsor width={150} height={150}/>
    <GirondeSponsor width={150} height={150}/>
    </div>
  );
}
