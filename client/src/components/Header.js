import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

function Header({ user }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [showAboutUs, setShowAboutUs] = useState(false); // Popup state
  const [showAccountInfo, setShowAccountInfo] = useState(false); // Account info state
  const [showMySaved, setShowMySaved] = useState(false); // My Saved state

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    setIsDarkMode(theme === "dark");
  }, []);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  const toggleTheme = () => {
    const newTheme = isDarkMode ? "light" : "dark";
    setIsDarkMode(!isDarkMode);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", !isDarkMode);
  };

  const handleAboutUs = () => {
    setShowAboutUs(true);
  };

  const handleAccountInfo = () => {
    setShowAccountInfo(true);
  };

  const handleMySaved = () => {
    setShowMySaved(true);
  };

  return (
    <header className="fixed top-0 left-0 w-full flex items-center justify-between px-6 py-4 border-b border-gray-700 bg-black text-white z-50">
      {/* Sidebar Toggle Button */}
      <button onClick={toggleSidebar} className="text-white">
        <Menu size={28} />
      </button>

      {/* Website Name (No Page Reload) */}
      <Link to="/" className="text-4xl font-semibold tracking-wide">
        ASTRONEXUS
      </Link>

      {/* Theme Toggle */}
      <button onClick={toggleTheme} className="flex items-center space-x-2">
        {isDarkMode ? (
          <span>🌙</span>
        ) : (
          <span>🌞</span>
        )}
        <span>{isDarkMode ? "Dark Mode" : "Light Mode"}</span>
      </button>

      {/* Sidebar Menu */}
      {sidebarOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex">
          <div className="w-64 bg-white dark:bg-gray-900 h-full p-5 shadow-lg border-r border-gray-700">
            <button onClick={toggleSidebar} className="text-black dark:text-white mb-4">
              <X size={24} />
            </button>
            <ul className="space-y-4 font-cormorant text-lg text-black dark:text-white">
              {user && (
                <li className="hover:text-gray-700 cursor-pointer" onClick={handleAccountInfo}>Account Info</li>
              )}
              {user && (
                <li className="hover:text-gray-700 cursor-pointer" onClick={handleMySaved}>My Saved</li>
              )}
              <li className="hover:text-gray-700 cursor-pointer" onClick={handleAboutUs}>About Us</li>
              <li className="flex items-center justify-between cursor-pointer" onClick={toggleTheme}>
                {isDarkMode ? "Light Mode" : "Dark Mode"}
              </li>
            </ul>
          </div>
        </div>
      )}

      {/* About Us Popup */}
      {showAboutUs && (
        <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center">
          <div className="bg-black p-8 rounded-lg shadow-lg">
            <h2 className="black text-3xl font-semibold mb-4">About ASTRONEXUS</h2>
            <p>ASTRONEXUS is your portal to space news, insights, and more...</p>
            <div className="mt-4">
              <label className="block text-sm">Rate our website:</label>
              <input type="number" min="1" max="5" className="w-full p-2 border border-gray-300 rounded mt-2" />
            </div>
            <div className="mt-4">
              <textarea className="w-full p-2 border border-gray-300 rounded mt-2" placeholder="Your feedback"></textarea>
            </div>
            <button onClick={() => setShowAboutUs(false)} className="mt-4 p-2 bg-red-500 text-white rounded">Close</button>
          </div>
        </div>
      )}

      {/* Account Info and My Saved popups (similar structure can be added) */}
      {showAccountInfo && (
        <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Account Info</h2>
            <p>Email: {user.email}</p>
            {/* More user data */}
            <button onClick={() => setShowAccountInfo(false)} className="mt-4 p-2 bg-red-500 text-white rounded">Close</button>
          </div>
        </div>
      )}

      {showMySaved && (
        <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">My Saved Articles</h2>
            {/* Map through saved articles and display them */}
            <button onClick={() => setShowMySaved(false)} className="mt-4 p-2 bg-red-500 text-white rounded">Close</button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
