import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";

export default function App() {
  return (
    <Router>
      <div className="flex flex-col justify-around h-screen">
        <Navbar />
        <main>Content</main>
      </div>

      <h1 className="text-3xl bg-purple-500 text-white">Hello world!</h1>
      <button className="btn"> Click</button>
    </Router>
  );
}
