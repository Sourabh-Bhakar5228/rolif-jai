import { useMemo } from "react";
import navLinks from "../../configs/navLinks";
import NavLink from "./NavLink";
import MenuButton from "./MenuButton";

const StickyNavbar = ({
    isOpen = false,
}) => {
    const isNavOpen = useMemo(() => (isOpen ? 'top-0' : "-top-[100%]"), [isOpen]);

    return <>
        <nav className={`fixed transition-all duration-300 flex w-full justify-between py-3 px-8 items-center left-0 bg-white shadow-lg z-50 ${isNavOpen}`}>
            <img src="/logo.svg" alt="logo" className="w-26" />
            <div className="hidden lg:flex justify-center items-center gap-x-4">
                {
                    navLinks.map((item, index) => (
                        <NavLink key={index} {...item} />
                    ))
                }
            </div>
            <MenuButton />
        </nav>
    </>
}

export default StickyNavbar;