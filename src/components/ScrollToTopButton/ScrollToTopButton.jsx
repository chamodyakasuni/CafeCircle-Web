import { useState, useEffect } from "react";
// import { FaArrowUp } from "react-icons/fa";

const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Toggle visibility of the button when scrolling
    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    // Smooth scroll to the top
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <div>
            {isVisible && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-5 right-5 bg-primary text-white p-4 rounded-full shadow-lg hover:bg-secondary transition duration-300 "
                >
                    {/* <FaArrowUp size={20} /> */}
                    <svg className="animate-bounce w-5 h-6 " viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 19V6M5 12l7-7 7 7" />
                    </svg>
                </button>
            )}
        </div>
    );
};

export default ScrollToTopButton;
