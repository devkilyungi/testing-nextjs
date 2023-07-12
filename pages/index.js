import { useState } from 'react';

function SubHeader({ content }) {
  return (
    <>
      <p>{content}</p>
    </>
  );
}

function Header({ title }) {
  return (
    <>
      <h1>{title ? title : "Default Title"}</h1>
    </>
  );
}

function TipsList() {
  const nextJsTips = [
    "Plan the folder structure before you start coding",
    "Maintain a proper Import order",
    "Reusable Logic Extraction into Custom Hooks",
    "Write Tests for your components",
  ];

  {
    return (nextJsTips.map((tip) => (
      <li key={tip}>{tip}</li>
    )));
  }
}

export default function HomePage() {

  const [likes, setLikes] = useState(0);

  function handleClick() {
    setLikes(likes + 1);
  }

  return (
    <div>
      <Header title="Develop. Preview. Ship. 🚀" />
      <SubHeader content="Next.js is awesome!" />
      <ul>
        <Header title="Next.js Tips" />
        <SubHeader content="Here are some Next.js tips!" />
        <TipsList />
      </ul>

      <button onClick={handleClick}>Like ({likes})</button>
    </div>
  );
}