import Feedback from "../components/Feedback";

const Contact = () => {
  return (
    <section className="h-full mx-10 my-10 lg:my-20 xl:my-20 lg:mx-40 xl:mx-40 text-[#444B55] dark:text-[#ffffff]">
      <div className="mb-10">
        <h1 className="text-[48px] font-bold mb-4">Kritik dan Saran</h1>
        <p className="text-lg mb-8">Silahkan masukan kritik dan saran Anda.</p>
        <Feedback />
      </div>
      <div>
        <h1 className="text-[48px] font-bold mb-4">Hubungi Kami</h1>
        <p className="text-lg mb-8">
          Memiliki pertanyaan lebih lanjut seputar PaDi UMKM?
          <br />
          Silakan menghubungi Kami secara langsung.
        </p>

        <div className="grid md:grid-cols-2 gap-8 text-[#444B55]">
          <div className="bg-white border-[1px] border-[#DDF2E4] rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-4">
              Layanan Informasi Pengguna
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-bold text-gray-700">Email</h3>
                <p>cs@padiumkm.id</p>
              </div>
              <div>
                <h3 className="font-bold text-gray-700">Whatsapp</h3>
                <p>+62 812 9000 7820</p>
              </div>
              <div>
                <h3 className="font-bold text-gray-700">
                  Senin - Jumat | 08:00 - 17:00 WIB
                </h3>
              </div>
            </div>
          </div>

          <div className="bg-white border-[1px] border-[#DDF2E4] rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-4">Kantor Kami</h2>
            <p className="font-bold text-gray-700">PaDi UMKM Headquarters</p>
            <p className="text-gray-600">
              Gedung Telkom Direktorat Business and Technology
              <br />
              Jln. Prof. Dr. Soepomo No. 139, Jakarta Selatan, DKI Jakarta,
              12810
              <br />
              Indonesia
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
