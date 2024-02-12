import Suggest from "./suggest";
import dynamic from "next/dynamic";

const Editor = dynamic(() => import("./components/Editor"), { ssr: false });

const App = () => {
  return (
    <div>
      <Suggest />
      <main className="flex min-h-screen flex-col items-left justify-between p-24 bg-blue-300">
        <Editor initialContent="{}" editable={true} />
      </main>
    </div>
  );
};

export default App;
