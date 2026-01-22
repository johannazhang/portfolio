const HighlightText = ({ text, colour }) => {
  return <span style={{ backgroundColor: colour }}>{text}</span>;
};

export default HighlightText;
