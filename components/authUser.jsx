
import { useUser } from "@clerk/nextjs";


export default function authUser() {
  
  const { isSignedIn } = useUser();
  
  return isSignedIn;
}
