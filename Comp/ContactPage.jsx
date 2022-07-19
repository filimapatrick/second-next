
import React from 'react';
import post from './Data'

function ContactPage() {
    console.log(post);
  return (
    <div>
     {
        post.map((datas,index)=>{
            <p>{datas.name}</p>
        })
     }
    </div>
  )
}

export default ContactPage
