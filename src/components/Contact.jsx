import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import Swal from 'sweetalert2'; // Import SweetAlert2

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
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
        confirmButtonColor: '#3B82F6'
      });
      form.current.reset();
    }, (error) => {
      Swal.fire({
        icon: 'error',
        title: 'Gagal mengirim pesan!',
        text: 'Silakan coba lagi nanti.',
        confirmButtonColor: '#EF4444'
      });
      console.error(error);
    });
  };

  return (
    <section id="contact" className="py-20 px-6 md:px-[9%] bg-gray-900 text-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

        {/* Informasi Kontak */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Mari Bekerja Sama</h2>
          <p className="text-lg mb-8">Silakan hubungi saya untuk kolaborasi atau sekadar menyapa!</p>
          
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="bg-gray-800 text-blue-400 p-3 rounded-lg mr-4">
                <i className="bx bxs-phone text-3xl"></i>
              </div>
              <div>
                <p className="text-blue-400 font-medium">Telepon</p>
                <p className="text-lg">(+62) 85336077166</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-gray-800 text-blue-400 p-3 rounded-lg mr-4">
                <i className="bx bxs-envelope text-3xl"></i>
              </div>
              <div>
                <p className="text-blue-400 font-medium">Email</p>
                <p className="text-lg">vembisaputra273@gmail.com</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-gray-800 text-blue-400 p-3 rounded-lg mr-4">
                <i className="bx bxs-map text-3xl"></i>
              </div>
              <div>
                <p className="text-blue-400 font-medium">Alamat</p>
                <p className="text-lg">Jl Yos Sudarso Gg 5 No 1</p>
              </div>
            </div>
          </div>
        </div>

        {/* Form Kontak */}
        <div className="bg-gray-800 p-8 md:p-10 rounded-xl">
          <h2 className="text-3xl font-bold text-center mb-8">
            Kontak <span className="text-blue-400">Saya</span>
          </h2>

          <form ref={form} onSubmit={sendEmail} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Nama Lengkap"
                  className="w-full px-4 py-3 bg-gray-900 text-white rounded-lg border border-gray-900 focus:border-blue-400 outline-none transition-colors"
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Alamat Email"
                  className="w-full px-4 py-3 bg-gray-900 text-white rounded-lg border border-gray-900 focus:border-blue-400 outline-none transition-colors"
                  required
                />
              </div>
            </div>

            <div>
              <textarea
                name="message"
                placeholder="Pesan Anda"
                rows="6"
                className="w-full px-4 py-3 bg-gray-900 text-white rounded-lg border border-gray-900 focus:border-blue-400 outline-none transition-colors resize-none"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-400 text-gray-900 font-semibold py-3 px-6 rounded-full hover:bg-transparent hover:text-blue-400 border-2 border-blue-400 transition-colors"
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
