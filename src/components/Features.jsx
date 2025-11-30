import React from 'react';
import { Flame, Wind, Heart, Leaf } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, description, color }) => (
    <div style={{
        padding: '2rem',
        backgroundColor: 'white',
        borderRadius: '1rem',
        boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
        textAlign: 'center',
        transition: 'transform 0.3s ease',
        cursor: 'default'
    }}
        onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
        onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
    >
        <div style={{
            width: '60px',
            height: '60px',
            borderRadius: '50%',
            backgroundColor: color,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 1.5rem',
            color: 'var(--color-text)'
        }}>
            <Icon size={28} />
        </div>
        <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>{title}</h3>
        <p style={{ color: 'var(--color-text-light)', fontSize: '0.95rem' }}>{description}</p>
    </div>
);

const Features = () => {
    const features = [
        {
            icon: Flame,
            title: "Triple Wax Blend",
            description: "A unique blend of Soy, Coconut, and Beeswax for a cleaner, premium burn.",
            color: "var(--color-primary)"
        },
        {
            icon: Wind,
            title: "Scent that Travels",
            description: "Stronger fragrance throw that fills the room without overpowering.",
            color: "var(--color-secondary)"
        },
        {
            icon: Heart,
            title: "Hand-crafted Artistry",
            description: "Poured in small batches with love, ensuring quality over mass production.",
            color: "var(--color-accent)"
        },
        {
            icon: Leaf,
            title: "Eco-Conscious",
            description: "Thoughtfully designed to look beautiful and burn clean, with minimal environmental impact.",
            color: "#E6E6FA" // Lavender
        }
    ];

    return (
        <section className="section" style={{ backgroundColor: 'var(--color-cream)' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h2 style={{ fontSize: '2.5rem' }}>Why Bubble Breeze?</h2>
                    <p style={{ color: 'var(--color-text-light)' }}>Designed with emotion, crafted for connection.</p>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                    gap: '2rem'
                }}>
                    {features.map((feature, index) => (
                        <FeatureCard key={index} {...feature} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
