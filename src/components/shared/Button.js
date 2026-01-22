const ButtonLink = ({ link, label, colour }) => {
  return (
    <a
      style={{
        display: "inline-block",
        backgroundColor: colour,
        padding: "var(--spacing-8) var(--spacing-20)",
        textDecoration: "none",
      }}
      href={link}
      target="_blank"
    >
      {label}
    </a>
  );
};

export default ButtonLink;
