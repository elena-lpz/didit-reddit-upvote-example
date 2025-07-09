import { signIn } from "@/auth";

export function LoginButton() {
  async function handleLogin() {
    "use server";
    await signIn("credentials", {
      redirectTo: callBackUrl || DEFAULT_LOGIN_REDIRECT,
    });
  }

  return (
    <form action={handleLogin} className="inline">
      <button className="bg-pink-300 text-black px-3 py-2 rounded">
        Login
      </button>
    </form>
  );
}
