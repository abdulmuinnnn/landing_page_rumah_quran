import { BookOpen, MessageCircle } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0A2647] via-[#144272] to-[#0A2647] pt-16">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0 L45 15 L30 30 L15 15 Z M30 30 L45 45 L30 60 L15 45 Z' fill='%23ffffff' fill-opacity='0.4'/%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      <div className="absolute top-0 left-0 w-96 h-96 bg-[#008037] rounded-full filter blur-3xl opacity-10 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#F4A261] rounded-full filter blur-3xl opacity-10 translate-x-1/2 translate-y-1/2"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="mb-8 flex justify-center animate-fade-in">
          <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center shadow-2xl">
            <BookOpen className="w-16 h-16 text-[#008037]" />
          </div>
        </div>

        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in-up" style={{ fontFamily: 'Poppins, sans-serif' }}>
          Bersama Al-Qur'an,<br />
          Kita Bangun Generasi Qur'ani
        </h1>

        <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto animate-fade-in-up" style={{ fontFamily: 'Nunito Sans, sans-serif', animationDelay: '0.2s' }}>
          Belajar mudah, nyaman, dan sesuai sunnah
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <a
            href="https://wa.me/6289808097333"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#F4A261] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#e39350] transition-all hover:shadow-2xl hover:scale-105 flex items-center space-x-2"
          >
            <MessageCircle className="w-5 h-5" />
            <span>Daftar Sekarang</span>
          </a>
          <a
            href="#kontak"
            className="border-2 border-[#008037] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#008037] transition-all hover:shadow-2xl hover:scale-105"
          >
            Hubungi Kami
          </a>
        </div>
      </div>
    </section>
  );
}
