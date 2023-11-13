import React from "react";
import photoImg from "../../../../../assets/images/photo.png";
import audioImg from "../../../../../assets/images/audio.png";
import contentImg from "../../../../../assets/images/blog.png";
import likeImg from "../../../../../assets/images/like.png";
import videoImg from "../../../../../assets/images/video.png";
import commentImg from "../../../../../assets/images/comment.png";
import AddPostMOdal from "./AddPostModal";
import { Form, Formik, ErrorMessage, Field } from "formik";
import { commentValidation } from "./validations";
import moment from "moment";

const PostDetail = ({ post, handleLike, handlFollow, handleComment, user }) => {
  return (
    <div className="main-content w-1/2">
      <div className="post-content bg-white shadow-sm rounded-lg shadow-gray-300 w-full">
        <div className="flex justify-center items-center gap-4 px-5 py-2">
          <AddPostMOdal
            buttonText={
              <input
                className="hover:bg-gray-300 cursor-pointer w-[450px] grow rounded-[40px] border-2 border-slate-400 px-[20px] h-[50px]"
                placeholder="Start a post"
                disabled
              />
            }
          />
        </div>
        <div className="flex justify-between items-center gap-4 p-2">
          <AddPostMOdal
            buttonText={
              <div className="flex gap-2 rounded-[10px] cursor-pointer justify-between p-3 items-center hover:bg-gray-200">
                <img
                  src={photoImg}
                  alt="profile-image"
                  className="cursor-pointer w-[20px] h-[20px]"
                />
                <p className="text-md text-slate-800">Photos</p>
              </div>
            }
          />

          <AddPostMOdal
            buttonText={
              <div className="flex gap-2 rounded-[10px] cursor-pointer justify-between p-3 items-center hover:bg-gray-200">
                <img
                  src={videoImg}
                  alt="profile-image"
                  className="cursor-pointer w-[20px] h-[20px]"
                />
                <p className="text-md text-slate-800">video</p>
              </div>
            }
          />
          <AddPostMOdal
            buttonText={
              <div className="flex gap-2 rounded-[10px] cursor-pointer justify-between p-3 items-center hover:bg-gray-200">
                <img
                  src={audioImg}
                  alt="profile-image"
                  className="cursor-pointer w-[20px] h-[20px]"
                />
                <p className="text-md text-slate-800">audio</p>
              </div>
            }
          />
          <AddPostMOdal
            buttonText={
              <div className="flex gap-2 rounded-[10px] cursor-pointer justify-between p-3 items-center hover:bg-gray-200">
                <img
                  src={contentImg}
                  alt="profile-image"
                  className="cursor-pointer w-[20px] h-[20px]"
                />
                <p className="text-md text-slate-800">create content</p>
              </div>
            }
          />
        </div>
      </div>
      <div className="my-3 flex gap-2 justify-between items-center gap-3">
        <div className="grow bg-slate-400 h-[2px]"></div>
      </div>
      <div className="mb-4 p-3 flex gap-2 flex-col post-item bg-white shadow-sm rounded-lg shadow-gray-300">
        <div className="poster-profile flex items-center gap-2">
          <img
            src={user.imageUrl}
            alt=""
            className="w-[40px] h-[40px] rounded-[20px] cursor-pointer"
          />
          <div className="grow flex justify-between">
            <div className="cursor-pointer flex flex-col gap-0.4">
              <p className="text-md text-slate-900 capitalize">
                {post.userId?.firstName + " " + post.userId?.lastName}
              </p>
              <p className="text-sm text-slate-600">
                {post.userId?.bio || "User has no bio"}
              </p>
            </div>
            <button
              onClick={() => handlFollow(post.userId?._id)}
              disabled={user?.connections?.includes(post.userId?._id)}
              className="cursor-pointer text-purple-900 font-bold"
            >
              {user?.connections?.includes(post.userId?._id) ? (
                <span>Following</span>
              ) : (
                <span>+ Follow</span>
              )}
            </button>
          </div>
        </div>
        <div className="mt-3 mb-2">
          {post.tags?.map((tag) => (
            <span className="pl-0 px-2 py-1 text-sm text-blue-600 text-xl mr-1">
              #{tag}
            </span>
          ))}
        </div>
        <div className="mb-2">
          <p className="text-lg text-slate-800">{post.textContent}</p>
        </div>
        {post.imageContent && (
          <img
            src={post.imageContent}
            alt="post image"
            className="w-full cursor-pointer"
          />
        )}
        <div className="flex justify-between items-center gap-4 p-2">
          <div className="flex gap-2 rounded-[10px] cursor-pointer justify-between p-3 items-center hover:bg-gray-200">
            <img
              src={likeImg}
              alt="profile-image"
              className="cursor-pointer w-[20px] h-[20px]"
              onClick={handleLike}
            />
            {post?.likes?.length > 0 && (
              <p className="text-md text-slate-800">
                {post.likes[0].firstName}{" "}
                {post?.likes?.length > 1 &&
                  `and ${post?.likes?.length - 1} others`}
              </p>
            )}
          </div>
          <div className="flex gap-2 rounded-[10px] cursor-pointer justify-between p-3 items-center hover:bg-gray-200">
            <img
              src={commentImg}
              alt="profile-image"
              className="cursor-pointer w-[20px] h-[20px]"
            />
            <p className="text-md text-slate-800">
              {post.comments?.length} Comment
            </p>
          </div>
        </div>
        <div>
          <div>Comments({post?.comments?.length})</div>
          <div className="comment-form">
            <Formik
              className="space-y-4 md:space-y-6"
              initialValues={{ comment: "" }}
              onSubmit={async (values, actions) => {
                handleComment(values.comment);
                actions.resetForm({
                  values: { comment: "" },
                });
              }}
              validationSchema={commentValidation}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                setFieldValue,
              }) => (
                <Form className="w-[450px]">
                  <div className="my-3">
                    <label
                      htmlFor="commentContent"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Add your comment:
                    </label>
                    <Field
                      as="textarea"
                      placeholder="Comment content here"
                      name="comment"
                      onChange={(e) => {
                        setFieldValue("comment", e.target.value);
                      }}
                      className="h-[100px] bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-purple-600 focus:border-purple-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                    <ErrorMessage
                      name="comment"
                      component="div"
                      className="text-red-500 text-sm"
                    />
                  </div>
                  <div className="mt-2">
                    <button
                      type="submit"
                      className="rounded-md py-2 px-4 bg-purple-600 hover:bg-purple-600 text-white"
                    >
                      Comment
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
          <div className="mt-6 flex flex-col gap-3">
            {post?.comments?.map((comment, id) => (
              <div key={id} className="flex gap-2 items-start">
                <span className="w-[35px] h-[35px] rounded-full">
                  <img
                    src={comment?.userId.imageUrl || photoImg}
                    alt=""
                    className="rounded-full"
                  />
                </span>
                <div className="bg-gray-100 py-1 px-3 rounded-md">
                  <div>
                    <p className="font-medium text-sm capitalize">
                      {comment?.userId.firstName}
                    </p>
                  </div>
                  <span className="text-sm text-gray-600">
                    {moment(
                      new Date(comment?.createdAt).toISOString()
                    ).fromNow()}
                  </span>
                  <p className="text-sm"> {comment?.comment}</p>{" "}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostDetail;
