import React from 'react';
import suggestCardsStyle from './suggestCards.module.scss'

const suggestCards = (props) => {
    return (
        <div className={suggestCardsStyle.cardCustom}>
            {props.children}
        </div>
    )
}

export default suggestCards