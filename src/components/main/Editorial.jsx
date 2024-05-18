import React from 'react'
import './Editorial.css'

function Editorial() {
  return (
    <div>
        <section className="d-flex p-2 editor-section flex-column justify-content-center align-items-center">
            <div><h3 className="p-2">Editor</h3></div>
            <div className="p-2"><img className= 'editor-image' src="assets/editor.jpg"/></div>
            <p className='text-center'> Kehinde A. Ayoola is a Professor in the Department of English, Obafemi Awolowo University, Ile-Ife. His areas of areas of specialisation and research interest are Applied Linguistics, Use of English, Critical Discourse Analysis and English for Specific purposes. He is the Editor, Journal of English Scholars Association of Nigeria (JESAN). Email: <a href="mailto:kehinday77@yahoo.co.uk">kehinday77@yahoo.co.uk</a> </p>
        </section>
        <section  className="d-flex p-2 ms-1 flex-column justify-content-start">
        <div><h3>Editorial Advisory Board</h3></div>
        <div>
            <p>Professor L. O. Salami, Obafemi Awolowo University, Ile-Ife.</p>
            <p>Professor Wale Adegbite, Obafemi Awolowo University, Ile-Ife.</p>
            <p>Professor C. E. Onukaogu, Obafemi Awolowo University, Ile-Ife.</p>
            <p>Professor O. O. Taiwo, Obafemi Awolowo University, Ile-Ife.</p>
            <p>Professor Ayo Kehinde, University of Ibadan, Ibadan.</p>
            <p>Professor M. A. Olateju, Obafemi Awolowo University, Ile-Ife.</p>
            <p>Professor O. A. Adekoya, Obafemi Awolowo University, Ile-Ife.</p>
            <p>Professor A. A. Fakoya, Lagos State University, Ojo.</p>
            <p>Professor Akin Odebunmi, University of Ibadan, Ibadan.</p>
            <p>Professor Constantine Yuka, University of Benin, Benin City.</p>
            <p>Professor Nky Ugwu, University of Benin, Benin City.</p>
        </div>
        </section>
    </div>
  )
}

export default Editorial
