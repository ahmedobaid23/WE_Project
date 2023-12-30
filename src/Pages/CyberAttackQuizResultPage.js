import React, { useState, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";

const CyberAttackQuizResultPage = () => {
  const { id } = useParams;
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const [tagLine, setTagLine] = useState("");
  const [isCertified, setIsCertified] = useState(false);

  const total = queryParams.get("total");
  const correct = queryParams.get("correct");
  const certified = queryParams.get("certified");

  useEffect(() => {
    if (certified === "true") {
      setTagLine("Congratulations on your certification.");
      setIsCertified(true);
    } else {
      setTagLine("You could not pass the quiz. Better luck next time");
    }
  }, [certified]);

  return (
    <div className="container mt-3 p-4">
      <div className="display-3 text-danger mb-4">{tagLine}</div>
      <div className="row mb-5 justify-content-between">
        <div className="col-sm-5 col-12 bg-white rounded-pill p-3 text-center display-4 small-pills">
          <span className="text-danger">Total Marks: </span>
          <span className="text-dark">{total}</span>
        </div>
        <div className="col-sm-5 col-12 bg-white rounded-pill p-3 text-center display-4 small-pills">
          <span className="text-danger">Your Marks: </span>
          <span className="text-dark">{correct}</span>
        </div>
      </div>
      <div className="row mb-5">
        <div className="col-12 bg-white rounded-pill p-3 text-center display-4">
          <span className="text-danger">Percentage Achieved: </span>
          <span className="text-dark">
            {((correct / total) * 100).toFixed(2)}%
          </span>
        </div>
      </div>
      <div className="row">
        <div className="col-12 bg-white rounded-pill p-3 text-center display-4">
          <span className="text-danger">Status: </span>
          {isCertified ? (
            <span className="text-dark">Pass</span>
          ) : (
            <span className="text-dark">Fail</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default CyberAttackQuizResultPage;
