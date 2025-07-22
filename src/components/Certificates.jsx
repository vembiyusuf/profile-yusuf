import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const Certificates = () => {
  const { language } = useLanguage();

  const certificates = [
    {
      title: language === 'en' ? "Basic Web Course | Dicoding" : "Belajar Dasar Web | Dicoding",
      image: "/images/certi1.png"
    },
    {
      title: language === 'en' ? "Web Development Fundamentals" : "Fundamental Pengembangan Web",
      image: "/images/certi2.png"
    },
    {
      title: language === 'en' ? "Advanced JavaScript Concepts" : "Konsep Lanjutan JavaScript",
      image: "/images/certi3.png"
    },
    {
      title: language === 'en' ? "Responsive Web Design" : "Desain Web Responsif",
      image: "/images/certi4.png"
    }
  ];

  const sectionVariant = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: 'easeOut',
        when: 'beforeChildren',
        staggerChildren: 0.2
      }
    }
  };

  const cardVariant = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <motion.section
      id="certificates"
      className="pt-28 pb-20 px-6 md:px-[9%] bg-gray-800 text-white"
      variants={sectionVariant}
      initial="hidden"
      animate="visible"
    >
      <motion.h2
        className="text-4xl md:text-5xl font-bold text-center mb-12"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {language === 'en' ? 'My ' : 'Sertifikat '}
        <span className="text-sky-400">{language === 'en' ? 'Certificates' : 'Saya'}</span>
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {certificates.map((cert, index) => (
          <motion.div
            key={index}
            className="bg-gray-900 p-6 rounded-xl border border-gray-700 hover:border-sky-400 shadow-md hover:shadow-sky-400/30 transition-all duration-300 hover:scale-[1.02]"
            variants={cardVariant}
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="flex justify-between items-center mb-4">
              <i className="bx bx-certification text-4xl text-sky-400"></i>
              <a
                href="#"
                className="bg-white rounded-full p-2 hover:bg-sky-400 transition-colors"
              >
                <i className="bx bx-arrow-back text-2xl text-gray-900 rotate-180 hover:rotate-[360deg] transition-transform duration-500"></i>
              </a>
            </div>
            <h3 className="text-xl font-semibold mb-4">{cert.title}</h3>
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
