import React from 'react';
import STORE from './store';
import Card from './Card';

const StoreTest = STORE;
function List(props) {
    // const testArray = STORE.lists.map(each =>

    //         <Card title={props.cards} />
        
    // )
    
    //    for (let prop in STORE.lists.cardIds) {
    //         return <Card title = {props.cards[prop]} />
    //     }
    
    
    return (
        <section className='List'>

            <header className='List-header'>
                {props.header}
            </header>
            
            <div className='List-cards'>
            {props.cards.map((card) => 
                <Card title= {card.title} content= {card.content} />
            )}
            </div>
        </section>
    )
}

export default List;