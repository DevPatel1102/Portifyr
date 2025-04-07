export const InteractivePreviewSection = ()=>{
    return(
        <>
            <div className="py-20 bg-gradient-to-b from-gray-50 to-gray-100">
                <div className="container mx-auto px-6">
                    <h2 className="text-4xl font-bold text-center mb-4">See Your Changes in Real-Time</h2>
                    <p className="text-xl text-gray-600 text-center mb-12">Edit once, see everywhere - instantly.</p>

                    <div className="bg-white rounded-xl shadow-2xl overflow-hidden max-w-5xl mx-auto border border-gray-100">
                        <div className="flex flex-col md:flex-row">
                            {/* Left side: Controls */}
                            <div className="w-full md:w-1/2 bg-gray-50 p-8 border-r border-gray-200">
                                <div className="flex items-center mb-6">
                                    <div className="w-3 h-3 bg-red-400 rounded-full mr-2"></div>
                                    <div className="w-3 h-3 bg-yellow-400 rounded-full mr-2"></div>
                                    <div className="w-3 h-3 bg-green-400 rounded-full mr-2"></div>
                                    <h3 className="text-lg font-semibold ml-2 text-gray-700">Control Panel</h3>
                                </div>

                                <div className="space-y-6">
                                    <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100">
                                        <div className="flex items-center mb-3">
                                            <div className="h-5 w-5 bg-indigo-500 rounded-full mr-2"></div>
                                            <div className="h-6 w-32 bg-gray-300 rounded"></div>
                                        </div>
                                        <div className="h-4 w-full bg-gray-200 rounded mb-2"></div>
                                        <div className="h-4 w-3/4 bg-gray-200 rounded"></div>
                                    </div>

                                    <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100">
                                        <div className="flex items-center mb-3">
                                            <div className="h-5 w-5 bg-purple-500 rounded-full mr-2"></div>
                                            <div className="h-6 w-24 bg-gray-300 rounded"></div>
                                        </div>
                                        <div className="h-28 w-full bg-gray-200 rounded-lg"></div>
                                    </div>

                                    <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100">
                                        <div className="flex items-center mb-3">
                                            <div className="h-5 w-5 bg-blue-500 rounded-full mr-2"></div>
                                            <div className="h-6 w-36 bg-gray-300 rounded"></div>
                                        </div>
                                        <div className="grid grid-cols-3 gap-3">
                                            <div className="h-10 rounded-md flex items-center justify-center bg-indigo-200 hover:bg-indigo-300 cursor-pointer transition-colors duration-200">
                                                <div className="h-4 w-10 bg-indigo-400 rounded"></div>
                                            </div>
                                            <div className="h-10 rounded-md flex items-center justify-center bg-purple-200 hover:bg-purple-300 cursor-pointer transition-colors duration-200">
                                                <div className="h-4 w-10 bg-purple-400 rounded"></div>
                                            </div>
                                            <div className="h-10 rounded-md flex items-center justify-center bg-blue-200 hover:bg-blue-300 cursor-pointer transition-colors duration-200">
                                                <div className="h-4 w-10 bg-blue-400 rounded"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Right side: Preview */}
                            <div className="w-full md:w-1/2 p-8 bg-gray-50 bg-opacity-30">
                                <div className="flex items-center mb-6">
                                    <h3 className="text-lg font-semibold text-gray-700">Live Preview</h3>
                                    <span className="ml-3 px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">● Live</span>
                                </div>

                                <div className="border border-gray-200 rounded-lg overflow-hidden shadow-lg transform transition-transform hover:scale-105 duration-300">
                                    {/* Header of the preview */}
                                    <div className="h-14 bg-gradient-to-r from-indigo-500 to-indigo-600 flex items-center px-5">
                                        <div className="flex space-x-3">
                                            <div className="h-2 w-2 bg-white rounded-full"></div>
                                            <div className="h-2 w-2 bg-white rounded-full"></div>
                                            <div className="h-2 w-2 bg-white rounded-full"></div>
                                        </div>
                                        <div className="h-5 w-32 bg-white opacity-50 rounded ml-4"></div>
                                    </div>

                                    {/* Content of the preview */}
                                    <div className="p-6 bg-white">
                                        <div className="h-24 w-24 mx-auto rounded-full bg-gradient-to-br from-indigo-100 to-purple-200 flex items-center justify-center mb-5 border-4 border-white shadow-md">
                                            <div className="h-12 w-12 bg-indigo-400 rounded-full opacity-60"></div>
                                        </div>
                                        <div className="h-7 w-48 mx-auto bg-gray-800 rounded mb-6"></div>
                                        <div className="space-y-3 max-w-xs mx-auto">
                                            <div className="h-4 w-full bg-gray-200 rounded"></div>
                                            <div className="h-4 w-full bg-gray-200 rounded"></div>
                                            <div className="h-4 w-3/4 bg-gray-200 rounded"></div>
                                        </div>

                                        <div className="mt-6 flex justify-center space-x-2">
                                            <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center">
                                                <div className="h-4 w-4 bg-blue-500 rounded-sm"></div>
                                            </div>
                                            <div className="h-8 w-8 rounded-full bg-indigo-100 flex items-center justify-center">
                                                <div className="h-4 w-4 bg-indigo-500 rounded-sm"></div>
                                            </div>
                                            <div className="h-8 w-8 rounded-full bg-purple-100 flex items-center justify-center">
                                                <div className="h-4 w-4 bg-purple-500 rounded-sm"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="text-center mt-8">
                        <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg shadow-lg font-semibold transition-all duration-300 inline-flex items-center">
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