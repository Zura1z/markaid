import React, { useState } from "react";
import RichEditor from "./RichEditor";
import Header from "../../Header";

import "./autograde.css";

const AutoGrade = () => {
  //   let initialValue = "Hello World";
  const [input, setInput] = useState(initialValue);
  //   console.log(JSON.stringify(input));
  //   input =
  //     "This is editable rich text, much better than a <textarea>! Since it's rich text, you can do things like turn a selection of text bold, or add a semantically rendered block quote in the middle of the page, like this: A wise quote. Try it out for yourself!";
  return (
    <>
      <Header />
      <div>
        <p style={{ color: "#401f68" }}>
          <b>Write your question here</b>
        </p>
        <RichEditor value={input} setValue={setInput} />
        <p>
          <b>Write your Answer here</b>
        </p>
        <RichEditor value={input} setValue={setInput} />
      </div>
    </>
  );
};

export default AutoGrade;

const initialValue = [
  {
    type: "paragraph",
    children: [
      { text: "This is editable " },
      { text: "rich", bold: true },
      { text: " text, " },
      { text: "much", italic: true },
      { text: " better than a " },
      { text: "<textarea>", code: true },
      { text: "!" },
    ],
  },
  {
    type: "paragraph",
    children: [
      {
        text: "Since it's rich text, you can do things like turn a selection of text ",
      },
      { text: "bold", bold: true },
      {
        text: ", or add a semantically rendered block quote in the middle of the page, like this:",
      },
    ],
  },
  {
    type: "block-quote",
    children: [{ text: "A wise quote." }],
  },
  {
    type: "paragraph",
    children: [{ text: "Try it out for yourself!" }],
  },
];
