import { MessageCircle} from 'lucide-react';

export default function FinalCTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#0A2647] via-[#144272] to-[#008037] relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0 L45 15 L30 30 L15 15 Z M30 30 L45 45 L30 60 L15 45 Z' fill='%23ffffff' fill-opacity='0.4'/%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Jangan Tunda Lagi
          </h2>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-8" style={{ fontFamily: 'Nunito Sans, sans-serif' }}>
            Mulai langkahmu menuju cinta Al-Qur'an hari ini
          </p>

          <a
            href="https://wa.me/628980897333?text=Assalamu'alaikum,%20mohon%20izin%20info%20pendaftarannya%20ka"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-3 bg-[#F4A261] text-white px-10 py-5 rounded-full text-xl font-semibold hover:bg-[#e39350] transition-all hover:shadow-2xl hover:scale-105 mb-12"
          >
            <MessageCircle className="w-6 h-6" />
            <span>Daftar Sekarang via WhatsApp</span>
          </a>
        </div>

        <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md mx-auto text-center">
          <div className="flex justify-center mb-4">
            <QrCode className="w-12 h-12 text-[#0A2647]" />
          </div>
          <h3 className="text-xl font-bold text-[#0A2647] mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Scan untuk WhatsApp
          </h3>
          <div className="bg-gray-100 rounded-xl p-6 mb-4">
            <a
               href="https://wa.me/628980897333?text=Assalamu'alaikum,%20mohon%20izin%20info%20pendaftarannya%20ka"
               target="_blank"
               rel="noopener noreferrer"
            >
            <img
              src="/qr-whatsapp.png"
              alt="QR WhatsApp Rumah Qur'an Al-Insan"
              className="w-48 h-48 mx-auto rounded-lg border-2 border-[#008037]"
            />
            </a>

          </div>
          <p className="text-gray-600 font-semibold" style={{ fontFamily: 'Nunito Sans, sans-serif' }}>
            +62 898-0897-333
          </p>
        </div>
      </div>
    </section>
  );
}
