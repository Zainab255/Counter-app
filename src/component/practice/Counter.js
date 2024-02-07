import React, { useState } from "react";

const Counter = () => {
  const [state, setState] = useState({
    count: 0,
    userSetCount: 0,
    showSetting: false,
    settingBgColor: "rgb(3, 141, 141)",
  });

  const Increment = () => {
    setState((prevState) => ({
      ...prevState,
      count: prevState.count + 1,
    }));
  };

  const Decrement = () => {
    setState((prevState) => ({
      ...prevState,
      count: prevState.count - 1,
    }));
  };

  const Reset = () => {
    setState({
      ...state,
      count: 0,
    });
  };

  const handleSetCountChange = (event) => {
    setState({
      ...state,
      userSetCount: parseInt(event.target.value),
    });
  };

  const setCountManually = () => {
    setState({
      ...state,
      count: state.userSetCount,
      userSetCount: 0,
    });
  };

  const toggleSetting = () => {
    setState((prevState) => ({
      ...prevState,
      showSetting: !prevState.showSetting,
    }));
  };

  const applySetting = () => {
    toggleSetting(); 
  };

  const handleColorClick = (color) => {
    document.body.style.backgroundColor = color; 
    setState({
      ...state,
      settingBgColor: color,
    });
  };

  const Setting = () => {
    return (
      <div>
        <button>
          <input
            type="number"
            value={state.userSetCount}
            onChange={handleSetCountChange}
            style={{ width: "100px", height: 50 , color: 'black',}}
          />
          <button
          className="btn"
          onClick={setCountManually}
          style={{ height: 50, width: "100px" ,}}
        >
          Set Count
        </button>
        </button>
        <br/>
        <br/><br/>
        <ColorPicker
          selectedColor={state.settingBgColor}
          onColorClick={handleColorClick}
        />
        <button
          className="btn"
          onClick={applySetting}
          style={{ height: 40, width: "100px" , float : 'left', }}
        >
          Apply 
        </button>
      </div>
    );
  };

  return (
    <div className="card1">
      <div className="bd" style={{ backgroundColor: state.settingBgColor }}>
        {state.showSetting ? (
          <div style={{display : 'flex' ,}}>
            <img src='./back3.gif' onClick={toggleSetting} style={{ height: 50, width: 50, marginRight: '10px',}} />
            <Setting />
          </div>
        ) : (
          <>
           <div  style={{display : 'flex',}}><img
              src="./setting3.png"
              alt="setting3"
              style={{ height: 50, width: 50, cursor: "pointer", }}
              onClick={toggleSetting}
            />
            </div><br/><br/><br/>
            
            <h1
              style={{
                fontSize: 72,
                fontWeight: 700,
              }}
            >
              COUNTER APP
            </h1><br/><br/><br/>
            <h4>{state.count}</h4><br/><br/><br/><br/>
            
            <img src='./minus3.png' className="btn" 
              onClick={Decrement}
              style={{ height: 90, width: 90 , border : 'none', marginRight : '10px',}}
            />
            
            <img
              src='./reset3.png'
              alt='reset2' className="btn"
              onClick={Reset}
              style={{ height: 90, width: 90, border : 'none',}}
            />
            <img src='./plus3.png' className="btn" 
              onClick={Increment}
              style={{ height: 90, width: 90 , border : 'none',}}
            />
            <br />
            <br />
            <br />
            <br />
            <br />
          </>
        )}
      </div>
    </div>
  );
};
const ColorPicker = ({ selectedColor, onColorClick }) => {
  const colorList = [
      "#ff00ff","#00ffff","#ff4000","#ff8000","#ffbf00",'pink','grey','orange','silver'
  ];

  return (
    <div>
      <h2 style={{textAlign : 'left', fontSize : 22,}}>Change Background-Color</h2><br/>
      <div style={{ display: "flex" , backgroundColor : "black",}}>
        {colorList.map((color, index) => (
          <div
            key={index}
            style={{
              width: "30px",
              height: "30px",
              backgroundColor: color,
              margin: "5px",
              cursor: "pointer",
            }}
            onClick={() => onColorClick(color)}
          />
        ))} 
      </div>
    </div>
  );
};

export default Counter;
