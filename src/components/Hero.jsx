import React from 'react';

const Hero = () => {
    return (
        <section style={{
            minHeight: '80vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            backgroundImage: 'url(/images/hero-bg.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            position: 'relative',
            overflow: 'hidden'
        }}>
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: 'rgba(253, 251, 247, 0.85)', // Cream overlay
                zIndex: 0
            }}></div>
            {/* Animated Background Elements */}
            <div className="floating-shape shape-1"></div>
            <div className="floating-shape shape-2"></div>
            <div className="particle p-1"></div>
            <div className="particle p-2"></div>
            <div className="particle p-3"></div>



            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <span style={{
                    display: 'block',
                    marginBottom: '1rem',
                    textTransform: 'uppercase',
                    letterSpacing: '2px',
                    fontSize: '0.875rem',
                    color: 'var(--color-text-light)'
                }}>
                    Hand-crafted in Small Batches
                </span>
                <h1 style={{
                    fontSize: 'clamp(3rem, 5vw, 5rem)',
                    marginBottom: '1.5rem',
                    color: 'var(--color-text)'
                }}>
                    Scent that travels<br />with the breeze.
                </h1>
                <p style={{
                    fontSize: '1.125rem',
                    maxWidth: '600px',
                    margin: '0 auto 2.5rem',
                    color: 'var(--color-text-light)'
                }}>
                    Candles made with a triple natural wax blend.
                    Soy, Coconut, and Beeswax for a cleaner, longer-lasting burn.
                </p>
                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                    <a href="#shop" className="btn btn-primary">Shop Collection</a>
                    <a href="#about" className="btn btn-outline">Our Story</a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
