import  React from 'react'

import './FooterLeft.css'
 function FooterLeft({channel, description, song}) {
	return (
        <div className="footer-left">
	        <div className="text">
                <h3>@{channel}</h3>
                <p>{description}</p>
                <div className="ticker">
                    <marquee direction="left" scrollamount="2">
                        {song}
                    </marquee>
                </div>
		    </div>
        </div>)
}
  


export default FooterLeft