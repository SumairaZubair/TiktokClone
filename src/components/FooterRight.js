import React, { useState } from 'react'
import './FooterRight.css'

function FooterRight({ likes, shares, messages }){
  const [liked,setLiked]=useState(likes)
  return(
    
<div className="footer-right">
	<div className="sidebar-icon">

		
     <i class="fa-regular fa-heart" style={{color:'red',fontSize:'1.7rem'}} onClick={()=>setLiked(likes + 1)} ></i>
		<p>{liked}</p>
	</div>
	<div className="sidebar-icon">
		
    <i class="fa-solid fa-message"></i>
		<p>{messages}</p>
	</div>
	<div className="sidebar-icon record-below">
	
  <i class="fa fa-share-alt"></i>

		<p>{shares}</p>
	</div>
	<div className="sidebar-icon record">
		<img src="https://static.thenounproject.com/png/934821-200.png" alt='disc' style={{width: '40px',height: '40px'}}/>
	</div>
</div>)
}
export default FooterRight


