import Suggest from "./suggest";
import Editor from "./components/Editor";

const App = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-blue-300">
      <Suggest />
      <Editor
        onChange={(value) => {
          // TODO: update document
          console.log(value);
        }}
        initialContent="Hello Brainlight!"
        editable={true}
      />
    </main>
  );
};

export default App;
