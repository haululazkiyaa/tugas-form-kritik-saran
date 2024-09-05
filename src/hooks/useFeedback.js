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
  };

  const deleteFeedback = (index) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this feedback?"
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
      const initialFeedback = [
        {
          name: "Budi Susilo Maulana",
          feedback: "Harga Produknya supaya bisa lebih murah dari tempat lain",
          likes: 0,
        },
      ];
      localStorage.setItem("feedbackList", JSON.stringify(initialFeedback));
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
