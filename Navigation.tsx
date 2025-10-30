'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaPhone, FaFacebook, FaInstagram, FaEnvelope } from 'react-icons/fa'
import { HiMenu, HiX } from 'react-icons/hi'
import Link from 'next/link'

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Our Bread', href: '#menu' },
    { name: 'Sweet Treats', href: '#menu' },
    { name: 'Our Story', href: '#about' },
    { name: 'Catering', href: '#catering' },
    { name: 'Recipes', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-primary/95 backdrop-blur-lg shadow-2xl py-4' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        <motion.div 
          className="flex items-center space-x-2"
          whileHover={{ scale: 1.05, rotate: 2 }}
          transition={{ type: 'spring', stiffness: 300 }}
          style={{ perspective: '1000px' }}
        >
          <Link href="/" className="flex items-center space-x-3">
            <div className="text-2xl font-script text-secondary hover:text-accent transition-colors">Woodward St Bakery Café</div>
          </Link>
        </motion.div>

        <div className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.href}
              className="text-light hover:text-secondary transition-colors duration-300 text-sm tracking-wider uppercase font-medium relative"
              whileHover={{ 
                y: -3, 
                rotateX: 5, 
                rotateY: 5,
                textShadow: '0 0 20px rgba(201, 164, 104, 0.5)'
              }}
              initial={{ opacity: 0, y: -20, rotateX: -15 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ delay: index * 0.12, type: 'spring', stiffness: 300 }}
              style={{ perspective: '1000px', transformStyle: 'preserve-3d' }}
            >
              {link.name}
              <motion.div 
                className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-secondary to-accent"
                initial={{ width: '0%' }}
                whileHover={{ width: '100%' }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
          ))}
        </div>

        <div className="hidden lg:flex items-center space-x-4">
          <motion.div 
            className="text-secondary text-sm hover:text-accent transition-colors"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 }}
            whileHover={{ scale: 1.05 }}
          >
            ☎️ <span className="font-semibold">1472014614 0931</span>
          </motion.div>
          <div className="flex space-x-3">
            <motion.a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-light hover:text-secondary transition-colors"
              whileHover={{ scale: 1.2, rotate: 5 }}
            >
              <FaFacebook size={18} />
            </motion.a>
            <motion.a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-light hover:text-secondary transition-colors"
              whileHover={{ scale: 1.2, rotate: -5 }}
            >
              <FaInstagram size={18} />
            </motion.a>
            <motion.a
              href="mailto:info@crumbandco.com"
              className="text-light hover:text-secondary transition-colors"
              whileHover={{ scale: 1.2, rotate: 5 }}
            >
              <FaEnvelope size={18} />
            </motion.a>
          </div>
        </div>

        <button
          className="lg:hidden text-light text-3xl"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="lg:hidden bg-primary/98 backdrop-blur-lg mt-4"
        >
          <div className="container-custom py-6 space-y-4">
            {navLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                className="block text-light hover:text-secondary transition-colors py-2 text-lg"
                onClick={() => setIsMobileMenuOpen(false)}
                whileHover={{ x: 5 }}
              >
                {link.name}
              </motion.a>
            ))}
            <div className="pt-4 border-t border-secondary/30">
              <p className="text-secondary text-sm mb-2">
                Call us: <span className="font-semibold">1472014614 0931</span>
              </p>
              <div className="flex space-x-4">
                <a href="https://facebook.com" className="text-light hover:text-secondary">
                  <FaFacebook size={20} />
                </a>
                <a href="https://instagram.com" className="text-light hover:text-secondary">
                  <FaInstagram size={20} />
                </a>
                <a href="mailto:info@crumbandco.com" className="text-light hover:text-secondary">
                  <FaEnvelope size={20} />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </motion.nav>
  )
}

export default Navigation
