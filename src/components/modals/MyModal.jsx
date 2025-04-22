import { Dialog } from "@material-tailwind/react";

const MyModal = ({
    isOpen = false,
    setIsOpen = () => { },
    children,
    className = "",
    size = "md",
}) => {
    const handleOpen = () => setIsOpen(false);

    return <>
        <Dialog
            open={isOpen}
            handler={handleOpen}
            animate={{
                mount: { scale: 1, y: 0 },
                unmount: { scale: 0.9, y: -100 },
            }}
            className={`rounded-sm ${className}`}
            size={size}
        >
            {children}
        </Dialog>
    </>
}

export default MyModal;