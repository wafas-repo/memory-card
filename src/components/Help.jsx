import React from 'react'

const Help = () => {
  return (
    <>
        <div id='help-container'>
                <div className='help-text-container'>
                    <p className='help-title'>How to play</p>
                </div>
                <div className='help-text-container'>
                    <p className='help-text'>Do not click a card twice or you lose!</p>
                </div>
                <div className='help-text-container'>
                    <p className='help-text'>If you click all the cards without repeating, you win!</p>
                </div>
        </div>
    </>
  )
}

export default Help