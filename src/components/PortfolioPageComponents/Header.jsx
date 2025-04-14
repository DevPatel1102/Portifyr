import React from 'react';
import { ChevronDown } from 'lucide-react';

const Header = ({ 
    logo, 
    selectedTemplate, 
    templateDropdownOpen, 
    setTemplateDropdownOpen, 
    handleTemplateChange, 
    handleDownload 
}) => {
    return (
        <header className="bg-white shadow-md py-4">
            <div className="max-w-full mx-auto px-20 flex justify-between items-center">
                <div className="flex items-center">
                    <img src={logo} alt="Portifyr Logo" className="h-10 w-auto mr-3 object-contain" />
                    <span className="text-2xl font-bold text-indigo-600">Portifyr</span>
                </div>
                <div className="flex items-center space-x-4">
                    <div className="relative template-dropdown">
                        <button
                            onClick={() => setTemplateDropdownOpen(!templateDropdownOpen)}
                            className="flex items-center px-4 py-2 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none transition-all"
                        >
                            <span className="mr-2 capitalize">{selectedTemplate} Template</span>
                            <ChevronDown size={16} className={`transition-transform ${templateDropdownOpen ? 'rotate-180' : ''}`} />
                        </button>
                        {templateDropdownOpen && (
                            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10 border border-gray-200">
                                <ul className="py-1">
                                    <li>
                                        <button
                                            onClick={() => handleTemplateChange('professional')}
                                            className={`block px-4 py-2 text-sm w-full text-left hover:bg-gray-100 ${selectedTemplate === 'professional' ? 'bg-blue-50 text-blue-600 font-medium' : 'text-gray-700'}`}
                                        >
                                            Professional Template
                                        </button>
                                    </li>
                                    <li>
                                        <button
                                            onClick={() => handleTemplateChange('modern')}
                                            className={`block px-4 py-2 text-sm w-full text-left hover:bg-gray-100 ${selectedTemplate === 'modern' ? 'bg-blue-50 text-blue-600 font-medium' : 'text-gray-700'}`}
                                        >
                                            Modern Template
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        )}
                    </div>
                    <button onClick={handleDownload} className="px-4 py-2 bg-blue-600 text-white hover:bg-blue-700 rounded-md transition duration-200">
                        Download
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;