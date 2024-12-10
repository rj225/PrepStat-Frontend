import React from "react";



function Footers() {
  return (
    <footer className="bg-gray-900 text-white py-12">
  <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
    {/* About Section */}
    <div>
      <h3 className="text-lg font-semibold mb-4">About PrepStat</h3>
      <p className="text-sm text-gray-400 leading-relaxed">
        PrepStat is your one-stop platform for placement preparation. We provide resources for aptitude, reasoning, verbal skills, and interview readiness.
      </p>
    </div>

    {/* Quick Links */}
    <div>
      <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
      <ul className="space-y-2 text-sm">
        <li><a href="#home" className="hover:text-orange-400">Home</a></li>
        <li><a href="#about" className="hover:text-orange-400">About</a></li>
        <li><a href="#services" className="hover:text-orange-400">Services</a></li>
        <li><a href="#contact" className="hover:text-orange-400">Contact</a></li>
      </ul>
    </div>

    {/* Contact Section */}
    <div>
      <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
      <ul className="text-sm space-y-2">
        <li>Email: <a href="mailto:support@prepstat.com" className="hover:text-orange-400">support@prepstat.com</a></li>
        <li>Phone: <a href="tel:+1234567890" className="hover:text-orange-400">+123 456 7890</a></li>
        <li>Location: <span className="text-gray-400">XYZ Tech Park, India</span></li>
      </ul>
    </div>

    {/* Newsletter Subscription */}
<div>
  <h3 className="text-lg font-semibold mb-4">Stay Updated</h3>
  <p className="text-gray-600 mb-4">
    Subscribe to our newsletter for the latest placement tips and updates.
  </p>
  <form>
    <input 
      type="email" 
      placeholder="Enter your email" 
      className="px-4 py-2 rounded-l-lg border focus:ring focus:ring-orange-400 outline-none"
    />
    <button 
      type="submit" 
      className="px-6 py-2 bg-orange-400 text-white font-semibold rounded-r-lg hover:bg-orange-500 transition"
    >
      Subscribe
    </button>
  </form>
</div>

  </div>

  {/* Bottom Bar */}
  <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm text-gray-500">
    <p>&copy; {new Date().getFullYear()} PrepStat. All rights reserved.</p>
    <p className="mt-1">
      Designed with ❤️ by the PrepStat Team.
    </p>
  </div>
</footer>

  )
}

export default Footers