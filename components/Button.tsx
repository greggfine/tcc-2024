const Button = ({ text }) => {
  return (
    <button
      className="btn btn-primary"
      onClick={(event) => {
        const btn = event.target as HTMLElement;
        btn.innerText = "You clicked me!";
      }}
    >
      {text}
    </button>
  );
};

export default Button;
