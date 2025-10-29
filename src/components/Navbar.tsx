import { BookOpen } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-[#008037] rounded-full flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <span className="font-semibold text-[#0A2647] text-lg">Rumah Qur'an Al-Insan</span>
          </div>

          <div className="hidden md:flex space-x-8">
            <a href="#program" className="text-[#0A2647] hover:text-[#008037] transition-colors">Program</a>
            <a href="#testimoni" className="text-[#0A2647] hover:text-[#008037] transition-colors">Testimoni</a>
            <a href="#guru" className="text-[#0A2647] hover:text-[#008037] transition-colors">Guru</a>
            <a href="#kontak" className="text-[#0A2647] hover:text-[#008037] transition-colors">Kontak</a>
          </div>

          <a
            href="https://wa.me/6289808097333"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#F4A261] text-white px-6 py-2 rounded-full hover:bg-[#e39350] transition-all hover:shadow-lg"
          >
            Daftar
          </a>
        </div>
      </div>
    </nav>
  );
}
