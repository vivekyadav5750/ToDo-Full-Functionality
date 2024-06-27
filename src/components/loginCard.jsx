import { NavLink } from "react-router-dom";

export default function LoginCard() {

    const handleSubmit = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log("Login Form Submitted");
        console.log( email, password);
      }

    return (
        <main className="flex items-center justify-center">
      {/* // login form */}
      <div className="h-96 w-80 mt-20   space-y-4">
        <h1 className="text-5xl font-serif font-black text-customBlue">
          Sign In
        </h1>

        <form
          className="flex flex-col space-y-4  pt-8"
          onSubmit={(e) => handleSubmit(e)}
        >
          <input
            className="h-12 w-72 p-3 bg-shadowWhite box-border border-2 border-darkPurple rounded-lg text-lg text-darkPurple font-semibold 
            focus:outline-none focus:border-darkPurple-500 focus:ring-1 focus:ring-darkPurple-500 placeholder:text-lg placeholder:font-normal"
            type="email"
            name="email"
            placeholder="Enter Email"
            required
            autoComplete="off"
          />
          <input
            className="h-12 w-72 p-3 bg-shadowWhite box-border border-2 border-darkPurple rounded-lg text-lg text-darkPurple font-semibold 
            focus:outline-none focus:border-darkPurple-500 focus:ring-1 focus:ring-darkPurple-500 placeholder:text-lg placeholder:font-normal"
            type="password"
            name="password"
            placeholder="Enter Password"
            required
            autoComplete="off"
          />
          <button className="h-10 w-72 p-1.5 bg-darkPurple text-lg text-white rounded-md shadow-lg shadow-slate-400 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 ...">
            Sign In
          </button>
        </form>
        <p className="font-semibold">
          <NavLink to="/signUp"> Or SignUp instead</NavLink>
        </p>
      </div>
    </main>
    )
}