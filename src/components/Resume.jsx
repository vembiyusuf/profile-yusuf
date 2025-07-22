import { motion } from 'framer-motion';
import { useState } from 'react';
import {
  SiBootstrap, SiCss3, SiExpress, SiHtml5, SiJavascript,
  SiLaravel, SiMysql, SiPhp, SiReact, SiTailwindcss
} from 'react-icons/si';
import { useLanguage } from '../context/LanguageContext';

const Resume = () => {
  const [activeTab, setActiveTab] = useState('experience');
  const { language } = useLanguage();

  const t = {
    id: {
      why: "Mengapa Memilih Saya?",
      intro: "Saya membawa semangat, dedikasi, dan dasar yang kuat dalam pengembangan web ke setiap proyek.",
      tabs: ["Pengalaman", "Pendidikan", "Keahlian", "Tentang Saya"],
      experienceTitle: "Pengalaman Saya",
      experienceDesc: "Meskipun baru memulai perjalanan profesional, saya antusias menerapkan skill saya ke dunia nyata.",
      educationTitle: "Pendidikan Saya",
      educationDesc: "Latar belakang pendidikan saya dan perjalanan belajar yang terus berkembang.",
      skillsTitle: "Keahlian Saya",
      skillsDesc: "Teknologi yang saya kuasai dan terus saya pelajari.",
      aboutTitle: "Tentang Saya",
      aboutDesc: "Informasi pribadi dan kontak saya.",
      aboutLabels: ["Nama", "Jenis Kelamin", "Usia", "Status", "Kota", "Kewarganegaraan", "Telepon", "Email", "Bahasa"],
      aboutValues: ["Muhammad Vembi Yusuf Saputra", "Laki-laki", "17 Tahun", "Pelajar", "Tulungagung", "Indonesia", "(+62) 85336077166", "vembisaputra273@gmail.com", "Indonesia, Jawa"]
    },
    en: {
      why: "Why Choose Me?",
      intro: "I bring passion, dedication, and a strong foundation in web development to every project.",
      tabs: ["Experience", "Education", "Skills", "About Me"],
      experienceTitle: "My Experience",
      experienceDesc: "Although just starting my professional journey, I'm eager to apply my skills in the real world.",
      educationTitle: "My Education",
      educationDesc: "My educational background and continuous learning journey.",
      skillsTitle: "My Skills",
      skillsDesc: "Technologies I master and continuously learn.",
      aboutTitle: "About Me",
      aboutDesc: "My personal and contact information.",
      aboutLabels: ["Name", "Gender", "Age", "Status", "City", "Nationality", "Phone", "Email", "Languages"],
      aboutValues: ["Muhammad Vembi Yusuf Saputra", "Male", "17 Years", "Student", "Tulungagung", "Indonesia", "(+62) 85336077166", "vembisaputra273@gmail.com", "Indonesian, Javanese"]
    }
  };

  const i18n = t[language];

  const tabs = ['experience', 'education', 'skills', 'about'].map((id, idx) => ({
    id,
    label: i18n.tabs[idx]
  }));

  const experiences = [
    {
      year: "2025",
      title: "LKS DIKMEN 2025",
      company: language === "id" ? "DINAS Pendidikan" : "Department of Education",
      description: language === "id"
        ? "Lomba kompetensi siswa bidang web technology."
        : "Student competition in web technology."
    },
    {
      year: "2025-2026",
      title: language === "id" ? "MAGANG BOE MALANG" : "INTERNSHIP BOE MALANG",
      company: "VEDC BOE",
      description: language === "id" ? "Pelatihan PKL." : "Industrial training."
    }
  ];

  const education = [
    {
      year: "2014-2020",
      title: "SDN 4 Kampundalem",
      company: language === "id" ? "Sekolah" : "School",
      description: language === "id" ? "Sekolah Dasar Negeri" : "Elementary School"
    },
    {
      year: "2020-2023",
      title: "SMPN 1 Tulungagung",
      company: language === "id" ? "Sekolah" : "School",
      description: language === "id" ? "Sekolah Menengah Pertama Negeri" : "Junior High School"
    },
    {
      year: "2023-2026",
      title: "SMKN 1 Boyolangu",
      company: language === "id" ? "Sekolah" : "School",
      description: language === "id" ? "SMK dengan jurusan RPL" : "Vocational school majoring in Software Engineering"
    },
    {
      year: "2023-2026",
      title: "Codepolitan",
      company: "Online Course",
      description: language === "id" ? "Pelatihan web development" : "Web development training"
    },
    {
      year: "2023-2026",
      title: "Dicoding",
      company: "Online Course",
      description: language === "id" ? "Belajar dasar-dasar pengembangan web" : "Learning web development fundamentals"
    }
  ];

  const skills = [
    { icon: <SiHtml5 className="text-orange-500 text-4xl" />, name: 'HTML5' },
    { icon: <SiCss3 className="text-blue-500 text-4xl" />, name: 'CSS3' },
    { icon: <SiJavascript className="text-yellow-400 text-4xl" />, name: 'JavaScript' },
    { icon: <SiBootstrap className="text-purple-600 text-4xl" />, name: 'Bootstrap' },
    { icon: <SiTailwindcss className="text-cyan-400 text-4xl" />, name: 'Tailwind CSS' },
    { icon: <SiReact className="text-sky-400 text-4xl" />, name: 'React JS' },
    { icon: <SiPhp className="text-indigo-500 text-4xl" />, name: 'PHP' },
    { icon: <SiMysql className="text-yellow-600 text-4xl" />, name: 'MySQL' },
    { icon: <SiLaravel className="text-red-500 text-4xl" />, name: 'Laravel' },
    { icon: <SiExpress className="text-gray-300 text-4xl" />, name: 'Express.js' },
  ];

  const fadeUpVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } }
  };

  return (
    <motion.section id="resume" className="pt-24 pb-20 px-6 lg:px-[9%] bg-white text-gray-900 dark:bg-gray-900 dark:text-white"
      initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Sidebar */}
        <div className="lg:col-span-1">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">{i18n.why}</h2>
          <p className="text-lg mb-6">{i18n.intro}</p>
          <div className="space-y-4">
            {tabs.map(tab => (
              <button key={tab.id} onClick={() => setActiveTab(tab.id)}
                className={`w-full py-4 px-6 text-left text-lg font-medium rounded-lg transition-colors ${
                  activeTab === tab.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 dark:bg-gray-800 hover:bg-blue-500 hover:text-white'
                }`}>
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="lg:col-span-2">
          {activeTab === 'experience' && (
            <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <h2 className="text-3xl font-bold mb-4">{i18n.experienceTitle}</h2>
              <p className="text-lg mb-6">{i18n.experienceDesc}</p>
              <div className="space-y-6 max-h-[40rem] overflow-y-auto pr-2">
                {experiences.map((exp, index) => (
                  <div key={index} className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
                    <p className="text-blue-600">{exp.year}</p>
                    <h3 className="text-2xl font-semibold mt-2">{exp.title}</h3>
                    <p className="relative pl-4 my-2 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-2 before:h-2 before:bg-blue-600 before:rounded-full">{exp.company}</p>
                    <p className="text-gray-700 dark:text-gray-300">{exp.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === 'education' && (
            <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <h2 className="text-3xl font-bold mb-4">{i18n.educationTitle}</h2>
              <p className="text-lg mb-6">{i18n.educationDesc}</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {education.map((edu, index) => (
                  <div key={index} className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
                    <p className="text-blue-600">{edu.year}</p>
                    <h3 className="text-2xl font-semibold mt-2">{edu.title}</h3>
                    <p className="relative pl-4 my-2 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-2 before:h-2 before:bg-blue-600 before:rounded-full">{edu.company}</p>
                    <p className="text-gray-700 dark:text-gray-300">{edu.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === 'skills' && (
            <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <h2 className="text-3xl font-bold mb-4">{i18n.skillsTitle}</h2>
              <p className="text-lg mb-6">{i18n.skillsDesc}</p>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                {skills.map((skill, index) => (
                  <div key={index} className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg flex flex-col items-center">
                    {skill.icon}
                    <span className="mt-3 text-base font-medium text-center">{skill.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === 'about' && (
            <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <h2 className="text-3xl font-bold mb-4">{i18n.aboutTitle}</h2>
              <p className="text-lg mb-6">{i18n.aboutDesc}</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {i18n.aboutLabels.map((label, i) => (
                  <div key={i} className="border-b border-gray-300 dark:border-gray-600 pb-2">
                    <p className="text-blue-600">{label}</p>
                    <p className="text-lg">{i18n.aboutValues[i]}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </motion.section>
  );
};

export default Resume;
