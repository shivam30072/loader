import React from 'react'
import bg from './bg.webp'
import '../index.css'

const Content = () => {
  return (
    <main>
      <section>
        <div>
          <span className='span1'>Fix Now </span>
          <span className='span2'>is here to fix your problems</span>
        </div>
        <img src={bg} alt='image'/>
      </section>
    </main>
  )
}

export default Content