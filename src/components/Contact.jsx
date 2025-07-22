import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import Swal from 'sweetalert2';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_drdl4vm',
        'template_6g9shux',
        form.current,
        '2pEEyvmWWBjDU1TPk'
      )
      .then(() => {
        Swal.fire({
          icon: 'success',
          title: 'Pesan berhasil dikirim!',
          text: 'Terima kasih telah menghubungi saya.',
          confirmButtonColor: '#3B82F6',
        });
        form.current.reset();
      })
      .catch((error) => {
        Swal.fire({
          icon: 'error',
          title: 'Gagal mengirim pesan!',
          text: 'Silakan coba lagi nanti.',
          confirmButtonColor: '#EF4444',
        });
        console.error(error);
      });
  };

  return (
    <section
      id="contact"
      className="pt-24 pb-16 px-5 sm:px-8 md:px-[9%] bg-gray-900 text-white"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">

        {/* Info Kontak */}
        <div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Mari <span className="text-blue-400">Bekerja Sama</span>
          </h2>
          <p className="text-base sm:text-lg mb-8">
            Silakan hubungi saya untuk kolaborasi atau sekadar menyapa!
          </p>

          <div className="space-y-6">
            <div className="flex items-start">
              <div className="bg-gray-800 text-blue-400 p-3 rounded-lg mr-4">
                <i className="bx bxs-phone text-3xl"></i>
              </div>
              <div>
                <p className="text-blue-400 font-medium">Telepon</p>
                <p className="text-base sm:text-lg">(+62) 85336077166</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-gray-800 text-blue-400 p-3 rounded-lg mr-4">
                <i className="bx bxs-envelope text-3xl"></i>
              </div>
              <div>
                <p className="text-blue-400 font-medium">Email</p>
                <p className="text-base sm:text-lg">vembisaputra273@gmail.com</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-gray-800 text-blue-400 p-3 rounded-lg mr-4">
                <i className="bx bxs-map text-3xl"></i>
              </div>
              <div>
                <p className="text-blue-400 font-medium">Alamat</p>
                <p className="text-base sm:text-lg">Jl Yos Sudarso Gg 5 No 1</p>
              </div>
            </div>
          </div>
        </div>

        {/* Form Kontak */}
        <div className="bg-gray-800 p-6 sm:p-8 md:p-10 rounded-xl shadow-md">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8">
            Kontak <span className="text-blue-400">Saya</span>
          </h2>

          <form ref={form} onSubmit={sendEmail} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <input
                type="text"
                name="name"
                placeholder="Nama Lengkap"
                className="w-full px-4 py-3 bg-gray-900 text-white rounded-lg border border-gray-700 focus:border-blue-400 outline-none"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Alamat Email"
                className="w-full px-4 py-3 bg-gray-900 text-white rounded-lg border border-gray-700 focus:border-blue-400 outline-none"
                required
              />
            </div>

            <textarea
              name="message"
              placeholder="Pesan Anda"
              rows="6"
              className="w-full px-4 py-3 bg-gray-900 text-white rounded-lg border border-gray-700 focus:border-blue-400 outline-none resize-none"
              required
            ></textarea>

            <button
              type="submit"
              className="w-full bg-blue-400 text-gray-900 font-semibold py-3 px-6 rounded-full hover:bg-transparent hover:text-blue-400 border-2 border-blue-400 transition-colors duration-200"
            >
              Kirim Pesan
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
