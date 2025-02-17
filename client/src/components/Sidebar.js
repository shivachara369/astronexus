import { useState, useEffect, useCallback } from "react";
import { X, Moon, Sun } from "lucide-react";

function Sidebar({ isOpen, toggleSidebar, user }) {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [showPopup, setShowPopup] = useState(null);
  const [savedArticles, setSavedArticles] = useState([]);
  const [accountInfo, setAccountInfo] = useState({});

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    setIsDarkMode(theme === "dark");
  }, []);

  const fetchSavedArticles = useCallback(async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/saved?email=${user.email}`);
      const data = await response.json();
      setSavedArticles(data);
    } catch (error) {
      console.error("Error fetching saved articles:", error);
    }
  }, [user.email]);

  const fetchAccountInfo = useCallback(async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/account?email=${user.email}`);
      const data = await response.json();
      setAccountInfo(data);
    } catch (error) {
      console.error("Error fetching account info:", error);
    }
  }, [user.email]);

  useEffect(() => {
    if (showPopup === "saved") {
      fetchSavedArticles();
    }
    if (showPopup === "account") {
      fetchAccountInfo();
    }
  }, [showPopup, fetchSavedArticles, fetchAccountInfo]);

  const toggleTheme = () => {
    const newTheme = isDarkMode ? "light" : "dark";
    setIsDarkMode(!isDarkMode);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", !isDarkMode);
  };

  return (
    <>
      <div className={`fixed inset-0 bg-black bg-opacity-70 z-50 transform ${isOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out`}>
        <div className="w-64 bg-white dark:bg-gray-900 h-full p-5 shadow-lg text-black dark:text-white">
          <button onClick={toggleSidebar} className="mb-4">
            <X size={24} />
          </button>
          <ul className="space-y-4 font-cormorant text-lg">
            {/* Account Info */}
            <li onClick={() => setShowPopup("account")} className="hover:text-gray-700 cursor-pointer">
              Account Info
            </li>

            {/* My Saved Articles */}
            <li onClick={() => setShowPopup("saved")} className="hover:text-gray-700 cursor-pointer">
              My Saved
            </li>

            {/* Dark/Light Theme Toggle */}
            <li className="flex items-center justify-between cursor-pointer" onClick={toggleTheme}>
              {isDarkMode ? "Light Mode" : "Dark Mode"}
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </li>

            {/* About Us */}
            <li onClick={() => setShowPopup("about")} className="hover:text-gray-700 cursor-pointer">
              About Us
            </li>
          </ul>
        </div>
      </div>

      {/* Account Info Popup */}
      {showPopup === "account" && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50">
          <div className="bg-white dark:bg-gray-800 p-6 w-3/4 max-w-lg rounded-lg shadow-lg">
            <h2 className="text-xl font-bold">Account Info</h2>
            <p>Email: {accountInfo.email}</p>
            <p>Password: {accountInfo.password}</p>
            <button onClick={() => setShowPopup(null)} className="mt-4 px-4 py-2 bg-red-500 text-white rounded">
              Close
            </button>
          </div>
        </div>
      )}

      {/* My Saved Articles Popup */}
      {showPopup === "saved" && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50">
          <div className="bg-white dark:bg-gray-800 p-6 w-3/4 max-w-lg rounded-lg shadow-lg">
            <h2 className="text-xl font-bold">My Saved Articles</h2>
            {savedArticles.length > 0 ? (
              <ul>
                {savedArticles.map((article, index) => (
                  <li key={index} className="mt-2">
                    <a href={article.link} target="_blank" rel="noopener noreferrer" className="text-blue-500">{article.title}</a>
                  </li>
                ))}
              </ul>
            ) : (
              <p>No saved articles found.</p>
            )}
            <button onClick={() => setShowPopup(null)} className="mt-4 px-4 py-2 bg-red-500 text-white rounded">
              Close
            </button>
          </div>
        </div>
      )}

      {/* About Us Popup */}
      {showPopup === "about" && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50">
          <div className="bg-white dark:bg-gray-800 p-6 w-3/4 max-w-lg rounded-lg shadow-lg">
            <h2 className="text-xl font-bold">About Us</h2>
            <p>Welcome to **Astronexus**! We’re the only space website that Elon Musk secretly checks at midnight. 🚀</p>
            <h3 className="mt-4 font-bold">Feedback</h3>
            <form
              onSubmit={async (e) => {
                e.preventDefault();
                const formData = new FormData(e.target);
                const feedbackData = {
                  email: user.email,
                  rating: formData.get("rating"),
                  comment: formData.get("comment"),
                };
                await fetch("http://localhost:5000/api/feedback", {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify(feedbackData),
                });
                alert("Feedback submitted!");
                setShowPopup(null);
              }}
            >
              <div className="mt-2">
                <label className="block">Rating:</label>
                <select name="rating" className="w-full border p-2">
                  <option value="5">⭐⭐⭐⭐⭐</option>
                  <option value="4">⭐⭐⭐⭐</option>
                  <option value="3">⭐⭐⭐</option>
                  <option value="2">⭐⭐</option>
                  <option value="1">⭐</option>
                </select>
              </div>
              <div className="mt-2">
                <label className="block">Comment:</label>
                <textarea name="comment" className="w-full border p-2" rows="3"></textarea>
              </div>
              <button type="submit" className="mt-4 px-4 py-2 bg-green-500 text-white rounded">
                Submit Feedback
              </button>
            </form>
            <button onClick={() => setShowPopup(null)} className="mt-4 px-4 py-2 bg-red-500 text-white rounded">
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Sidebar;
