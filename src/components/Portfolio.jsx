import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const Portfolio = () => {
  const { language } = useLanguage();

  const translations = {
    id: {
      heading: "Proyek Saya",
      viewProject: "Lihat Proyek →",
      projects: [
        {
          id: 1,
          title: "Aplikasi Kasir",
          description: "Sistem POS sederhana menggunakan React, Express, dan MongoDB.",
          tech: ["React", "Express", "MongoDB"],
          image: "/img/project-kasir.png",
          link: "#"
        },
        {
          id: 2,
          title: "Absensi PKL",
          description: "Sistem absensi berbasis QR dengan fitur foto selfie.",
          tech: ["React", "Laravel", "MySQL"],
          image: "/img/project-absen.png",
          link: "#"
        },
        {
          id: 3,
          title: "Booking Kost",
          description: "Aplikasi pemesanan kost menggunakan Laravel Sanctum dan React.",
          tech: ["Laravel", "React", "Sanctum"],
          image: "/img/project-kost.png",
          link: "#"
        }
      ]
    },
    en: {
      heading: "My Projects",
      viewProject: "View Project →",
      projects: [
        {
          id: 1,
          title: "POS App",
          description: "Simple POS system using React, Express, and MongoDB.",
          tech: ["React", "Express", "MongoDB"],
          image: "/img/project-kasir.png",
          link: "#"
        },
        {
          id: 2,
          title: "Intern Attendance",
          description: "QR-based attendance system with selfie capture feature.",
          tech: ["React", "Laravel", "MySQL"],
          image: "/img/project-absen.png",
          link: "#"
        },
        {
          id: 3,
          title: "Kost Booking",
          description: "Boarding house booking app using Laravel Sanctum and React.",
          tech: ["Laravel", "React", "Sanctum"],
          image: "/img/project-kost.png",
          link: "#"
        }
      ]
    }
  };

  const { heading, viewProject, projects } = translations[language];

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
      id="portfolio"
      className="pt-28 pb-20 px-6 md:px-[9%] bg-[#0b0f1a] text-white"
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
        {heading.split(" ")[0]} <span className="text-sky-400">{heading.split(" ")[1]}</span>
      </motion.h2>

      <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            className="bg-[#131a2b] rounded-xl overflow-hidden shadow-md hover:shadow-blue-500/30 transition duration-300"
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariant}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-5">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-sm text-gray-300 mb-3">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="text-sm bg-blue-900 px-3 py-1 rounded-full text-blue-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-auto text-sm text-blue-400 hover:underline"
              >
                {viewProject}
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Portfolio;
