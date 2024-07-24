import Link from "next/link";
const GainGame = () => {
  return (
    <>
      <h1 style={{ textAlign: "center" }}>
        <Link href="/audiogamessandbox">Back to Games</Link>
      </h1>
      <iframe
        src="/audiogames/gaingame/index.html"
        style={{ width: "100%", height: "50vh", border: "none" }}
      />
    </>
  );
};

export default GainGame;
