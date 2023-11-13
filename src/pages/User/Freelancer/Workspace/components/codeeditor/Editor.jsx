import { useEffect, useState } from "react";
import AceEditor from "react-ace";

// import mode-<language> , this imports the style and colors for the selected language.
import "ace-builds/src-noconflict/mode-javascript";
// there are many themes to import, I liked monokai.
import "ace-builds/src-noconflict/theme-monokai";
// this is an optional import just improved the interaction.
import "ace-builds/src-noconflict/ext-language_tools";
import "ace-builds/src-noconflict/ext-beautify";
import axios from "axios";

function Editor({loadedContent, setContent, content}) {
  useEffect(() => {
    const getFileContent = async () => {
      const response = await axios.get(
        `https://cors-anywhere.herokuapp.com/${loadedContent.download_url}`,
        //loadedContent.download_url,
        {
          headers: {
            Accept: "application/vnd.github.v3.raw",
            Authorization: "Bearer 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",
          },
        }
      );
      return response;
    };

    if (loadedContent) {
      getFileContent().then((value) => {
        console.log(value.data);
        setContent(value.data);
      });
    }
  }, [loadedContent]);

  return (      
    <AceEditor
      className="h-screen bg-slate-900 text-gray-100"
      style={{
        width: "100%",
      }}
      placeholder="Start Coding"
      mode="javascript"
      theme="ace"
      name="basic-code-editor"
      onChange={(currentCode) => setContent(currentCode)}
      fontSize={18}
      showPrintMargin={true}
      showGutter={true}
      highlightActiveLine={true}  
      value={content}
      setOptions={{
        enableBasicAutocompletion: true,
        enableLiveAutocompletion: true,
        enableSnippets: true,
        showLineNumbers: true,
        tabSize: 4,
      }}
    />
  );
}

export default Editor;
