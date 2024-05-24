import { auth, currentUser } from '@clerk/nextjs';
import MyComponents from '@/components/MyComponents';

const Components = async () => {
  const { userId } = auth();
  const user = await currentUser();

  return (
    <div>
      <MyComponents userId={userId} />
    </div>
  );
};

export default Components;
