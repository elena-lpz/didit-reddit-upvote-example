import { LoginButton } from "@/components/LoginButton";
import Link from "next/link";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

//TODO handle login error
//This solution is consistent with similar actions like trying to add a post when not logged in. This page is reusable, so it could substitute the error when adding a post, and could be reused for any other action that requires logging in

export default async function LogIn() {
  const session = await auth();
  if (session) {
    redirect("/");
  }
  return (
    <>
      <Link
        href="/"
        className="mt-4 hover:text-pink-400 font-medium underline flex gap-2 items-center"
      >
        Return to posts
      </Link>
      <div className="max-w-screen-lg mx-auto p-4 mt-10">
        You need to login to perfom this action <LoginButton redirectTo="/" />
      </div>
    </>
  );
}
