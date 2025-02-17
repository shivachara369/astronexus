import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 mt-20 border-t-2 border-gray-700">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        
        {/* Left Side - Footer Info */}
        <div className="text-left md:w-1/3">
          <h2 className="text-3xl font-bold mb-2">ASTRONEXUS</h2>
          <p className="text-gray-400 text-lg">
            Your gateway to real-time space insights, news, and discoveries.
          </p>
          <p className="mt-4">Developed by <span className="font-semibold">SHIVA CHARAN</span></p>
          <p>Email: <a href="mailto:shivacharan.deshetti@gmail.com" className="text-blue-400 hover:underline">shivacharan.deshetti@gmail.com</a></p>
        </div>

        {/* Center - Privacy & Terms */}
        <div className="mt-6 md:mt-0 md:w-1/3 text-center">
          <h3 className="text-lg font-semibold mb-3">Legal</h3>
          <ul className="text-gray-400 space-y-2">
            <li>
              <a href="/privacy-policy" className="hover:underline">Privacy Policy</a>
            </li>
            <li>
              <a href="/terms-of-use" className="hover:underline">Terms of Use</a>
            </li>
          </ul>
        </div>

        {/* Right Side - Subscribe & Follow Us */}
        <div className="mt-6 md:mt-0 md:w-1/3 flex flex-col items-end">
          <h3 className="text-lg font-semibold mb-2">Subscribe to our Newsletter</h3>
          <p className="text-gray-400 mb-4">Stay updated with the latest space news.</p>
          <div className="flex">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="px-4 py-2 rounded-l-md border border-gray-600 bg-gray-800 text-white focus:outline-none"
            />
            <button className="px-4 py-2 bg-blue-500 text-white rounded-r-md hover:bg-blue-600">
              Subscribe
            </button>
          </div>

          {/* Follow Us Section */}
          <div className="mt-6 text-center">
            <h3 className="text-lg font-semibold">Follow Us</h3>
            <div className="flex space-x-4 mt-2">
              <a href="https://facebook.com" className="text-gray-400 hover:text-white text-2xl"><FaFacebook /></a>
              <a href="https://twitter.com" className="text-gray-400 hover:text-white text-2xl"><FaTwitter /></a>
              <a href="https://instagram.com" className="text-gray-400 hover:text-white text-2xl"><FaInstagram /></a>
              <a href="https://linkedin.com" className="text-gray-400 hover:text-white text-2xl"><FaLinkedin /></a>
            </div>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="text-center text-gray-500">
        © {new Date().getFullYear()} ASTRONEXUS. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
