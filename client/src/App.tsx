import React from 'react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { Upload, Link as LinkIcon, Brain, Search, Users, Shield, Sparkles, ChevronRight, CheckCircle2 } from 'lucide-react'

const TypewriterEffect: React.FC<{ text: string, className?: string }> = ({ text, className }) => {
  const words = text.split(" ")

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.3 }
    }
  }

  const child = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        damping: 12,
        stiffness: 100
      }
    }
  }

  return (
    <motion.div
      className={className}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {words.map((word, index) => (
        <motion.span variants={child} key={index} className="inline-block mr-4">
          {word}
        </motion.span>
      ))}
    </motion.div>
  )
}

const App: React.FC = () => {
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95])

  // Smooth scroll progress for parallax
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '20%'])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  }

  return (
    <div className="min-h-[100vh] bg-slate-950 text-slate-50 selection:bg-violet-500/30 font-sans overflow-x-hidden">
      {/* Active Background Decorative Elements */}
      <motion.div
        className="fixed inset-0 pointer-events-none overflow-hidden z-0"
        style={{ y: bgY }}
      >
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-[-20%] left-[-10%] w-[70%] h-[70%] rounded-full bg-violet-600/20 blur-[120px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.5, 1],
            x: [0, 100, 0],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[-20%] right-[-20%] w-[60%] h-[60%] rounded-full bg-fuchsia-600/10 blur-[120px]"
        />
        <motion.div
          animate={{
            y: [0, -50, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[40%] left-[30%] w-[40%] h-[40%] rounded-full bg-cyan-500/10 blur-[100px]"
        />
      </motion.div>

      {/* Navbar */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 w-[90%] max-w-6xl z-50">
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, type: "spring" }}
          className="px-8 py-4 flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl shadow-lg ring-1 ring-white/5"
        >
          <motion.div
            className="flex items-center gap-2 cursor-pointer"
            whileHover={{ scale: 1.05 }}
          >
            <div className="p-2 bg-gradient-to-br from-violet-600 to-indigo-600 rounded-lg shadow-lg shadow-violet-500/20">
              <Brain className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold tracking-tight text-white">WiseWork<span className="text-violet-400 italic">.ai</span></span>
          </motion.div>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
            <a href="#features" className="hover:text-white transition-colors relative group">
              Features
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-violet-400 transition-all group-hover:w-full" />
            </a>
            <a href="#solutions" className="hover:text-white transition-colors relative group">
              Solutions
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all group-hover:w-full" />
            </a>
            <a href="#about" className="hover:text-white transition-colors relative group">
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-fuchsia-400 transition-all group-hover:w-full" />
            </a>
            <motion.button
              className="bg-zinc-50 hover:bg-white text-slate-950 px-6 py-2.5 rounded-xl transition-all shadow-lg shadow-white/5 font-bold relative overflow-hidden"
              whileTap={{ scale: 0.95 }}
              whileHover={{ scale: 1.05 }}
            >
              Get Started
            </motion.button>
          </div>
        </motion.div>
      </nav>

      <main className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12 pt-40 pb-20">
        {/* Hero Section */}
        <motion.section
          className="grid lg:grid-cols-2 gap-16 items-center min-h-[80vh]"
          style={{ opacity, scale }}
        >
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.span
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 text-xs font-bold uppercase tracking-widest mb-8"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles className="w-3 h-3 text-violet-400" />
              </motion.div>
              Next-Gen AI Recruitment
            </motion.span>

            <TypewriterEffect
              text="Hire Smarter with AI Insights"
              className="text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.05] tracking-tight mb-8 text-white"
            />

            <motion.p
              variants={itemVariants}
              className="text-xl text-slate-400 leading-relaxed mb-10 max-w-xl"
            >
              WiseWork automates the heavy lifting of recruitment. Batch process resumes, generate deep candidate summaries, and find the perfect match with surgical precision.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
              <button className="group bg-violet-600 hover:bg-violet-500 px-8 py-4 rounded-2xl font-bold text-white transition-all flex items-center gap-2 shadow-xl shadow-violet-600/20 ring-1 ring-violet-500/50 hover:ring-offset-2 ring-offset-slate-950">
                Analyze Now
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="bg-white/5 hover:bg-white/10 px-8 py-4 rounded-2xl font-bold text-white transition-all border border-white/10 backdrop-blur-sm hover:scale-105 active:scale-95">
                View Demo
              </button>
            </motion.div>
          </motion.div>

          {/* Floating Hero Card */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-violet-600/20 to-cyan-500/20 blur-[80px] rounded-full animate-pulse" />

            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative bg-slate-900/40 backdrop-blur-xl p-2 rounded-[2.5rem] border border-white/10 shadow-2xl ring-1 ring-white/5"
            >
              <div className="bg-slate-950/50 backdrop-blur-3xl rounded-[2.3rem] p-8 space-y-8 border border-white/5">
                <div className="flex items-center justify-between pb-6 border-b border-white/5">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-violet-500 to-fuchsia-500 shadow-inner flex items-center justify-center">
                      <Users className="text-white w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-bold text-lg text-white">Software Engineer</p>
                      <p className="text-sm text-slate-500">Candidate #AD-950</p>
                    </div>
                  </div>
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="px-4 py-1.5 rounded-full bg-emerald-500/10 text-emerald-400 text-sm font-bold border border-emerald-500/20 cursor-default"
                  >
                    Qualified
                  </motion.div>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between text-sm font-medium mb-2">
                    <span className="text-slate-400">Technical Match</span>
                    <span className="text-violet-300">94%</span>
                  </div>
                  <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "94%" }}
                      transition={{ duration: 1.5, delay: 1, ease: "circOut" }}
                      className="h-full bg-gradient-to-r from-violet-500 to-cyan-500 rounded-full"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <motion.div whileHover={{ y: -2 }} className="p-5 rounded-2xl bg-white/[0.03] border border-white/5 transition-colors hover:bg-white/[0.05]">
                    <p className="text-xs text-slate-500 mb-1 uppercase tracking-wider font-semibold">Experience</p>
                    <p className="font-bold text-xl text-white">Senior</p>
                  </motion.div>
                  <motion.div whileHover={{ y: -2 }} className="p-5 rounded-2xl bg-white/[0.03] border border-white/5 transition-colors hover:bg-white/[0.05]">
                    <p className="text-xs text-slate-500 mb-1 uppercase tracking-wider font-semibold">AI Verdict</p>
                    <p className="font-bold text-xl text-cyan-400">Strong Hire</p>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.section>

        {/* Features Section */}
        <section className="py-32" id="features">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-white">
              Elite <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-400">Features</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg">Precision tools designed for modern recruitment teams.</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Upload className="w-6 h-6 text-violet-300" />}
              title="Multi-CV Batching"
              description="Process hundreds of resumes in seconds with our high-speed parsing engine."
              delay={0.1}
            />
            <FeatureCard
              icon={<Shield className="w-6 h-6 text-cyan-300" />}
              title="Skill Verification"
              description="AI-driven analysis of claimed skills versus actual experience and achievements."
              delay={0.2}
            />
            <FeatureCard
              icon={<LinkIcon className="w-6 h-6 text-fuchsia-300" />}
              title="LinkedIn Synergy"
              description="Combine LinkedIn professional data with CV details for a 360-degree view."
              delay={0.3}
            />
          </div>
        </section>

        {/* Integration Details */}
        <section className="py-32 bg-gradient-to-b from-white/[0.02] to-transparent rounded-[4rem] px-8 md:px-12 border border-white/5 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-96 h-96 bg-violet-600/10 blur-[120px] pointer-events-none" />
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-10">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
                Seamlessly Integrated <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-400">Workflow</span>
              </h2>
              <div className="space-y-8">
                <StepItem title="Deep Search" desc="Our AI scans through global talent pools with natural language understanding." delay={0.1} />
                <StepItem title="Automated Screening" desc="Instantly filter candidates based on complex project requirements." delay={0.2} />
                <StepItem title="Smart Summaries" desc="Get concise, actionable reports on every potential hire." delay={0.3} />
              </div>
            </div>
            <motion.div
              className="p-12 rounded-[3rem] border border-white/10 bg-white/[0.02] backdrop-blur-sm relative overflow-hidden group"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 to-transparent pointer-events-none group-hover:opacity-100 transition-opacity" />

              <div className="relative">
                <motion.div
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.5, 1, 0.5]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <Brain className="w-24 h-24 text-violet-500 mx-auto mb-8 drop-shadow-[0_0_25px_rgba(139,92,246,0.5)]" />
                </motion.div>

                <div className="space-y-6 opacity-50">
                  {[1, 2, 3].map((i) => (
                    <motion.div
                      key={i}
                      className="h-4 bg-slate-700/50 rounded-full mx-auto"
                      style={{ width: `${80 - i * 10}%` }}
                      animate={{ opacity: [0.3, 0.6, 0.3] }}
                      transition={{ duration: 2, delay: i * 0.2, repeat: Infinity }}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <footer className="mt-20 border-t border-white/5 py-12 px-6 bg-slate-950/50 backdrop-blur-lg">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="p-1.5 bg-violet-600 rounded-lg">
              <Brain className="w-4 h-4 text-white" />
            </div>
            <span className="font-bold text-lg text-white">WiseWork</span>
          </div>
          <div className="flex gap-8 text-sm text-slate-400 font-medium">
            <a href="#" className="hover:text-violet-400 transition-colors">Privacy</a>
            <a href="#" className="hover:text-violet-400 transition-colors">Terms</a>
            <a href="#" className="hover:text-violet-400 transition-colors">Cookies</a>
          </div>
          <p className="text-sm text-slate-600">© 2026 WiseWork AI. Built for Excellence.</p>
        </div>
      </footer>
    </div>
  )
}

const FeatureCard: React.FC<{ icon: React.ReactNode, title: string, description: string, delay: number }> = ({ icon, title, description, delay }) => (
  <motion.div
    className="group relative p-8 rounded-3xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-300 hover:-translate-y-2"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay }}
  >
    <div className="absolute inset-0 rounded-3xl ring-1 ring-inset ring-transparent group-hover:ring-violet-500/20 transition-all duration-300" />
    <div className="mb-6 p-4 bg-white/[0.05] rounded-2xl w-fit group-hover:scale-110 group-hover:bg-violet-500/20 transition-all duration-300 ring-1 ring-white/10 group-hover:ring-violet-500/40">
      {icon}
    </div>
    <h3 className="text-xl font-bold mb-3 text-white group-hover:text-violet-200 transition-colors">{title}</h3>
    <p className="text-slate-400 text-sm leading-relaxed">{description}</p>
  </motion.div>
)

const StepItem: React.FC<{ title: string, desc: string, delay?: number }> = ({ title, desc, delay = 0 }) => (
  <motion.div
    className="flex gap-5 items-start"
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ delay }}
  >
    <div className="mt-1 p-1 bg-violet-500/10 rounded-full text-violet-400 ring-1 ring-violet-500/20">
      <CheckCircle2 className="w-5 h-5" />
    </div>
    <div>
      <h4 className="font-bold mb-1 text-lg text-white">{title}</h4>
      <p className="text-sm text-slate-400 leading-relaxed">{desc}</p>
    </div>
  </motion.div>
)

export default App
