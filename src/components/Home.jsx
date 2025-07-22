import { useEffect } from 'react';
import { motion } from 'framer-motion';

const Home = () => {
  useEffect(() => {
    const border = document.querySelector('.profile-border');
    if (border) {
      let rotation = 0;
      const animate = () => {
        rotation += 1;
        border.style.transform = `rotate(${rotation}deg)`;
        requestAnimationFrame(animate);
      };
      animate();
    }
  }, []);

  // Fungsi untuk menangani unduhan CV
  const handleDownloadCV = () => {
    // Membuat elemen anchor sementara
    const link = document.createElement('a');
    link.href = '/files/cv-vembi-yusuf.pdf';
    link.download = 'CV_Vembi_Yusuf.pdf'; // Nama file saat diunduh
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <motion.section
      id="home"
      className="min-h-screen flex items-center justify-center py-20 px-6 md:px-[9%] bg-gray-900 text-white"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <div className="flex flex-col md:flex-row items-center gap-12 w-full">

        {/* Kiri */}
        <div className="flex-1">
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            Vembi Yusuf
          </motion.h1>

          <motion.h2
            className="text-2xl sm:text-3xl mb-2 h-12 flex items-center overflow-hidden"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 60, delay: 0.5 }}
          >
            Saya adalah{' '}
            <span className="ml-2 inline-block overflow-hidden">
              <span className="inline-block text-blue-400 font-semibold whitespace-nowrap animate-[slide-right_8s_linear_infinite]">
                Junior Fullstack Developer
              </span>
            </span>
          </motion.h2>

          <motion.p
            className="text-base sm:text-lg my-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
          >
            Saya adalah pelajar di SMKN 1 Boyolangu, Tulungagung, Jawa Timur. Saya memilih jurusan Rekayasa Perangkat Lunak karena ingin memperdalam ilmu di bidang IT.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
          >
            <button
              onClick={handleDownloadCV}
              className="bg-blue-400 text-gray-900 font-medium py-3 px-8 rounded-full hover:bg-transparent hover:text-blue-400 border-2 border-blue-400 transition-all duration-300 shadow-lg hover:shadow-none"
            >
              Unduh CV
            </button>

            <div className="flex gap-4">
              {[
                { icon: 'github', url: 'https://github.com/vembiyusuf/' },
                { icon: 'linkedin', url: 'https://www.linkedin.com/in/muhammad-vembi-yusuf-saputra-68b5622b4/' },
                { icon: 'discord-alt', url: 'https://discord.com/channels/@muhammadvembiyusufsaputra_77109' },
                { icon: 'instagram', url: 'https://www.instagram.com/vembi_yusuf' },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.url}
                  className="p-2 border-2 border-blue-400 rounded-full text-blue-400 hover:bg-blue-400 hover:text-gray-900 transition-all duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className={`bx bxl-${social.icon} text-2xl`}></i>
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Kanan - Gambar Profil */}
        <motion.div
          className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <div className="absolute inset-0 rounded-full overflow-hidden">
            <div className="absolute inset-0 rounded-full bg-gray-900 p-1 flex items-center justify-center overflow-hidden">
              <div className="relative w-full h-full rounded-full flex items-center justify-center">
                <img
                  src="/images/home.png"
                  alt="Profil"
                  className="w-[85%] mt-8 object-contain mix-blend-lighten"
                />
              </div>
            </div>
            <div className="profile-border absolute inset-0 rounded-full border-t-4 border-transparent border-b-4 border-blue-400"></div>
          </div>
        </motion.div>
      </div>

      <style jsx global>{`
        @keyframes slide-right {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>
    </motion.section>
  );
};

export default Home;