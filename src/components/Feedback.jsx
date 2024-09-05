import useFeedback from "../hooks/useFeedback";

const Feedback = () => {
  const {
    inputName,
    setInputName,
    inputFeedback,
    setInputFeedback,
    feedbackList,
    submitFeedback,
    deleteFeedback,
    likeFeedback,
  } = useFeedback();

  return (
    <div className="mb-4">
      <div>
        <input
          type="text"
          placeholder="Nama"
          value={inputName}
          onChange={(e) => setInputName(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 mb-2 dark:text-black"
        />
        <textarea
          placeholder="Saran Anda..."
          value={inputFeedback}
          onChange={(e) => setInputFeedback(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 dark:text-black"
        />
      </div>
      <button
        onClick={submitFeedback}
        className="px-4 py-2 bg-teal-500 text-white rounded-md hover:bg-teal-600 disabled:opacity-50 disabled:cursor-not-allowed"
        disabled={inputName == "" || inputFeedback == ""}
      >
        Kirim Saran
      </button>
      <div className="mt-6">
        {feedbackList.map((item, index) => (
          <div
            key={index}
            className="p-4 border border-gray-200 rounded-md mb-4 flex justify-between items-center"
          >
            <div>
              <p className="font-bold">{item.name}</p>
              <p>{item.feedback}</p>
            </div>
            <div className="space-x-2">
              <button
                onClick={() => deleteFeedback(index)}
                className="px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600"
              >
                <i className="fa-solid fa-trash"></i>
              </button>
              <button
                onClick={() => likeFeedback(index)}
                className="px-3 py-1 bg-teal-500 text-white rounded-md hover:bg-teal-600"
              >
                <i className="fa-solid fa-thumbs-up me-1"></i> {item.likes}{" "}
                {item.likes > 1 ? "Likes" : "Like"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feedback;
