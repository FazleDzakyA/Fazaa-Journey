import React, { useState, useEffect, useRef } from 'react'
import {
  Flame,
  Sparkles,
  ExternalLink,
  Code2,
  Smartphone,
  Heart,
  Eye,
  Compass,
  ArrowRight,
  Layers,
  ChevronRight,
  Volume2,
  VolumeX,
  Zap,
  Terminal,
  X,
  Send,
  Coffee,
  CheckCircle2,
  Mail,
  Phone,
  Copy,
  Check,
  MessageCircle,
  Calendar,
  Sparkle,
  Sun,
  Moon,
  Download
} from 'lucide-react'
import confetti from 'canvas-confetti'

// Inline SVG for GitHub
const GithubIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
)

// Inline SVG for Instagram
const InstagramIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
)

// Flying Falcon Silhouette with Red Fire Aura
const FalconFlyingSilhouette = () => (
  <div className="relative flex items-center justify-center">
    <div className="absolute -inset-3 rounded-full bg-red-600/40 blur-md animate-pulse" />
    <div className="absolute -inset-1 rounded-full bg-orange-500/50 blur-sm" />

    <svg
      className="relative w-12 h-12 text-red-500 transition-transform duration-300 drop-shadow-[0_0_16px_rgba(239,68,68,0.95)]"
      viewBox="0 0 100 100"
      fill="currentColor"
    >
      <path d="M50 15 C54 26 62 34 76 37 C87 39 96 35 98 33 C94 43 83 51 72 54 C82 56 92 59 95 62 C86 65 77 64 68 61 C76 67 82 74 83 77 C74 74 65 68 59 62 C57 73 54 85 50 92 C46 85 43 73 41 62 C35 68 26 74 17 77 C18 74 24 67 32 61 C23 64 14 65 5 62 C8 59 18 56 28 54 C17 51 6 43 2 33 C4 35 13 39 24 37 C38 34 46 26 50 15 Z" />
      <circle cx="50" cy="30" r="3" fill="#ffffff" />
      <circle cx="50" cy="30" r="1.5" fill="#facc15" />
    </svg>
  </div>
)

// Web Audio API Sound Generator for Cute Interactive Chimes
const playCuteSound = (type = 'pop') => {
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)()
    const osc = ctx.createOscillator()
    const gain = ctx.createGain()
    osc.connect(gain)
    gain.connect(ctx.destination)

    const now = ctx.currentTime
    if (type === 'pop') {
      osc.type = 'sine'
      osc.frequency.setValueAtTime(440, now)
      osc.frequency.exponentialRampToValueAtTime(880, now + 0.12)
      gain.gain.setValueAtTime(0.18, now)
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.12)
      osc.start(now)
      osc.stop(now + 0.13)
    } else if (type === 'fire') {
      osc.type = 'triangle'
      osc.frequency.setValueAtTime(320, now)
      osc.frequency.exponentialRampToValueAtTime(640, now + 0.2)
      gain.gain.setValueAtTime(0.15, now)
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.2)
      osc.start(now)
      osc.stop(now + 0.22)
    } else if (type === 'sparkle') {
      osc.type = 'sine'
      osc.frequency.setValueAtTime(587.33, now)
      osc.frequency.setValueAtTime(880, now + 0.08)
      osc.frequency.setValueAtTime(1174.66, now + 0.16)
      gain.gain.setValueAtTime(0.12, now)
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.25)
      osc.start(now)
      osc.stop(now + 0.26)
    }
  } catch (e) {
    // Audio context fallback
  }
}

