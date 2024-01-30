import Button from "./components/Elements/Button";

function App() {
  return (
    <>
      <div className="flex justify-center bg-blue-300 min-h-screen items-center">
        <div className="flex gap-x-3">
          <Button variant="bg-red-500">ayam</Button>
          <Button variant="bg-black">ikan</Button>
          <Button>kambing</Button>
        </div>
      </div>
    </>
  );
}

export default App;
