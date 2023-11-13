import React, { useEffect, useState } from "react";
import Editor from "../codeeditor/Editor";
import axios from "axios";

const ProjectDetailBody = ({ setContent, loadedContent, content }) => {
  return (
    <div>
      <Editor loadedContent={loadedContent} setContent={setContent} content={content} />
    </div>
  );
};

export default ProjectDetailBody;
