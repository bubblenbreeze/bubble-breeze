import React, { useState } from 'react';
import { ShoppingBag, Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav style={{ padding: '1.5rem 0', position: 'sticky', top: 0, backgroundColor: 'rgba(253, 251, 247, 0.9)', backdropFilter: 'blur(10px)', zIndex: 100 }}>
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <a href="/" style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', fontWeight: '700', color: 'var(--color-text)', textDecoration: 'none' }}>
                    Bubble Breeze
                </a>

                {/* Desktop Menu */}
                <div className="desktop-menu" style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
                    <a href="#shop" style={{ textDecoration: 'none', color: 'var(--color-text)' }}>Shop</a>
                    <a href="#about" style={{ textDecoration: 'none', color: 'var(--color-text)' }}>Our Story</a>
                    <a href="#contact" style={{ textDecoration: 'none', color: 'var(--color-text)' }}>Contact</a>
                    <button style={{ position: 'relative' }}>
                        <ShoppingBag size={20} color="var(--color-text)" />
                        <span style={{ position: 'absolute', top: -5, right: -5, backgroundColor: 'var(--color-primary)', borderRadius: '50%', width: '16px', height: '16px', fontSize: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>0</span>
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <button className="mobile-menu-btn" onClick={() => setIsOpen(!isOpen)} style={{ display: 'none' }}>
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu Overlay - simplified for now */}
            <style>{`
        @media (max-width: 768px) {
          .desktop-menu {
            display: none !important;
          }
          .mobile-menu-btn {
            display: block !important;
          }
        }
      `}</style>
        </nav>
    );
};

export default Navbar;
