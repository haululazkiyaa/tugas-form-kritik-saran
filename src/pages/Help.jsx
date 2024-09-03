import TopicCard from "../components/TopicCard";
import { helpTopics } from "../data/help-topic";

const Help = () => {
  return (
    <section className="h-full mx-10 my-10 lg:my-20 xl:my-20 lg:mx-40 xl:mx-40 text-[#444B55] dark:text-[#ffffff]">
      <h1 className="text-4xl font-bold text-center text-gray-800 dark:text-[#ffffff] mb-12">
        Pilih Topik Sesuai Kendalamu
      </h1>

      <div className="grid md:grid-cols-3 gap-8">
        {helpTopics.map((topic, index) => (
          <TopicCard key={index} {...topic} />
        ))}
      </div>
    </section>
  );
};

export default Help;
