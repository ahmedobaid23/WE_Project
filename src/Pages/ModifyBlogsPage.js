import React, { useState, useEffect } from "react";

const ModifyBlogsPage = () => {
  const [posts, setPosts] = useState([]);
  const [random, setRandom] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch("http://localhost:4000/posts")
      .then((response) => response.json())
      .then((posts) => {
        setPosts(posts);
        setIsLoading(false);
      });
  }, [random]);

  function handleClick(id) {
    fetch(`http://localhost:4000/delete-post/${id}`, {
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
      <p className="display-1 text-danger">Modify Blogs</p>

      {isLoading && <div className="display-2">Loading...</div>}

      {!isLoading && posts.length === 0 && (
        <div className="display-2">No blogs to show</div>
      )}

      {!isLoading && posts.length > 0 && (
        <table class="table">
          <thead>
            <tr class="bg-danger text-white display-5">
              <th scope="col">No.</th>
              <th scope="col">Blog Title</th>
              <th scope="col">Blog Author</th>
              <th scope="col">Delete Blog</th>
            </tr>
          </thead>
          <tbody className="text-white">
            {posts.length > 0 &&
              posts.map((post, index) => (
                <tr>
                  <th scope="row">{index + 1}</th>
                  <td>{post.title}</td>
                  <td>{post.author.username}</td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => handleClick(post._id)}
                    >
                      Delete Blog
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
