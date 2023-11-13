import { Field, Form, Formik, ErrorMessage } from "formik";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { BaseURL } from "../../../services/constants/Constants";
import { useNavigate } from "react-router-dom";
import AuthHeader from "../AuthHeader";

// todo refactor to react-query

export default function CompleteProfile() {
  const token = localStorage.getItem("token");
  const type = localStorage.getItem("type");
  const [banks, setBanks] = useState([]);
  const [selectedImages, setSelectedImage] = useState({
    legalDoc: "",
    tradeLicense: "",
  });
  const notify = (message, type) =>
    toast(message, {
      type,
    });
  const navigateTo = useNavigate();

  useEffect(() => {
    (async () => {
      try {
        const resp = await axios.get(BaseURL + "chapa/banks");
        setBanks(resp.data.data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

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
      ...selectedImages,
      [type]: "",
    });
  };

  const handleSubmitRequest = async (data) => {
    try {
      const resp = await axios.post(BaseURL + "users/request", data, {
        headers: {
          Authorization: "Bearer " + token,
        },
      });

      if (resp.status === 201) {
        notify(resp.data.message || "Submited for review", "success");
        setTimeout(() => {
          if (type === "Freelancer") {
            navigateTo("/feeds");
          } else if (type === "Employer") {
            navigateTo("/client");
          }
        }, 1500);
      }
    } catch (error) {
      notify("Server error", "error");
    }
  };

  return (
    <div className="flex justify-center items-center my-5">
      <AuthHeader />
      <div className="mt-[80px]">
        <div className="w-full bg-purple-600 rounded-md py-3 text-center">
          <h3 className="text-xl text-white font-semibold">
            Complete your profile
          </h3>
        </div>
        <Formik
          className="space-y-4 md:space-y-6"
          initialValues={{
            bankName: banks[0],
            accountNumber: "",
            tradeLicense: null,
            accountName: "",
            businessName: "",
            legalDoc: null,
          }}
          onSubmit={async (values, actions) => {
            if (values.legalDoc) {
              const resp = await getImageUrl(values.legalDoc);
              values.legalDoc = resp;
            }

            if (values.tradeLicense) {
              const resp = await getImageUrl(values.tradeLicense);
              values.tradeLicense = resp;
            }

            handleSubmitRequest({
              legalInfo: {
                bank: {
                  bankCode: banks.find((bank) => bank.name === values.bankName)
                    ?.id,
                  accountNumber: values.accountNumber,
                  accountName: values.accountName,
                  businessName: values.businessName,
                },
                legalDoc: values.legalDoc || "",
                tradeLicense: values.tradeLicense || "",
              },
              type: "VERIFICATION",
            });
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
              <div className="my-5">
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your Bank Account
                </label>

                <div className="flex">
                  <Field
                    as="select"
                    name="bankName"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-purple-600 focus:border-purple-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mr-2"
                  >
                    {banks.length > 0 &&
                      banks?.map((bank, index) => (
                        <option key={index}>{bank.name}</option>
                      ))}
                  </Field>
                  <Field
                    type="text"
                    placeholder="Enter your bank account"
                    name="accountNumber"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-purple-600 focus:border-purple-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div>
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>
              <div className="my-3">
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your Bank Account Name
                </label>

                <div className="flex">
                  <Field
                    type="text"
                    placeholder="Enter your bank account Name"
                    name="accountName"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-purple-600 focus:border-purple-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div>
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>

              <div className="my-3">
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your Business Name
                </label>

                <div className="flex">
                  <Field
                    type="text"
                    placeholder="Enter your bank account Name"
                    name="businessName"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-purple-600 focus:border-purple-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div>
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>

              <div className="my-3">
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Passport or Government Id:
                </label>
                <input
                  type="file"
                  placeholder="Enter your legal doc"
                  name="legalDoc"
                  onChange={(e) => {
                    setFieldValue("legalDoc", e.target.files[0]);
                    handleChangeImage(e.target.files[0], "legalDoc");
                  }}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-purple-600 focus:border-purple-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
                {selectedImages.legalDoc && (
                  <div className="flex justify-around items-star">
                    <img src={selectedImages.legalDoc} alt="" width={400} />
                    <div>
                      <i
                        className="relative text-2xl font-bold top-0 cursor-pointer"
                        onClick={() => {
                          handleCancelImage("legalDoc");
                          setFieldValue("legalDoc", null);
                        }}
                      >
                        X
                      </i>
                    </div>
                  </div>
                )}
                <ErrorMessage
                  name="legalDoc"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>

              <div className="my-3">
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Trade License:
                </label>
                <input
                  type="file"
                  placeholder="Enter your legal doc"
                  name="tradeLicense"
                  onChange={(e) => {
                    setFieldValue("tradeLicense", e.target.files[0]);
                    handleChangeImage(e.target.files[0], "tradeLicense");
                  }}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-purple-600 focus:border-purple-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
                {selectedImages.tradeLicense && (
                  <div className="flex justify-around items-star">
                    <img src={selectedImages.tradeLicense} alt="" width={400} />
                    <div>
                      <i
                        className="relative text-2xl font-bold top-0 cursor-pointer"
                        onClick={() => {
                          handleCancelImage("tradeLicense");
                          setFieldValue("tradeLicense", null);
                        }}
                      >
                        X
                      </i>
                    </div>
                  </div>
                )}
                <ErrorMessage
                  name="tradeLicense"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>

              <button
                type="submit"
                className="inline-flex items-center px-4 py-2 text-white bg-indigo-600 border border-indigo-600 rounded rounded-full hover:bg-indigo-700 focus:outline-none focus:ring"
              >
                Submit
              </button>
            </Form>
          )}
        </Formik>
      </div>
      <ToastContainer />
    </div>
  );
}
