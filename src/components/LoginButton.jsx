import { signIn } from "@/auth";

//https://www.reddit.com/r/nextjs/comments/1cnnimy/is_it_possible_to_redirect_on_signin_with/ with some tweaks

export function LoginButton() {
  async function handleLogin() {
    "use server";
    await signIn("credentials", { redirectTo: "/" });
  }

  return (
    <form action={handleLogin} className="inline">
      <button className="bg-pink-300 text-black px-3 py-2 rounded">
        Login
      </button>
    </form>
  );
}
