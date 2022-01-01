import Link from 'next/link'
import { useEffect } from 'react';
import Aos from "aos"
import "aos/dist/aos.css"
export default function Contact(){
  useEffect(()=>{
    Aos.init({duration:3000});
  },[]);
  
    return(
      <div>
       <div className='pen'>
       <Link style={{justifyContent:'space-between'}} href="/">Home</Link>
       &nbsp;&nbsp;
      &nbsp;&nbsp;
        <Link href="/About">About</Link>
        &nbsp;&nbsp;
      &nbsp;&nbsp;
        <Link href="/contact">Contact</Link>
        &nbsp;&nbsp;
      &nbsp;&nbsp;
        <Link href="/pay">Get Notes</Link>
       </div>
       
       <h1 style={{textAlign:'center',color:'yellowgreen'}}>
           Social Media Links:</h1>
            <br/>
            <br/>

            <div className="mkk">
            <div className="container"data-aos="zoom-in">
            <h2 style={{textAlign:'center',fontWeight:500}}>
            Follow us at our INSTAGRAM page to get frequent updates about the App!</h2>
            
            <br/>
            <br/>
          
            <a href="https://instagram.com/rock_n_crack_jee?utm_medium=copy_link" style={{alignItems:'center'}}><img src="instaa.png" style={{height:70}} className="oii"></img></a>
            <br/>
            <br/>
            <br/>
                </div>
                <div className="container" data-aos="zoom-in">
            <h2 style={{textAlign:'center',fontWeight:500}}>
            Join our Whatsapp Group to get New Notes(suggestions) in the APP and free Counselling(JOSAA)</h2>
            <br/>
            <br/>
            <a href="https://chat.whatsapp.com/IzmbGyR608mKao4vsSoora" style={{alignItems:'center'}}><img src="what.png" style={{height:70}}  className="oii"></img></a>
            <br/>
            <br/>
                </div>
               
                <div className="container"data-aos="zoom-in">
            <h2 style={{textAlign:'center',fontWeight:500}}>
            Join our Telegram Group to get New Notes(suggestions) in the APP and free Counselling(JOSAA)</h2>
            <br/>
            <br/>
            <a href="https://t.me/jee_notes_by_nitt" style={{alignItems:'center'}}><img src="telll.png" style={{height:70}}  className="oii"></img></a>
            <br/>
            <br/>
              
                </div>
            </div>
            <br/>
            <br/>
            <h1 style={{textAlign:'center',color:'tomato'}}>
           Email Links:</h1>

            <br/>
            <br/>
            <div className="mkk">
            <div className="container" data-aos="zoom-in">
            <h2 style={{textAlign:'center',fontWeight:500}}>
           Email us if you have any queries and Doubts (Email to Neeraj Reddy)</h2>
            
            <br/>
            <br/>
          
            <a href="mailto:neeraj.k.reddy9@gmail.com" style={{alignItems:'center'}}><img src="gm.png" style={{height:70}}  className="oii"></img></a>
            <br/>
            <br/>
            <br/>
                </div>
                <div className="container"data-aos="zoom-in">
            <h2 style={{textAlign:'center',fontWeight:500}}>
           Email us if you have any queries and Doubts (Email to Makarand)</h2>
            
            <br/>
            <br/>
          
            <a href="mailto:makarandrao0@gmail.com" style={{alignItems:'center'}}><img src="gm.png" style={{height:70}}  className="oii"></img></a>
            <br/>
            <br/>
            <br/>
                </div>
                <div className="container"data-aos="zoom-in">
            <h2 style={{textAlign:'center',fontWeight:500}}>
           Email us if you have any queries and Doubts (Email to Gautham Vijayan)</h2>
            
            <br/>
            <br/>
          
            <a href="mailto:kinggautham495@gmail.com" style={{alignItems:'center'}}><img src="gm.png" style={{height:70}}  className="oii"></img></a>
            <br/>
            <br/>
            <br/>
                </div>
        </div>
      </div>
      
      
    )
  }
  