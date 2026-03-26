import React from "react";

/**
 * PREMIUM BRIDAL LANDING PAGE - SHRUSARA BANGALORE
 * Features: 
 * - 8-Photo Masterpiece Gallery
 * - Animated Floating WhatsApp & Call (Ping Effect)
 * - Colorful Social Media Action Buttons
 * - 4-Step Professional Process
 * - Verified Google Reviews
 * - Expanded Contact Footer
 */

// --- ICONS & ASSETS ---
const IconCheckGold = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#BFA37E" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
);
const IconWhatsApp = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.94 3.675 1.439 5.662 1.439h.05c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
);
const IconPhone = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
);
const IconStar = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="#BFA37E"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
);

const BridalLandingPage = () => {
  const WHATSAPP_URL = "https://wa.me/919741827558?text=Hi%20Shrusara%20Team,%20I%20want%20to%20book%20a%20bridal%20blouse%20consultation.";
  const PHONE_NUMBER = "+919741827558";

  // Gallery Images (8 Photos)
  const galleryImages = [
    "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?q=80&w=600",
    "https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=600",
    "https://images.unsplash.com/photo-1631215105212-0761e0996841?q=80&w=600",
    "https://images.unsplash.com/photo-1621431668269-e70598851411?q=80&w=600",
    "https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=600",
    "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?q=80&w=600",
    "https://images.unsplash.com/photo-1621431668269-e70598851411?q=80&w=600",
    "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?q=80&w=600"
  ];

  return (
    <div className="bg-[#FAF9F6] text-[#1A1A1A] font-sans antialiased selection:bg-[#BFA37E] selection:text-white">
      
      {/* --- HEADER --- */}
      <header className="py-6 px-6 flex justify-between items-center bg-white/90 backdrop-blur-md sticky top-0 z-50 border-b border-gray-100">
        <img src="/logo.png" alt="Shrusara Logo" className="h-8 md:h-12" /> 
        <div className="hidden lg:flex items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            <span className="text-[10px] uppercase tracking-widest font-bold">Bangalore's Finest Bridal Studio</span>
          </div>
        </div>
        <a href={WHATSAPP_URL} className="text-[10px] font-bold uppercase tracking-widest bg-[#1A1A1A] text-white px-8 py-3 hover:bg-[#BFA37E] transition-all shadow-lg">
          Book Consultation
        </a>
      </header>

      {/* --- HERO SECTION --- */}
      <section className="relative pt-16 pb-24 px-6 overflow-hidden">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="z-10 text-center lg:text-left">
            <div className="flex justify-center lg:justify-start items-center gap-2 mb-8">
               <div className="flex gap-0.5">
                 {[...Array(5)].map((_, i) => <IconStar key={i} />)}
               </div>
               <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 border-l pl-4 ml-2 border-gray-300">Award Winning Maggam Work</span>
            </div>
            <h1 className="text-4xl md:text-7xl font-serif leading-[1.1] mb-8">
              Exquisite Bridal Blouses, <span className="italic text-[#BFA37E]">Designed</span> for Your Big Day.
            </h1>
            
            <ul className="space-y-5 mb-12 inline-block lg:block text-left">
              <li className="flex items-center gap-4 text-gray-700">
                <IconCheckGold /> <span className="text-sm md:text-base font-medium tracking-wide">Intricate Handcrafted Maggam & Aari Embroidery</span>
              </li>
              <li className="flex items-center gap-4 text-gray-700">
                <IconCheckGold /> <span className="text-sm md:text-base font-medium tracking-wide">Signature Perfect-Fit Tailoring (Zero Alterations)</span>
              </li>
              <li className="flex items-center gap-4 text-gray-700">
                <IconCheckGold /> <span className="text-sm md:text-base font-medium tracking-wide">Personalized Doorstep Service across Bangalore</span>
              </li>
            </ul>

            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
              <a href={WHATSAPP_URL} className="px-12 py-7 bg-[#25D366] text-white uppercase tracking-[0.3em] text-xs font-bold flex items-center justify-center gap-4 shadow-2xl hover:scale-105 transition-transform">
                <IconWhatsApp size={24}/> WhatsApp Design Inquiry
              </a>
              <div className="flex flex-col justify-center">
                 <p className="text-[10px] uppercase font-bold tracking-widest text-gray-400 text-center lg:text-left">Consultation is 100% Free</p>
                 <p className="text-[9px] uppercase tracking-widest text-[#BFA37E] font-bold text-center lg:text-left mt-1">Limited Slots for This Month</p>
              </div>
            </div>
          </div>

          <div className="relative">
             <div className="aspect-[4/5] rounded-t-full overflow-hidden border-[15px] border-white shadow-2xl relative z-10">
                <img 
                  src="https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&q=80" 
                  className="w-full h-full object-cover" 
                  alt="Shrusara Bridal Masterpiece"
                />
             </div>
             <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-[#BFA37E]/10 rounded-full -z-10 blur-3xl"></div>
          </div>
        </div>
      </section>

      {/* --- GALLERY SECTION (8 PHOTOS) --- */}
      <section className="py-24 bg-white border-y border-gray-100">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif uppercase tracking-[0.2em] mb-4">Our Masterpiece Gallery</h2>
            <div className="h-1.5 w-24 bg-[#BFA37E] mx-auto mb-6"></div>
            <p className="text-xs uppercase tracking-[0.4em] text-gray-400 font-bold">Explore Our Latest Handcrafted Creations</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {galleryImages.map((img, i) => (
              <div key={i} className="aspect-[3/4] overflow-hidden bg-gray-100 shadow-md group">
                <img 
                  src={img} 
                  alt={`Bridal Blouse ${i+1}`} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" 
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- GOOGLE REVIEWS SECTION --- */}
      <section className="py-24 bg-[#FAF9F6]">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-serif mb-16 uppercase tracking-[0.2em]">Verified Bridal Love</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { n: "Priya Rao", t: "The fit was like a second skin. I didn't have to go for even one alteration. Best bridal studio in Bangalore!", i: "P" },
              { n: "Meghana V.", t: "Highly professional service. They delivered my heavy Aari work blouse in just 10 days as promised.", i: "M" },
              { n: "Kavya Ramesh", t: "I showed them a photo from Pinterest and they made it look even better in real life. Truly artisans!", i: "K" }
            ].map((r, i) => (
              <div key={i} className="bg-white p-12 border border-gray-100 flex flex-col items-center shadow-sm">
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => <IconStar key={i} />)}
                </div>
                <p className="font-serif italic text-lg text-gray-700 mb-8 leading-relaxed">"{r.t}"</p>
                <div className="flex items-center gap-4">
                  <span className="w-10 h-10 rounded-full bg-[#BFA37E] text-white flex items-center justify-center font-bold text-sm">{r.i}</span>
                  <span className="uppercase text-[11px] font-bold tracking-[0.2em]">{r.n}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-16 flex items-center justify-center gap-3">
             <div className="h-px w-10 bg-gray-300"></div>
             <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">4.9 Star Average Rating on Google</span>
             <div className="h-px w-10 bg-gray-300"></div>
          </div>
        </div>
      </section>

      {/* --- HOW WE WORK (4 STEPS) --- */}
      <section className="py-24 bg-[#1A1A1A] text-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="font-serif text-3xl md:text-5xl mb-6 tracking-widest uppercase text-[#BFA37E]">The Shrusara Journey</h2>
            <p className="text-[10px] uppercase tracking-[0.5em] text-gray-500 font-bold">Crafting Perfection in Four Steps</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {[
              { n: "01", t: "Free Quote", d: "Send your design inspiration to us via WhatsApp for a transparent quote." },
              { n: "02", t: "Design Talk", d: "Discuss fabrics, color palettes, and embroidery details with our lead designers." },
              { n: "03", t: "Precision Fitting", d: "Experience our signature measurement process at our studio or your home." },
              { n: "04", t: "Swift Delivery", d: "Your custom bridal blouse is delivered, perfectly fitted and ready for your day." }
            ].map((step, i) => (
              <div key={i} className="text-center md:text-left p-8 border border-white/5 bg-white/5 hover:bg-white/10 transition-colors group">
                <span className="text-[#BFA37E] font-serif text-5xl block mb-6 group-hover:scale-110 transition-transform">{step.n}</span>
                <h4 className="text-sm uppercase font-bold tracking-widest mb-4">{step.t}</h4>
                <p className="text-xs text-gray-400 leading-relaxed tracking-wide">{step.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- COLORFUL SOCIAL MEDIA BUTTONS --- */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 text-center">
           <h3 className="text-[11px] font-bold uppercase tracking-[0.4em] mb-12 text-gray-400 underline underline-offset-8 decoration-[#BFA37E]">Follow Our Daily Designs</h3>
           <div className="flex flex-wrap justify-center gap-4">
              <a href="https://www.instagram.com/shrusara_fashion_boutique/" className="bg-[#E4405F] text-white px-10 py-4 rounded-md text-[10px] font-bold uppercase tracking-[0.2em] shadow-lg">Instagram</a>
              <a href="https://www.facebook.com/Shrusaraboutique" className="bg-[#1877F2] text-white px-10 py-4 rounded-md text-[10px] font-bold uppercase tracking-[0.2em] shadow-lg">Facebook</a>
              <a href="https://www.youtube.com/channel/UCogJoeB047K7_dNfhqJe1Dw" className="bg-[#FF0000] text-white px-10 py-4 rounded-md text-[10px] font-bold uppercase tracking-[0.2em] shadow-lg">YouTube</a>
              <a href="https://www.linkedin.com/in/ShruthiAjith" className="bg-[#0A66C2] text-white px-10 py-4 rounded-md text-[10px] font-bold uppercase tracking-[0.2em] shadow-lg">LinkedIn</a>
               <a href="https://www.google.com/maps/place/Shrusara+Fashion+Boutique/@13.0049249,77.5426517,17z/data=!3m1!4b1!4m6!3m5!1s0x3bae3dabaa2be5e9:0x7224e8cfb2a116c9!8m2!3d13.0049249!4d77.5426517!16s%2Fg%2F11fnfhywzd?entry=ttu&g_ep=EgoyMDI2MDMyMy4xIKXMDSoASAFQAw%3D%3D" className="bg-[#0A66C2] text-white px-10 py-4 rounded-md text-[10px] font-bold uppercase tracking-[0.2em] shadow-lg">Google</a>
           </div>
        </div>
      </section>

      {/* --- MAIN WEBSITE REDIRECT --- */}
      <section className="py-24 bg-[#FAF9F6] text-center px-6 border-t border-gray-100">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-5xl font-serif mb-10 leading-tight italic">Ready to make your wedding truly unforgettable?</h2>
          <div className="flex flex-col items-center gap-8">
            <a href={WHATSAPP_URL} className="w-full md:w-auto px-20 py-8 bg-[#1A1A1A] text-white uppercase tracking-[0.4em] text-xs font-bold shadow-2xl flex items-center justify-center gap-4 hover:bg-[#BFA37E] transition-all">
               <IconWhatsApp size={24} /> Enquire On WhatsApp
            </a>
            
            {/* LARGE COLORFUL WEBSITE BUTTON */}
            <a href="https://shrusara.com" className="px-14 py-5 bg-[#BFA37E] text-white text-[11px] font-bold uppercase tracking-[0.3em] rounded-full shadow-xl hover:bg-[#1A1A1A] transition-all">
               Explore Full Catalogue at shrusara.com
            </a>
          </div>
        </div>
      </section>

      {/* --- ATTENTION-GRABBING FLOATING BUTTONS --- */}
      <div className="fixed bottom-10 right-8 flex flex-col gap-6 z-[100]">
        
        {/* Floating Call Button with Ripple */}
        <div className="relative flex items-center justify-center group">
          <span className="absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75 animate-ping"></span>
          <a href={`tel:${PHONE_NUMBER}`}
             className="relative bg-blue-600 text-white p-5 rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform">
            <IconPhone size={28} />
          </a>
          <span className="absolute right-20 bg-[#1A1A1A] text-white text-[9px] font-bold uppercase tracking-widest py-2 px-4 rounded shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">Call for Urgent Bookings</span>
        </div>

        {/* Floating WhatsApp Button with Ripple */}
        <div className="relative flex items-center justify-center group">
          <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping"></span>
          <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" 
             className="relative bg-[#25D366] text-white p-5 rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform">
            <IconWhatsApp size={32} />
          </a>
          <span className="absolute right-20 bg-[#1A1A1A] text-white text-[9px] font-bold uppercase tracking-widest py-2 px-4 rounded shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">Chat with Designer</span>
        </div>
      </div>

      {/* --- FULL FOOTER --- */}
      <footer className="py-24 bg-white text-center border-t border-gray-100 px-6">
        <div className="container mx-auto">
          <div className="mb-16">
             <img src="/logo.png" alt="Shrusara Bangalore" className="h-12 mx-auto mb-10 opacity-90" />
             
             {/* Contact Grid */}
             <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto border-y border-gray-50 py-12">
                <div className="flex flex-col gap-3">
                  <span className="text-[10px] uppercase tracking-[0.4em] text-gray-400 font-bold">Client Support</span>
                  <a href="mailto:help@shrusara.com" className="text-sm font-bold text-[#1A1A1A] hover:text-[#BFA37E] transition-colors">help@shrusara.com</a>
                </div>
                <div className="flex flex-col gap-3">
                  <span className="text-[10px] uppercase tracking-[0.4em] text-gray-400 font-bold">Speak with Us</span>
                  <a href={`tel:${PHONE_NUMBER}`} className="text-lg font-serif italic font-bold text-[#1A1A1A] hover:text-[#BFA37E] transition-colors">+91 9741 827 558</a>
                  <p className="text-[9px] uppercase tracking-widest text-gray-400">Available Mon - Sat (10am - 8pm)</p>
                </div>
                <div className="flex flex-col gap-3">
                  <span className="text-[10px] uppercase tracking-[0.4em] text-gray-400 font-bold">Lead Designer</span>
                  <a href="mailto:shruthiajith@shrusara.com" className="text-sm font-bold text-[#1A1A1A] hover:text-[#BFA37E] transition-colors">shruthiajith@shrusara.com</a>
                </div>
             </div>
          </div>
          
          <div className="space-y-4">
            <p className="text-[10px] text-gray-400 uppercase tracking-[0.3em]">
              Shrusara Bridal Studio • Bangalore, India
            </p>
            <p className="text-[9px] text-gray-300 uppercase tracking-widest">
              © {new Date().getFullYear()} Shrusara. All rights reserved. Designed for the Modern Indian Bride.
            </p>
          </div>
        </div>
      </footer>

    </div>
  );
};

export default BridalLandingPage;