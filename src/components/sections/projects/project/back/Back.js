import { useNavigate } from "react-router-dom";

const Back = () => {
  const navigate = useNavigate();

  return (
    <a
      href="#"
      onClick={(e) => {
        e.preventDefault();
        navigate(-1);
      }}
      style={{
        fontFamily: "var(--font-poppins)",
      }}
    >
      ← Back
    </a>
  );
};

export default Back;
