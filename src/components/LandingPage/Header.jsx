import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Auth/AuthContext"; // adjust path
import logo from "../../assets/images/portifyr_logo.png";

export const Header = () => {
    const navigate = useNavigate();
    const { user, logout } = useAuth();
    const [showDialog, setShowDialog] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const handleSignOut = () => {
        logout();
        setShowDialog(false);
        navigate("/login");
    };

    return (
        <>
            <nav className="bg-white shadow-md">
                <div className="container mx-auto px-6 py-3">
                    <div className="flex justify-between items-center">
                        <div className="flex items-center">
                            <img src={logo} alt="Portifyr Logo" className="h-10 w-auto mr-3 object-contain" />
                            <span className="text-2xl font-bold text-indigo-600">Portifyr</span>
                        </div>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center">
                            <div className="flex space-x-6 mr-10">
                                <a
                                    href="/about"
                                    className="text-gray-600 hover:text-indigo-600 font-medium relative group px-2 py-1"
                                >
                                    <span className="relative z-10 transition-all duration-300">About</span>
                                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-600 transition-all duration-300 group-hover:w-full"></span>
                                </a>
                                <a
                                    href="/pricing"
                                    className="text-gray-600 hover:text-indigo-600 font-medium relative group px-2 py-1"
                                >
                                    <span className="relative z-10 transition-all duration-300">Pricing</span>
                                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-600 transition-all duration-300 group-hover:w-full"></span>
                                </a>
                                <a
                                    href="/contact"
                                    className="text-gray-600 hover:text-indigo-600 font-medium relative group px-2 py-1"
                                >
                                    <span className="relative z-10 transition-all duration-300">Contact</span>
                                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-600 transition-all duration-300 group-hover:w-full"></span>
                                </a>
                            </div>

                            <div className="flex space-x-4">
                                {!user && (
                                    <>
                                        <button
                                            className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-md"
                                            onClick={() => navigate('/signup')}
                                        >
                                            Sign Up
                                        </button>
                                        <button
                                            className="px-4 py-2 rounded bg-indigo-500 hover:bg-indigo-600 text-white font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-md"
                                            onClick={() => navigate('/login')}
                                        >
                                            Login
                                        </button>
                                    </>
                                )}
                                {user && (
                                    <button
                                        className="px-4 py-2 rounded bg-indigo-500 hover:bg-indigo-600 text-white font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-md"
                                        onClick={() => setShowDialog(true)}
                                    >
                                        Sign Out
                                    </button>
                                )}
                            </div>
                        </div>

                        {/* Mobile menu button */}
                        <div className="md:hidden flex items-center">
                            <button
                                className="text-gray-700 focus:outline-none"
                                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            >
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    {mobileMenuOpen ? (
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    ) : (
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                    )}
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* Mobile Menu */}
                    {mobileMenuOpen && (
                        <div className="mt-4 md:hidden">
                            <div className="flex flex-col space-y-3 pb-3">
                                <a href="/about" className="text-gray-600 hover:text-indigo-600 font-medium">About</a>
                                <a href="/pricing" className="text-gray-600 hover:text-indigo-600 font-medium">Pricing</a>
                                <a href="/contact" className="text-gray-600 hover:text-indigo-600 font-medium">Contact</a>
                            </div>

                            <div className="flex flex-col space-y-2 pt-3 border-t border-gray-200">
                                {!user && (
                                    <>
                                        <button
                                            className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium transition-all duration-300"
                                            onClick={() => navigate('/signup')}
                                        >
                                            Sign Up
                                        </button>
                                        <button
                                            className="px-4 py-2 rounded bg-indigo-500 hover:bg-indigo-600 text-white font-medium transition-all duration-300"
                                            onClick={() => navigate('/login')}
                                        >
                                            Login
                                        </button>
                                    </>
                                )}
                                {user && (
                                    <button
                                        className="px-4 py-2 rounded bg-indigo-500 hover:bg-indigo-600 text-white font-medium transition-all duration-300"
                                        onClick={() => setShowDialog(true)}
                                    >
                                        Sign Out
                                    </button>
                                )}
                            </div>
                        </div>
                    )}
                </div>
            </nav>

            {/* Sign Out Dialog */}
            {showDialog && (
                <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center z-50">
                    <div className="bg-white/80 backdrop-blur-md rounded-xl p-6 shadow-lg w-[90%] max-w-md text-center border border-gray-200">
                        <h2 className="text-xl font-medium text-gray-800 mb-3">
                            Confirm Sign Out
                        </h2>
                        <p className="text-sm text-gray-600 mb-6">
                            Are you sure you want to sign out? You can log back in anytime.
                        </p>

                        <div className="flex justify-center gap-4">
                            <button
                                className="px-4 py-2 rounded-md bg-gray-200 hover:bg-gray-300 text-gray-700 transition"
                                onClick={() => setShowDialog(false)}
                            >
                                Cancel
                            </button>
                            <button
                                className="px-4 py-2 rounded-md bg-red-500 hover:bg-red-600 text-white transition"
                                onClick={handleSignOut}
                            >
                                Sign Out
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};