/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState, useContext } from "react";
import { UserContext } from "../UserContext";
import { Link } from "react-router-dom";

const CyberAttacks = () => {
  const { userInfo } = useContext(UserContext);
  const [attacks, setAttacks] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/cyberattacks").then((response) => {
      response.json().then((attacksInfo) => {
        setAttacks(attacksInfo);
      });
    });
  }, []);
  const username = userInfo?.username;
  return (
    <section id="cyber-attacks" className="indexSection d-flex flex-column">
      <div className="container">
        <h2 className="display-1 mb-5 text-danger">Cyber Attacks</h2>

        <ul className="departments-list">
          {attacks.length > 0 &&
            attacks.map((attack, index) => (
              <li>
                <div className="departments-card">
                  <img src={attack.image} alt="DoS and DDoS" />
                  <h3 className="h3 card-title text-danger">{attack.title}</h3>
                  <p className="card-text text-dark">{attack.summary}</p>
                  {username && (
                    <button className="btn btn-danger">
                      <Link
                        to={`/cyber-attacks/${attack._id}/quiz`}
                        className="attacks-links"
                      >
                        Give a Quiz
                      </Link>
                    </button>
                  )}
                </div>
              </li>
            ))}
        </ul>
      </div>
    </section>
  );
};

export default CyberAttacks;
