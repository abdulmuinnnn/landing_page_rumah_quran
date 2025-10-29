import { AlertCircle, Clock, Users } from 'lucide-react';

export default function Problem() {
  const problems = [
    {
      icon: AlertCircle,
      text: "Bingung mulai dari mana"
    },
    {
      icon: Users,
      text: "Belum menemukan guru yang sabar"
    },
    {
      icon: Clock,
      text: "Jadwal sibuk dan sulit ikut kelas reguler"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <div className="aspect-[4/3] bg-gradient-to-br from-[#0A2647] to-[#008037] flex items-center justify-center">
              <div className="text-center text-white p-8">
                <BookOpen className="w-24 h-24 mx-auto mb-4 opacity-80" />
                <p className="text-xl font-semibold" style={{ fontFamily: 'Amiri, serif' }}>
                  اقْرَأْ بِاسْمِ رَبِّكَ
                </p>
                <p className="text-sm mt-2 opacity-90">Bacalah dengan nama Tuhanmu</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A2647] mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Masih Ragu Mulai Belajar Al-Qur'an?
            </h2>
            <p className="text-lg text-gray-600 mb-8" style={{ fontFamily: 'Nunito Sans, sans-serif' }}>
              Banyak yang ingin belajar Al-Qur'an, tapi sering terhalang oleh:
            </p>

            <div className="space-y-6">
              {problems.map((problem, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 p-4 rounded-lg bg-gray-50 hover:bg-[#F4A261]/10 transition-colors"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-[#F4A261] rounded-full flex items-center justify-center">
                    <problem.icon className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-lg text-gray-700 pt-2" style={{ fontFamily: 'Nunito Sans, sans-serif' }}>
                    {problem.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function BookOpen({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
    </svg>
  );
}
