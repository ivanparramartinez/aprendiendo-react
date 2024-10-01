/* import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
 */
import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";
import { useState } from "react";

const users = [
  {
    userName: "midudev",
    name: "Miguel Ángel Durán",
    isFollowing: false,
  },
  {
    userName: "shakira",
    name: "Shakira",
    isFollowing: true,
  },
  {
    userName: "beyonce",
    name: "Beyoncé",
    isFollowing: false,
  },
];

export function App() {
  const formatUserName = (userName) => `@${userName}`;
  const [name, setName] = useState("midudev");

  // const formattedUserName = <span>@midudev</span>;

  return (
    <section className="App">
      {/* <TwitterFollowCard
        userName="ivanparra"
        name="Ivan Parra"
        isFollowing={true}
      /> */}
      {/* <TwitterFollowCard
        userName="shakira"
        name="Shakira"
        isFollowing
        // formattedUserName={formattedUserName}
      />
      <TwitterFollowCard
        userName="ivanparra"
        name="Ivan Parra"
        isFollowing={true}
        // formattedUserName={formattedUserName}
      /> */}
      {/* <TwitterFollowCard userName={name}>
        <strong>Miguel Ángel Durán</strong>
        Incluso otras cosas
      </TwitterFollowCard>  
      <TwitterFollowCard userName="shakira" initialIsFollowing>
        <strong>Shakira</strong>
        Incluso otras cosas
      </TwitterFollowCard> */}
      {/* {users.map((user) => {
        const { userName, name, isFollowing } = user;
        return (
          <TwitterFollowCard
            key={userName}
            userName={userName}
            initialIsFollowing={isFollowing}
            formatUserName={formatUserName}
          >
            <strong>{name}</strong>
          </TwitterFollowCard>
        );
      })} */}
      {users.map(({ userName, name, isFollowing }) => (
        <TwitterFollowCard
          key={userName}
          userName={userName}
          initialIsFollowing={isFollowing}
          formatUserName={formatUserName}
        >
          <strong>{name}</strong>
        </TwitterFollowCard>
      ))}

      <button onClick={() => setName("beyonce")}>Cambio nombre</button>
    </section>
  );
}
