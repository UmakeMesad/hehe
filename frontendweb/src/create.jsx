import React from 'react';


const Create = ({ open, onClose }) => {
  if (!open) return null;
  return (

    <div className="overlay">
      <div className="new-project-container">
        
                <div className="new-project-header">
                  <div className="new-project-title">
                    Create yout project
                  </div>
                </div>
                
                <div className="new-project-body">
                  <h1>Project details</h1>
                  <p>You can change these details anytime in your project settings.</p>
                  <div className="newproject-body-mid">

                    <div className="newproject-body-mid-left">
                      <p>Project Name</p>
                      <input type="text" placeholder='Project Name' />
                      <p>Key</p>
                      <div className="key-field">
                        <input type="text" placeholder='Key'/>
                        <button>Generate</button>
                      </div>
                      <p>Project Lead</p>
                      <select name="" id="">
                        <option>Dinh Tuan Cuong</option>
                        <option>Dinh Quang Son</option>
                        <option>Nguyen The Thang</option>
                        <option>Nguyen Hoai Phuong</option>
                      </select>
                    </div>

                    <div className="newproject-body-mid-right">
                      <p>Major</p>
                      <select name="" id="">
                        <option>Information and Communication Technology</option>
                        <option>Computer Science</option>
                      </select>
                      <p>Year</p>
                      <div className="year-field">
                        <input type="number" min="2010" max="2099" step="1" placeholder="From" />
                        -
                        <input type="number" min="2010" max="2099" step="1" placeholder="To"/>
                      </div>
                      
                    </div>

                  </div> 
                  <b>Description</b>
                  <textarea name="" id="" cols="30" rows="10"></textarea>
                </div>
                <div className="new-project-footer">
                  <button onClick={onClose}>Cancel</button>
                  <button>Create</button>
                </div>
            </div>
        </div>

  );
}

export default Create;