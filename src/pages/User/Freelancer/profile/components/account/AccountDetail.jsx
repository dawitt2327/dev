import { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import profileValidator from "./profileValidator";
import { BaseURL } from "../../../../../../services/constants/Constants";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { AiFillCloseSquare } from "react-icons/ai";

const AccountDetail = () => {
  const token = localStorage.getItem("token");
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    bio: "",
    occupation: "",
    skills: [],
    imageUrl: "",
    type: "",
  });
  const [selectedImages, setSelectedImage] = useState({
    imageContent: "",
  });
  const skills = [
    "HTML5",
    "CSS3",
    "JavaScript",
    "React",
    "Angular",
    "Vue.js",
    "Node.js",
    "Express.js",
    "Python",
    "Ruby",
    "PHP",
    "Java",
    "Swift",
    "Kotlin",
    "Objective-C",
    "SQL",
    "MongoDB",
    "Firebase",
    "Git",
    "RESTful APIs",
  ];
  const notify = (message, type) =>
    toast(message, {
      type,
    });

  // images
  const handleChangeImage = (file, type) => {
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage({
          ...selectedImages,
          [type]: reader.result,
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleCancelImage = (type) => {
    setSelectedImage({
      imageContent: "",
    });
  };

  const getImageUrl = async (file) => {
    try {
      const formData = new FormData();
      formData.append("image", file);
      const resp = await axios.post(BaseURL + "upload", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      return resp.data.url;
    } catch (error) {
      console.log(error);
    }
  };

  //users
  const fetchUser = async () => {
    try {
      const res = await axios.get(BaseURL + "users/profile", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (res.status === 200) {
        setUser({
          firstName: res.data.user.firstName,
          lastName: res.data.user.lastName,
          email: res.data.user.email,
          bio: res.data.user.bio,
          occupation: res.data.user.occupation,
          skills: res.data.user.skills,
          imageUrl: res.data.user.imageUrl,
          type: res.data.user.type,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const updateProfile = async (values) => {
    try {
      const res = await axios.put(BaseURL + "users/profile", values, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (res.status === 200) {
        notify("Profile updated successfully", "success");
        window.location.reload();
      }
    } catch (error) {
      const errorMessage =
        error.response.data.message || "Something went wrong";
      notify(errorMessage, "error");
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div className="w-full md:px-[20px] md:px-[80px] lg:px-[100px]">
      {user.firstName ? (
        <Formik
          initialValues={{
            ...user,
            imageUrl: null,
            password: "",
            confirmPassword: "",
          }}
          validationSchema={profileValidator}
          onSubmit={async (values, actions) => {
            if (values.imageUrl) {
              const resp = await getImageUrl(values.imageUrl);
              values.imageUrl = resp;
            }

            updateProfile(values);
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            setFieldValue,
          }) => (
            <Form>
              <div className="w-full my-2">
                <label
                  htmlFor="last_name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  FIRST NAME
                </label>
                <Field
                  type="text"
                  name="firstName"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="First Name"
                />
                <ErrorMessage
                  name="firstName"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>
              <div className="w-full my-2">
                <label
                  htmlFor="fist_name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  LAST NAME
                </label>
                <Field
                  type="text"
                  value={values.lastName}
                  onChange={() => {
                    setFieldValue("lastName", user.lastName);
                  }}
                  name="lastName"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Last Name"
                />
                <ErrorMessage
                  name="lastName"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>
              <div className="w-full my-2">
                <label
                  htmlFor="last_name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  EMAIL ADDRESS
                </label>
                <Field
                  name="email"
                  type="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="email@gmail.com"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>
              <div className="w-full my-2">
                <label
                  htmlFor="fist_name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  NEW PASSWORD
                </label>
                <Field
                  name="password"
                  type="text"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="*********"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>
              <div className="w-full my-2">
                <label
                  htmlFor="fist_name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  CONFIRM PASSWORD
                </label>
                <Field
                  type="text"
                  name="confirmPassword"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="*********"
                />
                <ErrorMessage
                  name="confirmPassword"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>
              <div className="w-full my-2">
                <label
                  htmlFor="fist_name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  BIO
                </label>
                <Field
                  type="text"
                  name="bio"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="*********"
                />
                <ErrorMessage
                  name="bio"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>
              <div className="w-full my-2">
                <label
                  htmlFor="fist_name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  OCCUPATION
                </label>
                <Field
                  type="text"
                  name="occupation"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="*********"
                />
                <ErrorMessage
                  name="occupation"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>
              {user.type === "Freelancer" && (
                <div className="flex flex-col gap-y-2 mt-4">
                  <label
                    htmlFor="cover-lettter"
                    className="text-md text-slate-800"
                  >
                    Skills
                  </label>
                  <div className="flex flex-wrap gap-2 h-40 max-h-40 overflow-auto border-[2px] py-3 px-2 rounded border-purple-600">
                    {skills.map((skill) => (
                      <span
                        key={skill}
                        className={`h-[30px] cursor-pointer border-purple-600 border-2 text-sm text-black font-semibold  px-3 py-1 rounded-full focus:outline-none ${
                          values.skills?.includes(skill) ? "bg-purple-600" : ""
                        }`}
                        onClick={() =>
                          setFieldValue(
                            "skills",
                            values.skills?.includes(skill)
                              ? values.skills?.filter((s) => s !== skill)
                              : [...values.skills, skill]
                          )
                        }
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )}
              {user.imageUrl && !values.imageUrl && (
                <div className="flex justify-between items-start mt-4">
                  <img src={`${user.imageUrl}`} alt="" width={200} />
                </div>
              )}
              <div className="my-3">
                <label
                  htmlFor="imageContent"
                  className="cursor-pointer block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  <div className="border-dashed border-2 border-purple-500 p-4 w-full text-center">
                    {user.imageUrl
                      ? "Change Profile Image"
                      : "Upload Profile Image"}
                  </div>
                </label>
                <input
                  id="imageContent"
                  type="file"
                  placeholder=""
                  name="imageContent"
                  onChange={(e) => {
                    setFieldValue("imageUrl", e.target.files[0]);
                    handleChangeImage(e.target.files[0], "imageUrl");
                  }}
                  className="hidden bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-purple-600 focus:border-purple-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
                {selectedImages.imageUrl && (
                  <div className="flex justify-between items-start mt-4">
                    <img src={selectedImages.imageUrl} alt="" width={200} />
                    <div>
                      <i
                        className="relative text-2xl font-bold top-0 cursor-pointer"
                        onClick={() => {
                          handleCancelImage("imageUrl");
                          setFieldValue("imageUrl", null);
                        }}
                      >
                        <AiFillCloseSquare
                          className="text-slate-700"
                          size={25}
                        />
                      </i>
                    </div>
                  </div>
                )}
                <ErrorMessage
                  name="imageUrl"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>
              <button
                type="submit"
                className="mt-4 w-[150px] btn-link text-md md:text-md text-gray-100 font-medium flex justify-center items-center gap-x-3 hover:gap-x-5 transition-all py-3 rounded-md bg-purple-600  hover:bg-purple-600"
              >
                Update Profile
              </button>
            </Form>
          )}
        </Formik>
      ) : (
        <div className="flex justify-center items-center h-[80vh]">
          Loading...
        </div>
      )}
      <ToastContainer />
    </div>
  );
};

export default AccountDetail;
