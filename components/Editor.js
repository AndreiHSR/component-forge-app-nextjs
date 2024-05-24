'use client';
import { Circles } from 'react-loader-spinner';
import GhatGptInstructionInput from '@/components/ChatGptInstructionInput';
import CodeTextarea from '@/components/CodeTextarea';
import React, { useEffect, useState } from 'react';
import TitleModle from './TitleModle';
import HTMLReactParser from 'html-react-parser';
import { useParams, useRouter } from 'next/navigation';

const Editor = ({ edit, userId }) => {
  const router = useRouter();
  const params = useParams();
  const id = params.id;
  const [open, setOpen] = useState(false);
  const [language, setLanguage] = useState('with Tailwind Css only Jsx');
  const [prompt, setPrompt] = useState('');
  const [title, setTitle] = useState('');
  const [output, setOutput] = useState('');
  const [loading, setLoading] = useState(false);
  const [conversationHistory, setConversationHistory] = useState([]);

  useEffect(() => {
    if (!userId) {
      router.push('/sign-in');
    }
  }, []);

  const getSingleComponent = async () => {
    try {
      const response = await fetch(
        `/api/saved-components/single/${params.id}`,
        {
          cache: 'no-store',
          method: 'GET',
        }
      );
      if (response.ok) {
        const data = await response.json();
        console.log('data', data);
        setTitle(data.item.title);
        setOutput(data.item.output);
        setConversationHistory(data.item.conversationHistory);
        setLoading(false);
      } else {
        console.error('Error fetching my pictures');
        setLoading(false);
      }
    } catch (e) {
      console.log('Error', e);
      setLoading(false);
    }
  };

  const getRecentComponent = () => {
    // Retrieve the JSON string from localStorage
    let obj = localStorage.getItem('recentComponent');
    const opt = localStorage.getItem('output');
    // Parse the JSON string back into an object
    let recentComponent = JSON.parse(obj);
    if (recentComponent) {
      setOutput(recentComponent.output);
      setConversationHistory(recentComponent.conversationHistory);
    } else {
      setOutput(opt);
    }
  };

  useEffect(() => {
    if (id && edit) {
      getSingleComponent();
    } else {
      // getRecentComponent();
    }
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const requestData = {
        prompt: prompt + ' ' + language,
        conversationHistory, // send conversation history along with the current prompt
      };

      const res = await fetch('/api/gpt/new', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestData),
      });

      if (!res.ok) {
        console.error('Error in response with status: ', res.status);
        setLoading(false);
        return;
      }

      const responseData = await res.json();
      console.log('responseData', responseData);
      setOutput(responseData.content);
      setLoading(false);

      // Update conversation history with the current prompt and response
      setConversationHistory([
        ...conversationHistory,
        { prompt, response: responseData.content },
      ]);
    } catch (error) {
      console.error('Error parsing JSON', error);
    }
  };

  console.log('conversationHistory', conversationHistory);

  return (
    userId && (
      <div className="py-[20px] px-4 sm:px-10">
        <div className="mb-4">
          <label
            htmlFor="language"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Select Css
          </label>
          <select
            id="language"
            name="language"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
          >
            <option value={'with Tailwind Css only Jsx'}>Tailwind Css</option>
            <option value={'with Inline Css only Jsx'}>Raw Css</option>
          </select>
        </div>
        {/* Editor container */}
        <div className="grid grid-cols-2 gap-2 justify-center">
          {/* Code */}
          <div className="col-span-1 border border-black min-h-[520px] rounded-md">
            <h1 className="text-center font-[600] text-[32px] flex justify-between items-center pl-4">
              Code
              <div className="flex gap-2">
                <button
                  className="bg-indigo-600 hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 text-white h-[46px] px-4 text-[20px] flex justify-center items-center rounded-tr-md"
                  onClick={() => setOpen(true)}
                >
                  {edit ? 'Update' : 'Save'}
                </button>
              </div>
            </h1>
            {loading ? (
              <div className="flex justify-center pt-[100px]">
                <Circles
                  height="80"
                  width="80"
                  color="#FF385C"
                  ariaLabel="circles-loading"
                  wrapperClass=""
                  visible={true}
                />
              </div>
            ) : (
              <div>
                <CodeTextarea output={output} setOutput={setOutput} />
                <GhatGptInstructionInput
                  setPrompt={setPrompt}
                  handleSubmit={handleSubmit}
                />
              </div>
            )}
          </div>
          <div className="col-span-1 border border-black min-h-[520px] rounded-md flex flex-col justify-start items-center p-3">
            {/* {HTMLReactParser(output, {
            replace: (node) => {
              return node;
            },
          })} */}
            {HTMLReactParser(output)}
          </div>
        </div>
        <TitleModle
          id={id}
          edit={edit}
          title={title}
          setTitle={setTitle}
          userId={userId}
          output={output}
          setOutput={setOutput}
          conversationHistory={conversationHistory}
          setConversationHistory={setConversationHistory}
          open={open}
          setOpen={setOpen}
        />
      </div>
    )
  );
};

export default Editor;
