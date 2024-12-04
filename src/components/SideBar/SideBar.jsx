import { useState } from "react";
import { FaTimes, FaBars } from "react-icons/fa";

const Sidebar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const Menus = [
        { id: 1, name: "Home", link: "/home" },
        { id: 2, name: "Services", link: "/services" },
        { id: 3, name: "About", link: "/banner" },
        { id: 4, name: "Menu", link: "/menu" },
    ];

    return (
        <div>
            {/* Toggle Button */}
            <button
                onClick={toggleSidebar}
                className="absolute sm:hidden top-4 right-4 bg-primary text-white p-3 rounded-full z-50"
            >
                {isSidebarOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
            </button>

            {/* Sidebar */}
            <div
                className={`fixed top-0 right-0 w-64 h-70 bg-secondary transform ${isSidebarOpen ? "translate-x-0" : "translate-x-full"
                    } transition-transform duration-300 ease-in-out z-40`}
            >
                <div className="flex flex-col p-4">
                    {/* Close Button */}
                    <button onClick={toggleSidebar} className="self-end ">
                        <FaTimes size={24} />
                    </button>

                    {/* Navigation Links */}
                    <ul className="mt-8">
                        {Menus.map((data) => (
                            <li key={data.id} className="mb-4">
                                <a
                                    href={data.link}
                                    className="text-xl text-white/70 hover:text-white duration-200"
                                    onClick={toggleSidebar}
                                >
                                    {data.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
