import { useRouter } from "next/router";
import pliszkLogo from "../../assets/pliszkLogo.png";
import pliszkLogoWhite from "../../assets/pliszkLogoWhite.png";
import pliszksvg from "../../assets/pliszksvg.svg";
import Image from "next/image";

function SidebarLogo() {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push("/")}
      className="rounded-full h-14 w-14 p-4 flex items-center justify-center hover:bg-blue-300 hover:bg-opacity-10 cursor-pointer transition"
    >
      <Image alt="pliszka logo" src={pliszksvg}/>
    </div>
  );
}

export default SidebarLogo;
