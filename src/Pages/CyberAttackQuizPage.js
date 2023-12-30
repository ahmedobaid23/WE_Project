import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
import { UserContext } from "../UserContext";

const CyberAttackQuizPage = () => {
  const { id } = useParams();
  const { userInfo } = useContext(UserContext);
  const [attacksInfo, setAttacksInfo] = useState(null);
  // const navigate = useNavigate();
  useEffect(() => {
    fetch(`http://localhost:4000/cyberattacks/${id}/quiz`).then((response) => {
      response.json().then((attackInfo) => {
        setAttacksInfo(attackInfo);
      });
    });
  }, []);

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   setTimeout(() => {
  //     window.location.href = `/cyber-attacks/${id}/quiz/result`;
  //   }, 3000);
  // };

  if (!attacksInfo) return "";
  return (
    <div className="container">
      <p className="display-1 text-danger">{attacksInfo.title} Quiz</p>
      <form
        action={`http://localhost:4000/cyberattacks/${id}/quiz/result`}
        method="POST"
      >
        <div className="mcqs">
          {attacksInfo.mcqs.map((mcq, index) => (
            <div className="mcq border border-danger p-3 mb-3" key={index}>
              <div className="display-5 text-danger mb-3">{mcq.question}</div>
              {mcq.options.map((option, optionIndex) => (
                <div className="form-check" key={optionIndex}>
                  <input
                    className="form-check-input"
                    type="radio"
                    name={`answer_${index}`}
                    value={option}
                    id={`option_${index}_${optionIndex}`}
                  />
                  <label
                    for={`option_${index}_${optionIndex}`}
                    className="form-check-label"
                  >
                    {option}
                  </label>
                </div>
              ))}
            </div>
          ))}
        </div>
        <button
          className="btn btn-danger mb-5"
          type="submit"
          // onClick={handleSubmit}
        >
          Submit Quiz
        </button>
      </form>
    </div>
  );
};

export default CyberAttackQuizPage;
