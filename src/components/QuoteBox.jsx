import React from 'react'
import BtnQuote from './BtnQuote'
import DescriptionQuote from './DescriptionQuote'

const QuoteBox = ({quoteRandom, handleClick, colorRandom}) => {

    const objStyle = {
        color: colorRandom
    }

    const objStyleBtn = { 
        background: colorRandom
    }

  return (
   <article className='card' style={objStyle}>
<i class=' card__icon bx bxs-quote-alt-left'></i>
   
    <DescriptionQuote 
        quoteRandom = {quoteRandom}
    />
    <BtnQuote 
    objStyleBtn = {objStyleBtn}
    handleClick = {handleClick}
              
    />
   </article>
  )
}

export default QuoteBox