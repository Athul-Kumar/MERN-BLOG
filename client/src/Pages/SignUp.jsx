import { Link } from "react-router-dom";
import { Label, TextInput, Button } from "flowbite-react";

const SignUp = () => {
  return (
    <div className="mt-20 min-h-screen">
      <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-4">
        {/* left */}
        <div className="flex-1">
          <Link to="/" className="font-bold dark:text-white text-4xl">
            <span className="px-2 py-1 rounded-md bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500   text-white">
              IMP
            </span>
            Blog
          </Link>
          <p className="text-sm mt-5">
            This is a demo project. You can sign up with your email and password
            or with Google.
          </p>
        </div>
        {/* right */}
        <div className="flex-1">
          <form className="flex flex-col gap-4">
            <div className="">
              <Label value="Your username" />
              <TextInput type="text" placeholder="Username" id="username" />
            </div>
            <div className="">
              <Label value="Your Email" />
              <TextInput type="email" placeholder="name@company.com" id="email" />
            </div>
            <div className="">
              <Label value="Your password" />
              <TextInput type="text" placeholder="Password" id="password" />
            </div>
            <Button gradientDuoTone="purpleToPink" type="submit">
              Sign Up
            </Button>
          </form>
          <div className="flex gap-2 text-sm mt-5">
            <span>Have an account?</span>
            <Link to="/signIn" className="text-blue-500">Sign In</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
