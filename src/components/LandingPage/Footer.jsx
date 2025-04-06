export const Footer = ()=>{
    return(
        <>
            {/* Footer */}
            <footer className="bg-gray-800 text-white py-8">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col md:flex-row justify-between">
                        <div className="mb-6 md:mb-0">
                            <h3 className="text-2xl font-bold">Portifyr</h3>
                            <p className="mt-2 text-gray-400">Craft your Professional Story, Side by Side</p>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                            <div>
                                <h4 className="text-lg font-semibold mb-4">Product</h4>
                                <ul className="space-y-2">
                                    <li><a href="#" className="text-gray-400 hover:text-white">Pricing</a></li>
                                    <li><a href="#" className="text-gray-400 hover:text-white">Terms</a></li>
                                </ul>
                            </div>

                            <div>
                                <h4 className="text-lg font-semibold mb-4">Resources</h4>
                                <ul className="space-y-2">
                                    <li><a href="#" className="text-gray-400 hover:text-white">Features</a></li>
                                    <li><a href="#" className="text-gray-400 hover:text-white">Templates</a></li>
                                </ul>
                            </div>

                            <div>
                                <h4 className="text-lg font-semibold mb-4">Company</h4>
                                <ul className="space-y-2">
                                    <li><a href="#" className="text-gray-400 hover:text-white">About</a></li>
                                    <li><a href="#" className="text-gray-400 hover:text-white">Contact</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
                        <p>&copy; 2025 Portifyr. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </>
    );
}