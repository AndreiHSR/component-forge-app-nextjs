import { Fragment, useRef, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { CircleStackIcon } from '@heroicons/react/24/outline';
import { useRouter } from 'next/navigation';

const TitleModle = ({
  id,
  edit,
  title,
  setTitle,
  open,
  setOpen,
  output,
  setOutput,
  conversationHistory,
  setConversationHistory,
  userId,
}) => {
  const cancelButtonRef = useRef(null);
  const router = useRouter();

  const [loading1, setLoading1] = useState(false);

  const handleSubmit = async () => {
    setLoading1(true);
    try {
      const response = await fetch(`/api/saved-components/new`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userId,
          title,
          output,
          conversationHistory,
        }),
      });
      console.log('response', response);
      if (response.ok) {
        const data = await response.json();
        console.log('data', data);
        let recentComponent = JSON.stringify(data.item);
        localStorage.setItem('recentComponent', recentComponent);
        setTitle('');
        setOutput('');
        setConversationHistory([]);
        setLoading1(false);
        setOpen(false);
      }
    } catch (error) {
      setLoading1(false);
    }
  };

  const handleSaveChanges = async () => {
    setLoading1(true);
    try {
      const response = await fetch(`/api/saved-components/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title,
          output,
          conversationHistory,
        }),
      });
      if (response.ok) {
        const data = await response.json();
        console.log('data', data);
        setTitle('');
        setLoading1(false);
        router.push('/my-components');
        setOpen(false);
      }
    } catch (error) {
      console.log('error', error);
      setLoading1(false);
    }
  };
  console.log('userId', userId);

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        initialFocus={cancelButtonRef}
        onClose={() => {
          setOpen(false);
          setTitle('');
        }}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                <div>
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                    <CircleStackIcon
                      className="h-6 w-6 text-green-600"
                      aria-hidden="true"
                    />
                  </div>
                  <div className="mt-3 text-center sm:mt-5">
                    <Dialog.Title
                      as="h3"
                      className="text-base font-semibold leading-6 text-gray-900"
                    >
                      Component Title
                    </Dialog.Title>
                    <div className="mt-2">
                      <div>
                        <div className="mt-2">
                          <input
                            type="text"
                            name="title"
                            id="title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            placeholder="Component Title?"
                            aria-describedby="email-description"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-5 sm:mt-6 sm:grid sm:grid-flow-row-dense sm:grid-cols-2 sm:gap-3">
                  <button
                    type="button"
                    className="inline-flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 sm:col-start-2"
                    onClick={() =>
                      edit ? handleSaveChanges() : handleSubmit()
                    }
                    disabled={loading1}
                  >
                    Save
                  </button>
                  <button
                    type="button"
                    className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:col-start-1 sm:mt-0"
                    onClick={() => {
                      setOpen(false);
                      setTitle('');
                    }}
                    ref={cancelButtonRef}
                  >
                    Cancel
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};
export default TitleModle;
