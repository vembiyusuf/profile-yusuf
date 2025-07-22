import { motion } from 'framer-motion';
import { useState } from 'react';
import {
  SiBootstrap,
  SiCss3,
  SiExpress,
  SiHtml5,
  SiJavascript,
  SiLaravel,
  SiMysql,
  SiPhp,
  SiReact,
  SiTailwindcss
} from 'react-icons/si';

const Resume = () => {
  const [activeTab, setActiveTab] = useState('experience');

  const tabs = [
    { id: 'experience', label: 'Pengalaman' },
    { id: 'education', label: 'Pendidikan' },
    { id: 'skills', label: 'Keahlian' },
    { id: 'about', label: 'Tentang Saya' }
  ];

  const experiences = [
    {
      year: "2025",
      title: "LKS DIKMEN 2025",
      company: "DINAS Pendidikan",
      description: "Lomba kompetensi siswa bidang web technology."
    },
    {
      year: "2025-2026",
      title: "MAGANG BOE MALANG",
      company: "VEDC BOE",
      description: "Pelatihan PKL."
    }
  ];

  const education = [
    {
      year: "2014-2020",
      title: "SDN 4 Kampundalem",
      company: "Sekolah",
      description: "Sekolah Dasar Negeri"
    },
    {
      year: "2020-2023",
      title: "SMPN 1 Tulungagung",
      company: "Sekolah",
      description: "Sekolah Menengah Pertama Negeri"
    },
    {
      year: "2023-2026",
      title: "SMKN 1 Boyolangu",
      company: "Sekolah",
      description: "SMK dengan jurusan Rekayasa Perangkat Lunak (RPL)"
    },
    {
      year: "2023-2026",
      title: "Codepolitan",
      company: "Kursus Online",
      description: "Mengikuti berbagai pelatihan web development"
    },
    {
      year: "2023-2026",
      title: "Dicoding",
      company: "Kursus Online",
      description: "Belajar dasar-dasar pengembangan web"
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

  const aboutInfo = [
    { label: 'Nama', value: 'Muhammad Vembi Yusuf Saputra' },
    { label: 'Jenis Kelamin', value: 'Laki-laki' },
    { label: 'Usia', value: '17 Tahun' },
    { label: 'Status', value: 'Pelajar' },
    { label: 'Kota', value: 'Tulungagung' },
    { label: 'Kewarganegaraan', value: 'Indonesia' },
    { label: 'Telepon', value: '(+62) 85336077166' },
    { label: 'Email', value: 'vembisaputra273@gmail.com' },
    { label: 'Bahasa', value: 'Indonesia, Jawa' }
  ];

  const fadeUpVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' }
    }
  };

  return (
    <motion.section
      id="resume"
      className="pt-28 pb-20 px-[9%] bg-white text-gray-900 dark:bg-gray-900 dark:text-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeUpVariant}
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Mengapa Memilih Saya?</h2>
          <p className="text-lg mb-6">Saya membawa semangat, dedikasi, dan dasar yang kuat dalam pengembangan web ke setiap proyek.</p>
          <div className="space-y-4">
            {tabs.map(tab => (
              <button
                key={tab.id}
                className={`w-full py-4 px-6 text-left text-lg font-medium rounded-lg transition-colors ${
                  activeTab === tab.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 dark:bg-gray-800 hover:bg-blue-500 hover:text-white'
                }`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="lg:col-span-2">
          {activeTab === 'experience' && (
            <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <h2 className="text-3xl font-bold mb-4">Pengalaman <span className="text-blue-600">Saya</span></h2>
              <p className="text-lg mb-6">Meskipun baru memulai perjalanan profesional, saya antusias menerapkan skill saya ke dunia nyata.</p>
              <div className="space-y-6 max-h-[45rem] overflow-y-auto pr-4">
                {experiences.map((exp, index) => (
                  <div key={index} className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
                    <p className="text-blue-600">{exp.year}</p>
                    <h3 className="text-2xl font-semibold mt-2">{exp.title}</h3>
                    <p className="relative pl-4 my-2 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-2 before:h-2 before:bg-blue-600 before:rounded-full">
                      {exp.company}
                    </p>
                    <p className="text-gray-700 dark:text-gray-300">{exp.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === 'education' && (
            <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <h2 className="text-3xl font-bold mb-4">Pendidikan <span className="text-blue-600">Saya</span></h2>
              <p className="text-lg mb-6">Latar belakang pendidikan saya dan perjalanan belajar yang terus berkembang.</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {education.map((edu, index) => (
                  <div key={index} className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
                    <p className="text-blue-600">{edu.year}</p>
                    <h3 className="text-2xl font-semibold mt-2">{edu.title}</h3>
                    <p className="relative pl-4 my-2 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-2 before:h-2 before:bg-blue-600 before:rounded-full">
                      {edu.company}
                    </p>
                    <p className="text-gray-700 dark:text-gray-300">{edu.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === 'skills' && (
            <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <h2 className="text-3xl font-bold mb-4">Keahlian <span className="text-blue-600">Saya</span></h2>
              <p className="text-lg mb-6">Teknologi yang saya kuasai dan terus saya pelajari.</p>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                {skills.map((skill, index) => (
                  <div key={index} className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg flex flex-col items-center">
                    {skill.icon}
                    <span className="mt-3 text-base font-medium">{skill.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === 'about' && (
            <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <h2 className="text-3xl font-bold mb-4">Tentang <span className="text-blue-600">Saya</span></h2>
              <p className="text-lg mb-6">Informasi pribadi dan kontak saya.</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {aboutInfo.map((info, index) => (
                  <div key={index} className="border-b border-gray-300 dark:border-gray-600 pb-2">
                    <p className="text-blue-600">{info.label}</p>
                    <p className="text-lg">{info.value}</p>
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
