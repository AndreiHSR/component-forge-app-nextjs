const CodeTextarea = ({ output, setOutput }) => {
  return (
    <>
      <textarea
        rows={21}
        name="comment"
        id="comment"
        className="block w-full border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:border focus:border-purple-600 focus:ring-inset focus:ring-0 sm:text-sm sm:leading-6 rounded-bl-md rounded-br-md"
        placeholder="Code here"
        value={output}
        onChange={(e) => setOutput(e.target.value)}
      />
    </>
  );
};
export default CodeTextarea;
