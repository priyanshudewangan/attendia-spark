import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [rememberMe, setRememberMe] = useState(false);

    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // TODO: add real authentication
        navigate("/dashboard"); // send user to dashboard
    };

    return (
        <div className="min-h-screen flex flex-col md:flex-row">
            <div className="flex-1 flex items-center justify-center p-10 bg-white">
                <div className="w-full max-w-md">
                    <h1 className="text-4xl font-extrabold mb-2 text-gray-900">Welcome Back</h1>
                    <p className="mb-8 text-gray-600">Sign in to your account</p>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label className="block text-sm font-semibold mb-2 text-gray-700">Email</label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-4 focus:ring-red-400 focus:border-transparent transition"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-semibold mb-2 text-gray-700">Password</label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-4 focus:ring-red-400 focus:border-transparent transition"
                                required
                            />
                        </div>
                        <div className="flex items-center justify-between text-sm text-gray-700 font-medium">
                            <label className="inline-flex items-center">
                                <input
                                    type="checkbox"
                                    checked={rememberMe}
                                    onChange={(e) => setRememberMe(e.target.checked)}
                                    className="form-checkbox h-4 w-4 text-red-600"
                                />
                                <span className="ml-2">Remember me</span>
                            </label>
                            <a href="#" className="hover:underline">
                                Forgot password?
                            </a>
                        </div>
                        <button
                            type="submit"
                            className="w-full py-3 rounded-lg bg-blue-500 hover:bg-red-600 text-white font-bold text-lg transition"
                        >
                            Sign in
                        </button>
                    </form>
                    <button
                        type="button"
                        className="mt-4 w-full py-3 rounded-lg bg-white border border-gray-300 shadow-sm flex items-center justify-center space-x-3 hover:bg-gray-100 transition"
                    >
                        <img src="/Outlook.png" alt="Outlook logo" className="h-6 w-6" />
                        <span className="text-gray-700 font-semibold">Sign in with Outlook</span>
                    </button>
                </div>
            </div>
            <div className="flex-1 hidden md:flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600">
                <img src="/BackgroundImg.jpg" alt="Login Illustration" className="w-full h-full object-cover" />
            </div>
        </div>
    );
}