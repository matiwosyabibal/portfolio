import React from 'react';

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
    return (
        <section id="projects" style={{ padding: '80px 0', background: 'linear-gradient(to bottom, #0f172a, #000)', fontFamily: 'Arial, sans-serif' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
                <h2 style={{ textAlign: 'center', color: 'white', fontSize: '40px', fontWeight: 'bold', marginBottom: '60px', letterSpacing: '1px' }}>
                    My Projects
                </h2>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '70px' }}>
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            style={{
                                display: 'flex',
                                flexDirection: 'row',
                                background: 'linear-gradient(to right, rgba(29,78,216,0.3), rgba(30,64,175,0.3))',
                                borderRadius: '25px',
                                overflow: 'hidden',
                                border: '1px solid rgba(255,255,255,0.15)',
                                backdropFilter: 'blur(6px)'
                            }}
                        >
                            {/* Left Side - Content */}
                            <div style={{ width: '40%', padding: '40px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                <h3 style={{ color: 'white', fontSize: '28px', fontWeight: 'bold', marginBottom: '20px' }}>
                                    {project.title}
                                </h3>
                                <p style={{ color: '#cbd5e1', fontSize: '18px', lineHeight: '1.6', marginBottom: '30px' }}>
                                    {project.description}
                                </p>

                                <button
                                    onClick={() => window.open(project.url, '_blank')}
                                    style={{
                                        background: 'rgba(255,255,255,0.1)',
                                        border: '1px solid rgba(255,255,255,0.3)',
                                        color: 'white',
                                        padding: '12px 28px',
                                        fontSize: '18px',
                                        borderRadius: '50px',
                                        cursor: 'pointer',
                                        width: 'fit-content'
                                    }}
                                >
                                    Visit Project →
                                </button>
                            </div>

                            {/* Right Side - Image */}
                            <div
                                onClick={() => window.open(project.url, '_blank')}
                                style={{ width: '60%', height: '350px', position: 'relative', cursor: 'pointer', overflow: 'hidden' }}
                            >
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    style={{ width: '100%', height: '100%', objectFit: 'cover', transition: '0.4s' }}
                                    onMouseOver={(e) => e.target.style.transform = 'scale(1.05)'}
                                    onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
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