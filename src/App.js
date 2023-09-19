import React, { useState, useEffect } from "react";
import "./App.css";
import Nav from "./Components/Nav";

const App = () => {
  const [user, setUser] = useState([]);
  const [action, setAction] = useState({
    loading: false,
    success: false,
    error: null,
  });

  const loadUser = async () => {
    const listLayout = document.getElementById("list");
    const open = document.getElementById("openBtn");
    open.addEventListener("click", () => {
      listLayout.style.display = "grid";
    });
    setAction({ ...action, loading: true });
    try {
      const response = await fetch("https://reqres.in/api/users?page=1");
      const jsonresponse = await response.json();
      if (jsonresponse) {
        setTimeout(() => {
          setAction({ ...action, loading: false, success: true });
        }, 500);
        setUser(jsonresponse.data);
      }
    } catch (err) {
      setAction({ ...action, loading: false, success: false, error: err });
      throw err;
    }
  };

  // useEffect(() => {
  //   loadUser()
  // }, []);
  console.log(action);
  console.log(user);
  return (
    <>
      <Nav loadUser={loadUser} />
      <div className="app">
        <h2>User:</h2>

        <ul className="layout" id="list">
          {user.length > 0 && (
            <>
              {action.success ? (
                <>
                  {user.map((item) => (
                    <li>
                      <div className="profile">
                        <img src={item.avatar}></img>
                      </div>
                      <div className="innerDetl">
                        <p className="name">
                          Name : {item.first_name} {item.last_name}
                        </p>
                        <p className="email">Email : {item.email}</p>
                        <p className="phone">ID : {item.id}</p>
                      </div>
                    </li>
                  ))}
                </>
              ) : (
                <>
                  <div className="bottle">Data is loading...</div>
                </>
              )}
            </>
          )}
        </ul>
      </div>
    </>
  );
};
export default App;
