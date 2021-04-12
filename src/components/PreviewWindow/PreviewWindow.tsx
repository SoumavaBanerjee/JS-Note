import { PreviewWindowInterface } from "../../interfaces/index";
import { useRef, useEffect } from "react";

const executableScript = `<html>
  <head></head>
  <body>
  <div id="root"></div>
  <script>
  window.addEventListener('message', () => {
    try{
      eval(event.data);
      console.log(event.data);
    }catch(error){
      document.querySelector("#root").innerHTML = '<div style="color: red"><h1>Runtime Error:</h1> <p>' + error + '</p></div>'
    }
  }, false);
  </script>
  </body>
  </html>`;

const PreviewWindow: React.FC<PreviewWindowInterface> = ({ code }) => {
  const iframeRef = useRef<any>();

  //   Upon change in code, refresh window and execute the script

  useEffect(() => {
    //   Not working currently
    // iframeRef.current.srcdoc = executableScript;
    iframeRef.current.contentWindow.postMessage(code, "*");
  }, [code]);
  return (
    <iframe
      ref={iframeRef}
      sandbox="allow-scripts"
      srcDoc={executableScript}
      style={{
        display: "block",
        background: "white",
        width: "100%",
        height: "100%",
      }}
      title="test"
    />
  );
};

export default PreviewWindow;
