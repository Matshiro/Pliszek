import useCurrentUser from "@/hooks/useCurrentUser";
import useLoginModal from "@/hooks/useLoginModal";
import { useRouter } from "next/router";
import { useCallback } from "react";
import { IconType } from "react-icons";
import { BsDot } from "react-icons/bs";

interface SidebarItemProps {
  label: string;
  href?: string;
  icon: IconType;
  onClick?: () => void;
  auth?: boolean;
  alert?: boolean;
}

function SidebarItem({
  label,
  href,
  icon: Icon,
  onClick,
  auth,
  alert,
}: SidebarItemProps) {
  const loginModal = useLoginModal();
  const { data: currentUser } = useCurrentUser();
  const router = useRouter();
  const handleClick = useCallback(() => {
    if (onClick) {
      return onClick();
    }
    if (auth && !currentUser) {
      loginModal.onOpen();
    } else if (href) {
      router.push(href);
    }
  }, [router, onClick, href, currentUser, auth, loginModal]);

  return (
    <div onClick={handleClick} className="flex flex-row items-center">
      <div className="relative rounded-full flex items-center p-4 hover:bg-slate-300 hover:bg-opacity-10 cursor-pointer lg:gap-4 lg:justify-center ">
        <Icon size={24} color="white" className="hidden lg:block" />
        <Icon size={28} color="white" className="lg:hidden" />
        {alert ? (
          <BsDot className="text-sky-500 absolute -top-4 left-0" size={70} />
        ) : null}
        <p className="hidden lg:block text-white text-xl">{label}</p>
      </div>
    </div>
  );
}

export default SidebarItem;
