const { useState, useEffect } = React;

// --- SVG Icons ---
const Icons = {
    Menu: () => <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M3 12h18M3 6h18M3 18h18"/></svg>,
    X: () => <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M18 6L6 18M6 6l12 12"/></svg>,
    WhatsApp: () => <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24"><path d="M12.031 0C5.385 0 0 5.385 0 12.031c0 2.128.553 4.195 1.604 6.015L.302 23.698l5.808-1.523A11.97 11.97 0 0012.031 24c6.646 0 12.031-5.385 12.031-12.031S18.677 0 12.031 0zm3.83 17.265c-.195.549-.976 1.055-1.547 1.16-.546.1-1.25.176-3.83-1.01-3.05-1.398-5.027-4.524-5.178-4.726-.15-.202-1.238-1.649-1.238-3.144 0-1.496.776-2.235 1.051-2.535.274-.3.597-.375.795-.375.199 0 .398 0 .573.008.183.008.423-.069.664.51.249.601.846 2.067.92 2.217.075.15.125.325.025.525-.1.201-.15.326-.3.5-.15.175-.316.366-.451.501-.15.15-.312.316-.138.617.175.301.776 1.282 1.666 2.079 1.147 1.025 2.115 1.341 2.415 1.492.3.15.474.125.649-.075.175-.201.75-.873.95-1.173.199-.301.398-.251.674-.15.274.1 1.742.822 2.042.972.3.15.498.225.573.35.075.125.075.724-.12 1.273z"/></svg>,
    CheckCircle: () => <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="text-indigo-500"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="M22 4L12 14.01l-3-3"/></svg>,
    Globe: () => <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>,
    Award: () => <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>,
    Heart: () => <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
};

