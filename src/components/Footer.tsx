import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Twitter, Send, Youtube } from 'lucide-react';
import { useConfig } from '../lib/config';

export default function Footer() {
  const config = useConfig();
  
  return (
    <footer className="bg-zinc-50 border-t border-zinc-200">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 py-16 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="space-y-6">
          <div className="text-xl font-bold text-zinc-900 uppercase">{config.business.name}</div>
          <p className="font-sans text-sm leading-relaxed text-zinc-500">
            Redefining urban living through high-performance construction and visionary interior design.
          </p>
          <div className="flex space-x-4">
            <Facebook className="text-zinc-400 hover:text-primary cursor-pointer transition-colors" size={20} />
            <Twitter className="text-zinc-400 hover:text-primary cursor-pointer transition-colors" size={20} />
            <Linkedin className="text-zinc-400 hover:text-primary cursor-pointer transition-colors" size={20} />
            <Instagram className="text-zinc-400 hover:text-primary cursor-pointer transition-colors" size={20} />
            <a href={config.business.youtube} target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-primary transition-colors">
              <Youtube size={20} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-display font-bold text-sm text-zinc-900 mb-6 uppercase tracking-widest">Service Hubs</h4>
          <ul className="space-y-4">
            <li><Link to="/residential-construction" className="text-sm text-zinc-500 hover:text-primary transition-colors">Residential Construction</Link></li>
            <li><Link to="/green-homes" className="text-sm text-zinc-500 hover:text-primary transition-colors">Green Homes</Link></li>
            <li><Link to="/interior-design" className="text-sm text-zinc-500 hover:text-primary transition-colors">Interior Design</Link></li>
            <li><Link to="#" className="text-sm text-zinc-500 hover:text-primary transition-colors">Commercial Projects</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display font-bold text-sm text-zinc-900 mb-6 uppercase tracking-widest">Quick Links</h4>
          <ul className="space-y-4">
            <li><Link to="#" className="text-sm text-zinc-500 hover:text-primary transition-colors">Privacy Policy</Link></li>
            <li><Link to="#" className="text-sm text-zinc-500 hover:text-primary transition-colors">Terms of Service</Link></li>
            <li><Link to="/#faq" className="text-sm text-zinc-500 hover:text-primary transition-colors">FAQ</Link></li>
            <li><Link to="/#contact" className="text-sm text-zinc-500 hover:text-primary transition-colors">Contact Details</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display font-bold text-sm text-zinc-900 mb-6 uppercase tracking-widest">Newsletter</h4>
          <p className="text-xs text-zinc-500 mb-4">Subscribe for design trends and home building tips.</p>
          <div className="flex">
            <input 
              className="w-full bg-white border border-zinc-200 p-3 text-sm focus:ring-1 focus:ring-primary outline-none" 
              placeholder="Email Address" 
              type="email" 
            />
            <button className="bg-primary text-white p-3 hover:bg-primary-dark transition-colors">
              <Send size={18} />
            </button>
          </div>
        </div>
      </div>
      <div className="border-t border-zinc-200 py-8 text-center px-6">
        <p className="font-display text-xs text-zinc-500 uppercase tracking-widest">
          © 2026 Serenity Architects. Excellence in Construction & Interior Design.
        </p>
      </div>
    </footer>
  );
}
