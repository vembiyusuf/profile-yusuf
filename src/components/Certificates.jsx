import { motion } from 'framer-motion';

const Certificates = () => {
  const certificates = [
    {
      title: "Belajar Dasar Web | Dicoding",
      image: "/images/certi1.png"
    },
    {
      title: "Web Development Fundamentals",
      image: "/images/certi2.png"
    },
    {
      title: "Konsep Lanjutan JavaScript",
      image: "/images/certi3.png"
    },
    {
      title: "Desain Web Responsif",
      image: "/images/certi4.png"
    }
  ];

  const sectionVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' }
    }
  };

  const cardVariant = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: { delay: i * 0.2, duration: 0.5 }
    })
  };

  return (
    <motion.section
      id="certificates"
      className="pt-28 pb-20 px-6 md:px-[9%] bg-gray-800 text-white"
      initial="hidden"
      animate="visible"
      variants={sectionVariant}
    >
      <motion.h2
        className="text-4xl md:text-5xl font-bold text-center mb-10"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        Sertifikat <span className="text-sky-400">Saya</span>
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {certificates.map((cert, index) => (
          <motion.div
            key={index}
            className="bg-gray-900 p-6 rounded-xl border-2 border-gray-900 hover:border-sky-400 transition-all duration-300 hover:scale-[1.02] shadow-lg"
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariant}
          >
            <div className="flex justify-between items-center mb-4">
              <i className="bx bx-code-alt text-4xl text-sky-400"></i>
              <a
                href="#"
                className="bg-white rounded-full p-2 hover:bg-sky-400 transition-colors"
              >
                <i className="bx bx-arrow-back text-2xl text-gray-900 rotate-180 hover:rotate-[360deg] transition-transform duration-500"></i>
              </a>
            </div>
            <h3 className="text-xl sm:text-2xl font-semibold mb-4">
              {cert.title}
            </h3>
            <div className="w-full aspect-[4/3] overflow-hidden rounded-md">
              <img
                src={cert.image}
                alt={cert.title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Certificates;
