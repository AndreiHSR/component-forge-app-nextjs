
import { useUser } from "@clerk/nextjs";

// Check if user is logged in
export default function AuthUser() {
  const { isSignedIn } = useUser();
  return isSignedIn;
}
