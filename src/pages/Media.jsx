import MediaCard from "../components/MediaCard";
import useFecthData from "../hooks/useFecthData";

const Media = () => {
  const { data, loading, disableLoadMore, handleLoadMore } = useFecthData();

  return (
    <section className="h-full mx-10 my-10 lg:my-20 xl:my-20 lg:mx-40 xl:mx-40">
      <h1 className="text-3xl font-bold text-gray-800 dark:text-[#ffffff] mb-2">
        Media
      </h1>
      <p className="text-gray-600 dark:text-[#ffffff] mb-8">
        Informasi seputar PaDi UMKM
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {data.length === 0 ? (
          <p className="dark:text-white">Tidak ada media...</p>
        ) : (
          data.map((item, index) => (
            <MediaCard key={item.title + index} {...item} />
          ))
        )}
      </div>

      <div className="text-center my-10">
        {loading && <p className="dark:text-white">Memuat media...</p>}

        {!loading && !disableLoadMore && (
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleLoadMore}
          >
            Load More
          </button>
        )}
      </div>
    </section>
  );
};

export default Media;
