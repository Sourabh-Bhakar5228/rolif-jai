const Heading = ({
    children,
}) => {
    return <>
        <div className="w-full font-semibold text-[28px] my-3 flex justify-center gap-x-2 items-center">
            <div className="bg-gray-900 w-[100px] h-[2px]"></div>
            <h2>{children}</h2>
            <div className="bg-gray-900 w-[100px] h-[2px]"></div>
        </div>
    </>
}

export default Heading;