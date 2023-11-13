import React, { useEffect } from "react";
import AuthHeader from "../AuthHeader";
import { Link, useNavigate } from "react-router-dom";
import AuthFooter from "../AuthFooter";
import { ToastContainer, toast } from "react-toastify";
import { useLoginUserMutation } from "../../../services/auth/authApi";
import { Form, Formik, Field, ErrorMessage } from "formik";
import loginValidation from "./validations";

const LoginPage = () => {
  const [loginUser, { isLoading }] = useLoginUserMutation();
  const navigate = useNavigate();
  const notify = (message, type) =>
    toast(message, {
      type,
    });

  useEffect(() => {
    if (
      localStorage.getItem("token") &&
      localStorage.getItem("type") === "Freelancer"
    ) {
      navigate("/feeds");
    }

    if (
      localStorage.getItem("token") &&
      localStorage.getItem("type") === "Employer"
    ) {
      navigate("/client");
    }
  }, []);

  const handleSubmit = async (values) => {
    try {
      const response = await loginUser({
        ...values,
      }).unwrap();

      const redirectTo = response.data.isAdmin
        ? "/admin"
        : response.data.type === "Freelancer"
        ? "/feeds"
        : "/client";

      if (response.data.token) {
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("type", response.data.type);
        localStorage.setItem("user", JSON.stringify(response.data));
        notify("Signin successfully", "success");
        setTimeout(() => {
          navigate(redirectTo);
        }, 1500);
      }
    } catch (error) {
      notify(error?.data?.message || "Signin failed", "error");
    }
  };

  const handlGoogleLogin = () => {
    window.location.href =
      "http://localhost:5000/api/v1/users/google?type=Freelancer";
  };

  const handlGithubLogin = () => {
    window.location.href =
      "http://localhost:5000/api/v1/users/github?type=Freelancer";
  };
  return (
    <>
      <AuthHeader />
      <section className="mb-[100px] sm:mt-[60px] md:mt-[100px] lg:mt-[100px] mt-[40px]">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-center text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Sign in to Colabs
              </h1>
              <div>
                {" "}
                <button
                  aria-label="Continue with google"
                  role="button"
                  onClick={(e) => {
                    e.preventDefault();
                    handlGoogleLogin();
                  }}
                  className="focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-gray-700 py-3.5 px-4 border rounded-lg border-gray-700 flex items-center w-full mt-10"
                >
                  <img
                    src="https://tuk-cdn.s3.amazonaws.com/can-uploader/sign_in-svg2.svg"
                    alt="google"
                  />
                  <p className="text-base font-medium ml-4 text-gray-700">
                    Continue with Google
                  </p>
                </button>
                <button
                  aria-label="Continue with github"
                  role="button"
                  onClick={(e) => {
                    e.preventDefault();
                    handlGithubLogin();
                  }}
                  className="focus:outline-none  focus:ring-2 focus:ring-offset-1 focus:ring-gray-700 py-3.5 px-4 border rounded-lg border-gray-700 flex items-center w-full mt-4"
                >
                  <img
                    src="https://tuk-cdn.s3.amazonaws.com/can-uploader/sign_in-svg3.svg"
                    alt="github"
                  />
                  <p className="text-base font-medium ml-4 text-gray-700">
                    Continue with Github
                  </p>
                </button>
              </div>
              <Formik
                className="space-y-4 md:space-y-6"
                initialValues={{ email: "", password: "" }}
                onSubmit={(values, actions) => {
                  handleSubmit(values);
                }}
                validationSchema={loginValidation}
              >
                {({ values, errors, touched, handleChange, handleBlur }) => (
                  <Form>
                    <div className="my-3">
                      <label
                        htmlFor="email"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Your email
                      </label>
                      <Field
                        type="email"
                        placeholder="Enter your email"
                        name="email"
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-purple-600 focus:border-purple-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      />
                      <ErrorMessage
                        name="email"
                        component="div"
                        className="text-red-500 text-sm"
                      />
                    </div>

                    <div className="my-3">
                      <label
                        htmlFor="password"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Password
                      </label>
                      <Field
                        type="password"
                        placeholder="Enter your password"
                        name="password"
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-purple-600 focus:border-purple-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      />
                      <ErrorMessage
                        name="password"
                        component="div"
                        className="text-red-500 text-sm"
                      />
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-start">
                        <div className="flex items-center h-5">
                          <input
                            id="remember"
                            aria-describedby="remember"
                            type="checkbox"
                            className="text-purple-600 w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-purple-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-purple-600 dark:ring-offset-gray-800"
                          />
                        </div>
                        <div className="ml-3 text-sm">
                          <label
                            htmlFor="remember"
                            className="text-gray-500 dark:text-gray-300"
                          >
                            Remember me
                          </label>
                        </div>
                      </div>
                      <Link
                        to={"/forgotpassword"}
                        className="text-sm font-medium text-purple-600 hover:underline dark:text-purple-700"
                      >
                        Forgot password?
                      </Link>
                    </div>
                    <button
                      type="submit"
                      className="w-full text-white bg-purple-600 hover:bg-purple-700 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800 my-3"
                    >
                      {isLoading ? "Loading..." : "Log In"}
                    </button>
                    <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                      Don’t have an account yet?{" "}
                      <Link
                        to={"/signup"}
                        s
                        className="font-medium text-purple-600 hover:underline dark:text-purple-700"
                      >
                        Sign up
                      </Link>
                    </p>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </section>
      <div className="mt-5">
        <AuthFooter />
      </div>
      <ToastContainer />
    </>
  );
};

export default LoginPage;
