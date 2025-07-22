const Portfolio = () => {
  const projects = [
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
    },
  ];

  return (
    <section id="portfolio" className="pt-20 pb-10 px-4 md:px-8 bg-[#0b0f1a] text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Proyek Saya</h2>
        <p className="text-gray-400 text-center mb-10">
          Berikut beberapa proyek yang saya buat selama PKL dan pembelajaran mandiri.
        </p>

        <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-[#131a2b] rounded-xl overflow-hidden shadow-md hover:shadow-blue-500/30 transition duration-300"
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
                  {project.tech.map((tech, index) => (
                    <span
                      key={index}
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
                  Lihat Proyek →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
