import Menu from "@/_icons/menu";
import Logo from "../_icons/logo";
import SearchIcon from "@/_icons/search-icon";
import AppGrid from "@/_icons/app-grid";
import Image from "next/image";

type HeaderProps = {
  onMenuClick: () => void;
};

const Header = ({ onMenuClick }: HeaderProps) => {
  return (
    <header className="flex justify-between items-center px-4 sm:px-6 md:px-10 py-4 sm:py-6 gap-4 sm:gap-6">
      {/* Left section: Logo + Menu */}
      <div className="flex items-center gap-4 sm:gap-6 w-full sm:w-auto  sm:justify-start">
        <div className="block cursor-pointer" onClick={onMenuClick}>
          <Menu />
        </div>

        {/* Menu icon visible only on small screens */}
        <div className="flex items-center gap-2">
          <Logo />
          <p className="font-timmana text-[#437D8E] text-xl sm:text-2xl font-normal h-[15px]">
            FinTrack
          </p>
        </div>
      </div>

      {/* Right section: Search, Grid, Avatar */}
      <div className="flex items-center gap-4 sm:gap-6">
        <SearchIcon />

        <AppGrid />

        <Image
          src="/assets/profile-img.png"
          width={40}
          height={40}
          alt="Profile Avatar"
          className="rounded-full"
        />
      </div>
    </header>
  );
};

export default Header;
