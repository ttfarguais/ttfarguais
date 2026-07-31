import { FshSponsor, GirondeSponsor, SuperuSponsor } from "../../UI/Icons";

export default function FooterSponsor() {
  return (
    <div className="flex w-full justify-center items-center gap-1 overflow-hidden">
     <FshSponsor width={80} height={80}/>
     <GirondeSponsor width={70} height={70}/>
     <SuperuSponsor width={80} height={80}/>
    </div>
  );
}
