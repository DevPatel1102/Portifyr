import logo from "../../assets/images/portifyr_logo.png"
import { useNavigate } from 'react-router-dom';

export const Header = () => {
    const navigate = useNavigate();

    return (
        <>
            <nav className="bg-white shadow-md">
                <div className="container mx-auto px-6 py-3 flex justify-between items-center">
                    <div className="flex items-center">
                        <img src={logo} alt="Portifyr Logo" className="h-10 w-auto mr-3 object-contain"/>
                        <span className="text-2xl font-bold text-indigo-600">Portifyr</span>
                    </div>
                    <div className="flex space-x-4">
                        <button className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded" onClick={() => navigate('/signup')}>Sign Up</button>
                        <button className="bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded" onClick={() => navigate('/login')}>Login</button>
                    </div>
                </div>
            </nav>
        </>
    );
}