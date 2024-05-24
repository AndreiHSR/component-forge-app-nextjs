import { auth, currentUser } from '@clerk/nextjs'
import Editor from '@/components/Editor';
export default async function DashboardPage() {
    const { userId } = auth();
  const user = await currentUser();      

    return (
      <>
        <Editor edit={false}
        userId={userId}
        />
    </>
        
  )
}
