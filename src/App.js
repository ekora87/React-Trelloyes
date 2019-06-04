import React from 'react';
import './App.css';
import List from './List';

function App(props) {
  // const test = (props.lists.map((list) => {
  //   console.log('LIST', list)
  //   for (prop in props.allCards) {
  //   // gets each card
  //   const c = props.allCards[prop];
  //   if(list.cardIds.includes(c.id)) {
  //             console.log(props.allCards[prop])
  //   } 
  //   }
  // }))
  
  const listHeader = props.lists.map((list) => 
    <List header = {list.header}></List>
  )

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
