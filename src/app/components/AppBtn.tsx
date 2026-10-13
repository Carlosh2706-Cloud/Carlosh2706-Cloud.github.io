import React from 'react'
import './appBtn.css'

export default function AppBtn({name} : {name: string}) {

const handleScrollTo =(section: string) =>{
    //Go to book a session
}

  return (
    <a 
    className='app-btn scrollto d-none d-lg-flex'
    onClick={() => handleScrollTo('book-session')}>

    {name}
    </a>
  );
}
