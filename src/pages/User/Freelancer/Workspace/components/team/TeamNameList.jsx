import React from "react";

const TeamNameList = ({ teams }) => {
  return (
    <div className="flex flex-col gap-y-2">
      {teams &&
        teams.map((team, id) => (
          <div className="flex gap-x-2 items-center">
            <span className="w-[10px] h-[10px] rounded-[5px] bg-green-400"></span>
            <p className="text-sm">{team.email}</p>
          </div>
        ))}
    </div>
  );
};

export default TeamNameList;
