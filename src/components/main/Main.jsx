import React from 'react'
import './main.css'
import {Link} from 'react-router-dom'


function Main() {
    return (
< >
<div className='d-flex justify-content-center align-items-start'>
<section id='home' className="py-5 bg d-flex flex-lg-row flex-column">
<div data-aos="zoom-in"  data-aos-duration="1500" className='px-3 px-md-5 firstl d-flex flex-column'> 
<div className='d-flex gen'>
  <div className='gen-child'><h1 className='header big-text'>PAPERS IN</h1> <h1 className=' header big-text'>ENGLISH AND</h1><h1 className='header big-text'>LINGUISTICS</h1><h1 className='big-text header'>PEL</h1></div>
</div>
<div>
  <p className='p-header'>Papers in English Language (PEL) is a journal domiciled in the Department of English, Obafemi Awolowo University, Ile-Ife. The journal is published twice annually in June and December.</p>
  <Link to="/publications"><button className="header-button mb-4 p-2">View Publications</button></Link>
</div>
</div>
</section>
</div>

<div id='about'className='d-flex  align-items-start justify-content-center '>
<div style={{width:'100%'}}>
<section className='d-flex align-items-center justify-content-center flex-wrap mb-8'>
  <div data-aos="zoom-in-left" className='align-items-center m-3 d-flex justify-content-start '><h3 className='text-dark'>24&nbsp;</h3><h3 className='text-gradient'>VOLUMES</h3></div>
  <div data-aos="zoom-in" className='align-items-center m-3 d-flex justify-content-start '><h3 className='text-dark'>250+&nbsp;</h3><h3 className='text-gradient'>PAPERS</h3></div>
  <div data-aos="zoom-in-right" className='align-items-center m-3 d-flex justify-content-start '><h3 className='text-dark'>2000+&nbsp;</h3><h3 className='text-gradient'>CITATIONS</h3></div>
</section>

<section className="py-4 px-lg-5 px-3  bg-white d-flex flex-md-row flex-column">
<div data-aos="zoom-in" data-aos-duration="0900" className='ps-xl-5 firstl justify-content-sm-center d-flex flex-column'> 
  <h2 className='text-dark pb-2 pb-sm-4 pe-1' style={{fontSize:'40px', fontWeight:"550"}}>Publications</h2>
  <p className='text-dark fs-5 pe-2 pb-2 p-width pb-sm-4'>The journal is published twice annually in June and December. The 24th volume, Numbers 1 and 2 and Numbers 3 and 4, were published both online and in hardcopies in 2023. Both editions are now being published online on this website.</p>
  <Link to="/publications"><button className="started-button mb-4 py-2">Read PEL</button></Link>
  </div>
<div data-aos="zoom-in" data-aos-duration="0900" className='pe-xl-5 firstr d-flex flex-column'>
<img src='assets/journalbackground1.jpg' className='sourceimage' alt='journal'/>
</div>
</section>

</div>
</div>

<section className='d-flex justify-content-center p-4 vision align-items-center flex-wrap mb-5' id='mission'>
<h2 data-aos="zoom-in" className='d-flex ps-2 text-dark flex-column'>Vision of the Journal</h2>
  
  <div data-aos="zoom-in" className='d-flex text-dark talign flex-column'>
    <p className='pa'>To publish high quality, peer reviewed papers aimed at advancing research and teaching in English Studies and General Linguistics in Nigeria;</p>
  </div>
  <div data-aos="zoom-in" className='d-flex text-dark talign flex-column'>
    <p className='pa'>To promote current and up-to-date research methodology applicable for research in English Studies and Linguistics;</p>
  </div>
  <div data-aos="zoom-in" className='d-flex text-dark talign flex-column'>
    <p className='pa'>To encourage comprehensibility and understanding through reader-friendly presentation of papers;</p>
  </div>
  <div data-aos="zoom-in" className='d-flex text-dark talign flex-column'>
    <p className='pa'>To provide space for Nigerian scholars to report their works and contribute to key debates in English Studies and General Linguistics.</p>
  </div>

  </section>

<section className='d-flex justify-content-center align-items-center mx-2 mb-5'>
<div data-aos="zoom-in" data-aos-duration="1000" className=' firstl start d-flex justify-content-between align-items-center flex-md-row flex-column p-3'> 
  <div className='d-flex firstl flex-column talign px-md-3 justify-content-between'>
  <h2 className='text-white pb-2 pe-1' style={{fontWeight:"650"}}>Editorial Board</h2>
  <h4 className='text-white'>Editor</h4>
  <p className='text-white fs-5 pe-2 p pb-2'>Kehinde A. Ayoola is a Professor in the Department of English, Obafemi Awolowo University, Ile-Ife. His areas of areas of specialisation and research interest...</p>
  </div>
  <Link to="/editorialboard"><button className="editorial-button m-2 py-2">Read More</button></Link>
  </div>

</section>

<section className='d-flex justify-content-center align-items-center mb-5'>
<div data-aos="fade-right" data-aos-duration="0900" className=' firstl vision d-flex justify-content-between align-items-center flex-md-row flex-column p-3'> 
  <div className='d-flex firstl flex-column talign px-md-3 justify-content-between'>
  <h2 className='text-dark pb-2 pe-1' style={{fontWeight:"650"}}>General Information</h2>
  <h4>Instruction to Authors on Submission of Articles and Reviews</h4>
  <p className='text-dark fs-5 p pb-1'>
Manuscripts including, the abstract, should be typed double spaced on one side...
</p>
<div className='vision'>
<Link to="/generalinformation"><button className="started-button  my-2 me-2 py-2">Read More</button></Link>
  </div>
  </div>
  </div>

</section>
</>
      )
}

export default Main