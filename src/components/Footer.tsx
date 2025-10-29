import { MapPin, Clock, Instagram, Facebook, Mail, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#0A2647] text-white pt-16 pb-8" id="kontak">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Kontak Kami
            </h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-[#F4A261] flex-shrink-0 mt-1" />
                <p className="text-white/80" style={{ fontFamily: 'Nunito Sans, sans-serif' }}>
                  Masjid Raya Al-Insan<br />
                  Grogol Utara<br />
                  Jakarta Selatan
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-[#F4A261]" />
                <p className="text-white/80" style={{ fontFamily: 'Nunito Sans, sans-serif' }}>
                  +62 898-0897-333
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-[#F4A261]" />
                <p className="text-white/80" style={{ fontFamily: 'Nunito Sans, sans-serif' }}>
                  info@rumahquran-alinsan.com
                </p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Jadwal Operasional
            </h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-[#F4A261] flex-shrink-0 mt-1" />
                <div className="text-white/80" style={{ fontFamily: 'Nunito Sans, sans-serif' }}>
                  <p className="font-semibold text-white">Senin - Jumat</p>
                  <p>08:00 - 20:00 WIB</p>
                  <p className="font-semibold text-white mt-2">Sabtu - Minggu</p>
                  <p>08:00 - 17:00 WIB</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Media Sosial
            </h3>
            <div className="space-y-3">
              <a
                href="https://instagram.com/masjidrayaalinsan"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-white/80 hover:text-[#F4A261] transition-colors"
              >
                <Instagram className="w-5 h-5" />
                <span style={{ fontFamily: 'Nunito Sans, sans-serif' }}>@masjidrayaalinsan</span>
              </a>
              <a
                href="https://facebook.com/masjidrayaalinsan"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-white/80 hover:text-[#F4A261] transition-colors"
              >
                <Facebook className="w-5 h-5" />
                <span style={{ fontFamily: 'Nunito Sans, sans-serif' }}>Masjid Raya Al-Insan</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <p className="text-center text-white/60" style={{ fontFamily: 'Nunito Sans, sans-serif' }}>
            © 2025 Rumah Qur'an Al-Insan — Membangun Generasi Qur'ani
          </p>
        </div>
      </div>
    </footer>
  );
}
