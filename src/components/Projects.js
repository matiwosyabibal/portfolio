import React, { useState, useEffect } from 'react';

const projects = [
    {
        id: 1,
        title: 'Sunday Market',
        description: 'A full-featured MERN e-commerce platform for electronics with product listing, cart system, secure checkout, and delivery tracking.',
        image: '/image/market.png',
        url: 'https://sunday-market-web.onrender.com'
    },
    {
        id: 2,
        title: 'Hailemariam Mamo School SIMS',
        description: 'A school information management system for student registration, grades, attendance, billing, and admin dashboards.',
        image: '/image/mamo.png',
        url: 'https://matiwos.free.nf/?i=1'
    },
    {
        id: 3,
        title: 'COC Management System',
        description: 'A certification management system including trainee registration, assessments, approval workflow, and certificate automation.',
        image: '/image/coc1.png',
        url: 'https://matiwos.infinityfreeapp.com/?i=1'
    }
];

function Projects() {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <section
            id="projects"
            style={{
                padding: isMobile ? '60px 0' : '80px 0',
                background: 'linear-gradient(to bottom, #0f172a, #000)',
                fontFamily: 'Arial, sans-serif'
            }}
        >
            <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
                <h2
                    style={{
                        textAlign: 'center',
                        color: 'white',
                        fontSize: isMobile ? '30px' : '40px',
                        fontWeight: 'bold',
                        marginBottom: '60px'
                    }}
                >
                    My Projects
                </h2>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '50px' }}>
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            style={{
                                display: 'flex',
                                flexDirection: isMobile ? 'column' : 'row',
                                background: 'linear-gradient(to right, rgba(29,78,216,0.3), rgba(30,64,175,0.3))',
                                borderRadius: '25px',
                                overflow: 'hidden',
                                border: '1px solid rgba(255,255,255,0.15)',
                                backdropFilter: 'blur(6px)'
                            }}
                        >
                            {/* Content */}
                            <div
                                style={{
                                    width: isMobile ? '100%' : '40%',
                                    padding: isMobile ? '30px' : '40px'
                                }}
                            >
                                <h3
                                    style={{
                                        color: 'white',
                                        fontSize: isMobile ? '22px' : '28px',
                                        marginBottom: '15px'
                                    }}
                                >
                                    {project.title}
                                </h3>

                                <p
                                    style={{
                                        color: '#cbd5e1',
                                        fontSize: isMobile ? '16px' : '18px',
                                        lineHeight: '1.6',
                                        marginBottom: '25px'
                                    }}
                                >
                                    {project.description}
                                </p>

                                <button
                                    onClick={() => window.open(project.url, '_blank')}
                                    style={{
                                        background: 'rgba(255,255,255,0.1)',
                                        border: '1px solid rgba(255,255,255,0.3)',
                                        color: 'white',
                                        padding: '12px 28px',
                                        fontSize: '16px',
                                        borderRadius: '50px',
                                        cursor: 'pointer'
                                    }}
                                >
                                    Visit Project →
                                </button>
                            </div>

                            {/* Image */}
                            <div
                                onClick={() => window.open(project.url, '_blank')}
                                style={{
                                    width: isMobile ? '100%' : '60%',
                                    height: isMobile ? '220px' : '350px',
                                    cursor: 'pointer'
                                }}
                            >
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover'
                                    }}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Projects;
