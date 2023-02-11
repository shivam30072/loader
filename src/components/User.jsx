import React from 'react'
import '../index.css'
import spin from './spin.svg'


const User = ({ user, setUser }) => {
return (
<div className='userDiv'>
    {user.length === 0 ? 
    <div className='spin'>
      <img  src={spin} alt='img' />
    </div> 
    :
    <> 
      {user.map((person, id) => (
        <div className='singleUser' key={id}>
          <img src={person.avatar} />
          <div className='nameEmail'>
          <span>name: {person.first_name} {person.last_name}</span>
          <span>email: {person.email}</span>
          </div>
        </div>
      ))}
    </> 
}
</div>
  
  )      
}

export default User