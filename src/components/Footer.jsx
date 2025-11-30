import React from 'react';
import { Instagram, Facebook, Mail } from 'lucide-react';

const Footer = () => {
    return (
        <footer style={{ backgroundColor: 'var(--color-text)', color: 'var(--color-cream)', padding: '4rem 0 2rem' }}>
            <div className="container">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '3rem', marginBottom: '3rem' }}>
                    <div>
                        <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', marginBottom: '1.5rem', color: 'var(--color-cream)' }}>Bubble Breeze</h3>
                        <p style={{ color: '#ccc', marginBottom: '1.5rem' }}>
                            Hand-crafted candles made with a unique triple wax blend for a cleaner, longer-lasting burn.
                        </p>
                        <div style={{ display: 'flex', gap: '1rem' }}>
                            <Instagram size={20} color="var(--color-cream)" />
                            <Facebook size={20} color="var(--color-cream)" />
                            <Mail size={20} color="var(--color-cream)" />
                        </div>
                    </div>

                    <div>
                        <h4 style={{ color: 'var(--color-cream)', marginBottom: '1.5rem' }}>Shop</h4>
                        <ul style={{ listStyle: 'none', color: '#ccc' }}>
                            <li style={{ marginBottom: '0.5rem' }}><a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>All Candles</a></li>
                            <li style={{ marginBottom: '0.5rem' }}><a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>New Arrivals</a></li>
                            <li style={{ marginBottom: '0.5rem' }}><a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Gift Sets</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 style={{ color: 'var(--color-cream)', marginBottom: '1.5rem' }}>Help</h4>
                        <ul style={{ listStyle: 'none', color: '#ccc' }}>
                            <li style={{ marginBottom: '0.5rem' }}><a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Shipping & Returns</a></li>
                            <li style={{ marginBottom: '0.5rem' }}><a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>FAQ</a></li>
                            <li style={{ marginBottom: '0.5rem' }}><a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Contact Us</a></li>
                        </ul>
                    </div>
                </div>

                <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '2rem', textAlign: 'center', color: '#888', fontSize: '0.875rem' }}>
                    <p>&copy; {new Date().getFullYear()} Bubble Breeze. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
