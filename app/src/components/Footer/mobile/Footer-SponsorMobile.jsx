import { FshSponsor, GirondeSponsor, SuperuSponsor } from "../../UI/Icons";

export default function FooterSponsor() {
  return (
    <div className="flex justify-center items-center gap-1 w-full overflow-visible">
     <FshSponsor width={70} height={70}/>
     <GirondeSponsor width={70} height={70}/>
     <SuperuSponsor width={70} height={70}/>
    </div>
  );
}
