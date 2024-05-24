const GhatGptInstructionInput = ({ setPrompt, handleSubmit }) => {
  const handleChange = (e) => {
    setPrompt(e.target.value);
  };
  return (
    <div className="w-full">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          autoComplete="false"
          className="block w-full border-0 py-1.5 h-[50px] text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 rounded-br-md rounded-bl-md"
          placeholder="How I can help you today?"
          onChange={handleChange}
        />
      </form>
    </div>
  );
};
export default GhatGptInstructionInput;
