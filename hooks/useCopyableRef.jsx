import { useRef, useState } from "react";
import copyToClipboard from "copy-to-clipboard"; // You'll need this package: `yarn add copy-to-clipboard`.

const useCopyableRef = (delay = 4000) => {
  const ref = useRef(null);

  const [isCopied, setCopied] = useState(false);
  const copy = () => {
    if (isCopied) return;

    if (!ref.current) throw new Error("Ref is nil.");
    copyToClipboard(ref.current.textContent || "");

    setCopied(true);
    setTimeout(() => setCopied(false), delay);
  };

  return { ref, isCopied, copy };
};

export default useCopyableRef;
