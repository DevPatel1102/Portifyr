export const Footer = ()=>{
    return(
        <>
            {/* Footer */}
            <footer className="bg-gray-800 text-white py-8">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col md:flex-row justify-center">
                        <div className="flex flex-col items-center justify-center mb-6 md:mb-0">
                            <h3 className="text-2xl font-bold">Portifyr</h3>
                            <p className="mt-2 text-gray-400">Craft your Professional Story, Side by Side</p>
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