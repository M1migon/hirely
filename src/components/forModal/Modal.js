import React from "react";
import "./Modal.css";

export const Modal = ({ isOpen, onClose, imageSrc }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div id ="modalContainer">
            <div id = 'modalHeader'>
                <p id = 'modalTitle'>Adding a license or certificate</p>
                <button className="close-button" onClick={onClose}>x</button>
            </div>
            <div id = 'modalBody'>
                <div id = 'longInput'>
                    <p id = 'InputTitle'>Name</p>
                    <input type="text" className="inputForModal" placeholder="Name"></input>
                </div>  
                <div id = 'longInput'>
                    <p id = 'InputTitle'>Position</p>
                    <input type="text" className="inputForModal" placeholder="Name"></input>
                </div>  
                <div id = 'longInput'>
                    <p id = 'InputTitle'>Organization that issued the certificate</p>
                    <input type="text" className="inputForModal" placeholder="Name"></input>
                </div> 
                <div id = 'togetherRow'>
                  <div id = 'longInput'>
                      <p id = 'InputTitle'>Date of birth</p>
                      <input type="text" className="inputForModal2" placeholder="DD.MM.YYYY"></input>
                  </div>  
                  <div id = 'longInput'>
                      <p id = 'InputTitle'>Your age</p>
                      <input type="text" className="inputForModal2" placeholder="Age"></input>
                  </div>  
                </div>
                <div id = 'longInput'>
                    <p id = 'InputTitle'>About</p>
                    <input type="text" className="inputForModal"></input>
                </div> 
                <div id = 'longInput'>
                    <p id = 'InputTitle'>More information (Links on GitHub etc.)</p>
                    <input type="text" className="inputForModal"></input>
                </div> 
                <div id = 'buttonContainer'>
                    <button className="saveButton" onClick={onClose}>Save</button>
                </div>
            </div>
        </div>

      </div>
    </div>
  );
};
