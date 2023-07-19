import useLoginModal from "@/hooks/useLoginModal";
import { useRouter } from "next/router";
import { useCallback } from "react";
import { FaFeather } from "react-icons/fa";

function SidebarTweetButton() {
  const router = useRouter();
  const loginModal = useLoginModal();
  const onClick = useCallback(() => {
    loginModal.onOpen();
  }, [loginModal]);
  return (
    <div onClick={onClick}>
      <div className="mt-6 rounded-full p-4 flex items-center justify-center bg-sky-500 hover:bg-opacity-80 transition cursor-pointer lg:block lg:px4 lg:py-2">
        <FaFeather size={24} color="white" className="lg:hidden" />
        <p className="hidden lg:block text-center font-semibold text-white text-[20px]">
          Pliszkuj
        </p>
      </div>
    </div>
  );
}

export default SidebarTweetButton;
