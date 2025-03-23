import React, { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Link } from "react-router-dom";

const SignIn = () => {
  const { signInUser } = useContext(AuthContext);

  const handleSignIn = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    console.log(email, password);
    signInUser(email, password)
      .then((result) => {
        console.log(result.user);

        // update the login time
        const lastSignInTime = result?.user?.metadata?.lastSignInTime;
        const loginInfo = { email, lastSignInTime };

        fetch(`http://localhost:5000/users`, {
          method: "PATCH",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(loginInfo),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log("Sign In info updated in db", data);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-6">Sign In Now</h1>
        <form onSubmit={handleSignIn}>
          {/* <div className="mb-4">
            <label className="block text-gray-700">Full Name</label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded mt-1"
              placeholder="Full Name"
              name="name"
            /> */
          /* </div> */}
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              className="w-full p-2 border border-gray-300 rounded mt-1"
              placeholder="Email"
              name="email"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              className="w-full p-2 border border-gray-300 rounded mt-1"
              placeholder="Password"
              name="password"
            />
          </div>
          {/* <div className="mb-4">
            <label className="block text-gray-700">Confirm Password</label>
            <input
              type="password"
              className="w-full p-2 border border-gray-300 rounded mt-1"
              placeholder="Confirm Password"
              name="confirm password"
            />
          </div> */}
          <button className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
            Sign In
          </button>
          <p className="text-center text-gray-600 mt-4">
            Already have an account?<Link to="/signup">Signup</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
