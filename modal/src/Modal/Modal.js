import React from 'react';
import classes from '../Dash/Dash.module.css';

const Modal = ({ handleClose, show, children }) => {

    const showHideClassName = show ? [classes.modal, classes.displayblock] : [classes.modal, classes.displaynone];
  
    return (
      <div className={showHideClassName.join(' ')}>
        <section className= {classes.modalmain}>
          {children}
          <button onClick={handleClose}>close</button>
        </section>
      </div>
    );
  };

  export default Modal;