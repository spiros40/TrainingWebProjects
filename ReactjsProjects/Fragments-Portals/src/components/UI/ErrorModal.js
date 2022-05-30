import React, {Fragment} from 'react';
import ReactDom from 'react-dom';

import Card from './Card';
import Button from './Button';
import classes from './ErrorModal.module.css';
import { Fragment } from 'react/cjs/react.development';

//With two below functions i am using Portals to move html content
const Backdrop=()=>{
  <div className={classes.backdrop} onClick={props.onConfirm} />
} 
const ModalOverlay=()=>{
  <Card className={classes.modal}>
        <header className={classes.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={classes.content}>
          <p>{props.message}</p>
        </div>
        <footer className={classes.actions}>
          <Button onConfirm={props.onConfirm}>Okay</Button>
        </footer>
      </Card>
}

const ErrorModal = (props) => {
  return (
    <Fragment>
      {ReactDom.createPortal(<Backdrop onClick={props.onConfirm}/>, 
        document.getElementById('backdrop-root'))}
      {ReactDom.createPortal(<ModalOverlay title={props.title} 
      message={props.message} onClick={props.onConfirm}/>,
        document.getElementById("overlay-root"))}
    </Fragment>
  );
};

export default ErrorModal;
