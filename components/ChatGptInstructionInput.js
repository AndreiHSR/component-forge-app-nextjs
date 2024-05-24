import { PaperAirplaneIcon } from '@heroicons/react/20/solid';
const GhatGptInstructionInput = ({ setPrompt, handleSubmit }) => {
  const handleChange = (e) => {
    setPrompt(e.target.value);
  };
  return (
    <div className="w-full">
      <form className="flex" onSubmit={handleSubmit}>
        <input
          type="text"
          autoComplete="false"
          className="block w-full border-0 py-1.5 h-[50px] text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 br-0 rounded-bl-md"
          placeholder="How I can help you today?"
          onChange={handleChange}
        />
        <button
          className="w-[80px]  text-center flex items-center justify-center"
          type="submit"
        >
          <PaperAirplaneIcon className="h-[30px] w-[30px] text-blue-400" />
        </button>
      </form>
    </div>
  );
};
export default GhatGptInstructionInput;