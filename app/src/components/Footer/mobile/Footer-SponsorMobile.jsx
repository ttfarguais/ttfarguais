import { FshSponsor, GirondeSponsor, SuperuSponsor } from "../../UI/Icons";

export default function FooterSponsor() {
  return (
    <div className="flex w-full justify-center items-center gap-2">
     <FshSponsor width={80} height={80}/>
     <GirondeSponsor width={65} height={65}/>
     <SuperuSponsor width={80} height={80}/>
    </div>
  );
}
