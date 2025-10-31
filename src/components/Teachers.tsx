import { useRef, useEffect } from 'react';
import { GraduationCap, BookOpen, Award, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Teachers() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);
  const isPausedRef = useRef(false);

  const teachers = [
    {
      name: "Ust. Syahrul Mohammad",
      photo: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400",
      education: "S1 PTIQ Jakarta",
      hafalan: "30 Juz",
      achievement: "Juara 1 MTQ Nasional 2019"
    },
    {
      name: "Ust. Abdul Muin",
      photo: "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=400",
      education: "D2 Tahfidz Ma'had Umar bin Khattab",
      hafalan: "30 Juz",
      achievement: "Hafidz 30 Juz Usia 18 Tahun"
    },
    {
      name: "Ust. Ricky Adrian",
      photo: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400",
      education: "S2 PTIQ Jakarta",
      hafalan: "15 Juz",
      achievement: "Dosen Ilmu Al-Qur'an"
    },
    {
      name: "Ust. Fawwaz Zuhdi Salamat",
      photo: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400",
      education: "S1 UMJ",
      hafalan: "15 Juz",
      achievement: "Finalis MTQ Jakarta 2020"
    },
    {
      name: "Ust. M. Ikramullah",
      photo: "https://images.pexels.com/photos/1024311/pexels-photo-1024311.jpeg?auto=compress&cs=tinysrgb&w=400",
      education: "LIPIA",
      hafalan: "5 Juz",
      achievement: "Ahli Tafsir & Bahasa Arab"
    },
    {
      name: "Ustzh. Diana",
      photo: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400",
      education: "D2 Bahasa Arab",
      hafalan: "6 Juz",
      achievement: "Pengajar Tahsin Wanita"
    },
    {
      name: "Ustzh. Salamah",
      photo: "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=400",
      education: "S1 Al Hikmah",
      hafalan: "2 Juz",
      achievement: "Spesialis Tajwid Pemula"
    },
    {
      name: "Ust. Taufik Hidayat",
      photo: "https://images.pexels.com/photos/1516559/pexels-photo-1516559.jpeg?auto=compress&cs=tinysrgb&w=400",
      education: "STAI DI Al Hikmah",
      hafalan: "6 Juz",
      achievement: "Qori' Internasional"
    },
    {
      name: "Ust. Fauzi Al Tarobi",
      photo: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=400",
      education: "STAI DI Al Hikmah",
      hafalan: "3 Juz",
      achievement: "Ustadz Akhlak & Adab"
    },
    {
      name: "Ust. Ihwanudin",
      photo: "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=400",
      education: "STAI DI Al Hikmah",
      hafalan: "5 Juz",
      achievement: "Pembina Tilawah Remaja"
    },
    {
      name: "Ust. Ali Sa'id Al Qadir Basri",
      photo: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400",
      education: "LIPIA",
      hafalan: "10 Juz",
      achievement: "Lulusan Terbaik LIPIA 2018"
    }
  ];

  const allTeachers = [...teachers, ...teachers, ...teachers];

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    const scrollSpeed = 0.5;

    const animate = () => {
      if (!isPausedRef.current && scrollContainer) {
        scrollContainer.scrollLeft += scrollSpeed;

        const maxScroll = scrollContainer.scrollWidth / 3;
        if (scrollContainer.scrollLeft >= maxScroll) {
          scrollContainer.scrollLeft = 0;
        }
      }
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400;
      const scrollContainer = scrollContainerRef.current;
      const newScroll = direction === 'left'
        ? scrollContainer.scrollLeft - scrollAmount
        : scrollContainer.scrollLeft + scrollAmount;

      scrollContainer.scrollTo({
        left: newScroll,
        behavior: 'smooth'
      });

      isPausedRef.current = true;
      setTimeout(() => {
        isPausedRef.current = false;
      }, 3000);
    }
  };

  const handleMouseEnter = () => {
    isPausedRef.current = true;
  };

  const handleMouseLeave = () => {
    isPausedRef.current = false;
  };

  return (
    <section className="py-20 bg-[#F7F8FA] overflow-hidden" id="guru">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A2647] mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Guru & Pembimbing Kami
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto" style={{ fontFamily: 'Nunito Sans, sans-serif' }}>
            Pengajar berkualitas dengan latar belakang pendidikan Islam yang kuat
          </p>
        </div>
      </div>

      <div className="relative">
        <button
          onClick={() => scroll('left')}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-[#008037] text-[#0A2647] hover:text-white rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110"
          aria-label="Scroll left"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={() => scroll('right')}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-[#008037] text-[#0A2647] hover:text-white rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110"
          aria-label="Scroll right"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        <div
          ref={scrollContainerRef}
          className="flex overflow-x-hidden"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {allTeachers.map((teacher, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-80 mx-4 group"
            >
              <div className="bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden h-full transform hover:scale-105 hover:-translate-y-2">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={teacher.photo}
                    alt={teacher.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A2647]/80 to-transparent"></div>
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-bold text-[#0A2647] mb-3 group-hover:text-[#008037] transition-colors" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    {teacher.name}
                  </h3>

                  <div className="space-y-2.5">
                    <div className="flex items-start space-x-2 text-sm text-gray-600">
                      <GraduationCap className="w-5 h-5 text-[#F4A261] flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                      <span style={{ fontFamily: 'Nunito Sans, sans-serif' }}>{teacher.education}</span>
                    </div>

                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <BookOpen className="w-5 h-5 text-[#008037] flex-shrink-0 group-hover:scale-110 transition-transform" />
                      <span style={{ fontFamily: 'Nunito Sans, sans-serif' }}>Hafalan: {teacher.hafalan}</span>
                    </div>

                    <div className="flex items-start space-x-2 text-sm text-gray-600">
                      <Award className="w-5 h-5 text-[#E76F51] flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                      <span style={{ fontFamily: 'Nunito Sans, sans-serif' }}>{teacher.achievement}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-3xl mx-auto text-center mt-16 px-4">
        <div className="bg-gradient-to-br from-[#0A2647] to-[#008037] rounded-2xl p-8 text-white shadow-xl">
          <p className="text-xl md:text-2xl italic mb-2" style={{ fontFamily: 'Amiri, serif' }}>
            "Mengajar Al-Qur'an bukan sekadar profesi, tapi jalan menuju ridha Allah."
          </p>
        </div>
      </div>
    </section>
  );
}
