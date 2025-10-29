import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Apakah kelas dilakukan secara online atau offline?",
      answer: "Kami menyediakan kedua pilihan. Untuk kelas online, pembelajaran dilakukan via video call dengan menggunakan platform yang mudah diakses. Kelas offline dilakukan di Masjid Raya Al-Insan."
    },
    {
      question: "Apakah jadwal belajar bisa disesuaikan?",
      answer: "Ya, sangat bisa! Terutama untuk program privat, Anda bisa menentukan jadwal yang sesuai dengan kesibukan Anda. Untuk kelas reguler, kami juga menyediakan beberapa pilihan waktu."
    },
    {
      question: "Apa itu metode USMANI?",
      answer: "Metode USMANI adalah metode pembelajaran Al-Qur'an yang sistematis dan mudah dipahami. Metode ini telah terbukti efektif membantu santri dari berbagai usia untuk bisa membaca Al-Qur'an dengan baik dan benar."
    },
    {
      question: "Apakah saya akan mendapat sertifikat?",
      answer: "Ya, setiap santri yang menyelesaikan program akan mendapatkan sertifikat sebagai bukti penyelesaian program. Sertifikat ini bisa menjadi motivasi dan dokumentasi prestasi belajar Anda."
    },
    {
      question: "Berapa lama waktu yang dibutuhkan untuk bisa membaca Al-Qur'an?",
      answer: "Waktu belajar bervariasi tergantung konsistensi dan kemampuan masing-masing santri. Namun dengan metode kami yang teruji, rata-rata santri bisa membaca Al-Qur'an dengan baik dalam 3-6 bulan."
    },
    {
      question: "Apakah ada biaya pendaftaran?",
      answer: "Tidak ada biaya pendaftaran. Anda hanya perlu membayar biaya bulanan sesuai program yang dipilih. Hubungi kami untuk informasi lebih lanjut."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A2647] mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Pertanyaan yang Sering Diajukan
          </h2>
          <p className="text-lg text-gray-600" style={{ fontFamily: 'Nunito Sans, sans-serif' }}>
            Temukan jawaban untuk pertanyaan Anda
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
              >
                <span className="text-lg font-semibold text-[#0A2647] pr-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-6 h-6 text-[#008037] flex-shrink-0 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-6 pb-5 text-gray-600" style={{ fontFamily: 'Nunito Sans, sans-serif' }}>
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
