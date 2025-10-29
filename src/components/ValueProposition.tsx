import { Award, Users, Calendar, Shield } from 'lucide-react';

export default function ValueProposition() {
  const values = [
    {
      icon: Award,
      title: "Metode USMANI Teruji",
      description: "Sistem pembelajaran yang terbukti efektif dan mudah dipahami"
    },
    {
      icon: Users,
      title: "Guru Bersanad & Berpengalaman",
      description: "Pengajar berkualitas dengan sanad dan metode pengajaran yang baik"
    },
    {
      icon: Calendar,
      title: "Jadwal Fleksibel",
      description: "Sesuaikan jadwal belajar dengan aktivitas harian Anda"
    },
    {
      icon: Shield,
      title: "Garansi Bisa Membaca Al-Qur'an",
      description: "Kami pastikan Anda bisa membaca Al-Qur'an dengan baik dan benar"
    }
  ];

  return (
    <section className="py-20 bg-gray-50" id="program">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A2647] mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Mengapa Memilih Rumah Qur'an Al-Insan?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto" style={{ fontFamily: 'Nunito Sans, sans-serif' }}>
            Komitmen kami adalah memberikan pembelajaran Al-Qur'an terbaik untuk Anda
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 group"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-[#008037] to-[#0A2647] rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <value.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#0A2647] mb-3" style={{ fontFamily: 'Poppins, sans-serif' }}>
                {value.title}
              </h3>
              <p className="text-gray-600" style={{ fontFamily: 'Nunito Sans, sans-serif' }}>
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
