import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Upload, Link as LinkIcon, Brain, Search, Users, Shield, Sparkles } from 'lucide-react'

const App: React.FC = () => {
    return (
        <div className="app-container">
            {/* Navbar */}
            <nav className="navbar glass">
                <div className="nav-content">
                    <div className="logo">
                        <Brain className="logo-icon" />
                        <span className="logo-text">WiseWork<span className="text-primary">.ai</span></span>
                    </div>
                    <div className="nav-links">
                        <a href="#features">Features</a>
                        <a href="#about">About</a>
                        <button className="btn-primary">Get Started</button>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <header className="hero">
                <div className="hero-content">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="badge glass">AI-Powered Recruitment</span>
                        <h1 className="hero-title">
                            Hire Smarter with <br />
                            <span className="gradient-text">Intelligent Insights</span>
                        </h1>
                        <p className="hero-description">
                            WiseWork uses advanced AI to evaluate resumes, rank candidates, and provide deep professional summaries. Transform your hiring process today.
                        </p>
                        <div className="hero-actions">
                            <button className="btn-primary-lg">Analyze Resumes</button>
                            <button className="btn-secondary-lg">LinkedIn Summary</button>
                        </div>
                    </motion.div>
                </div>

                <motion.div
                    className="hero-visual"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                >
                    <div className="visual-orb animate-float"></div>
                    <div className="visual-card glass-card">
                        <div className="card-header">
                            <Sparkles className="icon-sparkle" />
                            <span>AI Evaluation</span>
                        </div>
                        <div className="card-body">
                            <div className="skeleton-line full"></div>
                            <div className="skeleton-line partial"></div>
                            <div className="score-ring">
                                <span className="score-value">98%</span>
                                <span className="score-label">Match</span>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </header>

            {/* Feature Section Preview */}
            <section className="features-preview" id="features">
                <div className="section-header">
                    <h2 className="section-title">Revolutionizing Talent Selection</h2>
                </div>
                <div className="feature-grid">
                    <FeatureCard
                        icon={<Upload />}
                        title="Multi-CV Batching"
                        description="Process multiple resumes simultaneously with instant data extraction."
                    />
                    <FeatureCard
                        icon={<Shield />}
                        title="Skill Verification"
                        description="AI-driven remarks on technical and soft skills grounded in real experience."
                    />
                    <FeatureCard
                        icon={<LinkIcon />}
                        title="LinkedIn Integration"
                        description="Automated profile summaries and external verification of professional history."
                    />
                </div>
            </section>

            {/* Footer */}
            <footer className="footer border-t border-white/5 mt-20 py-10 text-center">
                <p className="text-text-muted">© 2026 WiseWork AI. All rights reserved.</p>
            </footer>

            <style>{`
        .app-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .navbar {
          margin-top: 20px;
          padding: 15px 30px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          position: sticky;
          top: 20px;
          z-index: 100;
        }

        .nav-content {
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo {
          display: flex;
          align-items: center;
          gap: 10px;
          font-weight: 700;
          font-size: 1.5rem;
        }

        .logo-icon {
          color: var(--primary);
        }

        .logo-text span {
          color: var(--primary);
        }

        .nav-links {
          display: flex;
          align-items: center;
          gap: 30px;
        }

        .btn-primary {
          background: var(--primary);
          color: white;
          border: none;
          padding: 8px 20px;
          border-radius: 8px;
          font-weight: 600;
          cursor: pointer;
          transition: transform 0.2s;
        }

        .btn-primary:hover {
          transform: scale(1.05);
          box-shadow: 0 0 15px var(--primary-glow);
        }

        .hero {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 40px;
          padding: 100px 0;
          align-items: center;
        }

        .badge {
          display: inline-block;
          padding: 6px 16px;
          border-radius: 20px;
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--primary);
          margin-bottom: 24px;
        }

        .hero-title {
          font-size: 4rem;
          line-height: 1.1;
          margin-bottom: 24px;
        }

        .hero-description {
          font-size: 1.2rem;
          color: var(--text-muted);
          margin-bottom: 40px;
          line-height: 1.6;
          max-width: 500px;
        }

        .hero-actions {
          display: flex;
          gap: 20px;
        }

        .btn-primary-lg {
          background: var(--primary);
          color: white;
          border: none;
          padding: 16px 32px;
          border-radius: 12px;
          font-size: 1.1rem;
          font-weight: 700;
          cursor: pointer;
          box-shadow: 0 10px 20px rgba(99, 102, 241, 0.2);
        }

        .btn-secondary-lg {
          background: transparent;
          color: white;
          border: 1px solid var(--border);
          padding: 16px 32px;
          border-radius: 12px;
          font-size: 1.1rem;
          font-weight: 700;
          cursor: pointer;
          backdrop-filter: blur(5px);
        }

        .hero-visual {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .visual-orb {
          position: absolute;
          width: 300px;
          height: 300px;
          background: radial-gradient(circle, var(--primary-glow), transparent);
          filter: blur(40px);
          z-index: -1;
        }

        .visual-card {
          width: 300px;
          padding: 24px;
          position: relative;
          z-index: 1;
        }

        .card-header {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 20px;
          color: var(--text-muted);
        }

        .icon-sparkle {
          color: #fcd34d;
        }

        .skeleton-line {
          height: 8px;
          background: var(--border);
          border-radius: 4px;
          margin-bottom: 12px;
        }

        .skeleton-line.full { width: 100%; }
        .skeleton-line.partial { width: 60%; }

        .score-ring {
          margin-top: 30px;
          width: 120px;
          height: 120px;
          border-radius: 50%;
          border: 4px solid var(--primary);
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          margin-left: auto;
          margin-right: auto;
          box-shadow: 0 0 30px var(--primary-glow);
        }

        .score-value {
          font-size: 2rem;
          font-weight: 800;
          color: white;
        }

        .score-label {
          font-size: 0.8rem;
          color: var(--text-muted);
        }

        .features-preview {
          padding: 100px 0;
        }

        .section-header {
          text-align: center;
          margin-bottom: 60px;
        }

        .section-title {
          font-size: 2.5rem;
        }

        .feature-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
        }

        @media (max-width: 968px) {
          .hero {
            grid-template-columns: 1fr;
            text-align: center;
          }
          .hero-description {
            margin-left: auto;
            margin-right: auto;
          }
          .hero-actions {
            justify-content: center;
          }
          .feature-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
        </div>
    )
}

const FeatureCard: React.FC<{ icon: React.ReactNode, title: string, description: string }> = ({ icon, title, description }) => (
    <div className="glass-card p-8 flex flex-col gap-4">
        <div className="text-primary w-fit p-3 glass rounded-xl">
            {icon}
        </div>
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-text-muted leading-relaxed">{description}</p>
        <style>{`
      .feature-card {
        padding: 32px;
        display: flex;
        flex-direction: column;
        gap: 16px;
      }
      .feature-icon-wrapper {
        color: var(--primary);
        width: fit-content;
        padding: 12px;
        background: var(--glass);
        border-radius: 12px;
      }
    `}</style>
    </div>
)

export default App
