import { motion } from 'framer-motion';
import { useEffect } from 'react';
import Swal from 'sweetalert2';

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

  const handleDownloadCV = async () => {
    try {
      const response = await fetch('/files/cv-vembi-yusuf.pdf');
      if (!response.ok) throw new Error('File tidak ditemukan.');

      const blob = await response.blob();
      const link = document.createElement('a');
      link.href = window.URL.createObjectURL(blob);
      link.download = 'CV_Vembi_Yusuf.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      Swal.fire({
        icon: 'success',
        title: 'Berhasil!',
        text: 'CV berhasil diunduh.',
        timer: 2000,
        showConfirmButton: false,
      });
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Gagal!',
        text: 'CV tidak dapat diunduh.',
      });
    }
  };

  return (
    <motion.section
      id="home"
      className="min-h-screen flex items-center justify-center py-24 px-6 md:px-[9%] bg-gray-900 text-white"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <div className="flex flex-col-reverse md:flex-row items-center gap-12 w-full">
        {/* Kiri - Teks */}
        <div className="flex-1 text-center md:text-left">
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            Vembi Yusuf
          </motion.h1>

          <motion.h2
            className="text-xl sm:text-2xl md:text-3xl mb-2 flex justify-center md:justify-start"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Saya adalah <span className="ml-2 text-blue-400 font-semibold">Junior Fullstack Developer</span>
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
            className="flex flex-col sm:flex-row items-center gap-4 mt-6"
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

            <div className="flex gap-4 mt-2 sm:mt-0">
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
          className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 mb-8 md:mb-0"
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
                  className="w-[85%] mt-6 object-contain mix-blend-lighten"
                />
              </div>
            </div>
            <div className="profile-border absolute inset-0 rounded-full border-t-4 border-transparent border-b-4 border-blue-400"></div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Home;
