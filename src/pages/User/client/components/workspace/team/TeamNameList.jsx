import React from "react";

const TeamNameList = ({ members }) => {
  return (
    <div className="flex flex-col gap-y-2">
      {members.map((user, id) => (
        <div className="flex gap-x-2 items-center">
          <span className="w-[10px] h-[10px] rounded-[5px] bg-green-400"></span>
          <p className="text-sm">{user.workerId.email}</p>
        </div>
      ))}
    </div>
  );
};

export default TeamNameList;
