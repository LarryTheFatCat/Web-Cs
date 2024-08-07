import NavBar from "./components/NavBar";
import { useRouter } from "next/router";
export default function Home() {
  const router = useRouter();
  return (
    <main>
      <NavBar />
    </main>
  );
}
