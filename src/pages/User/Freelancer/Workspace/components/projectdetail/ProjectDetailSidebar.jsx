import React from "react";

const ProjectDetailSidebar = ({ trees, setFileIndex }) => {
  return (
    <div className="w-1/4">
      <aside className="sm:block">
        <div className="px-2 overflow-y-auto dark:bg-gray-800">
          {(trees.tree ? trees.tree : [])
            .map((tree, index) => {
              return (
                <p
                  key={index}
                  onClick={() => setFileIndex(index)}
                  className="cursor-pointer text-xl text-slate-800"
                >
                  {tree.path}
                </p>
              );
            })
            .reverse()}
        </div>
      </aside>
    </div>
  );
};

export default ProjectDetailSidebar;
