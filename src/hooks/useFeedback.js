import { useEffect, useState } from "react";

const useFeedback = () => {
  const [inputName, setInputName] = useState("");
  const [inputFeedback, setInputFeedback] = useState("");
  const [feedbackList, setFeedbackList] = useState([]);

  const submitFeedback = () => {
    const newFeedbackList = [
      ...feedbackList,
      { name: inputName, feedback: inputFeedback, likes: 0 },
    ];

    setFeedbackList(newFeedbackList);
    localStorage.setItem("feedbackList", JSON.stringify(newFeedbackList));

    setInputName("");
    setInputFeedback("");

    alert(
      "Terima kasih telah memberikan feedback! Kami sangat senang mendengarnya."
    );
  };

  const deleteFeedback = (index) => {
    const confirmDelete = window.confirm(
      "Apakah anda yakin akan menghapus feedback?"
    );
    if (confirmDelete) {
      const newFeedbackList = [...feedbackList];
      newFeedbackList.splice(index, 1);
      setFeedbackList(newFeedbackList);
      localStorage.setItem("feedbackList", JSON.stringify(newFeedbackList));
    }
  };

  const likeFeedback = (index) => {
    const newFeedbackList = [...feedbackList];
    newFeedbackList[index].likes += 1;
    setFeedbackList(newFeedbackList);
    localStorage.setItem("feedbackList", JSON.stringify(newFeedbackList));
  };

  useEffect(() => {
    if (localStorage.getItem("feedbackList") === null) {
      // INITIAL FEEDBACK
      // const initialFeedback = [
      //   {
      //     name: "Budi Susilo Maulana",
      //     feedback: "Harga Produknya supaya bisa lebih murah dari tempat lain",
      //     likes: 0,
      //   },
      // ];
      // localStorage.setItem("feedbackList", JSON.stringify(initialFeedback));

      localStorage.setItem("feedbackList", JSON.stringify([]));
    }

    setFeedbackList(JSON.parse(localStorage.getItem("feedbackList")));
  }, []);

  return {
    inputName,
    setInputName,
    inputFeedback,
    setInputFeedback,
    feedbackList,
    submitFeedback,
    deleteFeedback,
    likeFeedback,
  };
};

export default useFeedback;
