import { signIn } from "@/auth";
//did this first
//https://www.reddit.com/r/nextjs/comments/1cnnimy/is_it_possible_to_redirect_on_signin_with/ with some tweaks
//then realise this changed the redirect for everything and we might not want that so tried something different )see login page)

export function LoginButton() {
  async function handleLogin() {
    "use server";
    await signIn();
  }

  return (
    <form action={handleLogin} className="inline">
      <button className="bg-pink-300 text-black px-3 py-2 rounded">
        Login
      </button>
    </form>
  );
}
