const style = {
  background: "#B2D4CD",
  border: "3px solid #475452",
  fontSize: "50px",
  fontWeight: "800",
  cursor: "pointer",
  outline: "none",
  color: "#353F3D",
};

const Square = ({ value, onClick }) => (
  <button style={style} onClick={onClick}>
    {value}
  </button>
);

export default Square;
