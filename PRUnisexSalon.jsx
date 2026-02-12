import { useState, useEffect, useRef } from 'react'
import {
  Phone, MessageCircle, MapPin, Clock, Star, ChevronDown,
  Scissors, Sparkles, Heart, Award, Shield, Users, Menu, X,
  Instagram, Facebook, Youtube, ArrowRight, CheckCircle, 
  Smile, Droplets, Wind, Leaf
} from 'lucide-react'

const WHATSAPP_URL = 'https://wa.me/918414916341?text=Hi%2C%20I%20would%20like%20to%20book%20an%20appointment%20at%20PR%20Unisex%20Salon'
const PHONE_URL = 'tel:+918414916341'
const MAPS_URL = 'https://maps.app.goo.gl/2addF8ZLpYViQHhi6'

const services = [
  {
    id: 1,
    category: 'Hair',
    name: 'Haircut & Styling',
    description: 'Precision cuts tailored to your face shape and lifestyle by expert stylists.',
    price: '₹150+',
    duration: '30-45 min',
    icon: Scissors,
    image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=400&h=280&fit=crop&auto=format',
    popular: true,
  },
  {
    id: 2,
    category: 'Hair',
    name: 'Hair Styling',
    description: 'Blowouts, curls, straightening & special occasion updos with premium products.',
    price: '₹200+',
    duration: '45-60 min',
    icon: Sparkles,
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400&h=280&fit=crop&auto=format',
  },
  {
    id: 3,
    category: 'Hair',
    name: 'Hair Wash & Dry',
    description: 'Rejuvenating shampoo with scalp massage, conditioning & professional blow dry.',
    price: '₹120+',
    duration: '20-30 min',
    icon: Droplets,
    image: 'https://images.unsplash.com/photo-1634449571010-02389ed0f9b0?w=400&h=280&fit=crop&auto=format',
  },
  {
    id: 4,
    category: 'Hair',
    name: 'Hair Spa',
    description: 'Deep nourishing spa treatment to restore moisture, shine and vitality to your hair.',
    price: '₹350+',
    duration: '60-90 min',
    icon: Leaf,
    image: 'https://images.unsplash.com/photo-1583875762487-5f8f7c718d14?w=400&h=280&fit=crop&auto=format',
    popular: true,
  },
  {
    id: 5,
    category: 'Hair',
    name: 'Hair Treatment',
    description: 'Targeted professional treatments for damage repair, dandruff & hair fall control.',
    price: '₹400+',
    duration: '60 min',
    icon: Sparkles,
    image: 'https://images.unsplash.com/photo-1522338242992-e1a54906a8da?w=400&h=280&fit=crop&auto=format',
  },
  {
    id: 6,
    category: 'Grooming',
    name: 'Beard Styling',
    description: 'Expert beard shaping, trimming & grooming for a sharp, well-defined look.',
    price: '₹100+',
    duration: '20-30 min',
    icon: Scissors,
    image: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=400&h=280&fit=crop&auto=format',
    popular: true,
  },
  {
    id: 7,
    category: 'Grooming',
    name: 'Clean Shave',
    description: 'Traditional hot towel shave with premium products for a smooth, refreshing finish.',
    price: '₹80+',
    duration: '15-20 min',
    icon: Scissors,
    image: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=400&h=280&fit=crop&auto=format',
  },
  {
    id: 8,
    category: 'Grooming',
    name: 'Complete Grooming',
    description: 'Head-to-toe premium grooming package — haircut, beard styling, facial & more.',
    price: '₹600+',
    duration: '90-120 min',
    icon: Award,
    image: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=400&h=280&fit=crop&auto=format',
    popular: true,
  },
  {
    id: 9,
    category: 'Beauty',
    name: 'Facial',
    description: 'Revitalizing deep-cleanse facial for glowing, healthy, refreshed-looking skin.',
    price: '₹300+',
    duration: '45-60 min',
    icon: Smile,
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=400&h=280&fit=crop&auto=format',
  },
  {
    id: 10,
    category: 'Beauty',
    name: 'Cleanup',
    description: 'Quick, targeted skin cleanup to remove dead cells, unclog pores & brighten skin.',
    price: '₹200+',
    duration: '30-45 min',
    icon: Sparkles,
    image: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=400&h=280&fit=crop&auto=format',
  },
  {
    id: 11,
    category: 'Beauty',
    name: 'Makeup',
    description: 'Professional makeup artistry for all occasions — bridal, party, engagement & events.',
    price: '₹500+',
    duration: '60-90 min',
    icon: Heart,
    image: 'https://images.unsplash.com/photo-1512207736890-6ffed8a84e8d?w=400&h=280&fit=crop&auto=format',
    popular: true,
  },
  {
    id: 12,
    category: 'Beauty',
    name: 'Skin Treatment',
    description: 'Advanced skin treatments targeting specific concerns for healthier, luminous skin.',
    price: '₹400+',
    duration: '45-60 min',
    icon: Leaf,
    image: 'https://images.unsplash.com/photo-1498843053639-170ff2122f35?w=400&h=280&fit=crop&auto=format',
  },
  {
    id: 13,
    category: 'Hair',
    name: 'Hair Coloring',
    description: 'Full color, highlights, balayage & color correction with professional grade products.',
    price: '₹700+',
    duration: '90-120 min',
    icon: Wind,
    image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?w=400&h=280&fit=crop&auto=format',
  },
  {
    id: 14,
    category: 'Beauty',
    name: 'Threading & Waxing',
    description: 'Precise eyebrow threading, full face threading & smooth waxing services.',
    price: '₹50+',
    duration: '10-30 min',
    icon: Scissors,
    image: 'https://images.unsplash.com/photo-1588516903720-8ceb67f96d58?w=400&h=280&fit=crop&auto=format',
  },
]

