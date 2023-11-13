import React, { useEffect, useState } from "react";
import { LeftSide, RightSide } from "./SideComponents";
import PostDetail from "./PostDetail";
import FreelancerHeader from "../../Header/Header";
import { useParams } from "react-router-dom";
import axios from "axios";
import { BaseURL } from "../../../../../services/constants/Constants";
import { ToastContainer, toast } from "react-toastify";

const PostDetailPage = () => {
  const token = localStorage.getItem("token");
  const [user, setUser] = useState({});
  const { postId } = useParams();
  const [post, setpost] = useState({});
  const notify = (message, type) =>
    toast(message, {
      type,
    });

  // get single post
  const getSinglePost = async () => {
    try {
      const res = await axios.get(BaseURL + `social/${postId}`);
      setpost(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  // get user info
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

  // follow
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
      console.log(error);
      const errorMessage =
        error?.response?.data?.message || "Server Error pleasr try again";
      notify(errorMessage, "error");
    }
  };

  // like
  const handleLike = async () => {
    try {
      const res = await axios.put(
        BaseURL + "social/like/" + post._id,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (res.status === 200) {
        notify(res.data.message || "Liked", "success");
        getUser();
        getSinglePost();
      }
    } catch (error) {
      console.log(error);
      const errorMessage =
        error?.response?.data?.message || "Server Error pleasr try again";
      notify(errorMessage, "error");
    }
  };

  //comment
  const handleComment = async (comment) => {
    try {
      const res = await axios.put(
        BaseURL + "social/comment/" + post._id,
        {
          comment,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (res.status === 200) {
        notify(res.data.message || "Commented", "success");
        getUser();
        getSinglePost();
      }
    } catch (error) {
      console.log(error);
      const errorMessage =
        error?.response?.data?.message || "Server Error pleasr try again";
      notify(errorMessage, "error");
    }
  };

  useEffect(() => {
    getSinglePost();
    getUser();
  }, [postId]);
  return (
    <div className="w-full h-full mt-[50px] px-[50px] py-8">
      <FreelancerHeader selectedNav={1} />
      <div className="md:flex gap-5 justify-between">
        <div className="lg:fixed lg:w-[250px] top-[100px] left-[50px]">
          <LeftSide />
        </div>

        <div className="w-full relative left-[290px] top-[20px]">
          <PostDetail
            post={post}
            handleComment={handleComment}
            handleLike={handleLike}
            handlFollow={handlFollow}
            user={user}
          />
        </div>
        <div className="lg:fixed lg:w-1/4  top-[100px] right-[20px] ">
          {" "}
          <RightSide />
        </div>
        <ToastContainer />
      </div>
    </div>
  );
};

export default PostDetailPage;
