import Link from "next/link";
const TapRhythmGame = () => {
  return (
    <>
      <h1 style={{ textAlign: "center" }}>
        <Link href="/audiogamessandbox">Back to Games</Link>
      </h1>
      <iframe
        src="/audiogames/taprhythm/index.html"
        style={{ width: "100%", height: "50vh", border: "none" }}
      />
    </>
  );
};

export default TapRhythmGame;
