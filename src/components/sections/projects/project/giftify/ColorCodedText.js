const ColorCodedText = ({ textSnippets }) => {
  if (textSnippets?.length !== 3) return <p></p>;

  return (
    <p>
      <span style={{ color: "#e69138" }}>{textSnippets[0]}</span>{" "}
      <span style={{ color: "#3c78d8" }}>{textSnippets[1]}</span>{" "}
      <span style={{ color: "#6aa84f" }}>{textSnippets[2]}</span>
    </p>
  );
};

export default ColorCodedText;
