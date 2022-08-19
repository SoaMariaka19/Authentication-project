import {signOut }from 'firebase/auth'
import { getAuth } from 'firebase/auth'
import { useNavigate } from 'react-router'
import '../css/home.css'
export interface IAHomeProps {}

export const Home : React.FunctionComponent<IAHomeProps> =()=>{
    const navigate = useNavigate();
    const auth = getAuth();
    return (
    <div className='center'>
        <h1>You're Connected</h1>
        <button  onClick={()=> signOut(auth).then(()=>{navigate('/')})} className="bouton">Logout</button>
    </div>
    )
}