import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Febrian",
      role: "Santri Reguler",
      text: "Sekarang bacaan saya makin lancar, alhamdulillah. Guru-gurunya sangat membantu dan metode belajarnya mudah dipahami.",
      rating: 5
    },
    {
      name: "Ibu Sumiati",
      role: "Orang Tua Santri",
      text: "Guru-gurunya sabar dan mudah dipahami. Anak saya sekarang sudah bisa membaca Al-Qur'an dengan baik.",
      rating: 5
    },
    {
      name: "Ahmad Fauzi",
      role: "Santri Tahfidz",
      text: "Program tahfidz sangat terstruktur. Saya sudah hafal 5 juz dalam 6 bulan. Subhanallah!",
      rating: 5
    },
    {
      name: "Siti Aminah",
      role: "Santri Privat",
      text: "Jadwal fleksibel sangat membantu saya yang bekerja. Bisa belajar sesuai waktu luang.",
      rating: 5
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-gradient-to-br from-[#0A2647] to-[#144272]" id="testimoni">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Apa Kata Mereka?
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto" style={{ fontFamily: 'Nunito Sans, sans-serif' }}>
            Testimoni dari santri dan orang tua yang telah merasakan manfaatnya
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12">
            <div className="flex justify-center mb-4">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-[#F4A261] fill-current" />
              ))}
            </div>

            <p className="text-xl md:text-2xl text-gray-700 text-center mb-8 italic" style={{ fontFamily: 'Nunito Sans, sans-serif' }}>
              "{testimonials[currentIndex].text}"
            </p>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#008037] to-[#0A2647] rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                {testimonials[currentIndex].name.charAt(0)}
              </div>
              <h4 className="text-xl font-bold text-[#0A2647]" style={{ fontFamily: 'Poppins, sans-serif' }}>
                {testimonials[currentIndex].name}
              </h4>
              <p className="text-gray-600" style={{ fontFamily: 'Nunito Sans, sans-serif' }}>
                {testimonials[currentIndex].role}
              </p>
            </div>
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 bg-white rounded-full p-3 shadow-lg hover:bg-gray-100 transition-all"
          >
            <ChevronLeft className="w-6 h-6 text-[#0A2647]" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 bg-white rounded-full p-3 shadow-lg hover:bg-gray-100 transition-all"
          >
            <ChevronRight className="w-6 h-6 text-[#0A2647]" />
          </button>

          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex ? 'bg-white w-8' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
