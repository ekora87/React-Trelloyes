import React from 'react';
import STORE from './store';
import Card from './Card';

const StoreTest = STORE;
function List(props) {
    // const testArray = STORE.lists.map(each =>
    //     <div className='List-cards'>
    //         <Card title={props.cards} />
    //     </div>
    // )
    // )
    //    for (let prop in STORE.lists.cardIds) {
    //         return <Card title = {props.cards[prop]} />
    //     }
    
    
    return (
        <section className='List'>

            <header className='List-header'>
                {props.header}
            </header>
            <Card title={props.cards} />
            <div className='List-cards'>
                
            </div>
        </section>
    )
}

export default List;