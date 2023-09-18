import React,{useState} from 'react'
import SignIn from './SignIn/SignIn';
import CreateAccount from './create-account/CreateAccount';

function Account() {
    const [switching, setSwitch] = useState(true);

    const handleSwitch =()=>{
        setSwitch((switching) => (!switching));
      }

  return (
    <div>
       {switching ? <SignIn handleSwitch={handleSwitch} /> : <CreateAccount handleSwitch={handleSwitch} />}
    </div>
  )
}

export default Account;