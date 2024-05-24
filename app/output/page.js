'use client';
import React, { useEffect, useState } from 'react';
import { ArrowPathIcon } from '@heroicons/react/24/outline';
import HTMLReactParser from 'html-react-parser';

const Output = () => {
  const [output, setOutput] = useState('');

  useEffect(() => {
    const opt = localStorage.getItem('output');
    setOutput(opt);
  }, []);

  return output ? (
    <div>
      <h1 className="text-center font-[600] text-[32px] flex justify-center items-center gap-4 h-[70px]">
        Refresh{' '}
        <ArrowPathIcon
          className="w-8 text-green-500 cursor-pointer"
          onClick={() => {
            window.location.reload();
          }}
        />
      </h1>
      <div className="flex flex-col justify-center items-center">
        {HTMLReactParser(output, {
          replace: (node) => {
            return node;
          },
        })}
      </div>
    </div>
  ) : null;
};

export default Output;
