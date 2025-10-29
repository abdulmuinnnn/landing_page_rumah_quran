import { Check, Sparkles } from 'lucide-react';

export default function Pricing() {
  const plans = [
    {
      name: "Reguler",
      price: "50.000",
      features: [
        "Kelas berkelompok",
        "2x pertemuan per minggu",
        "Metode USMANI",
        "Buku panduan belajar",
        "Sertifikat kelulusan"
      ],
      popular: false
    },
    {
      name: "Privat",
      price: "75.000",
      features: [
        "Kelas private 1-on-1",
        "Jadwal fleksibel",
        "Metode USMANI",
        "Buku panduan belajar",
        "Sertifikat kelulusan",
        "Progress report bulanan"
      ],
      popular: true
    },
    {
      name: "Tahfidz",
      price: "100.000",
      features: [
        "Program menghafal Qur'an",
        "Bimbingan intensif",
        "Metode muroja'ah",
        "Buku panduan belajar",
        "Sertifikat hafalan",
        "Evaluasi berkala"
      ],
      popular: false
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A2647] mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Pilih Program Yang Sesuai
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto" style={{ fontFamily: 'Nunito Sans, sans-serif' }}>
            Investasi terbaik untuk diri dan keluarga
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 ${
                plan.popular ? 'ring-4 ring-[#F4A261] scale-105' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="bg-[#F4A261] text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center space-x-1 shadow-lg">
                    <Sparkles className="w-4 h-4" />
                    <span>Paling Populer</span>
                  </div>
                </div>
              )}

              <div className="p-8">
                <h3 className="text-2xl font-bold text-[#0A2647] mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  {plan.name}
                </h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-[#0A2647]">Rp{plan.price}</span>
                  <span className="text-gray-600">/bulan</span>
                </div>

                <div className="bg-[#008037] text-white text-sm px-4 py-2 rounded-full inline-block mb-6">
                  Termasuk Buku Panduan Belajar
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-[#008037] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700" style={{ fontFamily: 'Nunito Sans, sans-serif' }}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <a
                  href="https://wa.me/6289808097333"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block w-full text-center py-3 rounded-full font-semibold transition-all ${
                    plan.popular
                      ? 'bg-[#F4A261] text-white hover:bg-[#e39350] hover:shadow-lg'
                      : 'bg-gray-100 text-[#0A2647] hover:bg-[#008037] hover:text-white'
                  }`}
                >
                  Pilih Program
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
