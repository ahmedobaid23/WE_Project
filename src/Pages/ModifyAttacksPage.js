import React, { useState, useEffect } from "react";

const ModifyBlogsPage = () => {
  const [attacks, setAttacks] = useState([]);
  const [random, setRandom] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch("http://localhost:4000/cyberattacks")
      .then((response) => response.json())
      .then((attacks) => {
        setAttacks(attacks);
        setIsLoading(false);
      });
  }, [random]);

  function handleClick(id) {
    fetch(`http://localhost:4000/delete-attack/${id}`, {
      method: "POST",
    })
      .then((response) => response.json())
      .then(({ message }) => {
        alert(message);
        setRandom(!random);
      });
  }

  return (
    <div className="container">
      <p className="display-1 text-danger">Modify Attacks</p>

      {isLoading && <div className="display-2">Loading...</div>}

      {!isLoading && attacks.length === 0 && (
        <div className="display-2">No blogs to show</div>
      )}

      {!isLoading && attacks.length > 0 && (
        <table class="table">
          <thead>
            <tr class="bg-danger text-white display-5">
              <th scope="col">No.</th>
              <th scope="col">Attack Title</th>
              <th scope="col">Attack Summary</th>
              <th scope="col">Attack Image URL</th>
              <th scope="col">Delete Attack</th>
            </tr>
          </thead>
          <tbody className="text-white">
            {attacks.length > 0 &&
              attacks.map((attack, index) => (
                <tr>
                  <th scope="row">{index + 1}</th>
                  <td>{attack.title}</td>
                  <td>{attack.summary}</td>
                  <td>{attack.image}</td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => handleClick(attack._id)}
                    >
                      Delete Attack
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ModifyBlogsPage;
