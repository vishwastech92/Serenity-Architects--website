import { motion } from 'motion/react';
import { 
  Construction, 
  Eye, 
  BarChart, 
  MapPin, 
  Palette, 
  Clock, 
  CheckSquare, 
  CheckCircle,
  Armchair,
  Leaf,
  MessageSquare,
  PenTool,
  UserCheck,
  Home as HomeIcon,
  PaintBucket,
  Key,
  Plus,
  Mail,
  Phone
} from 'lucide-react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useConfig } from '../lib/config';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

export default function Home() {
  const config = useConfig();
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [msg, setMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>, formType: string) => {
    e.preventDefault();
    setStatus('loading');
    
    const formData = new FormData(e.currentTarget);
    formData.append('form_type', formType);

    try {
      const response = await fetch('/send-email.php', {
        method: 'POST',
        body: formData,
      });
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
      setMsg('Something went wrong. Please try calling us.');
    } finally {
      setTimeout(() => {
        if (status === 'success') setStatus('idle');
      }, 5000);
    }
  };

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden" id="home">
        <div className="absolute inset-0 z-0">
          <img 
            alt="Luxury Modern Villa" 
            className="w-full h-full object-cover" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDEpXksGaX-gQ7m_9cRskR5NqN77PhwgDJvzCz--Kzx_23EOS_gd6QJQS6ppHrFu9iu7VXvSia8VudEJU497GpVqa5SVZnCb6rnw_jXO-rcjtNDA121vUT9088AY5_7KRmzhnCeR2_FPM47V-p-ux4w2FwHzaYExhQlFtWgstCxY8mSE3asC6sAbNq-xEKtrVuxeLEbpzayIS326DVfaT1T6P7i3dYplbmgCbZULttBox5wIwd95RVuB-3vwPQY1Ko5dJsmA_bQSg" 
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 hero-gradient"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white space-y-6"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-[1.1] tracking-tight">
              Turn Your Vision into a Beautiful Reality
            </h1>
            <p className="text-lg md:text-xl text-zinc-200 max-w-2xl font-normal leading-relaxed opacity-90">
              From Plan Sanctions to Final Handover—Experience stress-free turnkey solutions for your dream home.
            </p>
            <div className="flex items-center pt-4">
              <p className="text-sm md:text-base font-medium">
                <span className="text-primary font-black text-xl">150+</span> Happy <span className="text-zinc-400 underline decoration-primary underline-offset-4 decoration-2">Homeowners</span>
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white p-8 md:p-10 shadow-2xl rounded-sm border-t-4 border-primary"
          >
            <h3 className="text-2xl font-bold text-zinc-900 mb-6">Request Your Free Estimate</h3>
            <form onSubmit={(e) => handleSubmit(e, 'Free Estimate Form')} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-zinc-700 mb-2 uppercase tracking-widest">NAME</label>
                <input name="name" required className="w-full p-4 border border-zinc-200 rounded-sm bg-zinc-50 focus:ring-1 focus:ring-primary outline-none transition-all" placeholder="Your Name" type="text" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-zinc-700 mb-2 uppercase tracking-widest">PHONE</label>
                  <input name="phone" required className="w-full p-4 border border-zinc-200 rounded-sm bg-zinc-50 focus:ring-1 focus:ring-primary outline-none transition-all" placeholder="Phone Number" type="text" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-zinc-700 mb-2 uppercase tracking-widest">EMAIL</label>
                  <input name="email" className="w-full p-4 border border-zinc-200 rounded-sm bg-zinc-50 focus:ring-1 focus:ring-primary outline-none transition-all" placeholder="Email Address" type="email" />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-zinc-700 mb-2 uppercase tracking-widest">CITY</label>
                  <select name="location" className="w-full p-4 border border-zinc-200 rounded-sm bg-zinc-50 focus:ring-1 focus:ring-primary outline-none transition-all appearance-none cursor-pointer">
                    <option>Select City</option>
                    <option>Bangalore</option>
                    <option>Mysore</option>
                    <option>Tumkur</option>
                    <option>Others</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-zinc-700 mb-2 uppercase tracking-widest">REQUIREMENTS</label>
                  <select name="service" className="w-full p-4 border border-zinc-200 rounded-sm bg-zinc-50 focus:ring-1 focus:ring-primary outline-none transition-all appearance-none cursor-pointer">
                    <option>Construction</option>
                    <option>Interiors</option>
                    <option>Green Homes</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-zinc-700 mb-2 uppercase tracking-widest">PROJECT DETAILS / VISION</label>
                <textarea name="details" className="w-full p-4 border border-zinc-200 rounded-sm bg-zinc-50 focus:ring-1 focus:ring-primary outline-none transition-all" placeholder="Tell us about your dream project..." rows={3}></textarea>
              </div>
              <button 
                disabled={status === 'loading'}
                className="w-full bg-primary text-white py-5 font-bold uppercase tracking-widest hover:bg-primary-dark transition-colors shadow-lg active:scale-[0.98] transform mt-2 disabled:opacity-50"
              >
                {status === 'loading' ? 'Sending...' : 'Get Free Quote'}
              </button>
              {status === 'success' && <p className="text-center text-green-600 font-bold text-xs uppercase mt-2">{msg}</p>}
              {status === 'error' && <p className="text-center text-red-600 font-bold text-xs uppercase mt-2">{msg}</p>}
              <p className="text-center text-[10px] text-zinc-500 uppercase tracking-widest mt-4">Secure & Confidential Consultation</p>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Trust Stats */}
      <section className="bg-zinc-900 py-12">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 divide-y md:divide-y-0 md:divide-x divide-zinc-700">
            <div className="text-center py-4 md:py-0 md:px-8">
              <div className="text-primary text-5xl md:text-6xl font-black tracking-tighter">10+</div>
              <div className="text-zinc-400 text-[10px] font-bold uppercase tracking-[0.3em] mt-2">Years Experience</div>
            </div>
            <div className="text-center py-4 md:py-0 md:px-8">
              <div className="text-primary text-5xl md:text-6xl font-black tracking-tighter">150+</div>
              <div className="text-zinc-400 text-[10px] font-bold uppercase tracking-[0.3em] mt-2">Projects Completed</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="py-20 bg-zinc-50" id="why-us">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-zinc-900 mb-6">Why Choose Serenity Architects?</h2>
            <p className="text-lg text-zinc-500 font-sans leading-relaxed">
              We bridge the gap between visionary design and structural reality. By integrating architectural creativity with a deep foundation in civil engineering, we ensure that your space is not only visually stunning but also built to last a lifetime.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Precision Engineering Meets Design', desc: 'Our background in civil engineering allows us to anticipate structural challenges before they happen.', icon: Construction },
              { title: 'End-to-End Transparency', desc: "From the first 3D render to the final site visit, we maintain a 'no-surprises' policy throughout.", icon: Eye },
              { title: 'Data-Driven Management', desc: 'We leverage modern project management and digital tools to streamline construction flow.', icon: BarChart },
              { title: 'Localized Expertise', desc: 'We understand the unique landscape, climate, and building norms of the Bangalore region.', icon: MapPin },
              { title: 'Lifestyle-Centric Solutions', desc: 'Every design is tailored to the specific psychological and functional needs of the inhabitants.', icon: Palette },
            ].map((item, i) => (
              <motion.div 
                key={i}
                {...fadeIn}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-10 border-l-4 border-primary shadow-sm hover:shadow-md transition-all duration-300 group"
              >
                <item.icon className="text-primary mb-6 group-hover:scale-110 transition-transform" size={40} />
                <h4 className="text-xl font-bold text-zinc-900 mb-4">{item.title}</h4>
                <p className="text-sm text-zinc-500 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-zinc-900 mb-6">Timely Delivery, Guaranteed Quality</h2>
            <p className="text-lg text-zinc-500">
              We combine rigorous engineering standards with disciplined project management to ensure your home is delivered on time, without compromising on structural integrity.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { title: 'Timely Delivery Assurance', desc: 'Precise scheduling ensures your project reaches every milestone exactly when promised.', icon: Clock },
              { title: 'Multi-Stage Quality Audits', desc: 'Every phase of construction undergoes 400+ quality checks by our in-house civil engineers.', icon: CheckSquare },
              { title: '10-Year Structural Warranty', desc: 'Our commitment to quality lasts long after handover, backed by a decade of structural protection.', icon: CheckCircle },
            ].map((item, i) => (
              <motion.div 
                key={i}
                {...fadeIn}
                className="flex flex-col items-center text-center p-6"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <item.icon className="text-primary" size={32} />
                </div>
                <h4 className="text-xl font-bold text-zinc-900 mb-4">{item.title}</h4>
                <p className="text-sm text-zinc-500 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Expertise Section */}
      <section className="py-20 bg-zinc-50" id="projects">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="max-w-2xl mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-zinc-900 mb-4">Core Expertise</h2>
            <p className="text-lg text-zinc-500">Specialized services tailored to bring structural integrity and aesthetic perfection to every square foot.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { 
                title: 'Residential Construction', 
                desc: 'End-to-end building solutions from foundation to finish.', 
                img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB67R78WBlkJSgiJSpmetJlmqwakrFGjZcjY5kLFr6xFQXXL8M2DhOf-y-f2VHl1wRKr9fyTdNw0FgenrLcbBN2wDzdbhjGaK14HjXVgj6j5ytGLSzUyAcsXHVa-vhrDOJ7IpLfTwECq2wzrjM1k3gqGef5Uh-WR9XAK9Fv534vxqTXmCs-h97qrMv33aIJNMfFfEdmOvE5MIQcg93eZMMDLU6qeJ-ZnXq_Mzw162g8PIh0apcixsdDntOQn6dt5TVjjA3MvRVcqg',
                link: '/residential-construction',
                icon: Construction
              },
              { 
                title: 'Interior Design', 
                desc: 'Bespoke interior planning that balances efficiency with luxury.', 
                img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC47_sCk4syIw0BR_9eChcd3XDjCw7MS_MYE7c_UAJ5KB17l_dkaMh3QaRWp51Zv8aW2rtVCS0cy7ggzKdWBQ5CClYgwsp5mE0Q51rNIUizOG3AMIJ9Z8ABPg7806fPTsjJV_9xoiC8cbuegs45CSgEj7WIZHbxVoBfeVFhy5AvCb_d8bpoYxfdVOSx8M0AbCqKs6UhzmPikEJSiqqJYNm7AWtmfvIiNjfsyqVKFK9PiHRAWYnJCntpDrYpPPtQQljyZE_XoIFPsw',
                link: '/interior-design',
                icon: Armchair
              },
              { 
                title: 'Green Homes', desc: 'Sustainable architecture focused on energy efficiency and solar integration.', 
                img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB8jJInQtvBz8GqQjoaIInU7TEDPNnXDOkbn2Fzzvgrtc7Aq4Ya9r0FgRJyMInRI1efaBWKJy6trCnk9kEViDXrjxZoHbhI2NJKz2MaVYwmyIY1XdGdDwE0xXY9zbP8H9jRPJdXthFTbI49VhmrqCTWRdMbjKgTy_eZB-9EY-jICkH3oJ8rVj1jKaBHAjC2jpOFXuatFva7wVPGTKYFXZICnOuzJ_jJg97PcVsvOsgdQFjmrpWyQEkC1NYChiadWm8wLfibg99xJA',
                link: '/green-homes',
                icon: Leaf
              },
            ].map((item, i) => (
              <Link
                key={i}
                to={item.link}
                className="group relative overflow-hidden aspect-[4/5] bg-zinc-100 shadow-lg cursor-pointer transform transition-all duration-300 hover:-translate-y-2"
              >
                <img src={item.img} alt={item.title} loading="lazy" referrerPolicy="no-referrer" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/90 via-zinc-900/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-8 w-full">
                  <item.icon className="text-primary mb-4" size={32} />
                  <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-zinc-300 text-sm line-clamp-2">{item.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <div className="mb-16">
            <span className="text-primary text-xs font-bold tracking-widest uppercase mb-4 block">Our Methodology</span>
            <h2 className="text-4xl md:text-5xl font-black text-zinc-900">Your Journey to Home</h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-6 gap-8 relative">
            <div className="hidden lg:block absolute top-12 left-0 w-full h-0.5 bg-zinc-100 z-0"></div>
            {[
              { name: 'Consultation', sub: 'Briefing', icon: MessageSquare },
              { name: 'Design & Plan', sub: '3D Models', icon: PenTool },
              { name: 'Sanctions', sub: 'Legal', icon: UserCheck },
              { name: 'Construction', sub: 'Execution', icon: HomeIcon },
              { name: 'Interiors', sub: 'Finishing', icon: PaintBucket },
              { name: 'Handover', sub: 'Final Keys', icon: Key },
            ].map((step, i) => (
              <div key={i} className="relative z-10 flex flex-col items-center group">
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-white border-4 border-zinc-50 shadow-md flex items-center justify-center mb-4 group-hover:border-primary transition-all duration-300">
                  <step.icon className="text-primary" size={32} />
                </div>
                <h4 className="text-sm font-bold uppercase text-zinc-900 mb-1">{step.name}</h4>
                <p className="text-[10px] text-zinc-400 uppercase tracking-widest">{step.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bespoke Construction Solutions Section */}
      <section className="py-24 bg-zinc-50 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-zinc-900 mb-6 uppercase tracking-tight">Bespoke Construction Solutions</h2>
            <p className="text-lg text-zinc-500 max-w-2xl mx-auto">We don't believe in "one-size-fits-all" packages. Every home we build is a unique collaboration, custom-tailored to your lifestyle, preferred materials, and budget requirements.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="bg-white p-8 border-l-4 border-primary shadow-sm">
                <h3 className="text-xl font-black text-zinc-900 mb-4 uppercase">Individualized Planning</h3>
                <p className="text-sm text-zinc-500 leading-relaxed font-sans">
                  Your requirements are the blueprint. Our team of architects and engineers works with you to select every single specification—from the grade of steel to the texture of your cabinetry—ensuring the final quote reflects exactly what you need.
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { title: 'Requirement Analysis', desc: 'Detailed discovery sessions to understand your vision.' },
                  { title: 'Material Selection', desc: 'Choose from a vast library of verified quality brands.' },
                  { title: 'Stage-wise Payments', desc: 'Payments linked strictly to project milestones and verified construction progress.' },
                  { title: 'Engineered Precision', desc: 'Structural planning optimized for your specific site.' }
                ].map((item, i) => (
                  <div key={i} className="space-y-2">
                    <CheckCircle className="text-primary" size={20} />
                    <h4 className="font-bold text-zinc-900 text-sm uppercase">{item.title}</h4>
                    <p className="text-xs text-zinc-500 leading-snug">{item.desc}</p>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <button 
                  onClick={() => document.getElementById('callback-form')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-zinc-900 text-white px-10 py-5 font-black uppercase tracking-widest text-xs hover:bg-primary transition-all shadow-xl"
                >
                  Start Your Custom Consultation
                </button>
              </div>
            </div>

            <div className="relative aspect-video md:aspect-square bg-zinc-200 rounded-sm overflow-hidden group">
              <img 
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1024" 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" 
                alt="Luxury Custom Architecture"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-primary/10 mix-blend-multiply"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Continuous Project Transparency Section */}
      <section className="py-24 bg-white px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <span className="text-primary text-[10px] font-black uppercase tracking-[0.4em]">Full Visibility</span>
            <h2 className="text-4xl md:text-6xl font-black text-zinc-900 leading-none tracking-tighter">Continuous Project<br />Transparency</h2>
            <p className="text-lg text-zinc-500 leading-relaxed font-sans">
              Stay connected to your dream home as it takes shape. We provide regular, high-resolution photo and video updates directly to your preferred communication channel, ensuring you’re always informed about progress and quality.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {[
                { title: 'Regular Progress Shares', desc: 'Frequent updates featuring site photos and detailed stage descriptions.' },
                { title: 'Quality Maintenance', desc: 'Continuous verification and adherence to defined structural standards.' },
                { title: 'Material Documentation', desc: 'Complete transparency on the brands and materials used as per agreement.' },
                { title: 'Timeline Guard', desc: 'Commitment to delivery provided on the mutually agreed timelines.' }
              ].map((benefit, i) => (
                <div key={i} className="space-y-2">
                  <div className="w-8 h-1 bg-primary mb-3"></div>
                  <h4 className="font-black text-zinc-900 uppercase text-xs tracking-widest">{benefit.title}</h4>
                  <p className="text-sm text-zinc-500 leading-snug">{benefit.desc}</p>
                </div>
              ))}
            </div>
            <button 
              onClick={() => document.getElementById('callback-form')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center gap-2 font-black text-primary uppercase text-sm tracking-widest group"
            >
              Learn More About Our Reporting <span className="group-hover:translate-x-2 transition-transform">→</span>
            </button>
          </motion.div>

          <div className="relative">
             <div className="absolute -inset-10 bg-primary/5 rounded-full blur-3xl scale-125"></div>
             <div className="relative z-10 border-[1px] border-zinc-200 rounded-lg shadow-2xl overflow-hidden bg-white">
                {/* Header of the Report Mockup */}
                <div className="bg-zinc-900 text-white p-6 flex justify-between items-center">
                  <div>
                    <div className="text-[10px] font-bold text-primary uppercase tracking-[0.2em] mb-1">Project Command Center</div>
                    <div className="text-xl font-black uppercase tracking-tight">Villa Royal 47B</div>
                  </div>
                  <div className="flex gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">Project Active</span>
                  </div>
                </div>

                <div className="p-8 space-y-8">
                  {/* Photo Gallery Mockup */}
                  <div className="aspect-video bg-zinc-100 rounded-sm overflow-hidden grayscale hover:grayscale-0 transition-all duration-500 cursor-crosshair shadow-inner border border-zinc-100">
                    <img 
                      src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=800" 
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000" 
                      alt="Latest Project Update" 
                      loading="lazy"
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  {/* Log Entries */}
                  <div className="space-y-4">
                    <div className="flex gap-4 items-start pb-4 border-b border-zinc-100">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                        <CheckCircle size={16} />
                      </div>
                      <div>
                        <div className="text-xs font-black text-zinc-900 uppercase mb-1">Quality Audit Passed</div>
                        <p className="text-[11px] text-zinc-500 leading-tight">Structural integrity check for slab casting verified by Chief Engineer.</p>
                      </div>
                    </div>
                    <div className="flex gap-4 items-start">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                        <Clock size={16} />
                      </div>
                      <div>
                        <div className="text-xs font-black text-zinc-900 uppercase mb-1">Next Milestone: Electrical</div>
                        <p className="text-[11px] text-zinc-500 leading-tight">Scheduled for Monday. Materials have arrived at site and verified.</p>
                      </div>
                    </div>
                  </div>

                  {/* Progress Slider */}
                  <div className="pt-4">
                    <div className="flex justify-between items-end mb-2">
                      <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Construction Progress</span>
                      <span className="text-2xl font-black text-zinc-900">85%</span>
                    </div>
                    <div className="w-full h-3 bg-zinc-100 rounded-full overflow-hidden">
                      <div className="w-[85%] h-full bg-primary shadow-[0_0_15px_rgba(255,107,0,0.4)]"></div>
                    </div>
                  </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-zinc-50" id="faq">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-primary text-xs font-bold tracking-widest uppercase mb-2 block">FAQ's</span>
            <h2 className="text-4xl md:text-5xl font-black text-zinc-900">Common Questions</h2>
          </div>
          
          <div className="divide-y divide-zinc-200 border-y border-zinc-200">
            {[
              { q: 'How long will it take to build my house?', a: 'Typically 8 to 14 months depending on scale. We establish clear timelines during design phase.' },
              { q: 'When can you start construction?', a: 'Within 2-4 weeks after design finalization and municipal permit approvals.' },
              { q: 'How much does it cost per square foot?', a: 'Costs are transparently calculated based on finish levels. We provide detailed estimates early on.' },
              { q: 'Do you provide warranties?', a: 'Yes, we provide 10-year structural warranties and comprehensive finishing protection for peace of mind.' }
            ].map((item, i) => (
              <div key={i} className="group overflow-hidden">
                <button 
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center gap-4 py-6 text-left"
                >
                  <Plus className={`text-primary transition-transform duration-300 ${openFaq === i ? 'rotate-45' : ''}`} />
                  <span className="text-lg font-bold text-zinc-900">{item.q}</span>
                </button>
                <motion.div 
                  initial={false}
                  animate={{ 
                    height: openFaq === i ? 'auto' : 0, 
                    opacity: openFaq === i ? 1 : 0 
                  }}
                  transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                  className="overflow-hidden"
                >
                  <p className="pb-6 pl-10 text-zinc-500 text-sm leading-relaxed">{item.a}</p>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white overflow-hidden">
        <h2 className="text-4xl font-black text-center text-zinc-900 mb-16">What Our Clients Say</h2>
        <div className="flex animate-scroll-rtl whitespace-nowrap gap-8 py-4">
          {[
            { 
              name: 'Santosh Kumar Sahu', 
              role: 'Verified Homeowner', 
              initial: 'S',
              quote: 'Serenity Architects delivered exceptional construction and interior work with great attention to detail. The team was responsive, creative, and completed the project on time and within budget.' 
            },
            { 
              name: 'Dr. Ananya Rao', 
              role: 'Luxury Villa Owner', 
              initial: 'A',
              quote: 'Their engineering-first approach gave us immense confidence. The transparency in material sourcing and cost management is something rare in this industry.' 
            },
            { 
              name: 'Vikram Mehta', 
              role: 'Eco-Project Client', 
              initial: 'V',
              quote: 'Transforming our vision of a green home into reality was a seamless journey. Their expertise in sustainable architecture in Bangalore is unmatched.' 
            },
            { 
              name: 'Meera Deshmukh', 
              role: 'Interior Design Client', 
              initial: 'M',
              quote: 'The design team spent hours understanding our lifestyle. Every corner of our new home reflects our personality perfectly. Simply outstanding work!' 
            },
            { 
              name: 'Rajesh G.', 
              role: 'Apartment Owner', 
              initial: 'R',
              quote: 'Professional, punctual, and precise. The 10-year structural warranty they provide gave us long-term peace of mind. Highly recommend their services.' 
            }
          ].map((item, i) => (
            <div key={i} className="inline-block w-[400px] md:w-[500px] bg-zinc-50 p-10 border-t-4 border-primary shadow-sm whitespace-normal shrink-0">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-primary/10 flex items-center justify-center rounded-full text-primary font-black">{item.initial}</div>
                <div>
                  <h4 className="font-bold text-zinc-900">{item.name}</h4>
                  <p className="text-xs text-zinc-400 font-bold uppercase tracking-widest">{item.role}</p>
                </div>
              </div>
              <p className="text-zinc-600 text-sm leading-loose italic">
                "{item.quote}"
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-zinc-900 text-white" id="contact">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col items-center text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black leading-tight mb-6">Let's Build Your Legacy</h2>
            <p className="text-lg text-zinc-400 max-w-2xl leading-relaxed">
              Whether you're planning a luxury villa in Bangalore or a sustainable project in Tumkur, our engineering-led team is ready to assist you.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-10 lg:sticky lg:top-32">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                <div className="space-y-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                    <Phone size={20} />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-zinc-500 uppercase tracking-widest block mb-1">Direct Call</span>
                    <div className="space-y-2">
                      {config.business.phones.map((p, idx) => (
                        <a key={idx} href={`tel:${p.replace(/\s+/g, '')}`} className="text-2xl font-black text-white hover:text-primary transition-colors block italic">{p}</a>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                    <Mail size={20} />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-zinc-500 uppercase tracking-widest block mb-1">Email Us</span>
                    <a href={`mailto:${config.business.email}`} className="text-lg font-bold text-white hover:text-primary transition-colors block">{config.business.email}</a>
                  </div>
                </div>
              </div>
              
              <div className="p-8 border border-zinc-800 bg-zinc-800/40 rounded-sm group hover:border-primary/30 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary shrink-0 mt-1">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold mb-3 text-zinc-200 uppercase tracking-widest text-xs">Our Studio Address</h4>
                    <p className="text-zinc-400 text-sm leading-relaxed whitespace-pre-line">
                      {config.business.address}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div id="callback-form" className="bg-white p-8 md:p-12 text-zinc-900 shadow-2xl rounded-sm">
              <h3 className="text-2xl font-bold mb-8">Request Call Back</h3>
              <form onSubmit={(e) => handleSubmit(e, 'Call Back Form')} className="space-y-6">
                <input name="name" required className="w-full p-4 border border-zinc-200 bg-zinc-50 outline-none focus:ring-1 focus:ring-primary" placeholder="Enter name" />
                <input name="phone" required className="w-full p-4 border border-zinc-200 bg-zinc-50 outline-none focus:ring-1 focus:ring-primary" placeholder="Enter phone" />
                <div className="grid grid-cols-2 gap-4">
                  <select name="location" className="w-full p-4 border border-zinc-200 bg-zinc-50 outline-none appearance-none cursor-pointer">
                    <option>Bangalore</option>
                    <option>Mysore</option>
                    <option>Tumkur</option>
                    <option>Others</option>
                  </select>
                  <select name="service" className="w-full p-4 border border-zinc-200 bg-zinc-50 outline-none appearance-none cursor-pointer">
                    <option>Residential</option>
                    <option>Interiors</option>
                    <option>Green Homes</option>
                  </select>
                </div>
                <button 
                  disabled={status === 'loading'}
                  className="w-full bg-primary text-white py-5 font-bold uppercase tracking-widest hover:bg-primary-dark transition-all disabled:opacity-50"
                >
                  {status === 'loading' ? 'Sending...' : 'Request Call Back'}
                </button>
                {status === 'success' && <p className="text-center text-green-600 font-bold text-xs uppercase mt-2">{msg}</p>}
                {status === 'error' && <p className="text-center text-red-600 font-bold text-xs uppercase mt-2">{msg}</p>}
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