// 11 Chronological Milestones
const CHRONOLOGICAL_MILESTONES = [
  {
    id: 'genesis-era',
    stepNumber: '01',
    side: 'left',
    era: '2023 - Awal 2024',
    title: 'Genesis: Web Games & Logika Awal',
    tag: '🎮 Genesis Chapter',
    headline: 'Menyalakan Percikan Pertama di Dunia Web',
    story: 'Langkah mula-mula dari rasa penasaran membuat interaksi dinamis di browser: kondisi logika, game loop sederhana, manipulasi DOM, dan eksplorasi neon CSS.',
    highlightProjects: [
      { name: 'FazaaGame', desc: 'Game interaktif eksplorasi logika web', repo: 'https://github.com/FazleDzakyA/FazaaGame' },
      { name: 'Glowtactoe-Fazaa', desc: 'Tic-Tac-Toe neon glow interaktif', repo: 'https://github.com/FazleDzakyA/Glowtactoe-Fazaa' },
      { name: 'JadwalFazle', desc: 'Web aplikasi jadwal rutinitas', repo: 'https://github.com/FazleDzakyA/JadwalFazle' }
    ],
    tech: ['JavaScript', 'HTML5 Canvas', 'CSS3 Neon Glow', 'DOM Manipulation'],
    quote: '"Coding pertama kali terasa magis saat tombol merespons input dan menghasilkan logika nyata."',
    borderColor: 'border-amber-500/30'
  },
  {
    id: 'cognitive-memory',
    stepNumber: '02',
    side: 'right',
    era: '2023 - 2024',
    title: 'Cognitive Memory & Interactive Web Labs',
    tag: '🧠 Memory & Brain Labs',
    headline: 'Eksperimen Interaktif Asah Daya Ingat',
    story: 'Mengembangkan game dan web interaktif pengasah daya ingat (memory matching & state recall). Melatih pemahaman state management berbasis waktu dan pencocokan pola.',
    highlightProjects: [
      { name: 'Recall-It-', desc: 'Web game kartu memory recall interaktif', repo: 'https://github.com/FazleDzakyA/Recall-It-' },
      { name: 'Fazaa_Recall', desc: 'Variasi logic recall & memory timing game', repo: 'https://github.com/FazleDzakyA/Fazaa_Recall' },
      { name: 'DooZlee-projek-lurr', desc: 'Eksperimen animasi & tata letak CSS interaktif', repo: 'https://github.com/FazleDzakyA/DooZlee-projek-lurr' }
    ],
    tech: ['JavaScript State', 'CSS Transitions', 'Event Loops', 'Pattern Logic'],
    quote: '"Mengolah ingatan menjadi algoritma: mencocokkan pola dengan kecepatan waktu."',
    borderColor: 'border-emerald-500/30'
  },
  {
    id: 'economic-data',
    stepNumber: '03',
    side: 'left',
    era: '2024',
    title: 'Infografis Interaktif: Sejarah Kurs Rupiah',
    tag: '📊 Data Story & History',
    headline: 'Visualisasi Data Dinamika Rupiah Era Reformasi',
    story: 'Web infografis edukatif yang mengulas sejarah fluktuasi nilai tukar Rupiah di masa Reformasi. Menggabungkan storytelling naratif historis dengan layout data responsif.',
    highlightProjects: [
      { name: 'melemahnya-rupiah-era-reformasi', desc: 'Web dokumentasi interaktif sejarah kurs Rupiah', repo: 'https://github.com/FazleDzakyA/melemahnya-rupiah-era-reformasi' },
      { name: 'aza-weakening-rupiah & vol2', desc: 'Eksplorasi tata letak data narasi pelemahan kurs', repo: 'https://github.com/FazleDzakyA/azalia-weakening-rupiah-vol2' }
    ],
    tech: ['HTML5 Semantic', 'Data Storytelling', 'Responsive CSS', 'Visual Hierarchy'],
    quote: '"Web bukan sekadar kode; web adalah media untuk menceritakan data dan sejarah."',
    borderColor: 'border-yellow-500/30'
  },
  {
    id: 'android-native',
    stepNumber: '04',
    side: 'right',
    era: '2024',
    title: 'Android Native Engineering Lab (Kotlin)',
    tag: '📱 Mobile Native Mastery',
    headline: 'Mendalami Ekosistem Android Studio & Kotlin',
    story: 'Melangkah ke ranah mobile engineering native. Menguasai lifecycle Activity Android Studio, penanganan data Intent antar-layar, formulir biodata terstruktur, dan kalkulator matematis.',
    highlightProjects: [
      { name: 'FormBiodata (Tugas Budian)', desc: 'Manajemen form biodata input-result dengan Intent data', repo: 'https://github.com/FazleDzakyA/Tugas_FromBiodata_Andro_Budian' },
      { name: 'MathCalculator & KalkulatorMatematika', desc: 'Aplikasi kalkulator matematis responsif Kotlin', repo: 'https://github.com/FazleDzakyA' },
      { name: 'Fazaalogin', desc: 'Sistem autentikasi layar login Android native', repo: 'https://github.com/FazleDzakyA' }
    ],
    tech: ['Kotlin', 'Android Studio', 'Gradle', 'XML Layouts', 'Activity Intents'],
    quote: '"Android native menanamkan fondasi kuat tentang arsitektur sistem operasi mobile."',
    borderColor: 'border-green-500/30'
  },
  {
    id: 'php-oop',
    stepNumber: '05',
    side: 'left',
    era: '2024',
    title: 'Fundamental OOP & Arsitektur Backend PHP',
    tag: '🏛️ OOP Architecture Lab',
    headline: 'Membedah Inheritance & Hirarki Kelas Berorientasi Objek',
    story: 'Eksplorasi mendalam pilar Object-Oriented Programming (OOP) murni di PHP: prinsip pewarisan (inheritance), enkapsulasi, dan polimorfisme sebagai fondasi sebelum melompat ke framework Laravel.',
    highlightProjects: [
      { name: 'Inheritance', desc: 'Implementasi konsep pewarisan class & struktur OOP PHP murni', repo: 'https://github.com/FazleDzakyA/Inheritance' }
    ],
    tech: ['PHP 8', 'OOP Principles', 'Inheritance', 'Class Hierarchy', 'Clean Code'],
    quote: '"Memahami fondasi murni membuat framework modern terasa jauh lebih masuk akal."',
    borderColor: 'border-indigo-500/30'
  },
  {
    id: 'fintech-ejpay',
    stepNumber: '06',
    side: 'right',
    era: '2024',
    title: 'EJpay: Fintech & Digital Wallet Exploration',
    tag: '💳 Fintech & Digital Pay',
    headline: 'Eksperimen Antarmuka Transaksi & Checkout Digital',
    story: 'Merancang konsep antarmuka sistem pembayaran digital (fintech). Meneliti alur transfer saldo, modul checkout, pencatatan mutasi transaksi, dan keamanan tampilan user experience.',
    highlightProjects: [
      { name: 'EJpay', desc: 'Eksperimen antarmuka digital payment & wallet checkout flow', repo: 'https://github.com/FazleDzakyA/EJpay' }
    ],
    tech: ['HTML5', 'CSS3 UI', 'Fintech Flows', 'Digital Wallet Logic'],
    quote: '"Dunia fintech menuntut antarmuka yang memberi rasa aman dan kepastian instan."',
    borderColor: 'border-teal-500/30'
  },
  {
    id: 'glowmate-ecosystem',
    stepNumber: '07',
    side: 'left',
    era: '2024 - 2025',
    title: 'GlowMate Ecosystem: Fullstack Core (Flagship)',
    tag: '🌟 Flagship Ecosystem',
    headline: 'Menghubungkan Backend REST API & Mobile Multiplatform',
    story: 'Karya ekosistem terbesar Faza. Merancang arsitektur backend lengkap dengan Laravel (PHP) untuk mengelola data relasional MySQL, otentikasi Sanctum, dan menyediakan REST API cepat yang dikonsumsi oleh aplikasi Flutter (Dart) di mobile.',
    highlightProjects: [
      { name: 'glowmate-api', desc: 'Core RESTful API backend dengan Laravel & MySQL', repo: 'https://github.com/FazleDzakyA/glowmate-api' },
      { name: 'glowmatevol3', desc: 'Aplikasi mobile cross-platform berbasis Flutter', repo: 'https://github.com/FazleDzakyA/glowmatevol3' },
      { name: 'glowmatevol2', desc: 'Iterasi arsitektur mobile Flutter kedua', repo: 'https://github.com/FazleDzakyA/glowmatevol2' }
    ],
    tech: ['PHP / Laravel', 'Flutter / Dart', 'MySQL', 'Sanctum Auth', 'REST API'],
    quote: '"Ekosistem ini membuktikan kemampuan mengeksekusi produk dari server hingga ke genggaman user."',
    borderColor: 'border-red-500/40'
  },
  {
    id: 'commercial-pos',
    stepNumber: '08',
    side: 'right',
    era: '2024 - 2025',
    title: 'Classic Barbergo Cashier: Commercial POS',
    tag: '💼 Commercial Solution',
    headline: 'Sistem Kasir Nyata dengan TypeScript & High Reliability',
    story: 'Membangun sistem kasir Point of Sale (POS) untuk operasional barbershop. Dirancang dengan TypeScript untuk memastikan kehandalan transaksi keuangan, manajemen antrean pangkas rambut, dan rekapitulasi data kasir secara real-time.',
    highlightProjects: [
      { name: 'Classic-Barbergo_cashier', desc: 'Sistem POS kasir modern berbasis TypeScript', repo: 'https://github.com/FazleDzakyA/Classic-Barbergo_cashier' }
    ],
    tech: ['TypeScript', 'React / Next.js', 'Tailwind CSS', 'POS Architecture', 'Revenue Rekap'],
    quote: '"Sistem bisnis menuntut presisi mutlak tanpa celah bug pada saat transaksi."',
    borderColor: 'border-cyan-500/30'
  },
  {
    id: 'team-swot',
    stepNumber: '09',
    side: 'left',
    era: '2024 - 2025',
    title: 'Sistem Analisis SWOT Tim (Kelompok 4 - 12 KJIJ 1)',
    tag: '🤝 Team & Strategic System',
    headline: 'Kolaborasi Rekayasa Web & Matriks Strategi Tim',
    story: 'Mengembangkan aplikasi sistem analisis SWOT kolaboratif berbasis TypeScript bersama tim (Kelompok 4 Kelas 12 KJIJ 1). Menampilkan pembagian kekuatan (Strengths), kelemahan (Weaknesses), peluang (Opportunities), dan ancaman (Threats) secara interaktif.',
    highlightProjects: [
      { name: 'SWOT-KELOMPOK4-12_KJIJ_1', desc: 'Aplikasi matriks strategi SWOT berbasis TypeScript kolaboratif', repo: 'https://github.com/FazleDzakyA/SWOT-KELOMPOK4-12_KJIJ_1' }
    ],
    tech: ['TypeScript', 'Collaborative Architecture', 'State Flow', 'Business Matrices'],
    quote: '"Kekuatan software berlipat ganda saat dibangun dalam harmoni kerja sama tim."',
    borderColor: 'border-violet-500/30'
  },
  {
    id: 'ai-vision',
    stepNumber: '10',
    side: 'right',
    era: '2024 - 2025',
    title: 'AI Blur Camera & Computer Vision Lab',
    tag: '🤖 AI & Vision Tech',
    headline: 'Eksperimen Citra Kamera & Segmentasi Objek Cerdas',
    story: 'Mengeksplorasi kecerdasan buatan berbasis penglihatan komputer (Computer Vision). Memproses streaming video webcam secara realtime di browser untuk segmentasi latar belakang dan menghasilkan efek bokeh blur otomatis.',
    highlightProjects: [
      { name: 'fiti-kiti-blir', desc: 'Aplikasi kamera web dengan efek blur pintar & vision filter', repo: 'https://github.com/FazleDzakyA/fiti-kiti-blir' },
      { name: 'fotokitablur', desc: 'Implementasi TypeScript canvas bokeh camera', repo: 'https://github.com/FazleDzakyA/fotokitablur' },
      { name: 'ai-blur-camera-deploy', desc: 'Deployment web live filter segmentasi AI', repo: 'https://github.com/FazleDzakyA/ai-blur-camera-deploy' }
    ],
    tech: ['TypeScript', 'Computer Vision API', 'HTML5 Canvas', 'WebRTC Webcam'],
    quote: '"Kecerdasan buatan memberikan dimensi baru pada apa yang bisa dilakukan langsung di browser."',
    borderColor: 'border-purple-500/30'
  },
  {
    id: 'heartfelt-vault',
    stepNumber: '11',
    side: 'left',
    era: '2024 - 2025',
    title: 'Special Vault: Dedikasi Personal untuk Lily & Kenangan',
    tag: '❤️ Heartfelt & Creative',
    headline: 'Kode Sebagai Kanvas Emosi dan Makna Tulus',
    story: 'Di balik baris kode teknis, Faza juga merangkai website interaktif bermakna personal: projek web dedikasi spesial "lilyyyyyy", perayaan ulang tahun "happy_b-day" & "hapibidi-azaaa", hingga ruang emosional "heart404" dan "penyangkalannn".',
    highlightProjects: [
      { name: 'lilyyyyyy', desc: 'Halaman web interaktif berharga yang didedikasikan untuk Lily', repo: 'https://github.com/FazleDzakyA/lilyyyyyy' },
      { name: 'happy_b-day & hapibidi-azaaa', desc: 'Web selebrasi momen hari ulang tahun interaktif', repo: 'https://github.com/FazleDzakyA/happy_b-day' },
      { name: 'heart404 & penyangkalannn', desc: 'Ekspresi emosional dan karya digital personal', repo: 'https://github.com/FazleDzakyA/heart404' }
    ],
    tech: ['TypeScript', 'CSS Micro-Animations', 'Sound Reactivity', 'Creative Web'],
    quote: '"Teknologi paling bermakna adalah yang berhasil menyampaikan kehangatan dari hati ke hati."',
    borderColor: 'border-rose-500/40'
  }
]

