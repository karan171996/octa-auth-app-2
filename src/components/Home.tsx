import React, {useState} from 'react';
import { useAuth0 } from "@auth0/auth0-react";


const Home = () => {
    const [count, setCount] = useState(0);

    const {
        user,
        isAuthenticated,
        loginWithRedirect,
        logout,
      } = useAuth0();


    return (
        <>
            <div>
            <a href="https://vitejs.dev" target="_blank">
                {/* <img src={viteLogo} className="logo" alt="Vite logo" /> */}
            </a>
            <a href="https://react.dev" target="_blank">
                {/* <img src={reactLogo} className="logo react" alt="React logo" /> */}
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
            {
                isAuthenticated 
                ? <button onClick={() => logout({logoutParams: {returnTo: window.location.origin }})}>Logout</button>
                :  <button onClick={() => loginWithRedirect()}>
                Login
            </button>
            }
        </>
    )
}
export default Home;
