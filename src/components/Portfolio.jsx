import { useState } from 'react';

const Portfolio = () => {
  const [projectAktif, setProjectAktif] = useState(0);

  const projek = [
    {
      id: 1,
      judul: "Website Portfolio",
      deskripsi: "Website portfolio pribadi yang menampilkan skill dan projek saya.",
      teknologi: "HTML, CSS, JavaScript (Tanpa Framework)",
      linkLive: "https://vembiyusuf.github.io/Portofolios/",
      linkGithub: "https://github.com/vembiyusuf/Portofolios.git",
      gambar: ["/images/porto1.png", "/images/porto2.png"]
    },
    {
      id: 2,
      judul: "Aplikasi Todo List",
      deskripsi: "Aplikasi todo list sederhana yang dibangun dengan React dan Vite.",
      teknologi: "React.js (Vite)",
      linkLive: "https://vembiyusuf.github.io/todo-list/",
      linkGithub: "https://github.com/vembiyusuf/todo-list.git",
      gambar: ["/images/porto2.png", "/images/porto1.png"]
    }
  ];

  const selanjutnya = () => {
    if (projectAktif < projek.length - 1) {
      setProjectAktif(projectAktif + 1);
    }
  };

  const sebelumnya = () => {
    if (projectAktif > 0) {
      setProjectAktif(projectAktif - 1);
    }
  };

  return (
    <section
      id="portfolio"
      className="pt-28 pb-20 px-4 md:px-[9%] bg-gray-900 text-white border-t border-gray-700"
    >
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
        Projek <span className="text-blue-400">Saya</span>
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Kiri: Detail Projek */}
        <div className="order-2 lg:order-1">
          <div className="relative h-full">
            {projek.map((item, index) => (
              <div
                key={item.id}
                className={`absolute inset-0 transition-opacity duration-500 ${
                  projectAktif === index ? 'opacity-100' : 'opacity-0 pointer-events-none'
                }`}
              >
                <p className="text-7xl md:text-8xl -mt-4 [-webkit-text-stroke:0.07rem_#fff] text-transparent">
                  {`0${index + 1}`}
                </p>
                <h3 className="text-2xl md:text-3xl font-bold my-4">{item.judul}</h3>
                <p className="text-base md:text-lg mb-6">{item.deskripsi}</p>

                <div className="mb-6 pb-4 border-b border-gray-600 flex flex-wrap gap-2">
                  {item.teknologi.split(',').map((tech, idx) => (
                    <span
                      key={idx}
                      className="bg-blue-600/20 text-blue-400 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {tech.trim()}
                    </span>
                  ))}
                </div>

                <div className="flex gap-6">
                  <a
                    href={item.linkLive}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative bg-gray-800 p-3 rounded-full text-3xl hover:text-blue-400 transition-colors group"
                  >
                    <i className="bx bx-arrow-back rotate-[135deg]"></i>
                    <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white text-gray-900 px-3 py-1 rounded text-sm opacity-0 group-hover:opacity-100 whitespace-nowrap transition-opacity">
                      Lihat Online
                    </span>
                  </a>

                  <a
                    href={item.linkGithub}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative bg-gray-800 p-3 rounded-full text-3xl hover:text-blue-400 transition-colors group"
                  >
                    <i className="bx bxl-github"></i>
                    <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white text-gray-900 px-3 py-1 rounded text-sm opacity-0 group-hover:opacity-100 whitespace-nowrap transition-opacity">
                      Repo Github
                    </span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Kanan: Gambar Projek */}
        <div className="order-1 lg:order-2">
          <div className="relative h-64 sm:h-80 md:h-96 lg:h-[30rem] rounded-xl overflow-hidden">
            <div
              className="flex h-full transition-transform duration-500"
              style={{
                transform: `translateX(calc(-${projectAktif * 100}% - ${projectAktif * 2}rem))`
              }}
            >
              {projek.map(item => (
                <div key={item.id} className="flex-shrink-0 w-full h-full mr-8">
                  <div className="grid grid-cols-2 gap-4 h-full">
                    {item.gambar.map((image, idx) => (
                      <div key={idx} className="relative rounded-lg overflow-hidden">
                        <img
                          src={image}
                          alt={`Screenshot ${item.judul} ${idx + 1}`}
                          className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-end mt-4">
            <button
              onClick={sebelumnya}
              disabled={projectAktif === 0}
              className={`p-2 rounded-lg mr-4 ${
                projectAktif === 0 ? 'text-gray-500' : 'text-blue-400'
              }`}
            >
              <i className="bx bx-chevron-left text-4xl"></i>
            </button>
            <button
              onClick={selanjutnya}
              disabled={projectAktif === projek.length - 1}
              className={`p-2 rounded-lg ${
                projectAktif === projek.length - 1 ? 'text-gray-500' : 'text-blue-400'
              }`}
            >
              <i className="bx bx-chevron-right text-4xl"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
