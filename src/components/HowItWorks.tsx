import { ListChecks, CalendarCheck, BookOpen, Award } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      icon: ListChecks,
      title: "Pilih Program",
      description: "Tentukan program yang sesuai dengan kebutuhan Anda"
    },
    {
      icon: CalendarCheck,
      title: "Tentukan Jadwal",
      description: "Atur jadwal belajar yang fleksibel sesuai waktu Anda"
    },
    {
      icon: BookOpen,
      title: "Mulai Belajar",
      description: "Belajar dengan guru berpengalaman dan metode teruji"
    },
    {
      icon: Award,
      title: "Dapatkan Sertifikat",
      description: "Raih sertifikat sebagai bukti penyelesaian program"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A2647] mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Cara Mudah Memulai
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto" style={{ fontFamily: 'Nunito Sans, sans-serif' }}>
            Hanya 4 langkah untuk memulai perjalanan Qur'ani Anda
          </p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-[#008037] via-[#F4A261] to-[#0A2647] -translate-y-1/2"></div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-gray-50 p-8 rounded-2xl hover:shadow-xl transition-all hover:-translate-y-2 text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#008037] to-[#0A2647] rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <step.icon className="w-10 h-10 text-white" />
                  </div>
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-12 h-12 bg-[#F4A261] rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-bold text-[#0A2647] mb-3" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    {step.title}
                  </h3>
                  <p className="text-gray-600" style={{ fontFamily: 'Nunito Sans, sans-serif' }}>
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
