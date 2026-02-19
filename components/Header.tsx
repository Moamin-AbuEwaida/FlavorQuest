import React, { useState, useEffect } from 'react';
import { ChefHat, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Recipes', path: '/recipes' },
    { name: 'Collections', path: '/collections' },
    { name: 'Community', path: '/community' },
    { name: 'Pro', path: '/pro' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled || mobileMenuOpen ? 'bg-white/90 backdrop-blur-lg border-b border-gray-100 py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        
        {/* Brand */}
        <Link to="/" className="flex items-center gap-2 cursor-pointer z-50" onClick={() => window.scrollTo(0,0)}>
           <div className="bg-brand text-white p-2 rounded-xl shadow-lg shadow-brand/20 transition-transform hover:scale-105">
             <ChefHat size={24} strokeWidth={2.5} />
           </div>
           <span className="font-display font-black text-2xl tracking-tight text-brand-black">FlavorQuest</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1 bg-white/80 backdrop-blur-md px-2 py-1.5 rounded-full border border-gray-100 shadow-sm">
            {navLinks.map((item) => (
                <Link 
                  key={item.name} 
                  to={item.path} 
                  className={`px-5 py-2 rounded-full text-sm font-bold transition-all duration-200 ${isActive(item.path) ? 'bg-brand-black text-white' : 'text-gray-500 hover:text-brand-black hover:bg-gray-100'}`}
                >
                    {item.name}
                </Link>
            ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden z-50 p-2 text-brand-black"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>

        {/* Mobile Nav Overlay */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 bg-white z-40 flex flex-col items-center justify-center space-y-8 animate-in slide-in-from-top-10 duration-200">
            {navLinks.map((item) => (
                <Link 
                  key={item.name} 
                  to={item.path} 
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-3xl font-display font-bold text-brand-black hover:text-brand"
                >
                    {item.name}
                </Link>
            ))}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;