// 3D Tilt Wrapper
function TiltGlassCard({ children, className = '' }) {
  const cardRef = useRef(null)
  const [transform, setTransform] = useState('')

  const handleMouseMove = (e) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2
    const rotX = -(y / rect.height) * 10
    const rotY = (x / rect.width) * 10
    setTransform(`perspective(900px) rotateX(${rotX}deg) rotateY(${rotY}deg) scale3d(1.015, 1.015, 1.015)`)
  }

  const handleMouseLeave = () => {
    setTransform('perspective(900px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)')
  }

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform,
        transition: 'transform 0.18s cubic-bezier(0.2, 0, 0, 1)'
      }}
      className={`relative transition-shadow ${className}`}
    >
      {children}
    </div>
  )
}

export default function App() {
  const [isLightMode, setIsLightMode] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [soundEnabled, setSoundEnabled] = useState(true)
  const [copiedEmail, setCopiedEmail] = useState(false)
  const [copiedWA, setCopiedWA] = useState(false)
  const [speechBubble, setSpeechBubble] = useState("Scroll ke bawah untuk melihat 11 babak perjalanan karirku! 🦅")
  const [selectedMilestone, setSelectedMilestone] = useState(null)
  const [deferredPrompt, setDeferredPrompt] = useState(null)
  const timelineRef = useRef(null)

  // Listen for PWA installation prompt
  useEffect(() => {
    const handler = (e) => {
      e.preventDefault()
      setDeferredPrompt(e)
    }
    window.addEventListener('beforeinstallprompt', handler)
    return () => window.removeEventListener('beforeinstallprompt', handler)
  }, [])

  const handleInstallApp = async () => {
    if (soundEnabled) playCuteSound('sparkle')
    if (deferredPrompt) {
      deferredPrompt.prompt()
      const { outcome } = await deferredPrompt.userChoice
      if (outcome === 'accepted') {
        confetti({ particleCount: 60, spread: 80, origin: { y: 0.5 } })
      }
      setDeferredPrompt(null)
    } else {
      alert('Untuk install aplikasi di HP/Mobile: buka menu browser (titik 3 di Chrome atau tombol Share di Safari iOS), lalu pilih "Tambahkan ke Layar Utama" / "Install App"!')
    }
  }

  // Scroll tracking for falcon silhouette
  useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current) return
      const rect = timelineRef.current.getBoundingClientRect()
      const windowHeight = window.innerHeight
      const totalTimelineHeight = rect.height

      const start = rect.top
      const current = windowHeight / 2 - start
      const progress = Math.max(0, Math.min(1, current / totalTimelineHeight))
      setScrollProgress(progress)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleTheme = () => {
    if (soundEnabled) playCuteSound('pop')
    setIsLightMode(!isLightMode)
    confetti({
      particleCount: 30,
      spread: 50,
      origin: { y: 0.1 },
      colors: isLightMode ? ['#ffffff', '#000000', '#ef4444'] : ['#f97316', '#fbbf24', '#ffffff']
    })
  }

  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text)
    if (soundEnabled) playCuteSound('sparkle')
    if (type === 'email') {
      setCopiedEmail(true)
      setTimeout(() => setCopiedEmail(false), 2500)
    } else if (type === 'wa') {
      setCopiedWA(true)
      setTimeout(() => setCopiedWA(false), 2500)
    }
    confetti({
      particleCount: 25,
      spread: 45,
      origin: { y: 0.85 },
      colors: ['#ef4444', '#f97316', '#fbbf24']
    })
  }

  const triggerFalconFlight = () => {
    if (soundEnabled) playCuteSound('fire')
    const quotes = [
      "Sayap falcon berkobar! Menjelajahi 11 babak karir! 🔥",
      "Dari fiti-kiti-blir, EJpay, GlowMate, hingga web untuk Lily! 🦅",
      "Fokus tajam layaknya mata elang menatap masa depan! ✨",
      "Setiap commit adalah satu langkah terbang lebih tinggi! 🚀"
    ]
    setSpeechBubble(quotes[Math.floor(Math.random() * quotes.length)])
    confetti({
      particleCount: 40,
      spread: 60,
      origin: { y: 0.6 },
      colors: ['#ef4444', '#f97316', '#ffffff']
    })
  }

  return (
    <div
      className={`relative min-h-screen w-full transition-colors duration-500 font-sans overflow-x-hidden selection:bg-red-500 selection:text-white ${
        isLightMode
          ? 'bg-[#f4f5f7] text-zinc-900'
          : 'bg-gradient-to-br from-[#0a0b12] via-[#121124] to-[#160c18] text-white'
      }`}
    >
      
      {/* =========================================================================
          AMBIENT GLOW ORBS (Theme Adaptive)
          ========================================================================= */}
      {isLightMode ? (
        <>
          <div className="pointer-events-none fixed -top-40 -left-40 h-[600px] w-[600px] rounded-full bg-red-400/10 blur-[130px] z-0" />
          <div className="pointer-events-none fixed top-1/2 -right-40 h-[650px] w-[650px] rounded-full bg-zinc-400/20 blur-[140px] z-0" />
          <div className="pointer-events-none fixed -bottom-40 left-1/3 h-[500px] w-[500px] rounded-full bg-slate-300/30 blur-[130px] z-0" />
        </>
      ) : (
        <>
          <div className="pointer-events-none fixed -top-40 -left-40 h-[650px] w-[650px] rounded-full bg-red-600/20 blur-[150px] z-0 animate-pulse" />
          <div className="pointer-events-none fixed top-1/2 -right-40 h-[700px] w-[700px] rounded-full bg-orange-600/15 blur-[160px] z-0" />
          <div className="pointer-events-none fixed -bottom-40 left-1/3 h-[600px] w-[600px] rounded-full bg-cyan-600/15 blur-[150px] z-0" />
        </>
      )}

      {/* =========================================================================
          TOP GLASS NAV BAR
          ========================================================================= */}
      <nav className="sticky top-4 z-50 mx-auto max-w-7xl px-4 sm:px-8">
        <div
          className={`relative flex items-center justify-between rounded-full backdrop-blur-2xl px-5 py-3 transition-colors duration-500 shadow-xl ${
            isLightMode
              ? 'bg-white/85 border border-black/10 shadow-[0_8px_32px_rgba(0,0,0,0.08)]'
              : 'bg-white/[0.08] border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.37),inset_0_1px_1px_rgba(255,255,255,0.4)]'
          }`}
        >
          
          {/* Logo & Identity */}
          <div
            onClick={() => {
              if (soundEnabled) playCuteSound('pop')
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="relative h-9 w-9 rounded-full bg-gradient-to-tr from-red-600 to-orange-400 p-[2px] shadow-lg shadow-red-500/30 group-hover:scale-105 transition-transform">
              <div
                className={`h-full w-full rounded-full flex items-center justify-center font-bold text-sm tracking-wider ${
                  isLightMode ? 'bg-white text-zinc-900' : 'bg-[#100f1c] text-white'
                }`}
              >
                FZ
              </div>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className={`font-bold tracking-tight text-base ${isLightMode ? 'text-zinc-900' : 'text-white'}`}>
                  FAZA
                </span>
                <span className="rounded-full bg-red-500/20 border border-red-500/30 px-2 py-0.2 text-[10px] font-mono text-red-500 font-semibold">
                  11 MILESTONES
                </span>
              </div>
              <p className={`text-[11px] -mt-0.5 hidden sm:block ${isLightMode ? 'text-zinc-500' : 'text-white/50'}`}>
                Fazle Dzaky Aryaguna
              </p>
            </div>
          </div>

          {/* Center Links */}
          <div
            className={`hidden md:flex items-center gap-1 rounded-full p-1 backdrop-blur-md ${
              isLightMode ? 'bg-black/5 border border-black/10' : 'bg-white/[0.05] border border-white/10'
            }`}
          >
            <a
              href="#timeline-story"
              onClick={() => soundEnabled && playCuteSound('pop')}
              className={`rounded-full px-4 py-1.5 text-xs font-semibold transition-all ${
                isLightMode ? 'text-zinc-700 hover:text-black hover:bg-black/10' : 'text-white/80 hover:text-white hover:bg-white/10'
              }`}
            >
              Alur 11 Babak
            </a>
            <a
              href="#profile-hub"
              onClick={() => soundEnabled && playCuteSound('pop')}
              className={`rounded-full px-4 py-1.5 text-xs font-semibold transition-all ${
                isLightMode ? 'text-zinc-700 hover:text-black hover:bg-black/10' : 'text-white/80 hover:text-white hover:bg-white/10'
              }`}
            >
              Info Kontak & Profil
            </a>
          </div>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-2">
            
            {/* TOMBOL "TERANG MODE CAH" */}
            <button
              onClick={toggleTheme}
              className={`inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-bold transition-all active:scale-90 cursor-pointer shadow-md ${
                isLightMode
                  ? 'bg-zinc-900 text-white hover:bg-black'
                  : 'bg-white text-zinc-900 hover:bg-white/90'
              }`}
              title="Ganti Tema Tampilan"
            >
              {isLightMode ? (
                <>
                  <Moon className="w-3.5 h-3.5 text-amber-400" />
                  <span>gelap mode cah</span>
                </>
              ) : (
                <>
                  <Sun className="w-3.5 h-3.5 text-amber-500" />
                  <span>terang mode cah</span>
                </>
              )}
            </button>

            {/* PWA INSTALL BUTTON */}
            <button
              onClick={handleInstallApp}
              className={`hidden sm:inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-semibold backdrop-blur-md transition-all active:scale-95 cursor-pointer ${
                isLightMode
                  ? 'bg-black/5 border-black/15 text-zinc-800 hover:bg-black/10'
                  : 'bg-white/10 border-white/20 text-white/90 hover:bg-white/20'
              }`}
              title="Pasang aplikasi di HP/Mobile"
            >
              <Download className="w-3.5 h-3.5 text-red-500" />
              <span>Pasang App</span>
            </button>

            {/* Sound Toggle */}
            <button
              onClick={() => {
                setSoundEnabled(!soundEnabled)
                if (!soundEnabled) playCuteSound('sparkle')
              }}
              title={soundEnabled ? 'Matikan Suara' : 'Nyalakan Suara'}
              className={`h-9 w-9 rounded-full border flex items-center justify-center transition-all active:scale-90 cursor-pointer shadow ${
                isLightMode
                  ? 'bg-black/5 border-black/15 text-zinc-800 hover:bg-black/10'
                  : 'bg-white/10 border-white/20 text-white/80 hover:text-white'
              }`}
            >
              {soundEnabled ? <Volume2 className="w-4 h-4 text-amber-500" /> : <VolumeX className="w-4 h-4 opacity-50" />}
            </button>

            {/* GitHub */}
            <a
              href="https://github.com/FazleDzakyA/Fazaa-Journey"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => soundEnabled && playCuteSound('pop')}
              className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-red-600 to-orange-500 hover:from-red-500 hover:to-orange-400 px-4 py-1.5 text-xs font-bold text-white shadow-lg shadow-red-500/25 transition-all active:scale-95 cursor-pointer"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Repo</span>
            </a>

          </div>

        </div>
      </nav>

      {/* =========================================================================
          HERO SECTION: GLASSMORPHISM + UPPER BODY FALCON AVATAR
          ========================================================================= */}
      <section className="relative z-10 mx-auto max-w-7xl px-4 sm:px-8 pt-12 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            <div className="inline-flex items-center gap-2 rounded-full bg-red-500/10 border border-red-500/20 px-3.5 py-1.5 text-xs font-semibold text-red-500 mb-6 backdrop-blur-xl w-fit">
              <Flame className="w-3.5 h-3.5 text-red-500 animate-bounce" />
              <span>FAZLE DZAKY ARYAGUNA • THE FALCON ODYSSEY</span>
            </div>

            <h1
              className={`text-4xl sm:text-6xl font-extrabold tracking-tight leading-[1.12] ${
                isLightMode ? 'text-zinc-950' : 'text-white'
              }`}
            >
              Perjalanan Karir & Karya:{' '}
              <span className="bg-gradient-to-r from-red-600 via-orange-500 to-amber-500 bg-clip-text text-transparent">
                Dulu Hingga Sekarang
              </span>
            </h1>

            <p
              className={`mt-5 text-base sm:text-lg leading-relaxed max-w-2xl font-normal ${
                isLightMode ? 'text-zinc-700' : 'text-white/80'
              }`}
            >
              Kronik lengkap 11 babak rekayasa perangkat lunak saya. Dipandu oleh <strong>siluet Falcon berapi</strong> yang bergerak menelusuri garis tengah: dari genesis logika game, analisis data Rupiah, Android Native Kotlin, OOP PHP, fintech EJpay, GlowMate fullstack, sistem POS Barbergo, sistem SWOT tim, AI Vision (fiti-kiti-blir), hingga vault dedikasi untuk Lily.
            </p>

            {/* Interactive Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              
              <button
                onClick={triggerFalconFlight}
                className="group relative inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-red-600 to-orange-500 p-[1px] shadow-lg shadow-red-500/30 transition-all hover:scale-105 active:scale-95 cursor-pointer"
              >
                <div
                  className={`flex items-center gap-2 rounded-2xl px-5 py-3 text-sm font-bold backdrop-blur-xl transition-colors ${
                    isLightMode
                      ? 'bg-white text-zinc-900 group-hover:bg-transparent group-hover:text-white'
                      : 'bg-[#170e17]/90 text-white group-hover:bg-transparent'
                  }`}
                >
                  <Flame className="w-4 h-4 text-orange-500 animate-bounce" />
                  <span>Kobar Aura Falcon 🔥</span>
                </div>
              </button>

              <a
                href="#timeline-story"
                onClick={() => soundEnabled && playCuteSound('pop')}
                className={`inline-flex items-center gap-2 rounded-2xl border px-5 py-3 text-sm font-semibold backdrop-blur-xl transition-all hover:scale-105 active:scale-95 shadow-md cursor-pointer ${
                  isLightMode
                    ? 'bg-white/80 border-black/15 text-zinc-900 hover:bg-white'
                    : 'bg-white/[0.08] border-white/20 text-white hover:bg-white/[0.15]'
                }`}
              >
                <Compass className="w-4 h-4 text-red-500" />
                <span>Mulai Telusuri 11 Babak ↓</span>
              </a>

              <button
                onClick={handleInstallApp}
                className={`inline-flex items-center gap-2 rounded-2xl border px-4 py-3 text-sm font-semibold backdrop-blur-xl transition-all hover:scale-105 active:scale-95 shadow-md cursor-pointer ${
                  isLightMode
                    ? 'bg-white/80 border-black/15 text-zinc-800 hover:bg-white'
                    : 'bg-white/[0.08] border-white/20 text-white/90 hover:bg-white/[0.15]'
                }`}
              >
                <Smartphone className="w-4 h-4 text-emerald-500" />
                <span>Pasang Aplikasi (PWA)</span>
              </button>

            </div>

          </div>

          {/* Right Hero: Upper Body Avatar Glass Card */}
          <div className="lg:col-span-5 flex justify-center">
            <TiltGlassCard
              className={`w-full max-w-md rounded-3xl backdrop-blur-2xl border p-3.5 shadow-2xl transition-all duration-300 ${
                isLightMode
                  ? 'bg-white/45 border-white/80 shadow-[0_20px_50px_rgba(0,0,0,0.06),inset_0_1px_2px_rgba(255,255,255,0.95)]'
                  : 'bg-white/[0.08] border-white/25 shadow-[0_20px_50px_rgba(0,0,0,0.5),inset_0_1px_1px_rgba(255,255,255,0.4)]'
              }`}
            >
              
              {/* Speech Bubble */}
              <div
                className={`relative mb-3 rounded-2xl p-3.5 shadow-lg border ${
                  isLightMode ? 'bg-zinc-900 text-white border-zinc-800' : 'bg-white/95 text-zinc-900 border-white'
                }`}
              >
                <div className="flex items-start gap-2.5">
                  <span className="text-xl">🦅</span>
                  <div>
                    <p className={`text-xs font-semibold leading-relaxed ${isLightMode ? 'text-zinc-100' : 'text-zinc-800'}`}>
                      {speechBubble}
                    </p>
                    <span className={`text-[10px] font-mono block mt-1 ${isLightMode ? 'text-zinc-400' : 'text-zinc-500'}`}>
                      Siluet falcon meluncur dinamis di garis tengah mengikuti scroll!
                    </span>
                  </div>
                </div>
                <div
                  className={`absolute -bottom-2 left-10 h-0 w-0 border-x-8 border-x-transparent border-t-8 ${
                    isLightMode ? 'border-t-zinc-900' : 'border-t-white'
                  }`}
                />
              </div>

              {/* Upper Body Image */}
              <div
                onClick={triggerFalconFlight}
                className="relative aspect-square w-full rounded-2xl overflow-hidden border border-black/10 bg-black/40 group cursor-pointer"
              >
                <img
                  src="/faza-falcon-upper.jpg"
                  alt="Fazle Dzaky - Upper Body Avatar"
                  className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />

                <div className="absolute top-3 left-3 inline-flex items-center gap-1.5 rounded-full bg-black/60 backdrop-blur-md border border-red-500/40 px-3 py-1 text-xs font-semibold text-red-300">
                  <Flame className="w-3.5 h-3.5 text-red-400 animate-pulse" />
                  <span>Aura Merah Api • Upper Body</span>
                </div>

                <div className="absolute bottom-3 left-3 right-3 rounded-xl bg-white/[0.15] backdrop-blur-xl border border-white/20 p-2.5 flex items-center justify-between">
                  <div>
                    <h4 className="text-xs font-bold text-white">Fazle Dzaky Aryaguna (FAZA)</h4>
                    <p className="text-[10px] text-white/80">The Falcon Vanguard</p>
                  </div>
                  <span className="rounded-lg bg-red-500/40 px-2 py-0.5 text-[10px] font-mono text-red-100">
                    Scroll Ready
                  </span>
                </div>
              </div>

            </TiltGlassCard>
          </div>

        </div>
      </section>

      {/* =========================================================================
          VERTICAL STORYTELLING TIMELINE WITH CENTRAL LINE & SCROLL-TRACKING FALCON
          ========================================================================= */}
      <section
        id="timeline-story"
        ref={timelineRef}
        className="relative z-10 mx-auto max-w-7xl px-4 sm:px-8 py-20"
      >
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span
            className={`inline-block rounded-full border px-3.5 py-1 text-xs font-mono uppercase tracking-widest font-semibold mb-3 backdrop-blur-md ${
              isLightMode
                ? 'bg-black/5 border-black/15 text-red-600'
                : 'bg-white/[0.08] border-white/15 text-orange-300'
            }`}
          >
            11 CHRONOLOGICAL MILESTONES
          </span>
          <h2 className={`text-3xl sm:text-5xl font-black tracking-tight ${isLightMode ? 'text-zinc-950' : 'text-white'}`}>
            Garis Waktu Perjalanan
          </h2>
          <p className={`mt-3 text-sm ${isLightMode ? 'text-zinc-600' : 'text-white/70'}`}>
            Ikuti siluet falcon di garis tengah selagi menelusuri 11 babak di kiri dan kanan bergantian.
          </p>
        </div>

        {/* Central Spine Line & Falcon */}
        <div className="relative">
          
          {/* Base Vertical Spine Line */}
          <div
            className={`absolute top-0 bottom-0 left-6 md:left-1/2 -translate-x-1/2 w-1 rounded-full transition-colors ${
              isLightMode ? 'bg-black/15' : 'bg-white/15'
            }`}
          />

          {/* Active Glowing Progress Line */}
          <div
            style={{ height: `${Math.max(3, scrollProgress * 100)}%` }}
            className="absolute top-0 left-6 md:left-1/2 -translate-x-1/2 w-1 bg-gradient-to-b from-red-600 via-orange-500 to-amber-400 rounded-full shadow-[0_0_15px_rgba(239,68,68,0.85)] transition-all duration-100 ease-out"
          />

          {/* SCROLL-TRACKING FALCON SILHOUETTE */}
          <div
            style={{
              top: `${Math.max(2, Math.min(98, scrollProgress * 100))}%`,
              transform: 'translate(-50%, -50%)'
            }}
            className="absolute left-6 md:left-1/2 z-30 transition-all duration-200 ease-out pointer-events-auto cursor-pointer"
            onClick={triggerFalconFlight}
            title="Siluet Falcon Mengikuti Scroll! Klik untuk kobarkan api."
          >
            <FalconFlyingSilhouette />
          </div>

          {/* Alternating Cards */}
          <div className="space-y-16 sm:space-y-24">
            {CHRONOLOGICAL_MILESTONES.map((item) => {
              const isLeft = item.side === 'left'

              return (
                <div
                  key={item.id}
                  className={`relative flex flex-col md:flex-row items-center ${
                    isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  
                  {/* Node Dot on Central Line */}
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 z-20 flex items-center justify-center">
                    <div
                      className={`h-9 w-9 rounded-full border-2 border-red-500 flex items-center justify-center text-xs font-mono font-bold shadow-[0_0_15px_rgba(239,68,68,0.6)] ${
                        isLightMode ? 'bg-white text-zinc-900' : 'bg-[#120f1e] text-white'
                      }`}
                    >
                      {item.stepNumber}
                    </div>
                  </div>

                  {/* Card Container */}
                  <div className={`w-full md:w-1/2 pl-16 md:pl-0 ${isLeft ? 'md:pr-12' : 'md:pl-12'}`}>
                    
                    <TiltGlassCard
                      className={`rounded-3xl backdrop-blur-2xl border p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 ${
                        isLightMode
                          ? 'bg-white/45 border-white/80 text-zinc-900 shadow-[0_15px_35px_rgba(0,0,0,0.05),inset_0_1px_2px_rgba(255,255,255,0.95)] hover:border-white hover:bg-white/65 hover:shadow-[0_20px_45px_rgba(0,0,0,0.1)]'
                          : `bg-white/[0.07] ${item.borderColor} text-white shadow-[0_15px_35px_rgba(0,0,0,0.4),inset_0_1px_1px_rgba(255,255,255,0.25)] hover:border-white/50 hover:bg-white/[0.09]`
                      }`}
                    >
                      
                      <div>
                        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                          <span
                            className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-semibold ${
                              isLightMode ? 'bg-black/5 border-black/10 text-zinc-800' : 'bg-white/[0.1] border border-white/20 text-white/90'
                            }`}
                          >
                            <span>{item.tag}</span>
                          </span>
                          <span className="text-xs font-mono text-amber-500 bg-amber-500/10 border border-amber-500/20 px-2.5 py-0.5 rounded-full flex items-center gap-1 font-semibold">
                            <Calendar className="w-3 h-3" />
                            <span>{item.era}</span>
                          </span>
                        </div>

                        <h3 className={`text-xl sm:text-2xl font-extrabold tracking-tight mt-2 ${isLightMode ? 'text-zinc-950' : 'text-white'}`}>
                          {item.title}
                        </h3>
                        <p className="text-xs sm:text-sm font-semibold text-red-500 mt-1">
                          {item.headline}
                        </p>

                        <p className={`text-xs sm:text-sm leading-relaxed mt-4 ${isLightMode ? 'text-zinc-700' : 'text-white/80'}`}>
                          {item.story}
                        </p>

                        <div className="mt-5 space-y-2">
                          <div className={`text-[11px] font-mono uppercase tracking-wider ${isLightMode ? 'text-zinc-500' : 'text-white/50'}`}>
                            Projek Utama Terkait:
                          </div>
                          {item.highlightProjects.map((p) => (
                            <div
                              key={p.name}
                              className={`rounded-xl border p-2.5 flex items-center justify-between gap-2 transition-colors ${
                                isLightMode
                                  ? 'bg-zinc-100/80 border-black/10 hover:border-black/25'
                                  : 'bg-black/40 border-white/10 hover:border-white/30'
                              }`}
                            >
                              <div className="min-w-0 flex-1">
                                <span className={`font-bold text-xs block truncate ${isLightMode ? 'text-zinc-900' : 'text-white'}`}>
                                  {p.name}
                                </span>
                                <span className={`text-[11px] block truncate ${isLightMode ? 'text-zinc-600' : 'text-white/60'}`}>
                                  {p.desc}
                                </span>
                              </div>
                              <a
                                href={p.repo}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={() => soundEnabled && playCuteSound('pop')}
                                className="shrink-0 inline-flex items-center gap-1 text-[11px] font-semibold text-red-500 hover:text-red-400 bg-red-500/10 hover:bg-red-500/20 px-2.5 py-1 rounded-lg border border-red-500/20 transition-all cursor-pointer"
                              >
                                <span>Repo</span>
                                <ExternalLink className="w-3 h-3" />
                              </a>
                            </div>
                          ))}
                        </div>

                        <div
                          className={`mt-4 p-3 rounded-xl border-l-2 border-red-500 text-xs italic ${
                            isLightMode ? 'bg-zinc-100 text-zinc-700' : 'bg-white/[0.04] text-white/70'
                          }`}
                        >
                          {item.quote}
                        </div>
                      </div>

                      <div className={`mt-6 pt-4 border-t flex flex-wrap items-center justify-between gap-2 ${isLightMode ? 'border-black/10' : 'border-white/10'}`}>
                        <div className="flex flex-wrap gap-1.5">
                          {item.tech.map((t) => (
                            <span
                              key={t}
                              className={`rounded-md border px-2 py-0.5 text-[10px] font-mono ${
                                isLightMode
                                  ? 'bg-zinc-200/80 border-black/10 text-zinc-800'
                                  : 'bg-white/[0.06] border-white/10 text-white/75'
                              }`}
                            >
                              {t}
                            </span>
                          ))}
                        </div>

                        <button
                          onClick={() => {
                            if (soundEnabled) playCuteSound('sparkle')
                            setSelectedMilestone(item)
                          }}
                          className="inline-flex items-center gap-1 text-xs font-semibold text-red-500 hover:text-red-400 transition-colors cursor-pointer"
                        >
                          <span>Rangkuman</span>
                          <ChevronRight className="w-3.5 h-3.5" />
                        </button>
                      </div>

                    </TiltGlassCard>

                  </div>

                </div>
              )
            })}
          </div>

        </div>
      </section>

      {/* =========================================================================
          BOTTOM SECTION: COMPLETE PROFILE & CONTACT GLASSMORPHISM HUB
          ========================================================================= */}
      <section id="profile-hub" className="relative z-10 mx-auto max-w-7xl px-4 sm:px-8 pt-16 pb-24">
        
        <div
          className={`relative rounded-3xl border p-8 sm:p-12 backdrop-blur-3xl shadow-2xl overflow-hidden ${
            isLightMode
              ? 'bg-white/85 border-black/10 shadow-[0_25px_60px_rgba(0,0,0,0.1)]'
              : 'bg-gradient-to-br from-white/[0.09] via-white/[0.05] to-black/60 border-white/20 shadow-[0_25px_60px_rgba(0,0,0,0.5),inset_0_1px_1px_rgba(255,255,255,0.4)]'
          }`}
        >
          
          <div className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full bg-red-600/15 blur-3xl" />
          <div className="pointer-events-none absolute -left-20 -bottom-20 h-80 w-80 rounded-full bg-emerald-600/15 blur-3xl" />

          <div className="relative z-10">
            
            {/* Header Profile */}
            <div className={`flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b ${isLightMode ? 'border-black/10' : 'border-white/15'}`}>
              
              <div className="flex items-center gap-4">
                <div className="relative h-16 w-16 sm:h-20 sm:w-20 rounded-2xl overflow-hidden border-2 border-red-500/50 shadow-xl shadow-red-500/20 shrink-0">
                  <img
                    src="/faza-falcon-upper.jpg"
                    alt="Fazle Dzaky Aryaguna"
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute bottom-1 right-1 h-3.5 w-3.5 rounded-full bg-emerald-500 border-2 border-black" title="Online / Open to opportunities" />
                </div>

                <div>
                  <div className="inline-flex items-center gap-2 rounded-full bg-emerald-500/15 border border-emerald-500/30 px-2.5 py-0.5 text-[11px] font-semibold text-emerald-600 mb-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span>Open for Collaboration & Projects</span>
                  </div>
                  <h3 className={`text-2xl sm:text-3xl font-extrabold ${isLightMode ? 'text-zinc-950' : 'text-white'}`}>
                    Fazle Dzaky Aryaguna (FAZA)
                  </h3>
                  <p className={`text-xs sm:text-sm ${isLightMode ? 'text-zinc-600' : 'text-white/70'}`}>
                    Software Engineer • Fullstack Web & Android Native Developer
                  </p>
                </div>
              </div>

              <a
                href="https://wa.me/6281234567890?text=Halo%20Faza,%20saya%20tertarik%20dengan%20portofolio%20dan%20perjalanan%20karirmu!"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => soundEnabled && playCuteSound('pop')}
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-500 hover:to-teal-400 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-emerald-600/30 transition-all hover:scale-105 active:scale-95 cursor-pointer shrink-0"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat Langsung via WhatsApp</span>
              </a>

            </div>

            {/* Profile Information Grid: Ultra-Glassy Hover-Expand Interactive Pods */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-8">
              
              {/* Box 1: WhatsApp Glass Pod */}
              <div
                className={`group relative rounded-3xl p-5 border transition-all duration-500 overflow-hidden flex flex-col justify-between hover:-translate-y-1.5 hover:shadow-2xl ${
                  isLightMode
                    ? 'bg-white/45 hover:bg-white/70 border-white/80 shadow-[0_10px_30px_rgba(0,0,0,0.05),inset_0_1px_2px_rgba(255,255,255,0.95)]'
                    : 'bg-white/[0.07] hover:bg-white/[0.12] border-white/15 shadow-xl hover:border-emerald-500/40'
                }`}
              >
                {/* Emerald Ambient Glow on Hover */}
                <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-emerald-500/20 blur-2xl group-hover:scale-150 transition-transform duration-700" />
                
                {/* Header Pod */}
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    {/* Glassy 3D WhatsApp Icon Orb */}
                    <div className="relative h-12 w-12 rounded-2xl bg-gradient-to-tr from-emerald-600 to-teal-400 p-[1.5px] shadow-lg shadow-emerald-500/30 group-hover:scale-110 transition-transform duration-300">
                      <div className="h-full w-full rounded-2xl bg-emerald-950/40 backdrop-blur-md flex items-center justify-center text-white">
                        <MessageCircle className="w-6 h-6 text-emerald-300 animate-pulse" />
                      </div>
                    </div>

                    <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 px-2.5 py-0.5 text-[10px] font-mono font-bold text-emerald-500">
                      ● ONLINE
                    </span>
                  </div>

                  <h4 className={`text-base font-extrabold ${isLightMode ? 'text-zinc-950' : 'text-white'}`}>
                    WhatsApp Messenger
                  </h4>
                  <p className={`text-xs font-mono font-semibold text-emerald-500 mt-0.5`}>
                    +62 812-3456-7890
                  </p>

                  {/* Hover-Revealed Detail Story */}
                  <div className="mt-3 text-xs leading-relaxed transition-all duration-300 opacity-80 group-hover:opacity-100">
                    <p className={isLightMode ? 'text-zinc-600' : 'text-white/70'}>
                      Fast response untuk tawaran freelance, kolaborasi web/mobile, atau diskusi teknologi.
                    </p>
                  </div>
                </div>

                {/* Hover-Revealed Action Bar */}
                <div className="relative z-10 mt-5 pt-3 border-t border-black/5 dark:border-white/10 flex items-center gap-2">
                  <a
                    href="https://wa.me/6281234567890?text=Halo%20Faza,%20saya%20tertarik%20dengan%20portofolio%20dan%20perjalanan%20karirmu!"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => soundEnabled && playCuteSound('pop')}
                    className="flex-1 rounded-xl bg-emerald-600 hover:bg-emerald-500 py-2 text-center text-xs font-bold text-white shadow-md shadow-emerald-600/30 transition-all hover:scale-102 cursor-pointer"
                  >
                    Buka WhatsApp
                  </a>
                  <button
                    onClick={() => copyToClipboard('https://wa.me/6281234567890', 'wa')}
                    className={`rounded-xl p-2 transition-all cursor-pointer ${
                      isLightMode ? 'bg-white/80 hover:bg-white text-zinc-800 border border-white' : 'bg-white/10 hover:bg-white/20 text-white'
                    }`}
                    title="Copy Link WhatsApp"
                  >
                    {copiedWA ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>

              {/* Box 2: Instagram Glass Pod */}
              <div
                className={`group relative rounded-3xl p-5 border transition-all duration-500 overflow-hidden flex flex-col justify-between hover:-translate-y-1.5 hover:shadow-2xl ${
                  isLightMode
                    ? 'bg-white/45 hover:bg-white/70 border-white/80 shadow-[0_10px_30px_rgba(0,0,0,0.05),inset_0_1px_2px_rgba(255,255,255,0.95)]'
                    : 'bg-white/[0.07] hover:bg-white/[0.12] border-white/15 shadow-xl hover:border-pink-500/40'
                }`}
              >
                {/* Pink Ambient Glow on Hover */}
                <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-pink-500/20 blur-2xl group-hover:scale-150 transition-transform duration-700" />

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    {/* Glassy 3D Instagram Icon Orb */}
                    <div className="relative h-12 w-12 rounded-2xl bg-gradient-to-tr from-pink-600 via-rose-500 to-amber-400 p-[1.5px] shadow-lg shadow-pink-500/30 group-hover:scale-110 transition-transform duration-300">
                      <div className="h-full w-full rounded-2xl bg-pink-950/40 backdrop-blur-md flex items-center justify-center text-white">
                        <InstagramIcon className="w-6 h-6 text-pink-300" />
                      </div>
                    </div>

                    <span className="inline-flex items-center gap-1 rounded-full bg-pink-500/15 border border-pink-500/30 px-2.5 py-0.5 text-[10px] font-mono font-bold text-pink-500">
                      CREATIVE
                    </span>
                  </div>

                  <h4 className={`text-base font-extrabold ${isLightMode ? 'text-zinc-950' : 'text-white'}`}>
                    Instagram
                  </h4>
                  <p className={`text-xs font-mono font-semibold text-pink-500 mt-0.5`}>
                    @FazleDzakyA
                  </p>

                  <div className="mt-3 text-xs leading-relaxed transition-all duration-300 opacity-80 group-hover:opacity-100">
                    <p className={isLightMode ? 'text-zinc-600' : 'text-white/70'}>
                      Ikuti update eksplorasi koding harian, momen kehidupan, dan inspirasi visual.
                    </p>
                  </div>
                </div>

                <div className="relative z-10 mt-5 pt-3 border-t border-black/5 dark:border-white/10 flex items-center gap-2">
                  <a
                    href="https://instagram.com/FazleDzakyA"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => soundEnabled && playCuteSound('sparkle')}
                    className="flex-1 rounded-xl bg-gradient-to-r from-pink-600 to-rose-500 hover:from-pink-500 hover:to-rose-400 py-2 text-center text-xs font-bold text-white shadow-md shadow-pink-500/30 transition-all hover:scale-102 cursor-pointer"
                  >
                    Buka Instagram
                  </a>
                  <button
                    onClick={() => copyToClipboard('FazleDzakyA', 'wa')}
                    className={`rounded-xl p-2 transition-all cursor-pointer ${
                      isLightMode ? 'bg-white/80 hover:bg-white text-zinc-800 border border-white' : 'bg-white/10 hover:bg-white/20 text-white'
                    }`}
                    title="Copy Username Instagram"
                  >
                    <Copy className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Box 3: Email Glass Pod */}
              <div
                className={`group relative rounded-3xl p-5 border transition-all duration-500 overflow-hidden flex flex-col justify-between hover:-translate-y-1.5 hover:shadow-2xl ${
                  isLightMode
                    ? 'bg-white/45 hover:bg-white/70 border-white/80 shadow-[0_10px_30px_rgba(0,0,0,0.05),inset_0_1px_2px_rgba(255,255,255,0.95)]'
                    : 'bg-white/[0.07] hover:bg-white/[0.12] border-white/15 shadow-xl hover:border-orange-500/40'
                }`}
              >
                {/* Amber Ambient Glow on Hover */}
                <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-orange-500/20 blur-2xl group-hover:scale-150 transition-transform duration-700" />

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    {/* Glassy 3D Email Icon Orb */}
                    <div className="relative h-12 w-12 rounded-2xl bg-gradient-to-tr from-amber-500 to-orange-500 p-[1.5px] shadow-lg shadow-orange-500/30 group-hover:scale-110 transition-transform duration-300">
                      <div className="h-full w-full rounded-2xl bg-orange-950/40 backdrop-blur-md flex items-center justify-center text-white">
                        <Mail className="w-6 h-6 text-orange-300" />
                      </div>
                    </div>

                    <span className="inline-flex items-center gap-1 rounded-full bg-orange-500/15 border border-orange-500/30 px-2.5 py-0.5 text-[10px] font-mono font-bold text-orange-500">
                      OFFICIAL
                    </span>
                  </div>

                  <h4 className={`text-base font-extrabold ${isLightMode ? 'text-zinc-950' : 'text-white'}`}>
                    Email Resmi
                  </h4>
                  <p className={`text-xs font-mono font-semibold text-orange-500 mt-0.5 truncate`}>
                    rorngaran@gmail.com
                  </p>

                  <div className="mt-3 text-xs leading-relaxed transition-all duration-300 opacity-80 group-hover:opacity-100">
                    <p className={isLightMode ? 'text-zinc-600' : 'text-white/70'}>
                      Saluran resmi untuk rekrutmen profesional, tawaran kontrak, atau komunikasi formal.
                    </p>
                  </div>
                </div>

                <div className="relative z-10 mt-5 pt-3 border-t border-black/5 dark:border-white/10 flex items-center gap-2">
                  <a
                    href="mailto:rorngaran@gmail.com"
                    className="flex-1 rounded-xl bg-gradient-to-r from-orange-600 to-amber-500 hover:from-orange-500 hover:to-amber-400 py-2 text-center text-xs font-bold text-white shadow-md shadow-orange-500/30 transition-all hover:scale-102 cursor-pointer"
                  >
                    Kirim Email
                  </a>
                  <button
                    onClick={() => copyToClipboard('rorngaran@gmail.com', 'email')}
                    className={`rounded-xl p-2 transition-all cursor-pointer ${
                      isLightMode ? 'bg-white/80 hover:bg-white text-zinc-800 border border-white' : 'bg-white/10 hover:bg-white/20 text-white'
                    }`}
                    title="Copy Alamat Email"
                  >
                    {copiedEmail ? <Check className="w-3.5 h-3.5 text-orange-500" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>

              {/* Box 4: GitHub Glass Pod */}
              <div
                className={`group relative rounded-3xl p-5 border transition-all duration-500 overflow-hidden flex flex-col justify-between hover:-translate-y-1.5 hover:shadow-2xl ${
                  isLightMode
                    ? 'bg-white/45 hover:bg-white/70 border-white/80 shadow-[0_10px_30px_rgba(0,0,0,0.05),inset_0_1px_2px_rgba(255,255,255,0.95)]'
                    : 'bg-white/[0.07] hover:bg-white/[0.12] border-white/15 shadow-xl hover:border-red-500/40'
                }`}
              >
                {/* Red Ambient Glow on Hover */}
                <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-red-600/20 blur-2xl group-hover:scale-150 transition-transform duration-700" />

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    {/* Glassy 3D GitHub Icon Orb */}
                    <div className="relative h-12 w-12 rounded-2xl bg-gradient-to-tr from-red-600 to-orange-500 p-[1.5px] shadow-lg shadow-red-500/30 group-hover:scale-110 transition-transform duration-300">
                      <div className="h-full w-full rounded-2xl bg-red-950/40 backdrop-blur-md flex items-center justify-center text-white">
                        <GithubIcon className="w-6 h-6 text-red-300" />
                      </div>
                    </div>

                    <span className="inline-flex items-center gap-1 rounded-full bg-red-500/15 border border-red-500/30 px-2.5 py-0.5 text-[10px] font-mono font-bold text-red-500">
                      35+ REPOS
                    </span>
                  </div>

                  <h4 className={`text-base font-extrabold ${isLightMode ? 'text-zinc-950' : 'text-white'}`}>
                    GitHub Profile
                  </h4>
                  <p className={`text-xs font-mono font-semibold text-red-500 mt-0.5 truncate`}>
                    github.com/FazleDzakyA
                  </p>

                  <div className="mt-3 text-xs leading-relaxed transition-all duration-300 opacity-80 group-hover:opacity-100">
                    <p className={isLightMode ? 'text-zinc-600' : 'text-white/70'}>
                      Pusat seluruh commit, repositori GlowMate, Android Native, POS, AI Vision, dan web kenangan.
                    </p>
                  </div>
                </div>

                <div className="relative z-10 mt-5 pt-3 border-t border-black/5 dark:border-white/10 flex items-center gap-2">
                  <a
                    href="https://github.com/FazleDzakyA/Fazaa-Journey"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => soundEnabled && playCuteSound('pop')}
                    className="flex-1 rounded-xl bg-gradient-to-r from-red-600 to-orange-500 hover:from-red-500 hover:to-orange-400 py-2 text-center text-xs font-bold text-white shadow-md shadow-red-500/30 transition-all hover:scale-102 cursor-pointer"
                  >
                    Buka Repo
                  </a>
                  <button
                    onClick={() => copyToClipboard('https://github.com/FazleDzakyA/Fazaa-Journey', 'wa')}
                    className={`rounded-xl p-2 transition-all cursor-pointer ${
                      isLightMode ? 'bg-white/80 hover:bg-white text-zinc-800 border border-white' : 'bg-white/10 hover:bg-white/20 text-white'
                    }`}
                    title="Copy Link GitHub"
                  >
                    <Copy className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

            </div>

            {/* Bottom Credits */}
            <div className={`mt-8 pt-6 border-t flex flex-col sm:flex-row items-center justify-between gap-4 text-xs ${isLightMode ? 'border-black/10 text-zinc-600' : 'border-white/10 text-white/60'}`}>
              <div className="flex items-center gap-2">
                <span className={`font-bold ${isLightMode ? 'text-zinc-900' : 'text-white'}`}>FAZA ODYSSEY</span>
                <span>•</span>
                <span>PWA Ready & Multi-Theme Monochrome Glassmorphism</span>
              </div>
              
              <div className="flex items-center gap-3">
                <a
                  href="https://github.com/FazleDzakyA/Fazaa-Journey"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`hover:text-red-500 transition-colors flex items-center gap-1 font-mono font-medium ${isLightMode ? 'text-zinc-800' : 'text-white/80'}`}
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>github.com/FazleDzakyA/Fazaa-Journey</span>
                </a>
              </div>
            </div>

          </div>

        </div>

      </section>

      {/* =========================================================================
          MODAL: MILESTONE DEEP SUMMARY
          ========================================================================= */}
      {selectedMilestone && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-2xl">
          <div
            className={`relative w-full max-w-lg rounded-3xl border p-6 sm:p-8 shadow-2xl animate-in fade-in zoom-in-95 duration-200 ${
              isLightMode ? 'bg-white border-black/15 text-zinc-900' : 'bg-zinc-950 border-white/20 text-white'
            }`}
          >
            
            <button
              onClick={() => {
                if (soundEnabled) playCuteSound('pop')
                setSelectedMilestone(null)
              }}
              className={`absolute top-5 right-5 h-8 w-8 rounded-full flex items-center justify-center transition-all cursor-pointer ${
                isLightMode ? 'bg-black/5 hover:bg-black/10 text-zinc-700' : 'bg-white/10 hover:bg-white/20 text-white/80'
              }`}
            >
              <X className="w-4 h-4" />
            </button>

            <span className="inline-block rounded-full bg-red-500/20 border border-red-500/30 px-3 py-1 text-xs font-semibold text-red-500">
              {selectedMilestone.tag}
            </span>

            <h3 className={`text-2xl font-bold mt-3 ${isLightMode ? 'text-zinc-950' : 'text-white'}`}>
              {selectedMilestone.title}
            </h3>

            <p className="text-xs text-amber-500 font-mono mt-1 font-semibold">
              Era: {selectedMilestone.era}
            </p>

            <div
              className={`mt-4 p-4 rounded-2xl border text-xs sm:text-sm leading-relaxed ${
                isLightMode ? 'bg-zinc-100 border-black/10 text-zinc-700' : 'bg-white/[0.05] border-white/10 text-white/80'
              }`}
            >
              {selectedMilestone.story}
            </div>

            <div className="mt-5 space-y-2">
              <h5 className={`text-[11px] font-mono uppercase tracking-wider ${isLightMode ? 'text-zinc-500' : 'text-white/50'}`}>
                Daftar Repository Terkait:
              </h5>
              {selectedMilestone.highlightProjects.map((p) => (
                <div
                  key={p.name}
                  className={`flex items-center justify-between text-xs p-2.5 rounded-xl border ${
                    isLightMode ? 'bg-zinc-50 border-black/10' : 'bg-black/40 border-white/5'
                  }`}
                >
                  <span className={`font-semibold ${isLightMode ? 'text-zinc-900' : 'text-white'}`}>{p.name}</span>
                  <a
                    href={p.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-red-500 hover:underline flex items-center gap-1 font-medium"
                  >
                    <span>Buka</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              ))}
            </div>

            <button
              onClick={() => setSelectedMilestone(null)}
              className="w-full mt-6 rounded-2xl bg-red-600 hover:bg-red-500 text-white font-bold py-2.5 text-xs shadow-lg shadow-red-500/30 transition-all cursor-pointer"
            >
              Tutup Rangkuman
            </button>

          </div>
        </div>
      )}

    </div>
  )
}
