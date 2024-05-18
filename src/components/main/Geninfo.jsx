import React from 'react'
import './Geninfo.css'

function Geninfo() {
  return (
    <div className="p-3">
        <section className='d-flex flex-column justify-content-center align-items-center'>
            <h2 className="gen-header p-2">About Papers in English and Linguistics (PEL)</h2>
            <p>Papers in English and Linguistics (PEL) used to be published by the Linguistic Association, Obafemi Awolowo University, Ile-Ife under the editorship of Professor Ralph O. Atoye. The journal is now domiciled in the Department of English, Obafemi Awolowo University, Ile-Ife, under the editorship of Professor Kehinde A. Ayoola who has been the editor since 2012.</p>
            <p>The journal is published twice annually in June and December. The 24th volume, Numbers 1 and 2 and Numbers 3 and 4, were published both online and in hardcopies in 2023. Both editions are now being published online on this website. </p>
        </section>
        <hr/>
        <section className='d-flex flex-column justify-content-start align-items-center'>
           <div> <h2 className="gen-header p-2">Instruction to Authors on Submission of Articles and Reviews</h2></div>
            <p>1.	Manuscripts including, the abstract, should be typed double spaced on one side only and should not exceed 20 pages.</p>
            <p>2.	Each article should include an abstract of between 150 and 200 words which succinctly presents the content of the paper.</p>
            <p>3.	The contribution submitted to PEL should not have been published previously and should not be under consideration elsewhere.</p>
            <p>4.	Submissions can be made by e-mail to: <a className="info-contact" href="mailto:kehinday77@yahoo.co.uk">kehinday77@yahoo.co.uk</a>; telephone: <a className="info-contact" href="tel:08056342354">08056342354.</a></p>
        </section>
    </div>
  )
}

export default Geninfo




