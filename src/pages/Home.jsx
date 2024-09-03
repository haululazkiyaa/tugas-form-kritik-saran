const Home = () => {
  return (
    <section className="min-h-[560px] relative flex z-10 items-start w-full h-full md:h-[380px] lg:h-[472px] xl:h-[472px] overflow-hidden bg-gradient-to-r from-[#D6FCFF] to-[#29BBD4]">
      <div className="h-full w-full gap-6 flex flex-col lg:flex-row xl:flex-row items-center justify-center mx-10 my-10 lg:my-0 xl:my-0 lg:mx-40 xl:mx-40">
        <div className="w-full flex justify-start items-start">
          <div>
            <h1 className="text-[#002022] font-bold text-2xl md:text-[28px] lg:text-[28px] xl:text-[28px] lg:leading-[42px]">
              PaDi UMKM Hadir Sebagai Satu <br />
              Solusi Bisnis bagi UMKM, BUMN <br />
              dan Pemerintah.
            </h1>
            <p className="text-[#444B55] text-wrap text-md md:text-lg lg:text-lg xl:text-lg pb-2 pt-4">
              Mempertemukan UMKM berkualitas dengan perusahaan BUMN maupun{" "}
              <br />
              Swasta untuk mendapatkan transaksi dengan harga dan kualitas
              terbaik.
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center rounded-[15px] lg:rounded-[30px] xl:rounded-[30px] overflow-hidden w-full lg:w-[70%] xl:w-[70% ">
          <img
            src="/images/hero.jpg"
            alt="UMKM Collaboration"
            className="rounded-lg shadow-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
