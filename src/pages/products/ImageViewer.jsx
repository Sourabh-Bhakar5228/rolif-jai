import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ImageViewer = ({ product }) => {
    const [selectedImage, setSelectedImage] = useState(0);
    const [direction, setDirection] = useState(0);

    const handleImageChange = (newIndex) => {
        setDirection(newIndex > selectedImage ? 1 : -1);
        setSelectedImage(newIndex);
    };

    const variants = {
        enter: (direction) => ({
            x: direction > 0 ? 200 : -200, // Increased initial offset for faster perceived motion
            opacity: 0
        }),
        center: {
            x: 0,
            opacity: 1
        },
        exit: (direction) => ({
            x: direction < 0 ? 200 : -200, // Increased exit offset
            opacity: 0
        })
    };

    return (
        <div>
            {/* Main Image with Animation */}
            <div className="bg-gray-100 rounded-lg overflow-hidden mb-4 h-96 flex items-center justify-center relative">
                <AnimatePresence mode="wait" custom={direction}>
                    <motion.img
                        key={selectedImage}
                        src={product.images[selectedImage]}
                        alt={product.title}
                        className="object-contain w-full h-full absolute"
                        custom={direction}
                        variants={variants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{
                            x: { 
                                type: "spring", 
                                stiffness: 500, // Increased stiffness for faster movement
                                damping: 30, 
                                duration: 0.3 // Slightly reduced duration
                            },
                            opacity: { duration: 0.15 } // Faster fade
                        }}
                    />
                </AnimatePresence>
            </div>

            {/* Thumbnail Gallery */}
            <div className="grid grid-cols-4 gap-3">
                {product.images.map((img, index) => (
                    <button
                        key={index}
                        onClick={() => handleImageChange(index)}
                        className={`bg-gray-100 cursor-pointer rounded-md overflow-hidden h-24 flex items-center justify-center border-2 ${
                            selectedImage === index ? 'border-blue-500' : 'border-transparent'
                        }`}
                    >
                        <motion.img 
                            src={img} 
                            alt={`Thumbnail ${index + 1}`} 
                            className="object-contain w-full h-full"
                            whileHover={{ scale: 1.05 }}
                            transition={{ 
                                type: "spring", 
                                stiffness: 500, // Faster hover animation
                                damping: 15,
                                duration: 0.2 
                            }}
                        />
                    </button>
                ))}
            </div>
        </div>
    );
};

export default ImageViewer;