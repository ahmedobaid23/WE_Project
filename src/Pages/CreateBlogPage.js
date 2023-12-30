import React, { useState } from "react";
import "react-quill/dist/quill.snow.css";
import { Navigate } from "react-router-dom";
import Editor from "../Editor";

const CreateBlog = () => {
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [files, setFiles] = useState("");
  const [content, setContent] = useState("");
  const [redirect, setRedirect] = useState(false);

  
  async function createNewPost(event) {
    event.preventDefault();
    const data = new FormData();
    data.set("title", title);
    data.set("summary", summary);
    data.set("content", content);
    data.set("files", files[0]);
    const response = await fetch("http://localhost:4000/post", {
      method: "POST",
      body: data,
      credentials: "include",
    });
    if (response.ok) {
      setRedirect(true);
    }
  }

  if (redirect) {
    return <Navigate to={"/"} />;
  } else {
    return (
      <section id="blog">
        <form className="blog-form" onSubmit={createNewPost}>
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
            <button className="blog-inputs btn btn-danger btn-lg">Post</button>
          </div>
        </form>
      </section>
    );
  }
};

export default CreateBlog;
