const { useState, useEffect } = React;

// --- SVG Icons (Replaces need for external package installation) ---
const Icons = {
    Menu: () => <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M3 12h18M3 6h18M3 18h18"/></svg>,
    X: () => <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M18 6L6 18M6 6l12 12"/></svg>,
    WhatsApp: () => <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24"><path d="M12.031 0C5.385 0 0 5.385 0 12.031c0 2.128.553 4.195 1.604 6.015L.302 23.698l5.808-1.523A11.97 11.97 0 0012.031 24c6.646 0 12.031-5.385 12.031-12.031S18.677 0 12.031 0zm3.83 17.265c-.195.549-.976 1.055-1.547 1.16-.546.1-1.25.176-3.83-1.01-3.05-1.398-5.027-4.524-5.178-4.726-.15-.202-1.238-1.649-1.238-3.144 0-1.496.776-2.235 1.051-2.535.274-.3.597-.375.795-.375.199 0 .398 0 .573.008.183.008.423-.069.664.51.249.601.846 2.067.92 2.217.075.15.125.325.025.525-.1.201-.15.326-.3.5-.15.175-.316.366-.451.501-.15.15-.312.316-.138.617.175.301.776 1.282 1.666 2.079 1.147 1.025 2.115 1.341 2.415 1.492.3.15.474.125.649-.075.175-.201.75-.873.95-1.173.199-.301.398-.251.674-.15.274.1 1.742.822 2.042.972.3.15.498.225.573.35.075.125.075.724-.12 1.273z"/></svg>
};

