import { motion } from 'motion/react';
import { Settings, Diamond, Ruler, Quote, MessageSquare, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useConfig } from '../lib/config';
import React, { useState } from 'react';

const fadeIn = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

export default function InteriorDesign() {
  const config = useConfig();
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [msg, setMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    const formData = new FormData(e.currentTarget);
    formData.append('form_type', 'Interior Design Form');

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
          <button className="bg-primary text-white px-6 py-2 text-xs font-bold uppercase tracking-widest shadow-md hover:bg-primary-dark transition-colors">
            Portfolio
          </button>
        </div>
      </div>

      {/* Content Header */}
      <section className="pt-20 pb-12 text-center px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-zinc-900 mb-4">Interior Design Portfolio</h1>
          <p className="text-xl text-zinc-500">Vibrant 3D visualizations of high-end modern Indian living spaces.</p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="pb-20 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            'https://lh3.googleusercontent.com/aida-public/AB6AXuC47_sCk4syIw0BR_9eChcd3XDjCw7MS_MYE7c_UAJ5KB17l_dkaMh3QaRWp51Zv8aW2rtVCS0cy7ggzKdWBQ5CClYgwsp5mE0Q51rNIUizOG3AMIJ9Z8ABPg7806fPTsjJV_9xoiC8cbuegs45CSgEj7WIZHbxVoBfeVFhy5AvCb_d8bpoYxfdVOSx8M0AbCqKs6UhzmPikEJSiqqJYNm7AWtmfvIiNjfsyqVKFK9PiHRAWYnJCntpDrYpPPtQQljyZE_XoIFPsw',
            'https://lh3.googleusercontent.com/aida-public/AB6AXuCopvasX740Nu51m5ilkdjiFPF0dQb8-JnRR6Lp9fCPI1lLG7ioJZZQ_PMKZilWhwlfCGoQAMqulpz2ILBqEPu6OAePYo3r3w2re9mAvvWA6ju-ioDman70oQJReS5QpiyPzfH79X2cm7kqtFY0JyZFwp_TUzPBxQzUQ02DoaQi9GxTXaX5_fAWUj696SxEgPxlHSThKOqoCc6fgFJcacjkMyCv8rGMvgV3AqmaIUvNRzm0kssUZlvFPioNz2mxuzsLOAqzQaDeMA',
            'https://lh3.googleusercontent.com/aida-public/AB6AXuA2WpXH3KuZ6o1-VqinWYLnrbPFTq0MLcmnE1rj1XA0wADlWnJysDNaAhLlkVgQxgB-ylTYqipH4L-ZUQsTf0uybKC0RWqtANQrrKHirYcbgaQLcUopAbRQFfBUDrRSXSEjA1QMZBnFiJnmApRn-2dJeaffUs-6Lfvm6DlYSBn2scb7xtKyAhTBOQZLyLxsSr1pqJYtj0_Zib3zBNYmcpqdjR2zz0-hv7uaqyL9jncCtWKTVT9UGpwhSV9WZrqNYPCNZmPFYRo1SA',
            'https://lh3.googleusercontent.com/aida-public/AB6AXuB9bTkuksnRS5HHbm87D-u6Jv4dWt5THxNRNwJxMUejCThNQM7STPQr0xO8VVyiTC1ozU1QRp5t81rCRvcbhandEy0Zi6Ir7WyDcnFt-zIcYB3ZzDWlRUGVCovlR6qPUZMtfB55vawP2lqk9ColmrMqzbzDi4r5dBTJx4NriWv2Yo8xlLWZVpyiTqOw734-skzJsOs4dETbQKKpOKPdf8-pGtZH4_PlHgNs2QvDccVQa8EC74iMQDJvYCEUPXCodzi0E2CatzxNdQ',
            'https://lh3.googleusercontent.com/aida-public/AB6AXuBW5e8kp9wbb892DebHdvprG7sKMPSje_5dO5xcmdcPMO4OCOIzttzXN3W3x2_czPgiPcZbqHlPPcNusSEv-Q5H15w9Bylr-VNRzyW9TrAC18jXyjc37nx9L0akWYAPYFUGOF4n3iSo2RqYtxyvhK7zK61qst0NEN2xXfHTcocjGuTyhdJ2-T8R7BPJwATldAXg7yLA0Cpk9uusUTtHkzLwjwdKVRZq0rz9YPDu7yJd6QweROD4UOt4AxTjCcatWtENgzBPeAomhA',
            'https://lh3.googleusercontent.com/aida-public/AB6AXuBrgXfkt_-aa1PxHjYtDZoO8zavAshiXl9hEULy3jLJmy5rxG5jZqhWv5jfNc0XYsks2jyI8dHBIHrnBLfNp8zjycDnrSx8-rh7O9U4dhV3ttTM6YJ5x5CiqaUWnWl_AqX5LOSpqSX8OArCfaL85gazQYorJNgbtHsvzBpCQQVc7-92ydqQYPNFlbpr4FshyARvpzIydiBb29mc6pXUpqSeA4_WUnrIakUeywJDRHQtpcHjWq-fS7fc_9iDmGtVhLYaBndOT7lt8A'
          ].map((url, i) => (
            <motion.div key={i} {...fadeIn} transition={{ delay: i * 0.1 }} className="overflow-hidden rounded-xl bg-zinc-100 shadow-sm aspect-[4/5] group cursor-pointer">
              <img alt={`Portfolio ${i}`} loading="lazy" referrerPolicy="no-referrer" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src={url} />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-20 bg-zinc-50 border-y border-zinc-200">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="mb-16">
            <span className="text-primary text-xs font-bold tracking-widest uppercase mb-4 block">The Serenity Method</span>
            <h2 className="text-4xl font-black text-zinc-900 mb-6">Our Design Philosophy</h2>
            <p className="text-lg text-zinc-500 max-w-3xl leading-relaxed">We believe that a well-designed space is the foundation of a well-lived life. Our approach merges architectural rigor with a deep understanding of human movement.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
            {[
              { icon: Settings, title: 'Bespoke Planning', desc: 'Tailoring every square inch to your unique lifestyle and cultural nuances.' },
              { icon: Diamond, title: 'Functional Elegance', desc: 'Where beauty meets utility, creating spaces that work as hard as they inspire.' },
              { icon: Ruler, title: 'Technical Precision', desc: 'Utilizing state-of-the-art 3D visualizations to ensure flawless execution.' }
            ].map((item, i) => (
              <motion.div key={i} {...fadeIn} transition={{ delay: i * 0.1 }} className="space-y-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                  <item.icon size={24} />
                </div>
                <h3 className="text-xl font-bold font-display">{item.title}</h3>
                <p className="text-zinc-500 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>


          <motion.div {...fadeIn} className="relative py-24 px-8 md:px-16 bg-primary rounded-2xl shadow-2xl overflow-hidden">
            <div className="relative z-10 text-center max-w-4xl mx-auto text-white">
              <blockquote className="text-3xl md:text-5xl font-black italic leading-tight">
                "Simplicity is the ultimate sophistication."
              </blockquote>
              <cite className="block mt-8 text-white/70 text-xs font-bold tracking-widest uppercase not-italic">— Leonardo Da Vinci</cite>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-white border-t border-zinc-100" id="get-in-touch">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col items-center text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-zinc-900 mb-6 uppercase tracking-tight">Let's Build Your Legacy</h2>
            <p className="text-lg text-zinc-500 max-w-2xl leading-relaxed">
              Whether you are planning a luxury villa in Bangalore or a sustainable project in Tumkur, our engineering team is ready to assist you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            <div className="space-y-12">
              <div className="space-y-8">
                <div className="flex flex-col space-y-4 pt-4">
                  {config.business.phones.map((p, idx) => (
                    <a key={idx} href={`tel:${p.replace(/\s+/g, '')}`} className="text-2xl font-bold text-primary group underline-offset-4 transition-all">
                      {p}
                    </a>
                  ))}
                  <p className="flex items-start gap-2 text-zinc-500 text-sm whitespace-pre-line">
                    <MapPin size={18} className="text-primary flex-shrink-0 mt-0.5" />
                    {config.business.address}
                  </p>
                </div>
              </div>
              
              <div className="pt-10">
                <button 
                  onClick={() => document.getElementById('callback-form')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-zinc-900 text-white px-10 py-5 font-bold uppercase tracking-widest hover:bg-primary transition-all shadow-xl active:scale-95 transform rounded-sm"
                >
                  Let's Discuss Your Space
                </button>
              </div>
            </div>

            <motion.div id="callback-form" {...fadeIn} className="bg-zinc-50 p-10 shadow-xl border border-zinc-100 rounded-sm">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-zinc-400 mb-2">Full Name</label>
                  <input name="name" required className="w-full bg-white p-4 border border-zinc-200 outline-none focus:ring-1 focus:ring-primary" placeholder="Enter name" />
                </div>
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-zinc-400 mb-2">Phone</label>
                  <input name="phone" required className="w-full bg-white p-4 border border-zinc-200 outline-none focus:ring-1 focus:ring-primary" placeholder="Enter phone" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <select name="location" className="w-full bg-white p-4 border border-zinc-200 outline-none cursor-pointer">
                    <option>Bangalore</option>
                    <option>Mysore</option>
                    <option>Tumkur</option>
                    <option>Others</option>
                  </select>
                  <select name="service" className="w-full bg-white p-4 border border-zinc-200 outline-none">
                    <option>Interiors</option>
                    <option>Residential</option>
                  </select>
                </div>
                <button 
                  disabled={status === 'loading'}
                  className="w-full bg-primary text-white py-5 font-bold uppercase tracking-widest hover:brightness-110 transition-all disabled:opacity-50"
                >
                  {status === 'loading' ? 'Sending...' : 'Request Call Back'}
                </button>
                {status === 'success' && <p className="text-center text-green-600 font-bold text-xs uppercase mt-2">{msg}</p>}
                {status === 'error' && <p className="text-center text-red-600 font-bold text-xs uppercase mt-2">{msg}</p>}
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
