import { useEffect, useState } from "react";
import menuLinks from "../../configs/menuLinks";
import navLinks from "../../configs/navLinks";
import MenuLink from "./MenuLink";
import NavLink from "./NavLink";
import SearchBar from "./SearchBar";
import StickyNavbar from "./StickyNavbar";

import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

import MenuButton from "./MenuButton";
import FurnitureSvg from "../../svgs/FurnitureSvg";
import TileSvg from "../../svgs/TileSvg";
import LightSvg from "../../svgs/LightSvg";
import ServicesSvg from "../../svgs/ServicesSvg";

const Navbar = () => {
  const [isStickyNavOpen, setIsStickyNavOpen] = useState(false);

  const productLinks = [
    {
      route: "/furniture",
      icon: <FurnitureSvg size="28px" />,
    },
    {
      route: "/tiles-and-sanitary-ware",
      icon: <TileSvg size="32px" />,
    },
    {
      route: "/electrics",
      icon: <LightSvg size="28px" />,
    },
    {
      route: "/services",
      icon: <ServicesSvg size="28px" />,
    },
  ].map((item) => ({
    ...(menuLinks.filter((product) => product.route === item.route)?.[0] || {}),
    icon: item?.icon,
  }));

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsStickyNavOpen(true);
      } else {
        setIsStickyNavOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on unmount -
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav className="w-full flex flex-col z-50 shadow-sm justify-center items-center">
        {/* layer1 */}
        <section className="w-full bg-my-gray flex justify-between items-center py-3 px-8">
          <div className="flex justify-center items-center gap-x-8">
            <img src="/logo.svg" alt="logo" className="w-26" />
            <SearchBar />
          </div>

          <div className="hidden lg:flex justify-center items-center gap-x-4">
            {navLinks.map((item, index) => (
              <NavLink key={index} {...item} />
            ))}
            <Link
              to={"/login"}
              className="h-auto w-auto flex justify-center items-center"
            >
              <button className="cursor-pointer hover:text-main-color">
                <FaUserCircle size={24} />
              </button>
            </Link>
          </div>

          <MenuButton />
        </section>

        {/* layer2 */}
        <section className="hidden md:flex justify-center py-2 px-8 bg-main-color !text-gray-50 w-full items-center gap-x-6">
          {productLinks.map((item, index) => (
            <MenuLink key={index} {...item} />
          ))}
        </section>
      </nav>

      {/* Pass the state to StickyNavbar if needed */}
      <StickyNavbar isOpen={isStickyNavOpen} />
    </>
  );
};

export default Navbar;