const testimonials = [
  { name: 'Priya Sharma', rating: 5, text: 'Best salon in Kharsang! The hair spa was absolutely amazing. My hair feels so silky now.', role: 'Regular Customer' },
  { name: 'Rohan Das', rating: 5, text: 'Excellent beard styling! The staff are skilled and very professional. Highly recommended!', role: 'Loyal Customer' },
  { name: 'Sunita Boruah', rating: 5, text: 'Love this place! Clean, hygienic and they use quality products. My go-to salon always.', role: 'Happy Client' },
  { name: 'Amit Gogoi', rating: 4, text: 'Great haircut experience. The stylist understood exactly what I wanted. Will come back!', role: 'Customer' },
  { name: 'Deepika Choudhury', rating: 5, text: 'The bridal makeup they did for my wedding was stunning. Got so many compliments!', role: 'Bridal Client' },
  { name: 'Bikash Hazarika', rating: 5, text: 'Clean environment, friendly staff, great value for money. Best grooming in the area!', role: 'Regular Customer' },
]

const galleryImages = [
  { url: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=400&h=400&fit=crop', alt: 'Salon interior' },
  { url: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400&h=400&fit=crop', alt: 'Hair styling' },
  { url: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=400&h=400&fit=crop', alt: 'Beard grooming' },
  { url: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=400&h=400&fit=crop', alt: 'Facial treatment' },
  { url: 'https://images.unsplash.com/photo-1512207736890-6ffed8a84e8d?w=400&h=400&fit=crop', alt: 'Makeup artistry' },
  { url: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?w=400&h=400&fit=crop', alt: 'Hair coloring' },
]

const features = [
  { icon: Award, title: 'Expert Stylists', desc: 'Professionally trained team with years of experience in modern techniques.' },
  { icon: Shield, title: 'Premium Products', desc: 'Only top-tier, trusted brands used for every service we offer.' },
  { icon: Sparkles, title: 'Hygienic Standards', desc: 'Sterilized tools and a spotlessly clean environment for every visit.' },
  { icon: Heart, title: 'Personalized Care', desc: 'Every service is tailored specifically to your unique needs and style.' },
  { icon: Users, title: 'Unisex Services', desc: 'Welcoming services for men, women and everyone in between.' },
  { icon: CheckCircle, title: 'Affordable Prices', desc: 'Premium quality grooming at prices that respect your budget.' },
]

export default function PRUnisexSalon() {
  const [navOpen, setNavOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeCategory, setActiveCategory] = useState('All')
  const [visibleSections, setVisibleSections] = useState({})
  const sectionsRef = useRef({})

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => ({ ...prev, [entry.target.id]: true }))
          }
        })
      },
      { threshold: 0.1 }
    )
    Object.values(sectionsRef.current).forEach((el) => el && observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const registerSection = (id) => (el) => {
    if (el) sectionsRef.current[id] = el
  }

  const categories = ['All', 'Hair', 'Grooming', 'Beauty']
  const filteredServices = activeCategory === 'All' ? services : services.filter((s) => s.category === activeCategory)

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setNavOpen(false)
  }

  return (
    <div className="min-h-screen bg-cream font-sans">
      {/* ───── STICKY NAV ───── */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-navy shadow-2xl py-2' : 'bg-transparent py-4'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full gold-gradient flex items-center justify-center">
              <Scissors className="w-5 h-5 text-navy" />
            </div>
            <div>
              <div className="font-serif font-bold text-gold text-lg leading-none">PR Unisex</div>
              <div className="text-white/60 text-xs tracking-widest uppercase">Salon</div>
            </div>
          </div>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {['services', 'gallery', 'about', 'location'].map((item) => (
              <button
                key={item}
                onClick={() => scrollTo(item)}
                className="text-white/80 hover:text-gold transition-colors text-sm tracking-wide capitalize"
              >
                {item}
              </button>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <a href={PHONE_URL} className="flex items-center gap-2 text-white/80 hover:text-gold transition-colors text-sm">
              <Phone className="w-4 h-4" />
              +91 84149 16341
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gold text-navy px-5 py-2 rounded-full text-sm font-semibold hover:bg-yellow-400 transition-all hover:shadow-lg hover:shadow-gold/30 animate-pulse-gold"
            >
              BOOK NOW
            </a>
          </div>

          {/* Mobile hamburger */}
          <button className="md:hidden text-white p-1" onClick={() => setNavOpen(!navOpen)}>
            {navOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {navOpen && (
          <div className="md:hidden bg-navy border-t border-gold/20 px-4 py-6 flex flex-col gap-4">
            {['services', 'gallery', 'about', 'location'].map((item) => (
              <button key={item} onClick={() => scrollTo(item)} className="text-white/80 capitalize text-left hover:text-gold">
                {item}
              </button>
            ))}
            <a href={PHONE_URL} className="flex items-center gap-2 text-white/80 text-sm"><Phone className="w-4 h-4" /> +91 84149 16341</a>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="bg-gold text-navy px-5 py-2 rounded-full text-sm font-semibold text-center">
              BOOK NOW
            </a>
          </div>
        )}
      </nav>

      {/* ───── HERO ───── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=1920&h=1080&fit=crop&auto=format')` }}
        />
        <div className="hero-overlay absolute inset-0" />

        {/* Decorative gold lines */}
        <div className="absolute top-0 left-0 w-full h-1 gold-gradient opacity-60" />
        <div className="absolute bottom-0 left-0 w-full h-1 gold-gradient opacity-60" />

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 bg-gold/20 border border-gold/40 rounded-full px-5 py-2 mb-6 backdrop-blur-sm">
            <Star className="w-3 h-3 text-gold fill-current" />
            <span className="text-gold text-xs font-semibold tracking-widest uppercase">Kharsang's Finest Grooming</span>
            <Star className="w-3 h-3 text-gold fill-current" />
          </div>

          {/* Headline */}
          <h1 className="font-serif text-white text-5xl md:text-7xl font-bold leading-tight mb-4 text-shadow-lg">
            Look Your
            <span className="block gold-text-gradient">Absolute Best</span>
          </h1>

          <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-8 leading-relaxed">
            Premium grooming & beauty services in the heart of Kharsang. Where every visit transforms your confidence.
          </p>

          {/* Rating */}
          <div className="flex items-center justify-center gap-2 mb-8">
            {[1,2,3,4].map(i => <Star key={i} className="w-5 h-5 text-gold fill-current" />)}
            <Star className="w-5 h-5 text-gold/50" />
            <span className="text-white/80 ml-1 text-sm">4.0 on Google</span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-gold text-navy px-8 py-4 rounded-full font-bold text-base hover:bg-yellow-300 transition-all hover:shadow-2xl hover:shadow-gold/40 hover:-translate-y-1 duration-200"
            >
              <MessageCircle className="w-5 h-5" />
              Book via WhatsApp
            </a>
            <a
              href={PHONE_URL}
              className="flex items-center gap-3 border-2 border-white/50 text-white px-8 py-4 rounded-full font-semibold text-base hover:border-gold hover:text-gold transition-all hover:-translate-y-1 duration-200"
            >
              <Phone className="w-5 h-5" />
              Call Now
            </a>
          </div>

          {/* Quick info */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-6">
            {[
              { icon: Clock, text: 'Open 10AM–8PM Daily' },
              { icon: MapPin, text: 'Near Kharsang Bridge' },
              { icon: Phone, text: '+91 84149 16341' },
            ].map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-2 text-white/70 text-sm">
                <Icon className="w-4 h-4 text-gold" />
                {text}
              </div>
            ))}
          </div>
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-gold/60" />
        </div>
      </section>

      {/* ───── WHY CHOOSE US ───── */}
      <section
        id="about"
        ref={registerSection('about')}
        className="py-20 bg-navy"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-14 transition-all duration-700 ${visibleSections['about'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <p className="text-gold text-xs tracking-[0.3em] uppercase font-semibold mb-3">Why Choose Us</p>
            <h2 className="font-serif text-white text-4xl md:text-5xl font-bold mb-4">
              The PR Difference
            </h2>
            <div className="divider-gold w-24 mx-auto" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map(({ icon: Icon, title, desc }, i) => (
              <div
                key={title}
                className={`glass rounded-2xl p-7 gold-border card-hover transition-all duration-700 delay-${i * 100} ${visibleSections['about'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              >
                <div className="w-12 h-12 rounded-xl gold-gradient flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-navy" />
                </div>
                <h3 className="font-serif text-white text-xl font-semibold mb-2">{title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── SERVICES ───── */}
      <section id="services" ref={registerSection('services')} className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-12 transition-all duration-700 ${visibleSections['services'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <p className="text-gold text-xs tracking-[0.3em] uppercase font-semibold mb-3">What We Offer</p>
            <h2 className="font-serif text-navy text-4xl md:text-5xl font-bold mb-4">Our Services</h2>
            <div className="divider-gold w-24 mx-auto mb-8" />

            {/* Category filter */}
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                    activeCategory === cat
                      ? 'bg-navy text-gold shadow-lg'
                      : 'bg-white text-navy/60 hover:bg-navy/10 border border-navy/20'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredServices.map((service, i) => {
              const Icon = service.icon
              return (
                <div
                  key={service.id}
                  className="service-card bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
                  style={{ animationDelay: `${i * 50}ms` }}
                >
                  {/* Image */}
                  <div className="relative h-44 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.name}
                      className="service-img w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent" />

                    {/* Popular badge */}
                    {service.popular && (
                      <div className="absolute top-3 left-3 bg-gold text-navy text-xs font-bold px-2 py-1 rounded-full">
                        Popular
                      </div>
                    )}

                    {/* Icon badge */}
                    <div className="absolute top-3 right-3 w-8 h-8 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                      <Icon className="w-4 h-4 text-white" />
                    </div>

                    {/* Category */}
                    <div className="absolute bottom-3 left-3">
                      <span className="text-white/70 text-xs tracking-wider uppercase">{service.category}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <h3 className="font-serif text-navy text-lg font-semibold mb-1">{service.name}</h3>
                    <p className="text-navy/60 text-xs leading-relaxed mb-4">{service.description}</p>

                    <div className="flex items-center justify-between mb-4">
                      <span className="text-gold font-bold text-lg">{service.price}</span>
                      <span className="text-navy/40 text-xs flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {service.duration}
                      </span>
                    </div>

                    <a
                      href={WHATSAPP_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center gap-2 bg-navy text-white py-2.5 rounded-xl text-sm font-semibold hover:bg-gold hover:text-navy transition-all duration-200"
                    >
                      Book This Service
                      <ArrowRight className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-12">
            <p className="text-navy/60 mb-4">Can't find what you're looking for? Just ask!</p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-navy text-gold px-8 py-3 rounded-full font-semibold hover:bg-gold hover:text-navy transition-all duration-200"
            >
              <MessageCircle className="w-4 h-4" />
              Ask on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* ───── GALLERY ───── */}
      <section id="gallery" ref={registerSection('gallery')} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-12 transition-all duration-700 ${visibleSections['gallery'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <p className="text-gold text-xs tracking-[0.3em] uppercase font-semibold mb-3">Our Work</p>
            <h2 className="font-serif text-navy text-4xl md:text-5xl font-bold mb-4">Gallery</h2>
            <div className="divider-gold w-24 mx-auto" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map((img, i) => (
              <div key={i} className="relative overflow-hidden rounded-2xl aspect-square group cursor-pointer">
                <img
                  src={img.url}
                  alt={img.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/40 transition-all duration-300 flex items-center justify-center">
                  <Sparkles className="w-8 h-8 text-gold opacity-0 group-hover:opacity-100 transition-all duration-300 scale-50 group-hover:scale-100" />
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-navy/60 hover:text-gold transition-colors text-sm"
            >
              <Instagram className="w-4 h-4" />
              Follow us for more amazing transformations
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* ───── TESTIMONIALS ───── */}
      <section className="py-20 bg-navy overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
          <p className="text-gold text-xs tracking-[0.3em] uppercase font-semibold mb-3">Happy Clients</p>
          <h2 className="font-serif text-white text-4xl md:text-5xl font-bold">What They Say</h2>
          <div className="divider-gold w-24 mx-auto mt-4" />
        </div>

        {/* Auto-scrolling testimonials */}
        <div className="relative flex overflow-hidden" style={{ maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}>
          <div className="testimonial-track flex gap-6 whitespace-nowrap">
            {[...testimonials, ...testimonials].map((t, i) => (
              <div
                key={i}
                className="glass gold-border rounded-2xl p-6 min-w-72 max-w-72 inline-block whitespace-normal"
              >
                <div className="flex items-center gap-1 mb-3">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 text-gold fill-current" />
                  ))}
                </div>
                <p className="text-white/80 text-sm leading-relaxed mb-4">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full gold-gradient flex items-center justify-center text-navy font-bold text-sm">
                    {t.name[0]}
                  </div>
                  <div>
                    <div className="text-white text-sm font-semibold">{t.name}</div>
                    <div className="text-white/40 text-xs">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── LOCATION & HOURS ───── */}
      <section id="location" ref={registerSection('location')} className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-12 transition-all duration-700 ${visibleSections['location'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <p className="text-gold text-xs tracking-[0.3em] uppercase font-semibold mb-3">Visit Us</p>
            <h2 className="font-serif text-navy text-4xl md:text-5xl font-bold mb-4">Find Us</h2>
            <div className="divider-gold w-24 mx-auto" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Info */}
            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-7 shadow-sm">
                <h3 className="font-serif text-navy text-2xl font-bold mb-6">PR Unisex Salon</h3>

                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-navy/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <MapPin className="w-5 h-5 text-gold" />
                    </div>
                    <div>
                      <div className="text-navy font-semibold text-sm mb-1">Address</div>
                      <div className="text-navy/60 text-sm leading-relaxed">
                        Near Kharsang Bridge (Left side)<br />
                        Kharsang, Changlang<br />
                        Arunachal Pradesh – 792122
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-navy/10 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-gold" />
                    </div>
                    <div>
                      <div className="text-navy font-semibold text-sm mb-1">Hours</div>
                      <div className="text-navy/60 text-sm">Monday – Sunday: 10:00 AM – 8:00 PM</div>
                      <div className="inline-flex items-center gap-1 bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full mt-1 font-semibold">
                        <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                        Open Today
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-navy/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-gold" />
                    </div>
                    <div>
                      <div className="text-navy font-semibold text-sm mb-1">Contact</div>
                      <a href={PHONE_URL} className="text-navy hover:text-gold transition-colors text-sm block">+91 84149 16341</a>
                      <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-700 transition-colors text-sm flex items-center gap-1 mt-0.5">
                        <MessageCircle className="w-3 h-3" /> WhatsApp us
                      </a>
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex gap-3">
                  <a
                    href={MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 bg-navy text-white py-3 rounded-xl text-sm font-semibold hover:bg-gold hover:text-navy transition-all"
                  >
                    <MapPin className="w-4 h-4" />
                    Get Directions
                  </a>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 bg-green-500 text-white py-3 rounded-xl text-sm font-semibold hover:bg-green-600 transition-all"
                  >
                    <MessageCircle className="w-4 h-4" />
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="rounded-2xl overflow-hidden shadow-lg h-96 lg:h-auto min-h-96">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3636.87!2d95.8!3d27.2!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sKharsang%2C%20Arunachal%20Pradesh!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '380px' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="PR Unisex Salon Location - Kharsang, Arunachal Pradesh"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ───── BOOKING CTA BANNER ───── */}
      <section className="py-16 bg-navy relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-gold rounded-full blur-3xl" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-serif text-white text-3xl md:text-4xl font-bold mb-4">
            Ready for Your <span className="gold-text-gradient">Transformation?</span>
          </h2>
          <p className="text-white/70 mb-8">
            Book your appointment now — just message us on WhatsApp!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-green-500 text-white px-8 py-4 rounded-full font-bold text-base hover:bg-green-400 transition-all hover:shadow-2xl hover:-translate-y-1 duration-200"
            >
              <MessageCircle className="w-5 h-5" />
              Book on WhatsApp
            </a>
            <a
              href={PHONE_URL}
              className="flex items-center justify-center gap-3 border-2 border-gold text-gold px-8 py-4 rounded-full font-semibold text-base hover:bg-gold hover:text-navy transition-all hover:-translate-y-1 duration-200"
            >
              <Phone className="w-5 h-5" />
              Call +91 84149 16341
            </a>
          </div>
        </div>
      </section>

      {/* ───── FOOTER ───── */}
      <footer className="bg-black text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-10 border-b border-white/10">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full gold-gradient flex items-center justify-center">
                  <Scissors className="w-5 h-5 text-navy" />
                </div>
                <div>
                  <div className="font-serif font-bold text-gold text-xl">PR Unisex Salon</div>
                  <div className="text-white/40 text-xs tracking-widest">Kharsang</div>
                </div>
              </div>
              <p className="text-white/50 text-sm leading-relaxed">
                Premium grooming & beauty services trusted by the people of Kharsang since day one.
              </p>
              {/* Social */}
              <div className="flex gap-3 mt-5">
                <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-white/10 hover:bg-gold/20 hover:text-gold flex items-center justify-center transition-all">
                  <Instagram className="w-4 h-4" />
                </a>
                <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-white/10 hover:bg-gold/20 hover:text-gold flex items-center justify-center transition-all">
                  <Facebook className="w-4 h-4" />
                </a>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-white/10 hover:bg-gold/20 hover:text-gold flex items-center justify-center transition-all">
                  <MessageCircle className="w-4 h-4" />
                </a>
                <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-white/10 hover:bg-gold/20 hover:text-gold flex items-center justify-center transition-all">
                  <Youtube className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Quick links */}
            <div>
              <h4 className="font-serif text-gold font-semibold mb-4">Services</h4>
              <div className="space-y-2">
                {['Haircut & Styling', 'Hair Spa', 'Beard Styling', 'Facial', 'Makeup', 'Hair Coloring'].map(s => (
                  <button
                    key={s}
                    onClick={() => scrollTo('services')}
                    className="block text-white/50 hover:text-gold transition-colors text-sm text-left"
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-serif text-gold font-semibold mb-4">Contact</h4>
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
                  <span className="text-white/50">Near Kharsang Bridge (Left side), Kharsang, Changlang, Arunachal Pradesh – 792122</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-gold flex-shrink-0" />
                  <a href={PHONE_URL} className="text-white/50 hover:text-gold transition-colors">+91 84149 16341</a>
                </div>
                <div className="flex items-center gap-3">
                  <MessageCircle className="w-4 h-4 text-gold flex-shrink-0" />
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-gold transition-colors">WhatsApp Booking</a>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-4 h-4 text-gold flex-shrink-0" />
                  <span className="text-white/50">Mon–Sun: 10AM – 8PM</span>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-white/30 text-xs">
              © 2025 PR Unisex Salon, Kharsang. All rights reserved.
            </p>
            <div className="flex items-center gap-1">
              {[1,2,3,4].map(i => <Star key={i} className="w-3 h-3 text-gold fill-current" />)}
              <span className="text-white/30 text-xs ml-1">4.0 on Google Maps</span>
            </div>
          </div>
        </div>
      </footer>

      {/* ───── FLOATING WHATSAPP ───── */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float w-14 h-14 bg-green-500 hover:bg-green-400 text-white rounded-full shadow-2xl flex items-center justify-center transition-all hover:scale-110 duration-200"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-7 h-7" />
      </a>
    </div>
  )
}
