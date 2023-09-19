import React, { useState } from "react";

const Nav = ({loadUser}) => {
 
const [isclose , setIsClose] = useState(true)

const btns = document.getElementById('closeBtn') 
const listLayout = document.getElementById('list')
const closebtn = () => {
  setIsClose(false)
  btns.addEventListener('click',() => {
  listLayout.style.display = "none"
})
}

// const closebtn = () => {
//   const btns = document.getElementById('closeBtn') 
//   const listLayout = document.getElementById('list');
//   if (listLayout) {
//     btns.addEventListener('click', () => {
//       listLayout.style.display = "none";
//     });
//   }
// };

  return (
    <>
      <nav>
        <div className="flex">
            <h1>FetchingData</h1>  
            <button onClick={loadUser} class="btn " id="openBtn">Get User</button> 
            <button onClick={closebtn} class="btn-close " id="closeBtn"></button> 
        </div>
      </nav>
    </>
  );
};

export default Nav;
