import React, {useState} from 'react';
import './App.css';
import Input from './components/UserLogic/NewUser/Input';
import PopUpWin from './components/UI/PopUpWin/PopUpWin';
import UserList from './components/UserLogic/UserList/UserList';
import Card from './components/UI/Card/Card';

const UserArray=[];

const PopUpWinMessage={
  title:"",
  content:"",
  buttonName:""
};

function App(props) {
  const [PopUpWinStatus, setPopUpWinStatus] = useState(false);
  const [UserArrayStatus, setUserArrayStatus]=useState(UserArray);
  
  const AddNewUser=(userNameVal, ageVal)=>{
    let newUser={id:UserArrayStatus.length+1, username:userNameVal, age:ageVal}
    UserArray.push(newUser);
    setUserArrayStatus(UserArray);    
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
      {/* {UserArrayStatus.length>0 ?  (<div className='frameDiv'>
        {UserArrayStatus.map((element)=>{
            return (<UserList key={element.id} userName={element.username} age={element.age}/>)
          })}
      </div>):""} */}
      {UserArrayStatus.length>0 ?  (<Card>
        <UserList UserArrayList={UserArray}/>
        </Card>):""}

      {PopUpWinStatus? <PopUpWin  onClosePopUpWin={closePopUpWin} title={PopUpWinMessage.title} 
      content={PopUpWinMessage.content} buttonName={PopUpWinMessage.buttonName}/> :""}
    </div>
  );
}

export default App;
