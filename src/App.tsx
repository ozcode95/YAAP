import { useState } from "react";
import { invoke } from "@tauri-apps/api/core";
import { pyInvoke } from "tauri-plugin-pytauri-api";
import "./App.css";

function App() {
  const [greetMsg, setGreetMsg] = useState("");
  const [name, setName] = useState("");

  async function greet() {
    // Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
    const rsGreeting = await invoke<string>("greet", { name });
    // Learn more about PyTauri commands at https://pytauri.github.io/pytauri/latest/usage/concepts/ipc/
    const pyGreeting = await pyInvoke<string>("greet", { name });
    setGreetMsg(rsGreeting + "\n" + pyGreeting);
  }

  return (
    <main className="container">
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </main>
  );
}

export default App;
