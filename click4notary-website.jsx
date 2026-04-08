import React, { useState } from 'react';
import { Menu, X, Check, Clock, Shield, ArrowRight, Phone, Mail, MapPin, Zap, Lock, Users } from 'lucide-react';

export default function ClickForNotaryWebsite() {
  const [currentPage, setCurrentPage] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const renderPage = () => {
    switch(currentPage) {
      case 'home':
        return <HomePage setPage={setCurrentPage} />;
      case 'services':
        return <ServicesPage setPage={setCurrentPage} />;
      case 'booking':
        return <BookingPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage setPage={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-xl border-b border-slate-200/50 z-50 shadow-sm">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <button 
            onClick={() => { setCurrentPage('home'); setMobileMenuOpen(false); }}
            className="flex items-center gap-2 cursor-pointer group"
          >
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center text-white font-bold text-xs shadow-lg group-hover:shadow-blue-500/30 group-hover:shadow-2xl transition-all">C4</div>
            <span className="text-base font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">Click for Notary</span>
          </button>

          <div className="hidden md:flex gap-8">
            {[
              { label: 'Services', key: 'services' },
              { label: 'Book', key: 'booking' },
              { label: 'Contact', key: 'contact' }
            ].map(item => (
              <button
                key={item.key}
                onClick={() => setCurrentPage(item.key)}
                className={`text-xs font-semibold transition-all duration-300 relative ${
                  currentPage === item.key
                    ? 'text-blue-600'
                    : 'text-slate-600 hover:text-blue-600'
                } after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-gradient-to-r after:from-blue-600 after:to-blue-400 after:w-0 ${currentPage === item.key ? 'after:w-full' : 'hover:after:w-full'} after:transition-all`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1 hover:bg-slate-100 rounded-lg transition"
          >
            {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-100 px-4 py-3 space-y-2">
            {[
              { label: 'Services', key: 'services' },
              { label: 'Book', key: 'booking' },
              { label: 'Contact', key: 'contact' }
            ].map(item => (
              <button
                key={item.key}
                onClick={() => { setCurrentPage(item.key); setMobileMenuOpen(false); }}
                className="block w-full text-left py-2 text-xs font-semibold text-slate-600 hover:text-blue-600 transition"
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </nav>

      <main className="pt-20">
        {renderPage()}
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 text-white py-8 text-xs border-t border-slate-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center text-slate-400">
          <p className="font-medium">&copy; 2026 Click for Notary</p>
          <p className="font-medium">(555) 123-4567</p>
        </div>
      </footer>
    </div>
  );
}

function HomePage({ setPage }) {
  return (
    <div className="space-y-0">
      {/* Hero */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-br from-blue-400/20 to-transparent rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-10 -left-20 w-96 h-96 bg-gradient-to-tr from-blue-300/10 to-transparent rounded-full blur-3xl" style={{animation: 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) 1s infinite'}}></div>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-6xl md:text-7xl font-black leading-tight mb-6 text-slate-900">
                Professional <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 bg-clip-text text-transparent">Notary</span> in Minutes
              </h1>
              
              <p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-md">
                Same-day appointments. Licensed professionals. Secure & legally binding.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => setPage('booking')}
                  className="group bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800 font-bold py-4 px-8 rounded-xl transition-all shadow-lg hover:shadow-blue-600/30 hover:shadow-2xl"
                >
                  <span className="flex items-center justify-center gap-2">
                    Book Now <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </button>
                <button 
                  onClick={() => setPage('services')}
                  className="border-2 border-blue-200 hover:border-blue-400 text-slate-900 font-bold py-4 px-8 rounded-xl transition-all hover:bg-blue-50"
                >
                  Explore Services
                </button>
              </div>
            </div>

            <div className="hidden md:block">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-400 rounded-2xl blur opacity-20"></div>
                <div className="relative bg-white rounded-2xl p-8 border border-slate-200 shadow-xl">
                  <div className="space-y-4">
                    {[
                      { icon: Zap, text: 'All 50 States & International', color: 'text-yellow-500' },
                      { icon: Lock, text: 'Secure & encrypted', color: 'text-green-500' },
                      { icon: Users, text: 'Virginia Commissioned', color: 'text-blue-500' },
                      { icon: Check, text: 'Bilingual: English & Spanish', color: 'text-purple-500' }
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className={`${item.color} p-2 bg-slate-50 rounded-lg`}>
                          <item.icon size={18} />
                        </div>
                        <span className="font-medium text-slate-900 text-sm">{item.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Markers */}
      <section className="px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-3 gap-6 md:gap-8">
            {[
              { icon: '📄', number: '50K+', label: 'Documents Notarized' },
              { icon: '⭐', number: '10+', label: 'Years Experience' },
              { icon: '😊', number: '99.8%', label: 'Satisfaction Rate' }
            ].map((stat, i) => (
              <div 
                key={i} 
                className="group relative p-6 text-center rounded-xl border border-slate-200 bg-white hover:border-blue-300 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300 cursor-pointer"
              >
                <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">{stat.icon}</div>
                <div className="text-3xl md:text-4xl font-black bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">{stat.number}</div>
                <p className="text-xs text-slate-600 mt-2 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 relative">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-16">How It Works</h2>
          
          <div className="space-y-6">
            {[
              { num: '01', title: 'Schedule', desc: 'Pick your service & preferred time', icon: Clock, color: 'from-blue-500 to-blue-600' },
              { num: '02', title: 'Upload Documents', desc: 'Securely upload via encrypted portal', icon: Lock, color: 'from-blue-600 to-blue-700' },
              { num: '03', title: 'Meet & Verify', desc: 'Video conference or in-person', icon: Users, color: 'from-blue-700 to-blue-800' },
              { num: '04', title: 'Receive Notarized', desc: 'Digital & mailed documents', icon: Check, color: 'from-blue-400 to-blue-500' }
            ].map((step, i) => (
              <div key={i} className="group">
                <div className={`flex items-center gap-6 p-6 rounded-2xl bg-gradient-to-br ${step.color} text-white relative overflow-hidden shadow-lg hover:shadow-2xl transition-all transform hover:scale-105 hover:-translate-y-1`}>
                  <div className="absolute -right-10 -bottom-10 w-32 h-32 bg-white/10 rounded-full blur-2xl group-hover:scale-125 transition-transform"></div>
                  
                  <div className="relative">
                    <div className="text-4xl font-black opacity-30">{step.num}</div>
                    <step.icon size={28} className="absolute top-0 left-0" />
                  </div>
                  
                  <div className="relative flex-1">
                    <h3 className="text-xl font-bold mb-1">{step.title}</h3>
                    <p className="text-sm opacity-90">{step.desc}</p>
                  </div>
                  
                  {i < 3 && <ArrowRight size={24} className="flex-shrink-0 hidden md:block opacity-50 group-hover:opacity-100 group-hover:translate-x-2 transition-all" />}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-20 w-96 h-96 bg-blue-400 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black mb-16">Why Click for Notary</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { 
                icon: Zap, 
                title: 'Lightning Fast', 
                items: ['Same-day service', 'Minutes not days', 'Quick verification'] 
              },
              { 
                icon: Shield, 
                title: 'Fortress Secure', 
                items: ['Military encryption', 'Compliance certified', 'Privacy protected'] 
              }
            ].map((feature, i) => (
              <div key={i} className="group">
                <div className="relative p-8 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 hover:border-white/40 hover:bg-white/15 transition-all">
                  <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
                    <feature.icon size={48} />
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                    <feature.icon className="text-blue-300" />
                    {feature.title}
                  </h3>
                  
                  <ul className="space-y-2">
                    {feature.items.map((item, j) => (
                      <li key={j} className="flex items-center gap-2 text-sm opacity-90">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-300"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-block mb-6 px-6 py-3 rounded-full bg-gradient-to-r from-blue-100 to-blue-50 border border-blue-200">
            <span className="text-sm font-bold bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">Ready to get notarized?</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-black text-slate-900 mb-6 leading-tight">
            Schedule in <span className="bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">2 minutes</span>
          </h2>
          
          <p className="text-xl text-slate-600 mb-8 max-w-md mx-auto">No hidden fees. No long waits. Professional notarization, delivered.</p>
          
          <button 
            onClick={() => setPage('booking')}
            className="group relative inline-block"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
            <div className="relative bg-white px-8 py-4 rounded-xl font-bold text-slate-900 group-hover:text-blue-600 transition">
              Book Your Appointment →
            </div>
          </button>
        </div>
      </section>
    </div>
  );
}

function ServicesPage({ setPage }) {
  return (
    <div className="px-4 sm:px-6 lg:px-8 py-20">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-black text-slate-900 mb-4">Services</h1>
        <p className="text-xl text-slate-600 mb-16 max-w-2xl">Professional notarization for every need. All prices shown are starting rates.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { name: 'General Notarization', price: '$25', icon: '📄' },
            { name: 'Loan Signing', price: '$150+', icon: '🏠' },
            { name: 'Power of Attorney', price: '$50', icon: '⚖️' },
            { name: 'Apostille / Intl', price: '$50+', icon: '🌍' },
            { name: 'Remote Video', price: '$30', icon: '📹' },
            { name: 'Mobile Notary', price: '$75+', icon: '🚗' }
          ].map((service, idx) => (
            <div 
              key={idx} 
              className="group relative p-6 bg-white rounded-2xl border border-slate-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden"
            >
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-blue-500 to-blue-600 opacity-5 rounded-full blur-3xl group-hover:opacity-10 group-hover:scale-150 transition-all duration-300"></div>
              
              <div className="relative">
                <div className="text-4xl mb-3">{service.icon}</div>
                <h3 className="font-bold text-slate-900 text-lg mb-2 group-hover:text-blue-600 transition">{service.name}</h3>
                <div className="text-2xl font-black text-blue-600">{service.price}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function BookingPage() {
  const [service, setService] = useState('general');

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-20">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-5xl font-black text-slate-900 mb-4">Book Now</h1>
        <p className="text-slate-600 mb-12">Quick & secure appointment scheduling</p>
        
        <form className="space-y-6">
          <div>
            <label className="block font-bold text-slate-900 text-sm mb-4">Select Service</label>
            <div className="grid grid-cols-2 gap-3">
              {[
                { id: 'general', label: 'General', price: '$25', icon: '📄' },
                { id: 'loan', label: 'Loan', price: '$150+', icon: '🏠' },
                { id: 'poa', label: 'POA', price: '$50', icon: '⚖️' },
                { id: 'video', label: 'Video', price: '$30', icon: '📹' }
              ].map(s => (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => setService(s.id)}
                  className={`p-4 rounded-xl text-sm font-bold transition-all border-2 relative overflow-hidden group ${
                    service === s.id
                      ? 'border-blue-600 bg-blue-50 text-blue-600 shadow-lg shadow-blue-500/30'
                      : 'border-slate-200 text-slate-700 hover:border-blue-300'
                  }`}
                >
                  <div className="relative z-10">
                    <div className="text-2xl mb-1">{s.icon}</div>
                    <div>{s.label}</div>
                    <div className="text-xs opacity-70">{s.price}</div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block font-bold text-slate-900 text-sm mb-2">Date</label>
              <input type="date" className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-500/10 transition" />
            </div>
            <div>
              <label className="block font-bold text-slate-900 text-sm mb-2">Time</label>
              <select className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-500/10 transition">
                <option>9:00 AM</option>
                <option>10:00 AM</option>
                <option>11:00 AM</option>
                <option>1:00 PM</option>
                <option>2:00 PM</option>
                <option>3:00 PM</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block font-bold text-slate-900 text-sm mb-2">Full Name</label>
            <input type="text" placeholder="John Doe" className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-500/10 transition" />
          </div>

          <div>
            <label className="block font-bold text-slate-900 text-sm mb-2">Email</label>
            <input type="email" placeholder="john@example.com" className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-500/10 transition" />
          </div>

          <div>
            <label className="block font-bold text-slate-900 text-sm mb-2">Phone</label>
            <input type="tel" placeholder="(555) 123-4567" className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-500/10 transition" />
          </div>

          <button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold py-4 rounded-xl transition-all shadow-lg hover:shadow-blue-600/50 mt-8">
            Confirm Appointment
          </button>
        </form>
      </div>
    </div>
  );
}

function ContactPage() {
  return (
    <div className="px-4 sm:px-6 lg:px-8 py-20">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {[
            { icon: Phone, title: 'Phone', value: '(555) 123-4567', detail: 'Mon-Fri, 8AM-6PM EST' },
            { icon: Mail, title: 'Email', value: 'hello@clickfornotary.com', detail: 'Usually 2 hours' },
            { icon: MapPin, title: 'Service Area', value: 'All 50 States & International', detail: 'Virginia Commissioned • Bilingual' }
          ].map((contact, i) => (
            <div key={i} className="group relative p-8 rounded-2xl bg-white border border-slate-200 hover:border-slate-300 hover:shadow-xl transition-all">
              <div className="absolute -top-12 -right-12 w-32 h-32 bg-gradient-to-br from-blue-500 to-blue-600 opacity-5 rounded-full group-hover:opacity-10 transition-opacity"></div>
              
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 text-white flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <contact.icon size={24} />
              </div>
              
              <h3 className="font-bold text-slate-900 text-lg mb-2">{contact.title}</h3>
              <p className="font-semibold text-slate-900 mb-1">{contact.value}</p>
              <p className="text-xs text-slate-500">{contact.detail}</p>
            </div>
          ))}
        </div>

        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Send a Message</h2>
          <form className="space-y-4">
            <input type="text" placeholder="Your name" className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-500/10 transition" />
            <input type="email" placeholder="your@email.com" className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-500/10 transition" />
            <textarea placeholder="Message" rows={4} className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-500/10 transition resize-none"></textarea>
            <button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold py-3 rounded-xl transition-all shadow-lg hover:shadow-blue-600/50">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
