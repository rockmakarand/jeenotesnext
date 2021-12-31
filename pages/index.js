
import Head from 'next/head' 
import Image from 'next/image' 
//import './index.css' 
import Link from 'next/link'


export default function Home(){
  
  return(
    <div>
      <div className='pen'style={{justifyContent:"space-evenly"}}>
      
      <Link href="/"><a style={{fontSize:'10'}}>Home</a></Link>
        <Link href="/About"><a>About</a></Link>
        <Link href="/contact">Contact</Link>
     
       </div>
      <h1 style={{color: 'palevioletred',textAlign:'center',fontSize:50}}><b>JEE Notes APP</b></h1>      
          <h1 style={{color: 'cyan',textAlign:'center',fontSize:50}}><b>by the students of...</b></h1>
          <h1 style={{color: 'lime',textAlign:'center',fontSize:50}}><b>NIT Tiruchirapalli</b></h1>
          
          <br />
<br />
<div className='mkk'>
<div className="container">
     <h1 style={{textAlign:'center',color:'darkcyan'}}>Chemistry App</h1>
     <br />
     <h2 style={{fontWeight:'500',textAlign:'center'}}>
   The Chemistry Notes App is our first project, since Chemistry is where
a lot of notes are required. The app therefore is available on Android and IoS</h2>
<br />
<br />
<div className="uuy" style={{display:'flex',justifyContent:'space-evenly'}}>
<a href="https://play.google.com/store/apps/details?id=com.gauthamchemnotes" style={{alignItems:'center'}}><img src="gplay.png" style={{height:70}} className='jee'></img></a>
<br />
<br />
<a href="https://apps.apple.com/gm/app/jee-chemistry-note-nit-trichy/id1557500402" style={{alignItems:'center'}}><img src="apple.png" style={{height:60,alignContent:'center',alignSelf:'center'}}className='jee'></img></a>
<br />
<br />
</div>
<br />
<br />
<h2 style={{fontWeight:'500',textAlign:'center'}}>You can also watch our guide to use the APP efficiently!</h2>
<a href="https://www.youtube.com/watch?v=zciygP464Oo"><img src="y.png" style= {{height:130,alignSelf:'center',alignContent:'center',alignItems:'center'}}className='jee'></img></a>

 </div>
 <div className="container">
     <h1 style={{textAlign:'center',color:'darkcyan'}}>Physics App</h1>
     <br />
     <h2 style={{fontWeight:'500',textAlign:'center'}}>
     The Physics Notes App is our second project. The app has notes combined 
              from institutes in Andhra Pradesh, Tamil Nadu and Telangana. The app is available 
          only in Google Playstore as of now</h2>
<br />
<br />
<div className="uuy" style={{display:'flex',justifyContent:'space-evenly'}}>
<a href="https://play.google.com/store/apps/details?id=com.gauthamchemnotes" style={{alignItems:'center'}}><img src="gplay.png" style={{height:70}} className='jee'></img></a>
<br />
<br />

</div>
<br />
<br />
<h2 style={{fontWeight:'500',textAlign:'center'}}>You can also watch our guide to use the APP efficiently!</h2>
<a href="https://www.youtube.com/watch?v=zciygP464Oo"><img src="y.png" style= {{height:130,alignSelf:'center',alignContent:'center',alignItems:'center'}}className='jee'></img></a>

 </div>
 <div className="container">
     <h1 style={{textAlign:'center',color:'darkcyan'}}>Mathematics App</h1>
     <br />
     <h2 style={{fontWeight:'500',textAlign:'center'}}>
     The Mathematics Notes App is our second project. The app has notes combined 
              from institutes in Andhra Pradesh, Tamil Nadu and Telangana. The app is available 
          only in Google Playstore as of now</h2>
<br />
<br />
<div className="uuy" style={{display:'flex',justifyContent:'space-evenly'}}>
<a href="https://play.google.com/store/apps/details?id=com.gauthamchemnotes" style={{alignItems:'center'}}><img src="gplay.png" style={{height:70}} className='jee'></img></a>
<br />
<br />

</div>
<br />
<br />
<h2 style={{fontWeight:'500',textAlign:'center'}}>You can also watch our guide to use the APP efficiently!</h2>
<a href="https://www.youtube.com/watch?v=zciygP464Oo"><img src="y.png" style= {{height:130,alignSelf:'center',alignContent:'center',alignItems:'center'}}className='jee'></img></a>

 </div>
   
    </div>
    </div>
    
  )
}
