import React from 'react'
import {Link} from 'react-router-dom'

function Publication() {
  return (
<div className="p-3">
        <section className='pub-header d-flex flex-column justify-content-start'>
        <h3 className="p-2" >Editions</h3>
            <Link to="/volume26-no-3&4"><div className="pub-header p-2"><p><strong>Current Issue -</strong>  Volume 26 - No 3 & 4</p></div></Link>
            <Link to="/volume24-no-1&2"><p className="pub-header p-2">Volume 24 - No 1 & 2 </p></Link>
            <Link to="/volume24-no-3&4"><p className="pub-header p-2">Volume 24 - No 3 & 4 </p></Link>
            <Link to="/volume25-no-1&2"><p className="pub-header p-2">Volume 25 - No 1 & 2 </p></Link>
            <Link to="/volume26-no-1&2"><p className="pub-header p-2">Volume 26 - No 1 & 2 </p></Link>          
            <hr/>    
        </section>
        </div>  
)
}

export default Publication
