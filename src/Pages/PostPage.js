/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { formatISO9075 } from "date-fns";
import { UserContext } from "../UserContext";
const PostPage = () => {
  const { id } = useParams();
  const [postInfo, setPostInfo] = useState(null);
  const { userInfo } = useContext(UserContext);
  useEffect(() => {
    fetch(`http://localhost:4000/post/${id}`).then((response) => {
      response.json().then((info) => {
        setPostInfo(info);
      });
    });
  }, []);
  if (!postInfo) return "";
  return (
    <div className="container mt-5 post-page">
      <p className="display-3 text-danger text-center">{postInfo.title}</p>
      <p className="text-center medium">
        {formatISO9075(new Date(postInfo.createdAt))}
      </p>
      <p className="text-center medium">
        by <span className="text-danger">@{postInfo.author.username}</span>
      </p>
      {userInfo.id === postInfo.author._id && (
        <div className="text-center mb-3">
          <button className="btn btn-danger">
            <Link
              className="edit-post-link d-flex align-items-center"
              to={`/edit/${postInfo._id}`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-pencil-square"
                viewBox="0 0 16 16"
              >
                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                <path
                  fill-rule="evenodd"
                  d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"
                />
              </svg>
              <div>Edit this post</div>
            </Link>
          </button>
        </div>
      )}
      <div className="col-12" style={{ height: "25rem" }}>
        <img
          src={`http://localhost:4000/${postInfo.image}`}
          alt="Post"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
          }}
        />
      </div>
      <div className="col-12 mt-3 post-content">
        <div dangerouslySetInnerHTML={{ __html: postInfo.content }} />
      </div>
    </div>
  );
};

export default PostPage;
