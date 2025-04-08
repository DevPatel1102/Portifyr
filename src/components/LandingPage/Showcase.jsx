export const Showcase = ()=>{
    return(
        <>
            <div className="bg-gray-50 py-16">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
                    
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="text-center">
                            <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                <span className="text-2xl font-bold text-indigo-600">1</span>
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Select Your Template</h3>
                            <p className="text-gray-600">Choose from our professionally designed templates as your starting point.</p>
                        </div>
                        
                        <div className="text-center">
                            <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                <span className="text-2xl font-bold text-indigo-600">2</span>
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Customize Content</h3>
                            <p className="text-gray-600">Edit content, customize colors, and adjust layouts using our intuitive controls.</p>
                        </div>
                        
                        <div className="text-center">
                            <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                <span className="text-2xl font-bold text-indigo-600">3</span>
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Download</h3>
                            <p className="text-gray-600">Instantly download your portfolio and share it with employers or clients.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}