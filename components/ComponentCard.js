import HTMLReactParser from 'html-react-parser';
import { useRouter } from 'next/navigation';
import { TrashIcon, PencilSquareIcon } from '@heroicons/react/24/outline';
const ComponentCard = ({ item, setComponents }) => {
  const router = useRouter();

  const deleteComponent = async (id) => {
    try {
      const response = await fetch(`/api/saved-components/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log('res', response);
      if (response.status === 200) {
        const data = await response.json();
        setComponents((prev) => {
          return [...prev.filter((item) => item._id !== id)];
        });
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  return (
    <div className="relative">
      <TrashIcon
        className="w-[30px] text-gray-600 absolute right-2 top-2 cursor-pointer"
        onClick={() => deleteComponent(item._id)}
      />
      <PencilSquareIcon
        className="w-[30px] text-gray-600 absolute right-10 top-2 cursor-pointer"
        onClick={() => router.push(`/my-components/${item._id}`)}
      />
      <div className="border border-gray-200 bg-white shadow-sm rounded-md  pb-4">
        <h3 className="text-base p-3 font-semibold leading-6 text-gray-900">
          {item.title}
        </h3>
        <div className="flex flex-col justify-start items-center w-full overflow-x-auto">
          {HTMLReactParser(item.output, {
            replace: (node) => {
              return node;
            },
          })}
        </div>
      </div>
    </div>
  );
};

export default ComponentCard;
