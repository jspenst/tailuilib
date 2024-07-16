import LoginButton from "./LoginButton";
import SignUpButton from "./SignUpButton";

export default function LoginSignUp() {
  return (
    <div className="w-full h-24 flex items-center justify-center gap-8">
      <LoginButton />
      <div className="h-3/4 border-l-2 border-gray-300"></div>
      <SignUpButton />
    </div>
  );
}
