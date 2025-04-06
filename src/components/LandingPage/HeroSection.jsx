export const HeroSection = () =>{
    return(
        <>
            <div className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-20">
                <div className="container mx-auto px-6 text-center">
                    <h1 className="text-5xl font-bold mb-4">Build Your Portfolio Side-by-Side</h1>
                    <p className="text-xl mb-8">Control your portfolio design with real-time previews. Edit on the left, see results on the right.</p>
                    <button className="bg-white text-indigo-600 px-6 py-3 rounded-lg shadow-lg font-semibold hover:bg-gray-100 transform hover:scale-105 transition duration-300">
                        Start Building Now
                    </button>
                </div>
            </div>
        </>
    );
}