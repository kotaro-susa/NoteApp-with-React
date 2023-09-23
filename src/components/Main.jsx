import React from "react";
import "./Main.css";
import ReactMarkdown from "react-markdown";
import ReactDom from "react-dom";

const Main = ({ selectedNote, onUpdateNote }) => {
  const onEditNote = (key, value) => {
    onUpdateNote({
      ...selectedNote,
      [key]: value,
      modDate: Date.now(),
    });
  };

  if (!selectedNote) {
    return <div>ノートがありません</div>;
  } else
    return (
      <div className="app-main">
        <div className="app-main-note-edit">
          <input
            id="title"
            type="text"
            value={selectedNote.title}
            onChange={(e) => onEditNote("title", e.target.value)}
          />
          <textarea
            id="content"
            placeholder="ノート内容を記入"
            value={selectedNote.content}
            onChange={(e) => onEditNote("content", e.target.value)}
          ></textarea>
        </div>
        <div className="app-main-note-preview">
          <h1 className="preview-title">{selectedNote.title}</h1>

          <ReactMarkdown className="markdown-preview">
            {selectedNote.content}
          </ReactMarkdown>
        </div>
      </div>
    );
};

export default Main;
