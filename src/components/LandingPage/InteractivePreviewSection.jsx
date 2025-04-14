import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Auth/AuthContext";

export const InteractivePreviewSection = () => {
    const navigate = useNavigate();
    const { user } = useAuth();

    const [profileColor, setProfileColor] = useState("indigo");
    const [headerText, setHeaderText] = useState("John Doe");
    const [bioText, setBioText] = useState("Frontend developer passionate about creating beautiful user interfaces with React and Tailwind CSS.");
    const [showSocial, setShowSocial] = useState(true);

    const colorMap = {
        indigo: {
            bg: "bg-indigo-400",
            gradient: "from-indigo-500 to-indigo-600",
            circle: "from-indigo-100 to-purple-200",
            iconBg: "bg-indigo-100",
            iconColor: "bg-indigo-500"
        },
        purple: {
            bg: "bg-purple-400",
            gradient: "from-purple-500 to-purple-600",
            circle: "from-purple-100 to-pink-200",
            iconBg: "bg-purple-100",
            iconColor: "bg-purple-500"
        },
        blue: {
            bg: "bg-blue-400",
            gradient: "from-blue-500 to-blue-600",
            circle: "from-blue-100 to-cyan-200",
            iconBg: "bg-blue-100",
            iconColor: "bg-blue-500"
        }
    };

    const handleStartClick = () => {
        if (user) {
            navigate("/portfolio");
        } else {
            navigate("/login");
        }
    };

    return (
        <>
            <div className="py-20 bg-gradient-to-b from-gray-50 to-gray-100">
                <div className="container mx-auto px-6">
                    <h2 className="text-4xl font-bold text-center mb-4">See Your Changes in Real-Time</h2>
                    <p className="text-xl text-gray-600 text-center mb-12">Edit once, see everywhere - instantly.</p>

                    <div className="bg-white rounded-xl shadow-2xl overflow-hidden max-w-5xl mx-auto border border-gray-100">
                        <div className="flex flex-col md:flex-row">
                            {/* Left side - Control Panel */}
                            <div className="w-full md:w-1/2 bg-gray-50 p-8 border-r border-gray-200">
                                <div className="flex items-center mb-6">
                                    <div className="w-3 h-3 bg-red-400 rounded-full mr-2"></div>
                                    <div className="w-3 h-3 bg-yellow-400 rounded-full mr-2"></div>
                                    <div className="w-3 h-3 bg-green-400 rounded-full mr-2"></div>
                                    <h3 className="text-lg font-semibold ml-2 text-gray-700">Control Panel</h3>
                                </div>

                                <div className="space-y-6">
                                    {/* Profile Name Control */}
                                    <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100">
                                        <div className="flex items-center mb-3">
                                            <div className="h-5 w-5 bg-indigo-500 rounded-full mr-2"></div>
                                            <label className="font-medium text-gray-700">Profile Name</label>
                                        </div>
                                        <input
                                            type="text"
                                            value={headerText}
                                            onChange={(e) => setHeaderText(e.target.value)}
                                            className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 outline-none transition-all"
                                            placeholder="Enter your name"
                                        />
                                    </div>

                                    {/* Bio Text Control */}
                                    <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100">
                                        <div className="flex items-center mb-3">
                                            <div className="h-5 w-5 bg-purple-500 rounded-full mr-2"></div>
                                            <label className="font-medium text-gray-700">Bio Text</label>
                                        </div>
                                        <textarea
                                            value={bioText}
                                            onChange={(e) => setBioText(e.target.value)}
                                            className="w-full p-2 border border-gray-300 rounded h-28 focus:ring-2 focus:ring-purple-400 focus:border-purple-400 outline-none transition-all"
                                            placeholder="Write a short bio"
                                        ></textarea>
                                    </div>

                                    {/* Color Theme Control */}
                                    <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100">
                                        <div className="flex items-center mb-3">
                                            <div className="h-5 w-5 bg-blue-500 rounded-full mr-2"></div>
                                            <label className="font-medium text-gray-700">Color Theme</label>
                                        </div>
                                        <div className="grid grid-cols-3 gap-3">
                                            <div
                                                className={`h-10 rounded-md flex items-center justify-center bg-indigo-200 hover:bg-indigo-300 cursor-pointer transition-colors duration-200 ${profileColor === 'indigo' ? 'ring-2 ring-indigo-500' : ''}`}
                                                onClick={() => setProfileColor('indigo')}
                                            >
                                                <div className="h-4 w-10 bg-indigo-400 rounded"></div>
                                            </div>
                                            <div
                                                className={`h-10 rounded-md flex items-center justify-center bg-purple-200 hover:bg-purple-300 cursor-pointer transition-colors duration-200 ${profileColor === 'purple' ? 'ring-2 ring-purple-500' : ''}`}
                                                onClick={() => setProfileColor('purple')}
                                            >
                                                <div className="h-4 w-10 bg-purple-400 rounded"></div>
                                            </div>
                                            <div
                                                className={`h-10 rounded-md flex items-center justify-center bg-blue-200 hover:bg-blue-300 cursor-pointer transition-colors duration-200 ${profileColor === 'blue' ? 'ring-2 ring-blue-500' : ''}`}
                                                onClick={() => setProfileColor('blue')}
                                            >
                                                <div className="h-4 w-10 bg-blue-400 rounded"></div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Social Icons Toggle */}
                                    <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100">
                                        <div className="flex items-center mb-3">
                                            <div className="h-5 w-5 bg-green-500 rounded-full mr-2"></div>
                                            <label className="font-medium text-gray-700">Social Icons</label>
                                        </div>
                                        <div className="flex items-center">
                                            <span className="mr-3 text-gray-600">Show social media icons:</span>
                                            <label className="inline-flex items-center cursor-pointer">
                                                <input
                                                    type="checkbox"
                                                    className="sr-only peer"
                                                    checked={showSocial}
                                                    onChange={() => setShowSocial(!showSocial)}
                                                />
                                                <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Right side - Live Preview */}
                            <div className="w-full md:w-1/2 p-8 bg-gray-50 bg-opacity-30">
                                <div className="flex items-center mb-6">
                                    <h3 className="text-lg font-semibold text-gray-700">Live Preview</h3>
                                    <span className="ml-3 px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">● Live</span>
                                </div>

                                <div className="border border-gray-200 rounded-lg overflow-hidden shadow-lg transform transition-transform hover:scale-105 duration-300">
                                    <div className={`h-14 bg-gradient-to-r ${colorMap[profileColor].gradient} flex items-center px-5`}>
                                        <div className="flex space-x-3">
                                            <div className="h-2 w-2 bg-white rounded-full"></div>
                                            <div className="h-2 w-2 bg-white rounded-full"></div>
                                            <div className="h-2 w-2 bg-white rounded-full"></div>
                                        </div>
                                        <div className="h-5 w-32 bg-white opacity-50 rounded ml-4"></div>
                                    </div>

                                    <div className="p-6 bg-white">
                                        <div className={`h-24 w-24 mx-auto rounded-full bg-gradient-to-br ${colorMap[profileColor].circle} flex items-center justify-center mb-5 border-4 border-white shadow-md`}>
                                            <div className={`h-12 w-12 ${colorMap[profileColor].bg} rounded-full opacity-60`}></div>
                                        </div>
                                        <div className="text-center mb-6">
                                            <h3 className="text-xl font-bold text-gray-800">{headerText || "Your Name"}</h3>
                                        </div>
                                        <div className="max-w-xs mx-auto">
                                            <p className="text-gray-600 text-center text-sm">
                                                {bioText || "Your bio text will appear here. Add some information about yourself."}
                                            </p>
                                        </div>

                                        {showSocial && (
                                            <div className="mt-6 flex justify-center space-x-2">
                                                <div className={`h-8 w-8 rounded-full ${colorMap[profileColor].iconBg} flex items-center justify-center`}>
                                                    <div className={`h-4 w-4 ${colorMap[profileColor].iconColor} rounded-sm`}></div>
                                                </div>
                                                <div className={`h-8 w-8 rounded-full ${colorMap[profileColor].iconBg} flex items-center justify-center`}>
                                                    <div className={`h-4 w-4 ${colorMap[profileColor].iconColor} rounded-sm`}></div>
                                                </div>
                                                <div className={`h-8 w-8 rounded-full ${colorMap[profileColor].iconBg} flex items-center justify-center`}>
                                                    <div className={`h-4 w-4 ${colorMap[profileColor].iconColor} rounded-sm`}></div>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="text-center mt-8">
                        <button onClick={handleStartClick} className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg shadow-lg font-semibold transition-all duration-300 inline-flex items-center">
                            Try It Now
                            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}