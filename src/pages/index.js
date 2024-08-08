import NavBar from "./components/NavBar";

export default function Home() {
  return (
    <main>
      <NavBar />
      <h1 className="text-center opacity-80 text-4xl font-bold underline underline-offset-2">
        Welcome, our site is currently under maintenance. 
        <br />
        This is what we have for now. Enjoy!
      </h1>
    </main>
  );
}
