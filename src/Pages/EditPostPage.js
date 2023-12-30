/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import Editor from "../Editor";
import "react-quill/dist/quill.snow.css";
import { Navigate, useParams } from "react-router-dom";

const CreateBlog = () => {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [files, setFiles] = useState("");
  const [content, setContent] = useState("");
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    fetch("http://localhost:4000/post/" + id).then((response) => {
      response.json().then((postInfo) => {
        setTitle(postInfo.title);
        setSummary(postInfo.summary);
        setContent(postInfo.content);
      });
    });
  }, []);

  async function updatePost(event) {
    event.preventDefault();
    const data = new FormData();
    data.set("title", title);
    data.set("summary", summary);
    data.set("content", content);
    if (files?.[0]) {
      data.set("files", files?.[0]);
    }
    data.set("id", id);
    const response = await fetch("http://localhost:4000/post", {
      method: "PUT",
      body: data,
      credentials: "include",
    });
    if (response.ok) {
      setRedirect(true);
    }
  }

  if (redirect) {
    return <Navigate to={"/post/" + id} />;
  } else {
    return (
      <section id="blog">
        <form className="blog-form" onSubmit={updatePost}>
          <div className="form-group">
            <input
              type="text"
              className="form-control blog-inputs"
              placeholder="Title"
              value={title}
              onChange={(event) => {
                setTitle(event.target.value);
              }}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control blog-inputs"
              placeholder="Summary"
              value={summary}
              onChange={(event) => {
                setSummary(event.target.value);
              }}
            />
          </div>
          <div className="form-group">
            <input
              type="file"
              className="form-control blog-inputs"
              onChange={(event) => {
                setFiles(event.target.files);
              }}
            />
          </div>
          <div className="form-group">
            <Editor value={content} onChange={setContent} />
          </div>
          <div className="form-group">
            <button className="blog-inputs btn btn-danger btn-lg">
              Update Post
            </button>
          </div>
        </form>
      </section>
    );
  }
};

export default CreateBlog;
