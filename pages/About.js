import Link from 'next/link'
export default function About(){
  
    return(
      <div>
       <div className='pen'>
       <Link style={{justifyContent:'space-between'}} href="/">Home</Link>
        <Link href="/About">About</Link>
        <Link href="/contact">Contact</Link>
       </div>
       
        <h1 style={{color: 'palevioletred',textAlign:'center',fontSize:50}}><b>Persons involved in the developement of the app</b></h1>      
            
            
            <br />
  <br />
  <div className='mkk'>
  <div className="container">
  <h1 style={{textAlign:'center'}}><b>Gautham Vijayan</b></h1>
                
                <img src="gautham.jpeg"className="uy"></img>
               
                <h2 style={{fontWeight:'500',textAlign:'center'}}>
                Gautham Vijayan, a sr.REACT 
                NATIVE DEVELOPER is the Developer of the apps </h2>
          <br />
        <br />
         <div className="ioe">
         <a href="https://instagram.com/gautham_vijay___?utm_medium=copy_link" style={{alignItems:'center'}}><img src="instaa.png" style={{height:70}} className="soc"></img></a>
          <a href="https://github.com/Gautham495" style={{alignItems:'center'}}><img src="git.png" style={{height:70}}className="soc"></img></a>
          <a href="https://www.linkedin.com/in/gautham-vijayan" style={{alignItems:'center'}}><img src="link.png" style={{height:70}}className="soc"></img></a>
          <br />
         </div>
        <br />
 
      </div>
      <div className="container">
  <h1 style={{textAlign:'center'}}><b>Makarand</b></h1>
                
                <img src="mak.jpeg"className="uy"></img>
               
                <h2 style={{fontWeight:'500',textAlign:'center'}}>
                Makarand, a learner from Chennai
                , Developer of the Website. Provided a few notes </h2>
          <br />
        <br />
         <div className="ioe">
         <a href="https://instagram.com/rockrockymakarand___?utm_medium=copy_link" style={{alignItems:'center'}}><img src="instaa.png" style={{height:70}}className="soc"></img></a>
          <a href="https://rockmakarand/github.io" style={{alignItems:'center'}}><img src="git.png" style={{height:70}}className="soc"></img></a>
          <a href="social-linkedin-circle-512.webp" style={{alignItems:'center'}}><img src="link.png" style={{height:70}}className="soc"></img></a>
          <br />
         </div>
        <br />
 
      </div>
      </div>
      <h1 style={{textAlign:'center',color:'maroon'}}><b>Persons involved in the Provision of Notes</b></h1>
        <br />
        <br />
        <br/>
        <div className="mkk">
      
        <div className="container"data-aos="zoom-in">
                <h1 style={{textAlign:'center'}}><b>Neeraj Reddy</b></h1>
               
                <img src="neeraj.jpeg"className="uy"></img>

             
                <h2 style={{fontWeight:'500',textAlign:'center'}}>
                Neeraj Reddy, is a student who provided 
            notes to the apps. He studied from sri chaitanya techno schools</h2>
          <br />
        <br />
         <div className="ioe">
         <a href="https://instagram.com/neerajkreddy007?utm_medium=copy_link" style={{alignItems:'center'}}><img src="instaa.png" style={{height:70}}className="soc"></img></a>
          <a href="https://github.com/Gautham495" style={{alignItems:'center'}}><img src="git.png" style={{height:70}}className="soc"></img></a>
          <a href="https://www.linkedin.com/in/neeraj-kumar-reddy-velagala-7648431bb" style={{alignItems:'center'}}><img src="link.png" style={{height:70}}className="soc"></img></a>
          <br />
         </div>
        <br />
         

            </div>
           

        
       

        </div>
      </div>
      
      
    )
  }
  