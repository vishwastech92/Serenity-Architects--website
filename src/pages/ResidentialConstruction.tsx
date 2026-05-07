import { motion } from 'motion/react';
import { ArrowLeft, Home, CheckSquare, Clock, Phone, MapPin, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useConfig } from '../lib/config';
import React, { useState } from 'react';

const fadeIn = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

export default function ResidentialConstruction() {
  const config = useConfig();
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [msg, setMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    const formData = new FormData(e.currentTarget);
    formData.append('form_type', 'Residential Page Form');

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
      {/* Mini Nav / Header */}
      <div className="sticky top-20 z-40 bg-zinc-50 border-b border-zinc-200 py-4 px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2 text-zinc-900 group">
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            <span className="text-xs font-bold uppercase tracking-widest">Back to Home</span>
          </Link>
          <div className="hidden lg:block text-xs font-bold uppercase tracking-widest text-zinc-400">
            Independent House Construction & Luxury Villa Builders In Bangalore
          </div>
          <button 
            onClick={() => document.getElementById('callback-form')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-primary text-white px-6 py-2 text-xs font-bold uppercase tracking-widest shadow-md hover:bg-primary-dark transition-colors"
          >
            Get Estimate
          </button>
        </div>
      </div>

      {/* SEO Hero Section */}
      <section className="py-20 px-6 md:px-12 text-center max-w-7xl mx-auto">
        <motion.div {...fadeIn}>
          <span className="text-primary text-xs font-bold tracking-[0.3em] uppercase mb-6 block">Premium Residential Construction</span>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-zinc-900 mb-8 leading-tight">
            Independent House Construction & Luxury Villa Builders in Bangalore
          </h1>
          <p className="text-lg md:text-xl text-zinc-500 max-w-3xl mx-auto mb-12 leading-relaxed">
            Engineering-led residential solutions from foundation to finish by Serenity Architects. We combine technical precision with aesthetic vision.
          </p>
          <button 
            onClick={() => document.getElementById('callback-form')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-zinc-900 text-white px-10 py-5 font-bold uppercase tracking-widest hover:bg-primary transition-all shadow-xl"
          >
            Schedule a Site Consultation
          </button>
        </motion.div>
      </section>

      {/* Specialised Gallery */}
      <section className="pb-20 px-6 md:px-12 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { tag: 'G+2 Villa: Exposed Brickwork', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB67R78WBlkJSgiJSpmetJlmqwakrFGjZcjY5kLFr6xFQXXL8M2DhOf-y-f2VHl1wRKr9fyTdNw0FgenrLcbBN2wDzdbhjGaK14HjXVgj6j5ytGLSzUyAcsXHVa-vhrDOJ7IpLfTwECq2wzrjM1k3gqGef5Uh-WR9XAK9Fv534vxqTXmCs-h97qrMv33aIJNMfFfEdmOvE5MIQcg93eZMMDLU6qeJ-ZnXq_Mzw162g8PIh0apcixsdDntOQn6dt5TVjjA3MvRVcqg' },
            { tag: 'Contemporary: Cantilevered Concrete', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDnvvLYcUz4CVfg8poat1OhkJhwPE2BL7UkW_4CA9npoG416r7hehta7B_g6Qinr7fz-5fak3jn3VJ7AqEscLAPwtPeztqzijr1XaZOWc6yQSVSCyPWQ9DYTfd7xEH5FOdbLhux_xfpKGQ9OYJfzmEBbmYTH39fJSmUMk1txGAD4-0NQPdQwpRzG0mY6HI-SZYPIfSgFsR71-SvV5nnrFSxVYh_iV6wqdtoDr0DQc-QHCdVOka28Gyx-FmBvkNPAc1j_lP4qSpBBw' },
            { tag: 'Minimalist: White & Green', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDmA034p7B5Y2jizXpnCfLaCvgIELDHk_zouad2Feb4zUEP6avc_-glhz_R2RLWsXtCfCfy9aY4R5E_pzdK8RtFdfB8o1e_xOkpjCUz72OTC--XrdRKK-6Si02P5zLHbpbp06N8VUwSCb7P5PTdPDj7y3dWZtZctZqtS3qTOJtb8bmezpVG4SD2juvDYSWltkhp4MnaXmOrNKy4iPEwHYi-I-eWEFc3IYEPieCmlGclZ6af3SiIi8-DtdN-p4w6HvgUu516lZxoTg' }
          ].map((item, i) => (
            <motion.div 
              key={i} 
              {...fadeIn} 
              transition={{ delay: i * 0.2 }}
              className="group relative aspect-[4/5] overflow-hidden bg-zinc-100 shadow-xl"
            >
              <img src={item.img} alt={item.tag} loading="lazy" referrerPolicy="no-referrer" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-white text-[10px] font-bold uppercase tracking-widest">{item.tag}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Philosophy / Method */}
      <section className="py-20 bg-zinc-50 px-6 md:px-12">
        <div className="max-w-7xl mx-auto text-center">
          <span className="text-primary text-xs font-bold tracking-widest uppercase mb-4 block">Our Philosophy</span>
          <h2 className="text-4xl font-black text-zinc-900 mb-16">The Serenity Method</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: Home, title: 'Structural Integrity', desc: 'Engineering-first approach with rigorous quality checks at every level for uncompromising durability.' },
              { icon: CheckSquare, title: 'Transparent Management', desc: 'Real-time budget tracking and material logs accessible to homeowners for total peace of mind.' },
              { icon: Clock, title: 'Timely Delivery', desc: 'Strict milestone-based timelines and professional management ensuring handover exactly as promised.' }
            ].map((item, i) => (
              <motion.div key={i} {...fadeIn} transition={{ delay: i * 0.1 }}>
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-6 text-primary">
                  <item.icon size={32} />
                </div>
                <h3 className="text-xl font-bold text-zinc-900 mb-4">{item.title}</h3>
                <p className="text-sm text-zinc-500 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom Contact Section */}
      <section className="py-24 px-6 md:px-12 bg-white border-t border-zinc-100">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-zinc-900 mb-6 uppercase tracking-tight">Let's Build Your Legacy</h2>
          <p className="text-lg text-zinc-500 max-w-2xl leading-relaxed">
            Whether you are planning a luxury villa in Bangalore or a sustainable project in Tumkur, our engineering team is ready to assist you.
          </p>
        </div>
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-10">
            <div className="space-y-8">
              <div className="flex flex-col space-y-4">
                {config.business.phones.map((p, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-zinc-900 hover:text-primary transition-colors text-lg font-bold group">
                    <Phone size={20} className="text-primary group-hover:scale-110 transition-transform" />
                    <a href={`tel:${p.replace(/\s+/g, '')}`}>{p}</a>
                  </div>
                ))}
                <div className="flex items-start gap-3 text-zinc-500 text-sm">
                  <MapPin size={20} className="text-primary flex-shrink-0" />
                  <p className="whitespace-pre-line">
                    {config.business.address}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <motion.div id="callback-form" {...fadeIn} className="bg-white p-10 shadow-2xl border border-zinc-100">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-widest text-zinc-400 mb-2">Full Name</label>
                <input name="name" required className="w-full bg-zinc-50 p-4 border border-zinc-100 outline-none focus:ring-1 focus:ring-primary" placeholder="Enter name" />
              </div>
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-widest text-zinc-400 mb-2">Phone Number</label>
                <input name="phone" required className="w-full bg-zinc-50 p-4 border border-zinc-100 outline-none focus:ring-1 focus:ring-primary" placeholder="Enter phone" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-zinc-400 mb-2">Location</label>
                  <select name="location" className="w-full bg-zinc-50 p-4 border border-zinc-100 outline-none cursor-pointer">
                    <option>Bangalore</option>
                    <option>Mysore</option>
                    <option>Tumkur</option>
                    <option>Others</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-zinc-400 mb-2">Type</label>
                  <select name="service" className="w-full bg-zinc-50 p-4 border border-zinc-100 outline-none">
                    <option>Residential</option>
                    <option>Interiors</option>
                  </select>
                </div>
              </div>
              <button 
                disabled={status === 'loading'}
                className="w-full bg-primary text-white py-5 font-bold uppercase tracking-widest hover:brightness-110 transition-all shadow-xl disabled:opacity-50"
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
