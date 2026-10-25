import { useState } from 'react';

function Square({ colour , moveButton }: { colour: string , moveButton: ()=>void}) { //parent component
  return (
     <button className="square" onClick={moveButton} style={{backgroundColor: colour}}></button>
  );
}

export default function Puzzle() { 
  //initialise array
  const [colours, setColoures] = useState<string[]>([
    '#000', 'white', 'gray', 'white', 'white', 'white', 'white', 'gray',
    'white', 'white', 'gray', 'gray', 'gray', 'gray', 'gray', 'white', 
    'white', 'gray', 'white', 'white', 'white', 'white', 'gray', 'white', 'white'
  ]);

  
  //on square click, only allow movement from orthogonally adjacent squares 
  function handleClick(i:number){
    if(checkSolved(colours) || colours[i] == '#000'){
      return;
    }

    const currentColour:string = colours[i];
    const newColours = colours.slice();
    const rows:number = 5;
    if(colours[i+1] === '#000'){
        newColours[i+1] = currentColour;
    }else if(colours[i-1] === '#000'){
        newColours[i-1] = currentColour;
    }else if(colours[i+rows] === '#000'){
        newColours[i+rows] = currentColour;
    }else if(colours[i-rows] === '#000'){
        newColours[i-rows] = currentColour;
    }else{
       return;
    }
    newColours[i] = '#000';
    setColoures(newColours); //repopulate puzzle grid with the new array after movement
  }
  let status:string = '';
    const solved = checkSolved(colours);
    if (solved) {
      status = 'Solved!';
    }

  function shuffleColours(){ //Fisher-Yates shuffle algorithm to randomise colours
    const array = colours.slice();
    const length = array.length;
    for (let i = length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    setColoures(array);
}

  return (<>
    <button onClick={() => shuffleColours()}>Start Puzzle</button>
    <div className="status">{status}</div>
    <div className="row">
      <Square colour={colours[0]} moveButton={() => handleClick(0)} />
      <Square colour={colours[1]} moveButton={() => handleClick(1)} />
      <Square colour={colours[2]} moveButton={() => handleClick(2)} />
      <Square colour={colours[3]} moveButton={() => handleClick(3)} />
      <Square colour={colours[4]} moveButton={() => handleClick(4)} />
    </div>
    <div className="row">
      <Square colour={colours[5]} moveButton={() => handleClick(5)} />
      <Square colour={colours[6]} moveButton={() => handleClick(6)} />
      <Square colour={colours[7]} moveButton={() => handleClick(7)} />
      <Square colour={colours[8]} moveButton={() => handleClick(8)} />
      <Square colour={colours[9]} moveButton={() => handleClick(9)} />
    </div>
    <div className="row">
      <Square colour={colours[10]} moveButton={() => handleClick(10)} />
      <Square colour={colours[11]} moveButton={() => handleClick(11)} />
      <Square colour={colours[12]} moveButton={() => handleClick(12)} />
      <Square colour={colours[13]} moveButton={() => handleClick(13)} />
      <Square colour={colours[14]} moveButton={() => handleClick(14)} />
    </div>
    <div className="row">
      <Square colour={colours[15]} moveButton={() => handleClick(15)} />
      <Square colour={colours[16]} moveButton={() => handleClick(16)} />
      <Square colour={colours[17]} moveButton={() => handleClick(17)} />
      <Square colour={colours[18]} moveButton={() => handleClick(18)} />
      <Square colour={colours[19]} moveButton={() => handleClick(19)} />
    </div>
    <div className="row">
      <Square colour={colours[20]} moveButton={() => handleClick(20)} />
      <Square colour={colours[21]} moveButton={() => handleClick(21)} />
      <Square colour={colours[22]} moveButton={() => handleClick(22)} />
      <Square colour={colours[23]} moveButton={() => handleClick(23)} />
      <Square colour={colours[24]} moveButton={() => handleClick(24)} />
    </div>
</>
)
}
//determine if puzzle is solved
function checkSolved(colours:string[]):boolean{
  if(colours[2] == 'gray' && colours[7] == 'gray' && colours[10] == 'gray' && colours[11] == 'gray'
   && colours[12] == 'gray' && colours[13] == 'gray'  && colours[14] == 'gray' && colours[17] == 'gray'
   && colours[22] == 'gray'){
    return true;
  }else{
    return false;
  }
}