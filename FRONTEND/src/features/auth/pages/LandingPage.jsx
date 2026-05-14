export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white">

      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute w-125 h-125 bg-blue-500 rounded-full blur-[160px] opacity-20 -top-25 -left-25"></div>
        <div className="absolute w-125 h-125 bg-purple-500 rounded-full blur-[160px] opacity-20 -bottom-37.5 -right-25"></div>
      </div>

      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-5 max-w-6xl mx-auto">
        <h1 className="text-xl font-bold">MyProject</h1>

        <div className="hidden md:flex gap-8 text-gray-300">
          <a href="#" className="hover:text-white">Home</a>
          <a href="#features" className="hover:text-white">Features</a>
          <a href="#about" className="hover:text-white">About</a>
        </div>

        <button className="bg-white text-black px-4 py-2 rounded-lg font-medium">
          Get Started
        </button>
      </nav>

      {/* Hero Section */}
      <section className="text-center px-6 pt-24 pb-16 max-w-4xl mx-auto">

        <h1 className="text-5xl md:text-6xl font-bold leading-tight">
          Build Smarter <br />
          <span className="text-blue-400">Full Stack Apps</span>
        </h1>

        <p className="text-gray-400 mt-6 text-lg">
          A modern, fast, and scalable system built with React, Node.js, and MongoDB.
          Designed for real-world production use.
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <button className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-xl font-medium">
            Launch App
          </button>

          <button className="border border-gray-600 hover:border-white px-6 py-3 rounded-xl">
            Learn More
          </button>
        </div>

      </section>

      {/* Features */}
      <section id="features" className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-6">

        <div className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:scale-105 transition">
          <h3 className="text-blue-400 text-xl font-semibold">⚡ Fast</h3>
          <p className="text-gray-400 mt-2">
            Optimized performance with modern React architecture.
          </p>
        </div>

        <div className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:scale-105 transition">
          <h3 className="text-blue-400 text-xl font-semibold">🔒 Secure</h3>
          <p className="text-gray-400 mt-2">
            JWT authentication and protected backend APIs.
          </p>
        </div>

        <div className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:scale-105 transition">
          <h3 className="text-blue-400 text-xl font-semibold">📱 Responsive</h3>
          <p className="text-gray-400 mt-2">
            Works smoothly on mobile, tablet, and desktop.
          </p>
        </div>

      </section>

      {/* About Section */}
      <section id="about" className="text-center px-6 py-20 max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold">About This Project</h2>
        <p className="text-gray-400 mt-4">
          This project is built to demonstrate full-stack development skills including
          authentication, REST APIs, and modern UI design practices.
        </p>
      </section>

      {/* Footer */}
      <footer className="text-center text-gray-500 py-8 border-t border-white/10">
        © {new Date().getFullYear()} MyProject. Built with ❤️
      </footer>

    </div>
  );
}
