import React from 'react';
import { Link } from 'react-router-dom';
import { ChefHat, Instagram, Facebook, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-100 py-12 mt-auto">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        
        {/* Brand Identity & Copyright */}
        <div className="flex flex-col items-center md:items-start gap-4">
            <Link to="/" className="flex items-center gap-2 group" onClick={() => window.scrollTo(0,0)}>
               <div className="bg-brand-black text-white p-2 rounded-xl shadow-lg shadow-black/10 transition-transform group-hover:scale-105">
                 <ChefHat size={24} strokeWidth={2.5} />
               </div>
               <span className="font-display font-black text-xl tracking-tight text-brand-black">FlavorQuest</span>
            </Link>
            <p className="text-gray-400 text-sm font-medium">
                © {year} FlavorQuest Inc.
            </p>
        </div>

        {/* Footer Links */}
        <div className="flex flex-wrap justify-center gap-8 text-sm font-bold text-gray-500">
            <Link to="/about" className="hover:text-brand-black transition-colors" onClick={() => window.scrollTo(0,0)}>About</Link>
            <Link to="/privacy" className="hover:text-brand-black transition-colors" onClick={() => window.scrollTo(0,0)}>Privacy</Link>
            <Link to="/terms" className="hover:text-brand-black transition-colors" onClick={() => window.scrollTo(0,0)}>Terms</Link>
            <Link to="/pro" className="hover:text-brand-black transition-colors" onClick={() => window.scrollTo(0,0)}>Pro</Link>
        </div>

        {/* Social Icons */}
        <div className="flex gap-4">
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="p-2.5 bg-gray-50 rounded-full text-brand-black hover:bg-brand-black hover:text-white transition-all hover:-translate-y-1">
                <Instagram size={20} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="p-2.5 bg-gray-50 rounded-full text-brand-black hover:bg-brand-black hover:text-white transition-all hover:-translate-y-1 flex items-center justify-center">
                <svg viewBox="0 0 24 24" aria-hidden="true" className="w-5 h-5 fill-current">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                </svg>
            </a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="p-2.5 bg-gray-50 rounded-full text-brand-black hover:bg-brand-black hover:text-white transition-all hover:-translate-y-1">
                <Facebook size={20} />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer" className="p-2.5 bg-gray-50 rounded-full text-brand-black hover:bg-brand-black hover:text-white transition-all hover:-translate-y-1">
                <Youtube size={20} />
            </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;