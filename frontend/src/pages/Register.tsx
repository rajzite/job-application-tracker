import { useState } from "react";
import API from "../services/api";
import { useNavigate } from "react-router-dom";

export default function Register() {

    const [form,setForm] = useState({
        name: "",
        email: "",
        password: "",
    });

    const navigate = useNavigate();

    const handleSubmit = async (e : any) => {
        e.preventDefault();

        await API.post("/users/register", form);
        navigate("/");
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-indigo-200">
            <form 
                onSubmit={handleSubmit}
                className="bg-white p-8 rounded-2xl shadow-xl w-96 space-y-5"
            >
                <h2 className="text-3xl font-bold text-center text-gray-800">Register</h2>

                <input
                    className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
                    placeholder="Email"
                    onChange={(e) => setForm({...form,email:e.target.value})}
                />

                <input
                    className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
                    placeholder="Password"
                    type="password"
                    onChange={(e) => setForm({...form,password:e.target.value})}
                />

                <button className="w-full bg-blue-600 hover:bg-blue-700 transition text-white p-3 rounded-lg font-semibold">
                    Register
                </button>
            </form>
        </div>
    );
}