const App = () => {
    const [currentPage, setCurrentPage] = useState('home');
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
        setIsMobileMenuOpen(false);
    }, [currentPage]);

    // Navigation Component
    const Navbar = () => (
        <nav className="fixed w-full z-50 bg-white/95 backdrop-blur-md shadow-sm py-4">
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                <div className="flex items-center gap-2 cursor-pointer" onClick={() => setCurrentPage('home')}>
                    <div className="w-10 h-10 bg-vvcg-navy rounded-lg flex items-center justify-center text-white font-bold">VV</div>
                    <span className="font-extrabold text-xl tracking-tighter text-vvcg-purple">VVCG</span>
                </div>
                
                <div className="hidden md:flex gap-8 items-center font-bold text-xs uppercase tracking-widest text-slate-600">
                    <button onClick={() => setCurrentPage('home')} className={`hover:text-vvcg-accent transition-colors ${currentPage === 'home' ? 'text-vvcg-accent' : ''}`}>Home</button>
                    <button onClick={() => setCurrentPage('about')} className={`hover:text-vvcg-accent transition-colors ${currentPage === 'about' ? 'text-vvcg-accent' : ''}`}>About Us</button>
                    <button onClick={() => setCurrentPage('services')} className={`hover:text-vvcg-accent transition-colors ${currentPage === 'services' ? 'text-vvcg-accent' : ''}`}>Services</button>
                    <button onClick={() => setCurrentPage('contact')} className="bg-vvcg-navy text-white px-6 py-2.5 rounded-full hover:bg-vvcg-purple transition-all shadow-lg">Contact</button>
                </div>

                <button className="md:hidden text-vvcg-navy" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                    {isMobileMenuOpen ? <Icons.X /> : <Icons.Menu />}
                </button>
            </div>

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

    const WhatsAppButton = () => (
        <a href="https://wa.me/60169567855" target="_blank" rel="noopener noreferrer" className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform whatsapp-pulse flex items-center justify-center group" title="Chat with us on WhatsApp">
            <Icons.WhatsApp />
            <span className="absolute right-full mr-4 bg-white text-slate-800 text-sm px-3 py-1 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap font-bold hidden md:block">Chat with us!</span>
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
        <div className="pt-32 pb-24 fade-in bg-white min-h-screen">
            <div className="max-w-6xl mx-auto px-6 slide-up">
                <div className="text-center mb-20">
                    <h2 className="text-5xl font-extrabold text-vvcg-navy mb-6">Our Story & Scale</h2>
                    <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                        Founded in Malaysia in 2020, VVCG rapidly expanded to Singapore and Dubai by 2021 and 2022. We empower organizations to attract, nurture, and retain top talent by merging advanced technology with the essential human touch.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
                    {[
                        { title: "Agility & Adaptability", desc: "Rapidly implementing solutions faster than traditional large firms." },
                        { title: "DEI Focused", desc: "Championing Diversity, Equality, and Inclusivity in every strategy." },
                        { title: "Tech Innovation", desc: "Early adopters of AI and cutting-edge HR tools." },
                        { title: "Media Presence", desc: "Industry thought leaders featured on BFM 89.9 and Business Today." }
                    ].map((item, i) => (
                        <div key={i} className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:shadow-lg transition-shadow">
                            <h4 className="font-bold text-vvcg-purple mb-3">{item.title}</h4>
                            <p className="text-sm text-slate-600">{item.desc}</p>
                        </div>
                    ))}
                </div>

                <div className="grid lg:grid-cols-3 gap-12 mb-24">
                    <div className="bg-indigo-50 p-10 rounded-3xl relative overflow-hidden">
                        <div className="absolute top-4 right-4 text-indigo-200"><Icons.Award /></div>
                        <h3 className="text-3xl font-bold text-vvcg-navy mb-6">Multi-Award Winning</h3>
                        <ul className="space-y-4 text-slate-700 font-medium">
                            <li className="flex items-start gap-3"><Icons.CheckCircle /> <span>Best HR Outsourcing Partner 2020 (HRVOTY)</span></li>
                            <li className="flex items-start gap-3"><Icons.CheckCircle /> <span>Entrepreneur of the Year 2021 (SEBA)</span></li>
                            <li className="flex items-start gap-3"><Icons.CheckCircle /> <span>ASEAN Rice Bowl Startup Awards</span></li>
                        </ul>
                    </div>

                    <div className="bg-vvcg-navy p-10 rounded-3xl text-white relative overflow-hidden">
                        <div className="absolute top-4 right-4 text-indigo-500/30"><Icons.Globe /></div>
                        <h3 className="text-3xl font-bold mb-6">13 Countries</h3>
                        <p className="text-indigo-200 mb-4 font-medium">Global footprint supporting expansion:</p>
                        <div className="flex flex-wrap gap-2">
                            {['Malaysia', 'Singapore', 'Dubai', 'USA', 'France', 'Japan', 'China', 'Korea', 'Estonia'].map(country => (
                                <span key={country} className="bg-white/10 px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase">{country}</span>
                            ))}
                        </div>
                    </div>

                    <div className="bg-purple-50 p-10 rounded-3xl relative overflow-hidden">
                        <div className="absolute top-4 right-4 text-purple-200"><Icons.Heart /></div>
                        <h3 className="text-3xl font-bold text-vvcg-purple mb-6">Sustainability</h3>
                        <p className="text-slate-700 mb-4 font-medium">Giving back to the community is in our DNA.</p>
                        <ul className="space-y-4 text-slate-700 font-medium">
                            <li className="flex items-start gap-3"><Icons.CheckCircle /> <span>Empower Hero project for underprivileged children</span></li>
                            <li className="flex items-start gap-3"><Icons.CheckCircle /> <span>Strategic Partnership with Rotary Club of Hartamas</span></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );

    // 3. SERVICES PAGE (Includes the fully detailed 13-Step Roadmap)
    const ServicesPage = () => {
        const roadmapSteps = [
            { id: "01", title: "Onboarding and Kickoff" },
            { id: "02", title: "Needs Assessment" },
            { id: "03", title: "Review of Policies and Processes" },
            { id: "04", title: "Clear Timelines and Proposal" },
            { id: "05", title: "Client Approval and Agreement" },
            { id: "06", title: "Implementation and Kick-Off" },
            { id: "07", title: "Introduction to external & in-house team" },
            { id: "08", title: "Execution and Monitoring" },
            { id: "09", title: "Feedbacks and Adjustments" },
            { id: "10", title: "Completion and Delivery" },
            { id: "11", title: "Post-Implementation & Follow-Up Support" },
            { id: "12", title: "Evaluation" },
            { id: "13", title: "Long Term Relationship Building" }
        ];

        return (
            <div className="pt-32 pb-24 bg-slate-50 fade-in min-h-screen">
                <div className="max-w-7xl mx-auto px-6">
                    
                    <div className="text-center mb-20 slide-up">
                        <h2 className="text-5xl font-extrabold text-vvcg-navy mb-4">Core Solutions</h2>
                        <p className="text-xl text-slate-500 max-w-2xl mx-auto">Value and Impact driven by Agility, Diversity, and Innovation.</p>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-8 slide-up mb-24">
                        {/* HR & Payroll */}
                        <div className="bg-white p-10 rounded-3xl shadow-xl border border-slate-100 hover:-translate-y-2 transition-transform">
                            <div className="inline-block px-4 py-1.5 rounded-full bg-indigo-100 text-indigo-800 text-xs font-bold uppercase tracking-widest mb-6">SMEs & Startups</div>
                            <h3 className="text-2xl font-bold mb-6 text-vvcg-purple">HR & Payroll Outsourcing</h3>
                            <p className="text-slate-600 mb-8 leading-relaxed">End-to-End HR processing, guaranteeing compliance and operational efficiency. We act as your external support team.</p>
                            <ul className="space-y-3 text-sm font-medium text-slate-700">
                                <li className="flex items-start gap-2"><Icons.CheckCircle /> Registration for KWSP, PERKESO & LHDN</li>
                                <li className="flex items-start gap-2"><Icons.CheckCircle /> Setting up departments from scratch</li>
                                <li className="flex items-start gap-2"><Icons.CheckCircle /> IR/ER Advisory & Compliance</li>
                            </ul>
                        </div>

                        {/* Recruitment */}
                        <div className="bg-white p-10 rounded-3xl shadow-xl border border-slate-100 hover:-translate-y-2 transition-transform">
                            <div className="inline-block px-4 py-1.5 rounded-full bg-indigo-100 text-indigo-800 text-xs font-bold uppercase tracking-widest mb-6">Tech & IPOs</div>
                            <h3 className="text-2xl font-bold mb-6 text-vvcg-purple">Strategic Recruitment</h3>
                            <p className="text-slate-600 mb-8 leading-relaxed">We manage your entire recruitment process, reducing the burden on internal HR while sourcing top-tier talent.</p>
                            <ul className="space-y-3 text-sm font-medium text-slate-700">
                                <li className="flex items-start gap-2"><Icons.CheckCircle /> Headhunting & Talent Search</li>
                                <li className="flex items-start gap-2"><Icons.CheckCircle /> RPO & Workforce Outsourcing</li>
                                <li className="flex items-start gap-2"><Icons.CheckCircle /> Talent on Demand & PERM</li>
                            </ul>
                        </div>

                        {/* Leadership Training */}
                        <div className="bg-vvcg-navy p-10 rounded-3xl shadow-xl border border-slate-800 hover:-translate-y-2 transition-transform text-white">
                            <div className="inline-block px-4 py-1.5 rounded-full bg-green-500/20 text-green-400 border border-green-500/30 text-xs font-bold uppercase tracking-widest mb-6">HRDF Claimable</div>
                            <h3 className="text-2xl font-bold mb-6 text-indigo-300">Leadership Training</h3>
                            <p className="text-slate-300 mb-8 leading-relaxed">A coaching-led, diagnostic approach rather than just training. We strengthen judgment through disciplined insight.</p>
                            <ul className="space-y-3 text-sm font-medium text-indigo-100">
                                <li className="flex items-start gap-2"><span className="text-indigo-400">✓</span> Emotional Intelligence (EI)</li>
                                <li className="flex items-start gap-2"><span className="text-indigo-400">✓</span> Self-Awareness & Communication</li>
                                <li className="flex items-start gap-2"><span className="text-indigo-400">✓</span> One-Day Awareness Program</li>
                            </ul>
                        </div>
                    </div>

                    {/* Full 13-Step Consulting Roadmap */}
                    <div className="bg-white rounded-3xl p-10 lg:p-16 shadow-lg border border-slate-100 slide-up">
                        <div className="text-center mb-16">
                            <h3 className="text-4xl font-bold text-vvcg-navy mb-4">The HR Consulting Roadmap</h3>
                            <p className="text-slate-500 max-w-2xl mx-auto">Our proven 13-step methodology designed to seamlessly integrate with your business and transform your organizational structure.</p>
                        </div>
                        
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10">
                            {roadmapSteps.map((phase, idx) => (
                                <div key={idx} className="relative flex flex-col items-start p-4 bg-slate-50 rounded-2xl border border-slate-100 hover:shadow-md transition-shadow group">
                                    <div className="text-4xl font-black text-indigo-100 mb-3 group-hover:text-indigo-200 transition-colors">
                                        {phase.id}
                                    </div>
                                    <h4 className="font-bold text-vvcg-navy leading-tight text-sm md:text-base">
                                        {phase.title}
                                    </h4>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        );
    };

    // 4. CONTACT PAGE
    const ContactPage = () => (
        <div className="pt-32 pb-24 fade-in min-h-screen bg-white">
            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-start slide-up">
                <div className="bg-vvcg-navy text-white p-10 lg:p-14 rounded-3xl shadow-2xl">
                    <h2 className="text-4xl font-bold mb-6">Let's Do Greater Things Together!</h2>
                    <p className="text-indigo-200 mb-10 text-lg">Reach out to our team in Malaysia. We reply within 24 hours.</p>
                    <div className="space-y-6 text-lg font-medium">
                        <div className="flex items-center gap-4"><span className="p-3 bg-white/10 rounded-full">📧</span> hello@vvconsultinggroup.com</div>
                        <div className="flex items-center gap-4"><span className="p-3 bg-white/10 rounded-full">📞</span> +6016-9567855</div>
                    </div>
                </div>
                <form className="space-y-6 bg-slate-50 p-8 lg:p-10 rounded-3xl border border-slate-200" onSubmit={(e) => { e.preventDefault(); alert("Form submitted!"); }}>
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
                    <button type="submit" className="w-full bg-vvcg-purple text-white py-4 rounded-xl font-bold text-lg hover:bg-vvcg-navy transition-colors shadow-lg">Send Message</button>
                </form>
            </div>
        </div>
    );

    return (
        <div className="relative">
            <Navbar />
            <main>
                {currentPage === 'home' && <HomePage />}
                {currentPage === 'about' && <AboutPage />}
                {currentPage === 'services' && <ServicesPage />}
                {currentPage === 'contact' && <ContactPage />}
            </main>
            <footer className="bg-slate-950 text-slate-400 py-10 text-center text-sm border-t border-slate-800">
                <p>© 2026 VV Consulting Group. All Rights Reserved.</p>
            </footer>
            <WhatsAppButton />
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
