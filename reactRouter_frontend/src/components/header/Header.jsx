import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // icons for menu

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="shadow sticky z-50 top-0">
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src="https://api.logo.com/api/v2/images?design=lg_4BmZ2Y5HCStnSadR6A&u=b77479727ad836126bc6e155823e2eda2c1c5b1d69d69b6f381034fdbe1e585a&width=1600&height=900&margins=300&fit=contain&format=webp&quality=60&tightBounds=true"
              className="mr-4 h-20 w-28"
              alt="Logo"
            />
          </Link>

          {/* Hamburger Icon (visible on mobile) */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden inline-flex items-center p-2 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Buttons */}
          <div className="hidden lg:flex items-center lg:order-2">
            <Link
              to="#"
              className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2.5 mr-2"
            >
              Log in
            </Link>
            <Link
              to="#"
              className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 py-2.5 mr-2"
            >
              Get started
            </Link>
          </div>

          {/* Nav Items */}
          <div
            className={`${
              isMobileMenuOpen ? "flex" : "hidden"
            } flex-col w-full lg:flex lg:flex-row lg:items-center lg:justify-between lg:w-auto lg:order-1`}
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              {[
                { to: "/", label: "Home" },
                { to: "/about", label: "About" },
                { to: "/contact", label: "Contact" },
                { to: "/github", label: "Github" },
              ].map(({ to, label }) => (
                <li key={label}>
                  <NavLink
                    to={to}
                    className={({ isActive }) =>
                      `block py-2 pr-4 pl-3 duration-200 ${
                        isActive ? "text-orange-700" : "text-gray-700"
                      } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                    }
                    onClick={() => setIsMobileMenuOpen(false)} // close on click
                  >
                    {label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