const App = () => {
    // State for changing pages and mobile menu
    const [currentPage, setCurrentPage] = useState('home');
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Scroll to top when changing pages
    useEffect(() => {
        window.scrollTo(0, 0);
        setIsMobileMenuOpen(false); // Close mobile menu on click
    }, [currentPage]);

    // Navigation Component
    const Navbar = () => (
        <nav className="fixed w-full z-50 bg-white/95 backdrop-blur-md shadow-sm py-4">
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                <div className="flex items-center gap-2 cursor-pointer" onClick={() => setCurrentPage('home')}>
                    <div className="w-10 h-10 bg-vvcg-navy rounded-lg flex items-center justify-center text-white font-bold">VV</div>
                    <span className="font-extrabold text-xl tracking-tighter text-vvcg-purple">VVCG</span>
                </div>
                
                {/* Desktop Menu */}
                <div className="hidden md:flex gap-8 items-center font-bold text-xs uppercase tracking-widest text-slate-600">
                    <button onClick={() => setCurrentPage('home')} className={`hover:text-vvcg-accent transition-colors ${currentPage === 'home' ? 'text-vvcg-accent' : ''}`}>Home</button>
                    <button onClick={() => setCurrentPage('about')} className={`hover:text-vvcg-accent transition-colors ${currentPage === 'about' ? 'text-vvcg-accent' : ''}`}>About Us</button>
                    <button onClick={() => setCurrentPage('services')} className={`hover:text-vvcg-accent transition-colors ${currentPage === 'services' ? 'text-vvcg-accent' : ''}`}>Services</button>
                    <button onClick={() => setCurrentPage('contact')} className="bg-vvcg-navy text-white px-6 py-2.5 rounded-full hover:bg-vvcg-purple transition-all shadow-lg">Contact</button>
                </div>

                {/* Mobile Hamburger Icon */}
                <button className="md:hidden text-vvcg-navy" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                    {isMobileMenuOpen ? <Icons.X /> : <Icons.Menu />}
                </button>
            </div>

            {/* Mobile Menu Dropdown */}
            {isMobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-slate-100 flex flex-col items-center py-6 gap-6 font-bold text-sm uppercase tracking-widest fade-in">
                    <button onClick={() => setCurrentPage('home')}>Home</button>
                    <button onClick={() => setCurrentPage('about')}>About Us</button>
                    <button onClick={() => setCurrentPage('services')}>Services</button>
                    <button onClick={() => setCurrentPage('contact')} className="bg-vvcg-navy text-white px-8 py-3 rounded-full">Contact Us</button>
                </div>
            )}
        </nav>
    );

    // Floating WhatsApp Button
    const WhatsAppButton = () => (
        <a 
            href="https://wa.me/60169567855" 
            target="_blank" 
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform whatsapp-pulse flex items-center justify-center group"
            title="Chat with us on WhatsApp"
        >
            <Icons.WhatsApp />
            <span className="absolute right-full mr-4 bg-white text-slate-800 text-sm px-3 py-1 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap font-bold hidden md:block">
                Chat with us!
            </span>
        </a>
    );

    // 1. HOME PAGE
    const HomePage = () => (
        <div className="fade-in">
            <section className="pt-40 pb-24 lg:pt-48 lg:pb-32 bg-gradient-to-br from-slate-950 via-vvcg-navy to-vvcg-purple text-white relative">
                <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
                    <div className="space-y-8 slide-up">
                        <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight">
                            Investing In The <span className="text-indigo-400">Future of HR</span>
                        </h1>
                        <p className="text-xl text-slate-300 max-w-lg leading-relaxed">
                            Building a workforce for tomorrow, while staying grounded in what matters most—people. Award-winning consulting across 13 countries.
                        </p>
                        <button onClick={() => setCurrentPage('services')} className="bg-white text-vvcg-navy px-10 py-4 rounded-xl font-bold text-lg hover:-translate-y-1 transition-transform shadow-2xl">
                            Discover Our Services
                        </button>
                    </div>
                    <div className="relative fade-in">
                        <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800" className="rounded-2xl shadow-2xl border border-white/10" alt="Corporate Team" />
                    </div>
                </div>
            </section>
        </div>
    );

    // 2. ABOUT PAGE
    const AboutPage = () => (
        <div className="pt-32 pb-24 fade-in min-h-screen">
            <div className="max-w-4xl mx-auto px-6 slide-up">
                <h2 className="text-5xl font-bold text-vvcg-navy mb-8 border-l-8 border-indigo-600 pl-6">Our Story</h2>
                <div className="text-lg text-slate-600 space-y-6 leading-relaxed">
                    <p className="text-2xl font-semibold text-slate-800">Founded in Malaysia in 2020, VVCG has rapidly expanded into a multi-award-winning consulting firm.</p>
                    <p>We partner with SMEs, Startups, and Technology giants. Our mission is to empower organizations to attract, nurture, and retain top talent by merging corporate elegance with dynamic, agile HR solutions.</p>
                    <p>Core Values: <strong>Integrity. Collaboration. Innovation.</strong></p>
                </div>
            </div>
        </div>
    );

    // 3. SERVICES PAGE
    const ServicesPage = () => (
        <div className="pt-32 pb-24 bg-slate-50 fade-in min-h-screen">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16 slide-up">
                    <h2 className="text-4xl font-extrabold text-vvcg-navy mb-4">Core Solutions</h2>
                    <p className="text-slate-500">Agility, Diversity, and Technological Innovation.</p>
                </div>
                <div className="grid md:grid-cols-3 gap-8 slide-up">
                    <div className="bg-white p-10 rounded-2xl shadow-lg border border-slate-100 hover:-translate-y-2 transition-transform">
                        <h3 className="text-2xl font-bold mb-4 text-vvcg-purple">HR & Payroll Outsourcing</h3>
                        <p className="text-slate-600 mb-6">End-to-End HR processing, guaranteeing compliance and operational efficiency so you can focus on scaling.</p>
                    </div>
                    <div className="bg-white p-10 rounded-2xl shadow-lg border border-slate-100 hover:-translate-y-2 transition-transform">
                        <h3 className="text-2xl font-bold mb-4 text-vvcg-purple">Recruitment</h3>
                        <p className="text-slate-600 mb-6">Expert Headhunting, Sourcing, and RPO (Recruitment Process Outsourcing) tailored for tech and corporate roles.</p>
                    </div>
                    <div className="bg-white p-10 rounded-2xl shadow-lg border border-slate-100 hover:-translate-y-2 transition-transform">
                        <h3 className="text-2xl font-bold mb-4 text-vvcg-purple">Leadership Training</h3>
                        <p className="text-slate-600 mb-6">One-Day Leadership Awareness Programs designed to upskill management and foster an inclusive workplace.</p>
                    </div>
                </div>
            </div>
        </div>
    );

    // 4. CONTACT PAGE (With Form)
    const ContactPage = () => (
        <div className="pt-32 pb-24 fade-in min-h-screen bg-white">
            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-start slide-up">
                
                {/* Contact Info */}
                <div className="bg-vvcg-navy text-white p-10 lg:p-14 rounded-3xl shadow-2xl">
                    <h2 className="text-4xl font-bold mb-6">Let's Do Greater Things Together!</h2>
                    <p className="text-indigo-200 mb-10 text-lg">Reach out to our team in Malaysia. We reply within 24 hours.</p>
                    
                    <div className="space-y-6 text-lg font-medium">
                        <div className="flex items-center gap-4">
                            <span className="p-3 bg-white/10 rounded-full">📧</span> hello@vvconsultinggroup.com
                        </div>
                        <div className="flex items-center gap-4">
                            <span className="p-3 bg-white/10 rounded-full">📞</span> +6016-9567855
                        </div>
                    </div>
                </div>

                {/* Functioning Form UI */}
                <form className="space-y-6 bg-slate-50 p-8 lg:p-10 rounded-3xl border border-slate-200" onSubmit={(e) => { e.preventDefault(); alert("Form submitted! (This is a frontend mockup. Connect to Formspree or a backend to receive emails.)"); }}>
                    <div>
                        <label className="block text-sm font-bold text-slate-700 mb-2">Full Name</label>
                        <input type="text" required placeholder="John Doe" className="w-full p-4 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white" />
                    </div>
                    <div>
                        <label className="block text-sm font-bold text-slate-700 mb-2">Work Email</label>
                        <input type="email" required placeholder="john@company.com" className="w-full p-4 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white" />
                    </div>
                    <div>
                        <label className="block text-sm font-bold text-slate-700 mb-2">How can we help?</label>
                        <select className="w-full p-4 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white">
                            <option>Recruitment Services</option>
                            <option>Payroll Outsourcing</option>
                            <option>Leadership Training</option>
                            <option>Other Enquiry</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-bold text-slate-700 mb-2">Message</label>
                        <textarea required rows="4" placeholder="Tell us about your company needs..." className="w-full p-4 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white"></textarea>
                    </div>
                    <button type="submit" className="w-full bg-vvcg-purple text-white py-4 rounded-xl font-bold text-lg hover:bg-vvcg-navy transition-colors shadow-lg">
                        Send Message
                    </button>
                </form>

            </div>
        </div>
    );

    // Main Render
    return (
        <div className="relative">
            <Navbar />
            
            <main>
                {currentPage === 'home' && <HomePage />}
                {currentPage === 'about' && <AboutPage />}
                {currentPage === 'services' && <ServicesPage />}
                {currentPage === 'contact' && <ContactPage />}
            </main>
            
            {/* Global Footer */}
            <footer className="bg-slate-950 text-slate-400 py-10 text-center text-sm border-t border-slate-800">
                <p>© 2026 VV Consulting Group. All Rights Reserved.</p>
            </footer>

            <WhatsAppButton />
        </div>
    );
};

// Render the App to the DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
