import useCopyableRef from "hooks/useCopyableRef";

const CodeBlock = (props) => {
  const { ref, isCopied, copy } = useCopyableRef();
  return (
    <>
      {/* <pre ref={ref} {...props} /> */}
      <pre ref={ref}>{props.js}</pre>
      <button onClick={copy} disabled={isCopied}>
        {isCopied ? "Copied!" : "Copy"}
      </button>
    </>
  );
};

export default CodeBlock;
