import { Drawer } from "@material-tailwind/react";
import { RxCross2 } from "react-icons/rx";
import AppSideLink from "./AppSideLink";

// icons
import { FaUsers } from "react-icons/fa6";
import { GoHomeFill } from "react-icons/go";
import { LuTableOfContents } from "react-icons/lu";
import { GrGallery } from "react-icons/gr";
import { IoIosCall } from "react-icons/io";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAction } from "../../redux/features/action";

const AppSidebar = () => {
    const location = useLocation();
    const appSidebar = useSelector((state) => state.action.appSidebar);
    const dispatch = useDispatch();

    const navLinks = [
        {
            name: 'Home',
            route: '/',
            icon: <GoHomeFill size={18} />,
        },
        {
            name: 'About Us',
            route: '/about-us',
            icon: <FaUsers size={18} />,
        },
        {
            name: 'Blogs',
            route: '/blogs',
            icon: <LuTableOfContents size={18} />,
        },
        {
            name: 'Gallery',
            route: '/gallery',
            icon: <GrGallery size={16} />,
        },
        {
            name: 'Contact Us',
            route: '/contact-us',
            icon: <IoIosCall size={18} />,
        },
    ]

    const productLinks = [
        {
            name: "Furniture Show Room",
            route: "/furniture",
        },
        {
            name: "Tile & Sanitary Ware",
            route: "/tiles-and-sanitary-ware",
        },
        {
            name: "Electrics Show Room",
            route: "/electrics",
        },
        {
            name: "Our Services",
            route: "/services",
        }
    ]

    useEffect(() => {
        if (location) {
            dispatch(setAction({ appSidebar: false }));
        }
    }, [location]);

    return <>
        <Drawer
            open={appSidebar}
            onClose={() => dispatch(setAction({ appSidebar: false }))}
            overlayProps={{
                className: "bg-black/20 backdrop-blur-[2px]",
            }}
        >
            <aside className="w-full p-3 flex flex-col justify-start items-start gap-y-2">
                <div className="w-full flex justify-between items-center">
                    <img src="/logo.svg" alt="image" className="w-[70px]" />
                    <button
                        className="cursor-pointer hover:text-red-700"
                        onClick={() => dispatch(setAction({ appSidebar: false }))}
                    >
                        <RxCross2 size={20} />
                    </button>
                </div>
                <div className="w-full">
                    {
                        navLinks.map((item, index) => (
                            <AppSideLink
                                key={index}
                                {...item}
                            />
                        ))
                    }
                </div>
                <div
                    className="w-full h-[1px] bg-gray-400"
                ></div>
                <div className="w-full">

                </div>
            </aside>
        </Drawer>
    </>
}

export default AppSidebar;