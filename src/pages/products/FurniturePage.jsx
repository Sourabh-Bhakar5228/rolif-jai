import { useMemo } from "react";
import useFilter from "./useFilter";
import ProductCard from "./ProductCard";
import { useLocation } from "react-router-dom";

const FurniturePage = () => {
    const { pathname } = useLocation();
    const filterData = useMemo(() => {
        return useFilter(pathname);
    }, [pathname]);

    return <>
        <main className="w-full">
            <img src="/images/furniture/Sofas.png" alt="image" className="w-full h-auto" />
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-start items-start gap-6 px-4 lg:px-8 py-5">
                {filterData.slice(0, 8).map((item, index) => (
                    <ProductCard
                        key={index}
                        {...item}
                    />
                ))}
            </div>
            <img src="/images/furniture/Sofas1.png" alt="image" className="w-full h-auto" />
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-start items-start gap-6 px-4 lg:px-8 py-5">
                {filterData.slice(8, 16).map((item, index) => (
                    <ProductCard
                        key={index}
                        {...item}
                    />
                ))}
            </div>
            <div className="flex justify-start items-start w-full px-4 lg:px-8 py-5">
                <div className="w-auto">
                    <img src="/images/furniture/wardrobes.png" alt="image" className="w-full h-auto" />
                </div>
                <div className="w-full">
                    {filterData.slice(16, 20).map((item, index) => (
                        <ProductCard
                            key={index}
                            {...item}
                        />
                    ))}
                </div>
            </div>
        </main>
    </>
}

export default FurniturePage;