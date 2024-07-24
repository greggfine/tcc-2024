import dynamic from "next/dynamic";

const Survey = dynamic(() => import("/components/Survey.tsx"), {
  ssr: false,
});

export default Survey;
