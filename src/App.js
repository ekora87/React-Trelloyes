import React from 'react';
import './App.css';
import List from './List';

function App(props) {

  // const test = props.lists.map((list) => {
    
  //   for (let prop in props.allCards) {
  //   // gets each card
  //   const c = props.allCards[prop];
  //   if(list.cardIds.includes(c.id)) {
  //     console.log(props.allCards[prop]);
  //   } 
  //   }
    
  // })
  
  const listHeader = props.lists.map((list) => {
    // let testObj;
    let cardIdArray = list.cardIds.map (index => {
      for (let prop in props.allCards) {
        console.log("prop " + props.allCards[prop])
        if (index === props.allCards[prop].id) {
          for (let i=0; i<list.cardIds.length;i++) {
            
            list.cardIds[i] = props.allCards[prop];
          }
          
          console.log(list.cardIds);
        }
      }
      
     })

     
    // for (let testProp in list.cardIds) {
    //   let testID = list.cardIds[testProp];
    // }
    // let test;
    //   for (let prop in props.allCards) {
    //   // gets each card
    //   const c = props.allCards[prop];
    //   if(list.cardIds.includes(c.id)) {
    //     test = props.allCards[prop];
    //   }
    // }
  
    return <List header = {list.header} cards = {list.cardIds}></List>
  })

  // const cardID = props.allCards.map((index) => 
    
  // )

  return (
    <main>
    <header className='App-header'>
      <h1>Trelloyes!</h1>
    </header>
    <div className='App-list'>
        {listHeader}
    </div>
    </main>
  );
}

export default App;
