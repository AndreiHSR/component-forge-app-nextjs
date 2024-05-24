'use client';
import React, { useEffect, useState } from 'react';
import { Circles } from 'react-loader-spinner';
import ComponentCard from './ComponentCard';
import { useRouter } from 'next/navigation';

const MyComponents = ({ userId }) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [components, setComponents] = useState([]);

  if (!userId) {
    router.push('/sign-in');
  }

  const getMyComponents = async () => {
    setLoading(true);
    try {
      const response = await fetch(`/api/saved-components/${userId}`, {
        cache: 'no-store',
        method: 'GET',
      });
      console.log('response', response);
      if (response.ok) {
        const data = await response.json();
        console.log('data', data);
        setComponents(data.items);
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
  useEffect(() => {
    if (userId) {
      getMyComponents();
    }
  }, [userId]);
  while (loading) {
    return (
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
    );
  }
  return (
    userId && (
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-5 mx-5">
        {components.map((item, i) => (
          <ComponentCard key={i} item={item} setComponents={setComponents} />
        ))}
      </div>
    )
  );
};

export default MyComponents;
