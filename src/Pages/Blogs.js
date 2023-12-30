import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../UserContext";
import { formatISO9075 } from "date-fns";

const Blogs = () => {
  const [posts, setPosts] = useState([]);
  const { userInfo } = useContext(UserContext);

  useEffect(() => {
    fetch("http://localhost:4000/posts")
      .then((response) => response.json())
      .then((posts) => setPosts(posts));
  }, []);

  const username = userInfo?.username;

  return (
    <section id="home" className="indexSection d-flex flex-column container">
      <p className="display-1 text-danger mb-5">Blogs</p>
      {posts.length > 0 &&
        posts.map((post, index) => (
          <div key={index} className="row mb-5">
            <div className="col-md-12 col-lg-4 mb-3 mb-md-0">
              <div>
                <Link to={username ? `/post/${post._id}` : `/login`}>
                  <img
                    src={"http://localhost:4000/" + post.image}
                    alt={post.title}
                    style={{
                      width: "100%",
                      height: "100%",
                    }}
                  />
                </Link>
              </div>
            </div>
            <div className="col-md-12 col-lg-8">
              <div className="ml-md-3">
                <Link
                  to={username ? `/post/${post._id}` : `/login`}
                  className="blog-page-links"
                >
                  <h2 className="text-danger">{post.title}</h2>
                </Link>
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <h6>{post.author.username}</h6>
                  <h6>{formatISO9075(new Date(post.createdAt))}</h6>
                </div>
                <p
                  className="text-break text-break-word overflow-hidden"
                  style={{ maxHeight: "100px" }}
                >
                  {post.summary}
                </p>
              </div>
            </div>
          </div>
        ))}
    </section>
  );
};

export default Blogs;
