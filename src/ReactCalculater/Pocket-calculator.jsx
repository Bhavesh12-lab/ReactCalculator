
import { useState } from "react";


const Calculater = () =>{

    const [value,setValue] = useState(' ')
   

    const styles = {

        container: {
          display: 'inline-block',
          marginTop: '50px',
          backgroundColor: '#252D44',  // Dark background
          maxHeight: '100vh',  // Full screen height for dark theme effect
          padding: '20px',
          color: '#fff',  // Light text for dark background
          width : '400px',
          border : '2px solid #fff',
          borderRadius : '20px',
          // boxShadow : 'rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;'
          
          
        },
        main:{
          display:"flex",
          flexDirection: 'column',
          alignItems: 'center',
          // backgroundColor:'#160628',
          
        },
        screen: {
            width: '100%',
            height: '80px',
            border: '1px solid #444',  // Darker border
            marginBottom: '20px',
            textAlign: 'right',
            padding: '15px',
            fontSize: '32px',
            backgroundColor: '#181f32',  // Dark background for the screen
            color: '#fff',  // Light text on screen
            borderRadius:'10px'
          },
          button: {
            padding: '20px',
            fontSize: '18px',
            borderRadius: '5px',
            cursor: 'pointer',
            border: 'none',
            transition: 'background-color 0.3s ease',
          },
          buttonHover: {
            backgroundColor: '#555',  // Lighter hover effect for buttons
          },
          buttonOperator: {
            padding: '20px',
            fontSize: '18px',
            borderRadius: '5px',
            cursor: 'pointer',
            border: 'none',
            backgroundColor: '#647299',  // Orange color for operators
            color: '#fff',  // Light text on operator buttons
            transition: 'background-color 0.3s ease',
          },
          buttonEqual: {
            // padding: '20px',
            // fontSize: '18px',
            // borderRadius: '5px',
            cursor: 'pointer',
            border: 'none',
            backgroundColor: '#007bff',  // Blue color for equal button
            color: '#fff',  // Light text on equal button
            transition: 'background-color 0.3s ease',
            
          },
          buttonClear: {
            // padding: '20px',
            // fontSize: '18px',
            // borderRadius: '5px',
            cursor: 'pointer',
            border: 'none',
            backgroundColor: '#ff4040',  // Red color for clear button
            color: '#fff',  // Light text on clear button
            transition: 'background-color 0.3s ease',
        },
        
       
    };
    
    // button click Event
    const handleClick = (e) =>{

      setValue(value+e.target.innerHTML)
    }

    // operator perform click
    	
    const equalValue = () =>{

      setValue(eval(value))
    }

    // clear value click

    const clear = () =>{
      setValue("")
    }

    // removeBackValue click

    const removeBackValue = () =>{
      setValue(value.toString().slice(0,-1))
    }
      return(
          
        <div style={styles.main}>
        <div style={styles.container}>
          <input style={styles.screen} type="text" placeholder="" value={value} />
              <div className="grid-container">

    <button style={styles.button} className="button-85" onClick={handleClick}>1</button>

    <button style={styles.button} className="button-85" onClick={handleClick}>2</button>

    <button style={styles.button} className="button-85" onClick={handleClick}>3</button>

    <button style={styles.buttonOperator} onClick={handleClick}>+</button>

    <button style={styles.button} className="button-85" onClick={handleClick}>4</button>

    <button style={styles.button} className="button-85" onClick={handleClick}>5</button>

    <button style={styles.button} className="button-85" onClick={handleClick}>6</button>

    <button style={styles.buttonOperator} onClick={handleClick}>-</button>

    <button style={styles.button} className="button-85" onClick={handleClick}>7</button>

    <button style={styles.button} className="button-85" onClick={handleClick}>8</button>

    <button style={styles.button} className="button-85" onClick={handleClick}>9</button>

    <button style={styles.buttonOperator} onClick={handleClick}>*</button>

    <button style={styles.button} className="button-85" onClick={handleClick}>0</button>

    <button style={styles.buttonClear} onClick={clear}>C</button>

    <button style={styles.button} className="button-85" onClick={handleClick}>.</button>

    <button style={styles.buttonOperator} onClick={handleClick}>/</button>

    <button style={styles.button} className="button-85" onClick={removeBackValue}>←</button>

    <button style={styles.buttonEqual} onClick={equalValue}>=</button>
  </div>
</div>
</div>
      )
  }

export default Calculater;