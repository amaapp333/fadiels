import Counter from "~/components/Counter";
import "./index.css";

export default function Home() {
  return (
    <main>
      <h1>Fadiel's News!</h1>
      <Counter />
      <p>
        Visit{" "}
        <a href="https://fadiels.vercel.app/privacy" target="_blank">
          fadiel.vercel
        </a>{" "}
        to learn how to build Solid apps.
      </p>
    </main>
  );
}
