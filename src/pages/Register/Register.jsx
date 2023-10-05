import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  //   console.log(createUser);
  const handleRegistration = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const email = form.get("email");
    const password = form.get("password");
    createUser(email, password)
      .then((res) => {
        console.log(res.user);
        alert("your account has been created successfully");
        e.target.reset();
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(name, email, password);
  };
  return (
    <div>
      <Navbar></Navbar>

      <div className="w-1/3 mx-auto">
        <h2 className="text-center text-2xl font-semibold my-2">
          Register your account
        </h2>
        <form onSubmit={handleRegistration}>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="name"
                  name="name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  name="password"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary ">Register</button>
              </div>
            </div>
          </div>
        </form>
        <p className="my-2 text-center">
          Already have an account?Please
          <Link className="underline text-blue-700  " to="/login">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
