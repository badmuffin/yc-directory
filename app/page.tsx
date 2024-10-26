import Hello from "./components/hello";

export default function Home() {
  console.log("hey from server");
  return (
    <>
      <h1 className=" text-3xl">Hello</h1>
      <Hello /> 
    </>
  );
}
