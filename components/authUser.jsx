
import { useUser } from "@clerk/nextjs";

// Check if user is logged in
export default function authUser() {
  
  const { isSignedIn } = useUser();
  
  return isSignedIn;
}
