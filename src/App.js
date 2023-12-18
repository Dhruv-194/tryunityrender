import React, { useState } from "react";
import { Unity, useUnityContext } from "react-unity-webgl";


function App() {

  const { unityProvider } = new useUnityContext({
    loaderUrl: "/Build/Build.loader.js",
    dataUrl: "/Build/Build.data",
    frameworkUrl: "/Build/Build.framework.js",
    codeUrl: "/Build/Build.wasm",
  });

  const [isOpen, setIsOpen] = useState(false);
  var buttonText  = isOpen ? "End Game" : "Start Game";

  return (

    <div className="Game">
      {/* {isOpen ? <div><Unity unityProvider={unityProvider} style={{ width: 800, height: 600, visibility: isOpen ? "visible" : "hidden"}} /></div> : <div><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQoqRS3IkWImlGbaAgyj0VhRPyno8LAVhlEmeG9Lu37Q&s"></img></div> } */}
      <Unity unityProvider={unityProvider} style={{ width: 800, height: 600, visibility: isOpen ? "visible" : "hidden"}} />
        <button onClick={()=>setIsOpen(!isOpen)}>{buttonText}</button>
    </div>
    
  );
}

export default App;