import * as React from "react";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import { Form, Formik, Field, ErrorMessage } from "formik";
import { postValidation } from "./validations";
import axios from "axios";
import { BaseURL } from "../../../../../services/constants/Constants";
import { ToastContainer, toast } from "react-toastify";
import { AiFillCloseSquare } from "react-icons/ai";

const notify = (message, type) =>
  toast(message, {
    type,
  });

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

export default function AddPostMOdal({ buttonText }) {
  const [open, setOpen] = React.useState(false);
  const [selectedImages, setSelectedImage] = React.useState({
    imageContent: "",
  });

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
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

  const handleSubmit = async (values) => {
    const resp = await axios.post(
      BaseURL + "social",
      {
        textContent: values.textContent,
        imageContent: values.imageContent,
        tags: values.tags,
      },
      {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      }
    );

    if (resp.status === 200) {
      notify("Post added successfully", "success");
      handleClose();
      window.location.reload();
    } else {
      notify("Something went wrong", "error");
    }
  };

  return (
    <div>
      <div className="w-full" onClick={handleClickOpen} disableElevation>
        {buttonText}
      </div>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogContent dividers>
          <Formik
            className="w-full flex justify-center space-y-4 md:space-y-6"
            initialValues={{ textContent: "", imageContent: null, tags: "" }}
            onSubmit={async (values, actions) => {
              if (values.imageContent) {
                const resp = await getImageUrl(values.imageContent);
                values.imageContent = resp;
              }
              handleSubmit(values);
            }}
            validationSchema={postValidation}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              setFieldValue,
            }) => (
              <Form className="w-full min-w-[500px] px-2">
                <div className="my-3">
                  <label
                    htmlFor="content"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Post Content:
                  </label>
                  <Field
                    as="textarea"
                    type="text"
                    placeholder="Post content here"
                    name="textContent"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-purple-600 focus:border-purple-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                  <ErrorMessage
                    name="textContent"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>
                <div className="my-3">
                  <label
                    htmlFor="tags"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Post Tags:
                  </label>
                  <Field
                    type="text"
                    placeholder="Post tag here"
                    name="tags"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-purple-600 focus:border-purple-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                  <ErrorMessage
                    name="tag"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>
                <div className="my-3">
                  <label
                    htmlFor="imageContent"
                    className="cursor-pointer block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    <div className="border-dashed border-2 border-purple-500 p-4 w-full text-center">
                      Add Media Here
                    </div>
                  </label>
                  <input
                    id="imageContent"
                    type="file"
                    placeholder=""
                    name="imageContent"
                    onChange={(e) => {
                      setFieldValue("imageContent", e.target.files[0]);
                      handleChangeImage(e.target.files[0], "imageContent");
                    }}
                    className="hidden bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-purple-600 focus:border-purple-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                  {selectedImages.imageContent && (
                    <div className="flex justify-between items-start mt-4">
                      <img
                        src={selectedImages.imageContent}
                        alt=""
                        width={200}
                      />
                      <div>
                        <i
                          className="relative text-2xl font-bold top-0 cursor-pointer"
                          onClick={() => {
                            handleCancelImage("imageContent");
                            setFieldValue("imageContent", null);
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
                    name="imageContent"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>
                <div className="mt-2">
                  <button
                    type="submit"
                    className="rounded-md py-2 px-4 bg-purple-600 text-white"
                  >
                    Post
                  </button>
                  <button
                    className="ml-3 rounded-md py-2 px-4 bg-red-500 text-white"
                    onClick={handleClose}
                  >
                    Discard
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </DialogContent>
      </BootstrapDialog>
      <ToastContainer />
    </div>
  );
}
