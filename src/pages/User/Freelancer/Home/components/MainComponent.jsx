import React, { useEffect, useState } from "react";
import "./style.css";
import photoImg from "../../../../../assets/images/photo.png";
import audioImg from "../../../../../assets/images/audio.png";
import contentImg from "../../../../../assets/images/blog.png";
import likeImg from "../../../../../assets/images/like.png";
import videoImg from "../../../../../assets/images/video.png";
import commentImg from "../../../../../assets/images/comment.png";
import axios from "axios";
import AddPostMOdal from "./AddPostModal";
import { BaseURL } from "../../../../../services/constants/Constants";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const MainComponent = () => {
  const [posts, setPosts] = useState([]);
  const [user, setUser] = useState({});
  const token = localStorage.getItem("token");

  const notify = (message, type) =>
    toast(message, {
      type,
    });

  const getAllPosts = async () => {
    try {
      const res = await axios.get(BaseURL + "social");
      setPosts(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getAllPosts();
    getUser();
  }, []);

  const getUser = async () => {
    try {
      const res = await axios.get(BaseURL + "users/profile", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (res.status === 200) {
        setUser(res.data.user);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handlFollow = async (otherUserId) => {
    try {
      const res = await axios.put(
        BaseURL + "social/connections/addConnection",
        {
          otherUserId,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (res.status === 200) {
        notify(res.data.message || "Added to your collection", "success");
        getUser();
      }
    } catch (error) {
      const errorMessage =
        error?.response?.data?.message || "Server Error pleasr try again";
      notify(errorMessage, "error");
    }
  };

  const handleLike = async (post) => {
    try {
      const res = await axios.put(BaseURL + "social/like/" + post._id, null, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (res.status === 200) {
        notify(res.data.message || "Liked", "success");
        getAllPosts();
      }
    } catch (error) {
      const errorMessage =
        error?.response?.data?.message || "Server Error pleasr try again";
      notify(errorMessage, "error");
    }
  };

  return (
    <div className="main-content w-full">
      <div className="post-content w-full bg-white shadow-sm rounded-lg shadow-gray-300">
        <div className="flex justify-center items-center gap-4 px-5 py-2">
          <AddPostMOdal
            buttonText={
              <input
                className="hover:bg-gray-300 cursor-pointer md:w-[450px] grow rounded-[40px] border-2 border-slate-400 px-[20px] h-[50px]"
                placeholder="Start a post"
                disabled
              />
            }
          />
        </div>
        <div className="hidden sm:flex justify-between items-center gap-4 p-2">
          <AddPostMOdal
            buttonText={
              <div className="flex gap-2 rounded-[10px] cursor-pointer justify-between p-3 items-center hover:bg-gray-200">
                <img
                  src={photoImg}
                  alt="profile-image"
                  className="cursor-pointer w-[20px] h-[20px]"
                />
                <p className="text-md text-slate-800 capitalize">Photos</p>
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
                <p className="text-md text-slate-800 capitalize">Idea</p>
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
                <p className="text-md text-slate-800 capitalize">Hobby</p>
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
                <p className="text-md text-slate-800 capitalize">
                  create content
                </p>
              </div>
            }
          />
        </div>
      </div>
      <div className="my-3 flex gap-2 justify-between items-center gap-3">
        <div className="grow bg-slate-400 h-[2px]"></div>
      </div>
      {posts?.map((post, id) => (
        <div className="mb-4 p-3 flex gap-2 flex-col post-item bg-white shadow-sm rounded-lg shadow-gray-300">
          <div className="poster-profile flex items-center gap-2">
            <img
              src={post?.user?.imageUrl}
              alt=""
              className="w-[40px] h-[40px] rounded-[20px] cursor-pointer"
            />
            <div className="grow flex justify-between">
              <div className="cursor-pointer flex flex-col gap-0.4">
                <p className="text-md text-slate-900 capitalize">
                  {post?.user?.firstName + " " + post?.user?.lastName}
                </p>
                <p className="text-sm text-slate-600">
                  {post?.user?.bio || "User has no bio"}
                </p>
              </div>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  handlFollow(post?.user?._id);
                }}
                className={`cursor-pointer  font-bold ${
                  user?.connections?.includes(post?.user?._id.toString())
                    ? "text-gray-500"
                    : "text-purple-900"
                }`}
              >
                {user?.connections?.includes(post?.user?._id.toString()) ? (
                  <span>Following</span>
                ) : (
                  <span>+ Follow</span>
                )}
              </button>
            </div>
          </div>
          <div className="mt-2">
            {post.tags.map((tag) => (
              <span className="pl-0 px-2 py-1 text-sm text-blue-600 text-xl mr-1">
                #{tag}
              </span>
            ))}
          </div>
          <Link to={`/feeds/${post._id}`} className="mb-2">
            <p className="text-lg text-slate-800">{post?.textContent}</p>
          </Link>
          <Link to={`/feeds/${post?._id}`} className="">
            <img
              src={post.imageContent}
              alt="post image"
              className="w-full cursor-pointer"
            />{" "}
          </Link>

          <div className="flex justify-between items-center gap-4 p-2">
            <button
              onClick={(e) => {
                e.preventDefault();
                handleLike(post);
              }}
              className="flex gap-2 rounded-[10px] cursor-pointer justify-between p-3 items-center hover:bg-gray-200"
            >
              <img
                src={likeImg}
                alt="profile-image"
                className="cursor-pointer w-[20px] h-[20px]"
              />
              {post?.likes?.length > 0 && (
                <p className="text-md text-slate-800 capitalize">
                  {post.likes[0].firstName}{" "}
                  {post?.likes?.length > 1 &&
                    `and ${post?.likes?.length - 1} others`}
                </p>
              )}
            </button>
            <div className="flex gap-2 rounded-[10px] cursor-pointer justify-between p-3 items-center hover:bg-gray-200">
              <img
                src={commentImg}
                alt="profile-image"
                className="cursor-pointer w-[20px] h-[20px]"
              />
              <Link
                to={`/feeds/${post?._id}`}
                className="text-md text-slate-800"
              >
                {" "}
                {post?.comments?.length} Comment
              </Link>
            </div>
          </div>
        </div>
      ))}
      <ToastContainer />
    </div>
  );
};

export default MainComponent;
