import { ChangeEvent, useState } from "react";
import { useInsertMentoSeed } from "../../hooks/api/mento.api";
import { useToast } from "../../components/common/Toast";

const MentoSeed = () => {
  const [questionInput, setQuestionInput] = useState<string>("");
  const [answerTextarea, setAnswerTextarea] = useState<string>("");
  const { request, isLoading } = useInsertMentoSeed();
  const toast = useToast();
  const handleChangeQuestionInput = (e: ChangeEvent<HTMLInputElement>) => {
    setQuestionInput(e.target.value);
  };

  const handleChangeAnswerTextarea = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setAnswerTextarea(e.target.value);
  };

  const handleClickSubmit = async () => {
    if (isLoading) return;
    const data = {
      question: questionInput.trim(),
      answer: answerTextarea.trim(),
    };
    console.log(data);
    try {
      const result = await request(data);
      if (result?.insertCnt) {
        toast("Success to insert mento-seed");
      } else {
        toast("(!) Failed to insert mento-seed");
      }
    } catch (err) {
      console.error(err);
      toast("(!) Occured error from inserting-mento-seed");
    }
  };

  return (
    <>
      <h2>Temporary page for making mento seed</h2>
      <div className={"mento-seed-form-wrapper"}>
        <input
          className={"mento-seed-question-input"}
          onChange={handleChangeQuestionInput}
          value={questionInput}
        />
        <textarea
          className="mento-seed-answer-textarea"
          onChange={handleChangeAnswerTextarea}
          value={answerTextarea}
        />

        <button
          disabled={isLoading}
          onClick={handleClickSubmit}
          className={"mento-seed-form-submit-button"}
        >
          submit
        </button>
      </div>
    </>
  );
};
export default MentoSeed;
