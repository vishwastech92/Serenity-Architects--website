import { motion } from 'motion/react';
import { Thermometer, Droplets, Leaf, Quote, MessageSquare, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useConfig } from '../lib/config';
import React, { useState } from 'react';

const fadeIn = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

export default function GreenHomes() {
  const config = useConfig();
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [msg, setMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    const formData = new FormData(e.currentTarget);
    formData.append('form_type', 'Green Homes Form');

    try {
      const response = await fetch('/send-email.php', { method: 'POST', body: formData });
      const data = await response.json();
      if (data.status === 'success') {
        setStatus('success');
        setMsg(data.message);
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus('error');
        setMsg(data.message);
      }
    } catch (err) {
      setStatus('error');
      setMsg('Failed to send inquiry.');
    }
  };

  return (
    <div className="flex flex-col w-full bg-white">
      {/* Mini Nav */}
      <div className="sticky top-20 z-40 bg-white/95 backdrop-blur-md border-b border-zinc-100 py-4 px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link to="/" className="text-xs font-bold uppercase tracking-widest text-zinc-600 hover:text-primary transition-colors">
            Back to Home
          </Link>
          <button 
            onClick={() => document.getElementById('callback-form')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-primary text-white px-6 py-2 text-xs font-bold uppercase tracking-widest shadow-md hover:bg-primary-dark transition-colors"
          >
            Request a Green Audit
          </button>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden bg-zinc-900 border-b-8 border-primary">
        <div className="absolute inset-0 z-0 opacity-50">
          <img 
            alt="Sustainable Modern Home" 
            className="w-full h-full object-cover" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDEpXksGaX-gQ7m_9cRskR5NqN77PhwgDJvzCz--Kzx_23EOS_gd6QJQS6ppHrFu9iu7VXvSia8VudEJU497GpVqa5SVZnCb6rnw_jXO-rcjtNDA121vUT9088AY5_7KRmzhnCeR2_FPM47V-p-ux4w2FwHzaYExhQlFtWgstCxY8mSE3asC6sAbNq-xEKtrVuxeLEbpzayIS326DVfaT1T6P7i3dYplbmgCbZULttBox5wIwd95RVuB-3vwPQY1Ko5dJsmA_bQSg" 
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/40 to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white">
          <motion.div {...fadeIn}>
            <span className="text-primary text-xs font-bold tracking-[0.4em] uppercase mb-8 block">Sustainable Architecture</span>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-black mb-8 leading-tight">
              Eco-Friendly Architects in Bangalore
            </h1>
            <p className="text-lg md:text-xl text-zinc-300 max-w-3xl mx-auto mb-10 leading-relaxed font-sans">
              Building carbon-neutral, climate-responsive homes using traditional wisdom and modern engineering. Our "Green Homes" initiative focus on thermal comfort and resource efficiency.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Visual Gallery */}
      <section className="pb-20 px-6 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div {...fadeIn} className="group overflow-hidden shadow-xl aspect-[4/3] bg-zinc-200">
            <img 
              alt="Mud block house" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB8jJInQtvBz8GqQjoaIInU7TEDPNnXDOkbn2Fzzvgrtc7Aq4Ya9r0FgRJyMInRI1efaBWKJy6trCnk9kEViDXrjxZoHbhI2NJKz2MaVYwmyIY1XdGdDwE0xXY9zbP8H9jRPJdXthFTbI49VhmrqCTWRdMbjKgTy_eZB-9EY-jICkH3oJ8rVj1jKaBHAjC2jpOFXuatFva7wVPGTKYFXZICnOuzJ_jJg97PcVsvOsgdQFjmrpWyQEkC1NYChiadWm8wLfibg99xJA" 
              loading="lazy"
              referrerPolicy="no-referrer"
            />
          </motion.div>
          <motion.div {...fadeIn} transition={{ delay: 0.2 }} className="group overflow-hidden shadow-xl aspect-[4/3] bg-zinc-200">
            <img 
              alt="Contemporary eco home" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDEpXksGaX-gQ7m_9cRskR5NqN77PhwgDJvzCz--Kzx_23EOS_gd6QJQS6ppHrFu9iu7VXvSia8VudEJU497GpVqa5SVZnCb6rnw_jXO-rcjtNDA121vUT9088AY5_7KRmzhnCeR2_FPM47V-p-ux4w2FwHzaYExhQlFtWgstCxY8mSE3asC6sAbNq-xEKtrVuxeLEbpzayIS326DVfaT1T6P7i3dYplbmgCbZULttBox5wIwd95RVuB-3vwPQY1Ko5dJsmA_bQSg" 
              loading="lazy"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>
      </section>

      {/* Serenity Method */}
      <section className="py-20 bg-zinc-50 border-y border-zinc-200">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <span className="text-primary text-xs font-bold tracking-widest uppercase mb-4 block">The Serenity Method</span>
            <h2 className="text-4xl font-black text-zinc-900">Sustainable Engineering</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: Thermometer, title: 'Thermal Comfort', desc: 'Utilizing high-thermal-mass materials like mud blocks to keep interiors naturally cool.' },
              { icon: Droplets, title: 'Resource Efficiency', desc: 'Integrated rainwater harvesting and greywater recycling systems designed by engineers.' },
              { icon: Leaf, title: 'Low Carbon Footprint', desc: 'Prioritizing locally sourced, non-toxic materials to reduce environmental impact.' }
            ].map((item, i) => (
              <motion.div key={i} {...fadeIn} className="flex flex-col items-center text-center p-8 bg-white border border-zinc-100 hover:border-primary/20 transition-all">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-8 text-primary">
                  <item.icon size={36} />
                </div>
                <h4 className="text-xl font-bold text-zinc-900 mb-4">{item.title}</h4>
                <p className="text-sm text-zinc-500 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-32 bg-zinc-900 text-center px-6 overflow-hidden relative">
        <motion.div {...fadeIn}>
          <Quote className="text-primary text-6xl opacity-20 mx-auto mb-8" size={64} />
          <blockquote className="text-3xl md:text-5xl font-bold text-white max-w-4xl mx-auto italic mb-8">
            "Simplicity is the ultimate sophistication."
          </blockquote>
          <cite className="text-primary text-xs font-bold uppercase tracking-widest not-italic leading-none">
            — Leonardo da Vinci
          </cite>
          <div className="mt-16">
            <button 
              onClick={() => document.getElementById('callback-form')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-primary text-white px-12 py-5 font-bold uppercase tracking-widest hover:bg-primary-dark transition-all shadow-2xl active:scale-95 transform"
            >
              Discuss Your Sustainable Project
            </button>
          </div>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-zinc-50 px-6 border-t border-zinc-200">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-zinc-900 mb-6 uppercase tracking-tight">Let's Build Your Legacy</h2>
          <p className="text-lg text-zinc-500 max-w-2xl leading-relaxed">
            Whether you are planning a luxury villa in Bangalore or a sustainable project in Tumkur, our team is ready to assist you.
          </p>
        </div>
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="flex flex-col justify-center">
            <div className="space-y-10">
              <div className="flex flex-col space-y-4 pt-4">
                {config.business.phones.map((p, idx) => (
                  <div key={idx} className="flex items-center text-zinc-900 font-bold hover:text-primary transition-colors text-lg group">
                    <Phone size={20} className="mr-3 text-primary group-hover:scale-110 transition-transform" />
                    <a href={`tel:${p.replace(/\s+/g, '')}`}>{p}</a>
                  </div>
                ))}
                <p className="flex items-start text-zinc-500 text-sm whitespace-pre-line">
                  <MapPin size={20} className="mr-3 text-primary flex-shrink-0" />
                  {config.business.address}
                </p>
              </div>
            </div>
          </div>

          <motion.div id="callback-form" {...fadeIn} className="bg-white p-8 md:p-12 shadow-2xl border border-zinc-100">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="block text-[10px] font-bold uppercase tracking-widest text-zinc-400">Full Name</label>
                <input name="name" required className="w-full bg-zinc-50 p-4 border border-zinc-100 outline-none focus:ring-1 focus:ring-primary" placeholder="Enter name" />
              </div>
              <div className="space-y-2">
                <label className="block text-[10px] font-bold uppercase tracking-widest text-zinc-400">Phone Number</label>
                <input name="phone" required className="w-full bg-zinc-50 p-4 border border-zinc-100 outline-none focus:ring-1 focus:ring-primary" placeholder="Enter phone" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-zinc-400">Location</label>
                  <select name="location" className="w-full bg-zinc-50 p-4 border border-zinc-100 outline-none cursor-pointer">
                    <option>Bangalore</option>
                    <option>Mysore</option>
                    <option>Tumkur</option>
                    <option>Others</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-zinc-400">Type</label>
                  <select name="service" className="w-full bg-zinc-50 p-4 border border-zinc-100 outline-none">
                    <option>Green Homes</option>
                    <option>Residential</option>
                  </select>
                </div>
              </div>
              <button 
                disabled={status === 'loading'}
                className="w-full bg-primary text-white py-5 font-bold uppercase tracking-widest shadow-xl hover:brightness-110 transition-all disabled:opacity-50"
              >
                {status === 'loading' ? 'Sending...' : 'Request Call Back'}
              </button>
              {status === 'success' && <p className="text-center text-green-600 font-bold text-xs uppercase mt-2">{msg}</p>}
              {status === 'error' && <p className="text-center text-red-600 font-bold text-xs uppercase mt-2">{msg}</p>}
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
