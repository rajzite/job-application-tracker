import { useNavigate } from "react-router-dom";

export default function Navbar() {

    const navigate = useNavigate();

    const logout = () => {
        localStorage.removeItem("token");
        navigate("/");
    };

    return (
        <div className="bg-blue-700 text-white p-4 justify-between">
            <h1 className="font-bold text-x1">Job Tracker</h1>

            <button 
                onClick={logout}
                className="bg-red-500 px-4 py-1 rounded"
            >
                Logout
            </button>  
        </div>
    );
}