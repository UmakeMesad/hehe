import './index.css';
import React, {useState,useEffect,useRef} from 'react';
import Create from './create'
import notification from '../src/img/notification.svg'
import user from '../src/img/user.svg'


function App() {
  const [openModal, setOpenModal] = useState(false);
  const [open,setOpen] =useState(false);
  
  let menuRef = useRef();
  useEffect(()=>{

    let handle =(e) =>{
      if(!menuRef.current.contains(e.target)){
        setOpen(false);
        console.log(menuRef.current);
      }
    };

    document.addEventListener("mousedown",handle);
    return() =>{
      document.removeEventListener("mousedown",handle);
    }
  });

function show_noti(){
  var noti = document.getElementById("notification-dropdown-container");
  document.getElementById("user-dropdown-container").style.display = "none";
  if(noti.style.display == "none"){
    noti.style.display = "block";
  }
  else{
    noti.style.display = "none";
  }
}

function show_user(){
  var user = document.getElementById("user-dropdown-container");
  document.getElementById("notification-dropdown-container").style.display = "none";
  if(user.style.display == "none"){
    user.style.display = "block";
  }
  else{
    user.style.display = "none";
  }
}

function show_search(){
  var search = document.getElementById("search-dropdown-menu");
  if(search.style.display == "none"){
    search.style.display = "block";
  }
  else{
    search.style.display = "none";
  }
}

function hide_dropdown(){
  
  document.getElementById("notification-dropdown-container").style.display = "none";
  document.getElementById("user-dropdown-container").style.display = "none";
  document.getElementById("search-dropdown-menu").style.display = "none";

}



return(
<div className="container">

        <div className="nav" >

            <div className="logo"><b>Upro</b></div>

            <div className="search-container">
                <input onClick={show_search} type="search" placeholder="Search"/>
                <div id='search-dropdown-menu' className="search-dropdown-menu">
                   <p>Type to search</p>
                </div>
            </div>

            <div className="notification">
                <img src ={notification} onClick={show_noti}/>
                <div id="notification-dropdown-container">
                  <div id='notification-dropdown-menu' className="notification-dropdown-menu">
                      <a>placeholder</a>
                      <a>placeholder</a>
                      <a>placeholder</a>
                  </div>
                  
                </div>
            </div>  

            <div className="user">
                <img src ={user} onClick={show_user}/>
                <div id="user-dropdown-container">
                  <div className="user-dropdown-menu">
                                        <a>Your Profile</a>
                                        <a>Setting</a>
                                        <a>Sign out</a>
                  </div>
                </div>
            </div>
        </div>

        <div className="workspace" onClick={hide_dropdown}>
          <b>Your work</b>
          <p>Recent project</p>
        
          <div className="project-card-container">


{/* card */}
              <div className="project-card">
                <div className="project-card-header">
                  <div className="project-card-color-tag"></div>
                  <p>Group project 2022 - 2023</p>
                </div>
                <div className="project-card-body-01">
                  <p>My issues</p>
                  <div className="project-card-my-issues-number">
                    19
                  </div>
                </div>
                <div className="project-card-body-02">
                  <p>Done issues</p>
                  <div className="project-card-done-issues-number">
                    100
                  </div>
                </div>
                
                <div className="project-card-footer">
                  <button>Setting</button>
                </div>
              </div>
{/* card */}

{/* card */}
              <div className="project-card">
                <div className="project-card-header">
                  <div className="project-card-color-tag"></div>
                  <p>Group project 2022 - 2023</p>
                </div>
                <div className="project-card-body-01">
                  <p>My issues</p>
                  <div className="project-card-my-issues-number">
                    19
                  </div>
                </div>
                <div className="project-card-body-02">
                  <p>Done issues</p>
                  <div className="project-card-done-issues-number">
                    100
                  </div>
                </div>
                
                <div className="project-card-footer">
                  <button>Setting</button>
                </div>
              </div>
{/* card */}

              
          </div>
        </div>
        <div className="footer">
            <button onClick={()=>setOpenModal(true)}>Create New Project</button>
            <Create 
            open ={openModal}
            onClose={()=>setOpenModal(false)}/>
        </div>
    </div>
  );
}
export default App;