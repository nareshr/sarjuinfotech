import { Mail, Phone, Code, Globe, Smartphone } from "lucide-react";

export default function App() {
  return (
    <div className="font-sans bg-gray-50 text-gray-800">
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">
          <h1 className="text-2xl font-bold text-indigo-600">
            Sarju Infotech LLP
          </h1>
          <nav className="hidden md:flex gap-6 text-gray-700 font-medium">
            <a href="#home" className="hover:text-indigo-600">Home</a>
            <a href="#about" className="hover:text-indigo-600">About</a>
            <a href="#services" className="hover:text-indigo-600">Services</a>
            <a href="#contact" className="hover:text-indigo-600">Contact</a>
          </nav>
          {/* <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg shadow hover:bg-indigo-700 transition">
            Get Quote
          </button> */}
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="text-center py-20 bg-gradient-to-r from-indigo-50 to-white">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Welcome to <span className="text-indigo-600">Sarju Infotech LLP</span>
        </h2>
        <p className="text-lg text-gray-600 mb-6">
          We build scalable, modern software solutions for your business.
        </p>
        <div className="flex items-center justify-center gap-6">
          <a href="mailto:info@sarjuinfotech.com" className="flex items-center gap-2 text-indigo-600 hover:underline">
            <Mail size={20} /> info@sarjuinfotech.com
          </a>
          {/* <a href="tel:+919876543210" className="flex items-center gap-2 text-gray-700 hover:text-indigo-600">
            <Phone size={20} /> +91 86905932
          </a> */}
        </div>
        <div className="flex items-center justify-center gap-6">
          <a href="mailto:sarjuinfotech@gmail.com" className="flex items-center gap-2 text-indigo-600 hover:underline">
            <Mail size={20} /> sarjuinfotech@gmail.com
          </a>          
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="max-w-7xl mx-auto py-16 px-6">
        <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Our Services
        </h3>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow hover:shadow-lg transition">
            <Code className="text-indigo-600 w-10 h-10 mb-4" />
            <h4 className="text-xl font-semibold mb-2">Custom Software Development</h4>
            <p className="text-gray-600">
              Tailor-made solutions designed and built to match your unique business needs.
            </p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow hover:shadow-lg transition">
            <Globe className="text-indigo-600 w-10 h-10 mb-4" />
            <h4 className="text-xl font-semibold mb-2">Web Development</h4>
            <p className="text-gray-600">
              From simple websites to complex platforms, we deliver fast, scalable, and secure web apps.
            </p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow hover:shadow-lg transition">
            <Smartphone className="text-indigo-600 w-10 h-10 mb-4" />
            <h4 className="text-xl font-semibold mb-2">Mobile App Development</h4>
            <p className="text-gray-600">
              Cross-platform apps that provide seamless experiences for your customers.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 text-center py-6 mt-12">
        <p>© {new Date().getFullYear()} Sarju Infotech LLP. All rights reserved.</p>
      </footer>
    </div>
  );
}
