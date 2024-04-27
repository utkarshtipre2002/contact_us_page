// import React from 'react'
// import styles from './Button.module.css'

// import { MdMessage } from 'react-icons/md'

// const Button = (props) => {
//   console.log(props)
//   return (
//     <button className = {`${styles.primary_btn}`}>
//       {/* <MdMessage fontSize="24px" />
//       VIA Support chat */}
//     </button>
//   )
// }

// export default Button


import styles from './Button.module.css';
// import { MdMessage } from 'react-icons/md';


const Button = ({isOutline, icon, text, ...rest } ) => {

  
  return (
    <button {...rest}
      className={isOutline ? styles.outline_btn : styles.primary_btn}>
     
      {icon}
      {text}
    </button>
  );
}

export default Button;
