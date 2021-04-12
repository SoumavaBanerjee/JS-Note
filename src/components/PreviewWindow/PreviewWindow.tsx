import { PreviewWindowInterface } from "../../interfaces/index";
import { useRef, useEffect } from "react";

const executableScript = `<html>
  <head></head>
  <body>
  <div id="root"></div>
  <script>
  const handleError = (error) => {
    document.querySelector("#root").innerHTML = '<div style="color: red"><h1>Runtime Error:</h1> <p>' + error + '</p></div>'
  }

  window.addEventListener('error', (event) => {
    event.preventDefault();
    handleError(event.error);
  })

  window.addEventListener('message', () => {
    try{
      eval(event.data);
      console.log(event.data);
    }catch(error){
      handleError(error);
    }
  }, false);
  </script>
  </body>
  </html>`;

const PreviewWindow: React.FC<PreviewWindowInterface> = ({
  code,
  errorMessage,
}) => {
  const iframeRef = useRef<any>();

  //   Upon change in code, refresh window and execute the script
  // 50ms delay for iframe to load up

  useEffect(() => {
    iframeRef.current.srcdoc = executableScript;
    setTimeout(() => {
      iframeRef.current.contentWindow.postMessage(code, "*");
    }, 25);
  }, [code]);

  console.error(errorMessage);

  return (
    <>
      <iframe
        ref={iframeRef}
        sandbox="allow-scripts"
        srcDoc={executableScript}
        style={{
          position: "relative",
          background: "white",
          width: "100%",
          height: "100%",
        }}
        title="test"
      />
    </>
  );
};

export default PreviewWindow;
