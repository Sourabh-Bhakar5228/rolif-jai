import { IoSearch } from "react-icons/io5";

const SearchBar = () => {
    return <>
        <div className="flex justify-center px-3 py-2 gap-x-2 bg-gray-200 items-center w-[350px]">
            <div className="flex justify-center items-center">
                <IoSearch size={16} />
            </div>
            <input
                type="text"
                placeholder="What are you looking for?"
                className="outline-none w-full placeholder:font-medium font-normal"
            />
        </div>
    </>
}

export default SearchBar;