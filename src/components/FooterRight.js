import React, { useState } from 'react'
import './FooterRight.css'

function FooterRight({ likes, shares, messages }){
	const [liked, setLiked] = useState(false)
    const [likeCount, setLikeCount] = useState(likes);

  return(
    
<div className="footer-right">
	<div className="sidebar-icon">
       {liked ? <i class="fa-solid fa-heart" id='heart'></i> 
	   :<i class="fa-regular fa-heart" onClick={() => {
		
		setLiked(true);
		setLikeCount((likes) => likes + 1);
	}}></i>};


		<p>{likeCount}</p>
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
		<img className='img' src="https://static.thenounproject.com/png/934821-200.png" alt='disc'/>
	</div>
</div>)
}
export default FooterRight


