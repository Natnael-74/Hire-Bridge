function SignInPage() {
  return (
    <div className="min-h-[calc(100vh-10rem)] flex items-center justify-center">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-xl shadow-lg mx-4">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Welcome to Hire Bridge
          </h2>
          <p className="text-gray-600">
            Sign in to connect with top employers and find your dream job.
          </p>
        </div>
        <div className="mt-8">
          <button className="w-full gap-3 px-4 py-3 border border-gray-300 rounded-lg text-gray-700 flex items-center justify-center bg-white hover:bg-gray-50 transition-colors duration-200">
            Sign In with GitHub
          </button>
        </div>
        <div className="text-center text-sm text-gray-500 mt-6">
          By signing in, you agree to our
          <a className="text-indigo-600 hover:text-indigo-500 cursor-pointer">
            Terms of Service
          </a>{" "}
          and
          <a className="text-indigo-600 hover:text-indigo-500 cursor-pointer">
            {" "}
            Privacy Policy.
          </a>
        </div>
      </div>
    </div>
  );
}

export default SignInPage;
