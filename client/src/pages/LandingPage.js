import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Header from "../components/Header";
import "./SpaceAnimation.css"; // Ensure styles are correctly applied

const LandingPage = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleAuth = async () => {
    setLoading(true);
    setErrorMessage("");

    try {
      const endpoint = isLogin ? "http://localhost:5000/api/auth/login" : "http://localhost:5000/api/auth/register";
      const response=await axios.post(endpoint, { email, password }, { withCredentials: true });
      alert(response.data.message);

      if (isLogin) {
        localStorage.setItem("token", response.data.token);
        navigate("/home");
      } else {
        setIsLogin(true);
      }
    } catch (error) {
      setErrorMessage(error.response?.data?.message || "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative bg-black text-white min-h-screen flex flex-col">
      <Header />

      {/* Background Animation */}
      <div className="relative w-full mt-[80px] h-[calc(100vh-80px)] overflow-hidden">
        <video autoPlay loop muted className="absolute top-0 left-0 w-full h-full object-cover z-0">
          <source src="/planets.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="absolute inset-0 bg-black bg-opacity-60 z-5"></div>

        <div className="relative z-10 flex flex-col md:flex-row w-full h-full">

          {/* Left Side - About Section */}
          <div className="w-full md:w-1/2 flex items-center px-10">
            <div className="bg-gray-900 border border-gray-700 p-6 rounded-lg w-full max-h-[80vh] overflow-y-auto shadow-lg backdrop-blur-md bg-opacity-70">
              <h1 className="text-5xl font-extrabold tracking-wide text-white mb-6 animate-fade-in">
                SPACE NERDS
              </h1>
              <p className="text-lg text-gray-300">
                Welcome to the <strong>ancient library of space</strong>, where we unlock the mysteries of the universe.
                <br /><br />
                **ASTRONEXUS** provides real-time space insights, planetary data, and cosmic discoveries.
                <br /><br />
                - 🌌 **Track Asteroids & Near-Earth Objects (NEOs)**  
                - 🚀 **Live Space Weather Reports from NASA & ISRO**  
                - 🔭 **Explore Exoplanets & Distant Worlds**  
                - 🌍 **Monitor Earth with Satellite Data**  
                - 📡 **Stay Updated with Space News from NASA, JAXA & ISRO**  
                - 🛰 **AI-powered Space Data Analysis**  
                <br /><br />
                <span className="block text-2xl font-bold text-center mt-6 animate-bounce">
                  DEVELOPED BY SHIVACHARAN
                </span>
              </p>
            </div>
          </div>

          {/* Right Side - Authentication Form */}
          <div className="w-full md:w-1/2 flex items-center justify-center p-10">
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md backdrop-blur-md bg-opacity-80 transition-all duration-300 ease-in-out hover:scale-105">
              <h2 className="text-3xl font-semibold mb-4 text-center">
                {isLogin ? "Login" : "Register"}
              </h2>

              {errorMessage && (
                <div className="mb-4 text-red-400 text-center">
                  {errorMessage}
                </div>
              )}

              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 mb-4 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-3 mb-4 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />

              <button
                className="w-full py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-md font-semibold transition-all duration-300 ease-in-out"
                onClick={handleAuth}
                disabled={loading}
              >
                {loading ? "Processing..." : isLogin ? "Login" : "Register"}
              </button>

              <p className="text-sm text-gray-400 mt-4 text-center">
                {isLogin ? "Don't have an account?" : "Already have an account?"}  
                <span
                  className="text-blue-400 cursor-pointer hover:underline ml-1"
                  onClick={() => setIsLogin(!isLogin)}
                >
                  {isLogin ? "Register" : "Login"}
                </span>
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default LandingPage;
