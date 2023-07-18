import { IconType } from "react-icons";

interface SidebarItemProps {
  label: string;
  href?: string;
  icon: IconType;
  onClick?: () => void;
}

function SidebarItem({ label, href, icon: Icon, onClick }: SidebarItemProps) {
  return (
    <div className="flex flex-row items-center">
      <div className="relative rounded-full flex items-center p-4 hover:bg-slate-300 hover:bg-opacity-10 cursor-pointer lg:gap-4 lg:justify-center ">
        <Icon size={24} color="white" className="hidden lg:block"/>
        <Icon size={28} color="white" className="lg:hidden"/>
        <p className="hidden lg:block text-white text-xl">{label}</p>
      </div>
    </div>
  );
}

export default SidebarItem;
