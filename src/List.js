import React from 'react';
// import Card from './Card';

function List(props) {
    return (
        <section className='List'>
            <header className='List-header'>
                {props.header}
            </header>
            {/* <div className='List-cards'>
                <Card title={props.card} content={props.card}>
                </Card>
            </div> */}
        </section>
    )
}

export default List;