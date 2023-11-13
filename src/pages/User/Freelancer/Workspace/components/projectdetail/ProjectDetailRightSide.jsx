import React, { useState } from "react";
import axios from "axios";
import { BaseURL } from "../../../../../../services/constants/Constants";
import { ToastContainer, toast } from "react-toastify";

const ProjectDetailRightSide = ({projectId, projectName, content, fileName}) => {
  const [commit, setCommit] = useState(true);
  const [push, setPush] = useState(false);
  const [commitMessage, setCommitMessage] = useState('');

  const handleCommit = () => {
    setCommit(!commit);
    setPush(!push);
    notify('Committed Successfully', 'success');
  };
  const handlePush = () => {
    setCommit(true);
    setPush(false);
    updateFile();
    notify("Pushed Successfully", "success");
  };
  const notify = (message, type) =>
    toast(message, {
      type,
    });
  const updateFile = async () => {
    
    let file = new File([content], fileName, { type: "text/plain" });
    const response = await axios.put(
        `${BaseURL}workspaces/projects/${projectId}/uploadFiles`,
        {
          projectName,
          commitMessage,
          workerId: JSON.parse(localStorage.getItem("user"))["_id"],
          file
        },
        {
          headers: {
            "Content-Type": "multipart/form-data"
          },
        }
      );
      return response;
  }
  return (
    <div className="w-1/4 p-2 flex flex-col items-center gap-2 ">
      <textarea
        type="text"
        placeholder="Commit message"
        onChange={(e) => setCommitMessage(e.target.value)}
        className="rounded-md focus:border-purple-50 border-purple-50"
      />
      {commit == true ? (
        <button
          onClick={handleCommit}
          className="bg-purple-500 hover:bg-purple-700 w-full rounded-md text-white text-lg text-semibold py-2"
        >
          Commit
        </button>
      ) : (
        <button
          onClick={handlePush}
          className="bg-purple-500 hover:bg-purple-700 w-full rounded-md text-white text-lg text-semibold py-2"
        >
          Push
        </button>
      )}
      <ToastContainer />
    </div>
  );
};

export default ProjectDetailRightSide;
