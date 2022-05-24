import React, {useState} from 'react';
import './App.css';
import Input from './components/UserLogic/NewUser/Input';
import PopUpWin from './components/UI/PopUpWin/PopUpWin';
import UserList from './components/UserLogic/UserList/UserList';

const UserArray=[{id:1, username:"One", age:"11"},{id:2, username:"Two", age:"22"}];

const PopUpWinMessage={
  title:"",
  content:"",
  buttonName:""
};

function App(props) {
  const [PopUpWinStatus, setPopUpWinStatus] = useState(false);    
  
  const AddNewUser=(props)=>{
    UserArray.push(props.data);
  }

  const openPopUpWin=(winTitle,winContent,winButton)=>{
    PopUpWinMessage.title=winTitle;
    PopUpWinMessage.content=winContent;
    PopUpWinMessage.buttonName=winButton;
    setPopUpWinStatus(true);
  }

  const closePopUpWin=()=>{
    setPopUpWinStatus(false);
  }

  return (
    <div>
      <Input userAdd={AddNewUser} onOpenPopUpWin={openPopUpWin}/>          
      {UserArray.length>0 ? UserArray.map((element)=>{
        return (<UserList key={element.id} userName={element.username} Age={element.age}/>)
      }) :""}
      {PopUpWinStatus? <PopUpWin  onClosePopUpWin={closePopUpWin} title={PopUpWinMessage.title} 
      content={PopUpWinMessage.content} buttonName={PopUpWinMessage.buttonName}/> :""}
    </div>
  );
}

export default App;
