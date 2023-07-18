import { useRouter } from "next/router";
import { FaFeather } from "react-icons/fa";

function SidebarTweetButton() {
  const router = useRouter();
  return (
    <div onClick={() => router.push("/")}>
      <div className="mt-6 rounded-full p-4 flex items-center justify-center bg-sky-500 hover:bg-opacity-80 transition cursor-pointer lg:block lg:px4 lg:py-2">
        <FaFeather size={24} color="white" className="lg:hidden"/>
        <p className="hidden lg:block text-center font-semibold text-white text-[20px]">
          Pliszkuj
        </p>
      </div>
    </div>
  );
}

export default SidebarTweetButton;
