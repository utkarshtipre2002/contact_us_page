
import styles from './Contact.module.css'
import { MdMessage } from "react-icons/md"
import Button from '../Button/Button'
import { FaPhoneAlt } from 'react-icons/fa'
import {HiMail} from 'react-icons/hi'
import { useState } from 'react'
const ContactForm = () => {


const [name, setName]= useState()
  const [email, setEmail] = useState()
  const [text, setText] = useState()


  // let name= "undir"
  // let email= "undirmama@gmail.com"
  // let text="I love tom"

  
    const onSubmit = (event) => {
      event.preventDefault(); //Use to prevent refreshing of page
      
      // name = event.target[0].value;
      setName(event.target[0].value)


      // email = event.target[1].value;
      setEmail(event.target[1].value)
      // text = event.target[2].value;
      setText(event.target[2].value)
      console.log(event);
      console.log("name", event.target[0].value)
      console.log("email", event.target[1].value)
      console.log("text", event.target[2].value)
    }

//   const onViaCallSubmit = () => {
//   console.log("I am from call")
// }


  return (
    <section className={styles.container}>
      <div className={styles.contact_form}>
        <div className={styles.top_btn}>
          <Button
          text = "VIA SUPPORT CHAT"
          icon= { <MdMessage fontsize="24px" />}
        />
          <Button
            
            // onClick={onViaCallSubmit}
          text = "VIA CAll"
          icon= { <FaPhoneAlt fontsize="24px" />}
        />
        </div>
        <Button
          isOutline = {true}
          text = "VIA Email Form"
          icon= { <HiMail fontsize="24px" />}
        />
        <form onSubmit={onSubmit}>


          <div className={styles.form_control}>
            <label htmlFor='name'>Name</label>
            <input type="text" name="name" />
            
          </div>
          
          <div className={styles.form_control}>
            <label htmlFor='email'>Email</label>
            <input type="email" name="email" />
            
          </div>
          
          <div className={styles.form_control}>
            <label htmlFor='text'>Text</label>
            <textarea  name="text"  rows=""/>
            
          </div>
          <div style={{
            display:"flex",
            justifyContent: "end",
          
          }}>
          <Button
      
          text = "Submit"
          
            />
          </div>
          <div>
            {name + " " + email +" "+ text}
          </div>
        </form>
        
      </div>
      <div className={styles.contact_Image}>
        <img src = "/images/contact.svg" alt= "contact image" />
              
          </div>
    </section>
  )
}

export default ContactForm
