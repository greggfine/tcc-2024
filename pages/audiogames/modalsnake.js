import Link from "next/link";
const ModalSnake = () => {
  return (
    <>
      <h1 style={{ textAlign: "center", margin: 0 }}>
        <Link href="/audiogamessandbox">Back to Games</Link>
      </h1>
      <iframe
        src="/audiogames/modalsnake/index.html"
        style={{ width: "100%", height: "100vh", border: "none" }}
      />
    </>
  );
};

export default ModalSnake;
