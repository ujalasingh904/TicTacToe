import React from 'react'
import '../style/tictactoe.css'
import {useState, useRef} from 'react'
import image1 from '../images/cross.png'
import image2 from '../images/circle.png'

let data = ["","","","","","","","","",];
export const TicTacToe = () => {


   let [count, setCount] = useState(0);
   let [lock, setlock] = useState(false);

   let titleref = useRef(null);
   let box1 = useRef(null)
   let box2 = useRef(null)
   let box3 = useRef(null)
   let box4 = useRef(null)
   let box5 = useRef(null)
   let box6 = useRef(null)
   let box7 = useRef(null)
   let box8 = useRef(null)
   let box9 = useRef(null)
   
   let box_array = [box1,box2,box3,box4,box5,box6,box7,box8,box9]

   let status;
   const toggle =(e,num)=>{
       if(lock){ 
        return 0;
       }
       
       if((count%2===0)){
           status = "NEXT PLAYER IS X";
           e.target.innerHTML = `<img src ='${image1}' >`;
           
           setCount(++count);   
           data[num]="X";
        }
        else{
            status = "NEXT PLAYER IS O";
           e.target.innerHTML = `<img src ='${image2}'>`;
           setCount(++count);
           data[num]="O";
       }
       checkwin();
   }

   const checkwin=()=>{
     const coins =[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
     ];

     for (let i = 0; i < coins.length; i++) {
        const [a,b,c] = coins[i];
        if(data[a]!=="" && data[a]===data[b] && data[a]===data[c]){
            won(data[a]);
            break;
        }
        else{
            const fill = data.every(Element=>Element!=="");

            if(fill){
                titleref.current.innerHTML = `Match Tied..Please start a new <span>Game</span>`;
                setlock(true);
            }
            
        }
     }
    }

   const won=(winner)=>{
        setlock(true);
        if(winner==="X"){
           titleref.current.innerHTML = `Congratulations:  <img src='${image1}'>  you have Won`
        }
        else{
            titleref.current.innerHTML = `Congratulations: <img src='${image2}'> you have Won`

        }
   }
   
   const reset=()=>{
        setlock(false);
        data = ["","","","","","","","","",];
        titleref.current.innerHTML = `Welcome to TicTacToe Game in <span>React</span>`
        box_array.map((e)=>{
           e.current.innerHTML="";
        })
        setCount(0);
    }
     
    if(count%2==0){
        status = "NEXT PLAYER IS X"
    }
    else{
        status = "NEXT PLAYER IS O"

    }

  return (
        <div className="main">

            <h1 className="heading" ref={titleref} >Welcome to TicTacToe Game in <span>React</span></h1>
            <div className="status">{status}</div>
            <div className="board">
                <div className="row1">
                    <div id="boxes" ref={box1} onClick={(e)=>{toggle(e,0)}}></div>
                    <div id="boxes" ref={box2} onClick={(e)=>{toggle(e,1)}}></div>
                    <div id="boxes" ref={box3} onClick={(e)=>{toggle(e,2)}}></div>              
                </div>
                <div className="row2">
                    <div id="boxes" ref={box4} onClick={(e)=>{toggle(e,3)}}></div>
                    <div id="boxes" ref={box5} onClick={(e)=>{toggle(e,4)}}></div>
                    <div id="boxes" ref={box6} onClick={(e)=>{toggle(e,5)}}></div>
                </div>
                <div className="row3">
                    <div id="boxes" ref={box7} onClick={(e)=>{toggle(e,6)}}></div>
                    <div id="boxes" ref={box8} onClick={(e)=>{toggle(e,7)}}></div>
                    <div id="boxes" ref={box9} onClick={(e)=>{toggle(e,8)}}></div>
                </div>
            </div>
            
            <button className="reset" onClick={()=>reset()}>Reset</button>
            <div className="para">
                <p >
                   Copyright © 2023 CarryOn. All rights reserved | Design by <b>Ujala Singh</b>
                </p>
            </div>
        </div>
    
  )
}
