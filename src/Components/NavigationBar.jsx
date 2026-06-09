import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import LogoPNG from "../assets/LogoPNG.png";
import LogoPNGWhite from "../assets/LogoPNGWhite.png";
import { Link } from "react-router-dom";

// import JJHLogo from "../assets/JJHLogo.png";
// import NavB from "../assets/NavB.jpg";
// import LogoPNGWhite from "../assets/LogoPNGWhite.png";

function NavigationBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navItems = [
    { name: "Home", link: "/" },
    { name: "About", link: "about" },
    { name: "Courses", link: "/courses" },
    { name: "Director's Message", link: "/courses" },
    { name: "Fee Structure", link: "/courses" },
    { name: "Gallery", link: "/gallery" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled
          ? "bg-white/90 backdrop-blur-lg shadow-md"
          : "bg-transparent"
        }`}
    >
      <nav>
        <div className="w-full px-5 lg:px-16">
          <div className="h-20 flex items-center justify-between">

            {/* Logo */}
            <div className="flex items-center gap-3">
              {scrolled ?
                <img
                  src={LogoPNG}
                  alt="Logo"
                  className="w-16 h-16 object-contain"
                /> :
                <img
                  src={LogoPNGWhite}
                  alt="Logo"
                  className="w-16 h-16 object-contain"/>
                    }
              <div>
                <h2
                  className={`font-bold text-3xl underline transition-all duration-300 ${scrolled ? "text-rose-800" : "text-white"
                    }`}
                >
                  Jeevan Jyoti
                </h2>

                <p
                  className={`text-md font-semibold transition-all duration-300 ${scrolled ? "text-blue-950" : "text-gray-200"
                    }`}
                >
                  Paramedical Institute
                </p>
              </div>
            </div>

            {/* Desktop Menu */}
            <ul className="hidden lg:flex items-center gap-10">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.link}
                    className={`font-medium transition-all duration-300 ${scrolled
                        ? "text-slate-700 hover:text-teal-700"
                        : "text-white hover:text-orange-300"
                      }`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Contact Button */}
            <a
              href="/contact"
              className={`hidden lg:flex items-center gap-2 px-5 py-2 rounded-xl transition-all duration-300 ${scrolled
                  ? "bg-blue-950 text-white hover:bg-teal-800"
                  : "bg-white text-slate-800 hover:bg-gray-100"
                }`}
            >
              <Phone size={18} />
              Contact Us
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`lg:hidden transition-all duration-300 ${scrolled ? "text-slate-800" : "text-white"
                }`}
            >
              {isOpen ? <X size={30} /> : <Menu size={30} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ${isOpen
              ? "max-h-screen opacity-100"
              : "max-h-0 opacity-0"
            } ${scrolled
              ? "bg-white/95 backdrop-blur-lg"
              : "bg-black/70 backdrop-blur-lg"
            }`}
        >
          <div className="px-8 py-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.link}
                className={`block py-3 text-lg ${scrolled ? "text-slate-700" : "text-white"
                  }`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}

            <a
              href="/contact"
              className="mt-4 block text-center bg-blue-900 text-white py-3 rounded-xl"
            >
              Contact Us
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
} export default NavigationBar