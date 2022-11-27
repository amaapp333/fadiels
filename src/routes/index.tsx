import Counter from "~/components/Counter";
import "./index.css";

export default function Home() {
  return (
    <main>
      <h1>Steak News!</h1>
      <Counter />
      <p>
        Visit{" "}
        <a href="https://fadiels.vercel.app" target="_blank">
          Fadiel.Vercel.App
        </a>{" "}
        to learn how to build Solid apps.
      </p>
    </main>
  );
}
