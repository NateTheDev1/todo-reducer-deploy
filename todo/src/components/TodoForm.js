import React, { useState } from "react";

const TodoForm = ({ dispatch }) => {
  const [title, setTitle] = useState("");
  const [curTag, setCurTag] = useState("");
  const [tags, setTags] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "ADD-TODO", title, tags });
    setTitle("");
    setTags([]);
  };

  const handleClear = () => {
    dispatch({ type: "CLEAR-COMPLETE" });
  };

  const handleTagSubmit = (e) => {
    e.preventDefault();
    setTags([...tags, curTag]);
    setCurTag("");
  };

  const removeTag = (tag) => {
    let newTags = tags.filter((t) => {
      return t !== tag;
    });
    setTags(newTags);
  };

  return (
    <div>
      <button onClick={handleClear}>Clear Completed</button>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <button type="submit">Submit Todo</button>
      </form>
      <form onSubmit={handleTagSubmit}>
        <input
          type="text"
          placeholder="Add a tag"
          value={curTag}
          onChange={(e) => setCurTag(e.target.value)}
          required
        />
      </form>
      {tags.map((tag) => (
        <p style={{ color: "red" }} onClick={() => removeTag(tag)}>
          {tag}
        </p>
      ))}
    </div>
  );
};

export default TodoForm;
