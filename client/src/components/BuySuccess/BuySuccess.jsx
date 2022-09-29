import React from 'react'
import Navbar from './../Home/Navbar/Navbar';
import Navbar2 from './../Home/Navbar2/Navbar2';
import style from '../BuySuccess/BuySuccess.module.css'
export default function BuySuccess() {


const today = new Date()
const tomorrow = new Date(today)
tomorrow.setDate(tomorrow.getDate() + 3)
console.log();
  return (<>
    <Navbar/>
  <Navbar2/>

<div className="d-flex justify-content-center flex-column align-items-center">
<i  className= {`${"fa-sharp fa-solid fa-thumbs-up mt-5"} ${style.iconhandle}`}></i>
<h2 className='my-5 text-success'>Done</h2>
<h3>You Order Will be delivered by <span className='text-muted'>{tomorrow.toDateString()}</span></h3>


</div>



  </>

  )
}
