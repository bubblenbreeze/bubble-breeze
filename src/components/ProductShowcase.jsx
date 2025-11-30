import React from 'react';

const ProductCard = ({ image, name }) => (
    <div style={{ marginBottom: '2rem' }}>
        <div style={{
            height: '300px',
            borderRadius: '1rem',
            marginBottom: '1rem',
            position: 'relative',
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#f0f0f0'
        }}>
            <img src={image} alt={name} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
            />
        </div>
        <div>
            <h3 style={{ fontSize: '1.1rem', marginBottom: '0.25rem' }}>{name}</h3>
            <p style={{ color: 'var(--color-text-light)', fontSize: '0.9rem' }}>Soy + Coconut + Beeswax</p>
        </div>
    </div>
);

const ProductShowcase = () => {
    const products = [
        { name: "Serene Green", image: "/images/product-1.jpg" },
        { name: "Blush Pink", image: "/images/product-2.jpg" },
        { name: "Sky Calm", image: "/images/product-3.jpg" },
        { name: "Lavender Dream", image: "/images/product-4.jpg" },
        { name: "Golden Hour", image: "/images/product-5.jpg" },
        { name: "Ocean Breeze", image: "/images/product-6.jpg" },
    ];

    return (
        <section id="shop" className="section" style={{ backgroundColor: 'white' }}>
            <div className="container">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end', marginBottom: '3rem' }}>
                    <div>
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>Latest Collection</h2>
                        <p style={{ color: 'var(--color-text-light)' }}>Discover our hand-poured favorites.</p>
                    </div>
                    <a href="#" className="btn btn-outline">View All</a>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '2rem'
                }}>
                    {products.map((product, index) => (
                        <ProductCard key={index} {...product} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProductShowcase;
