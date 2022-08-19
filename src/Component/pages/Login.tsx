import { getAuth, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, FacebookAuthProvider, GithubAuthProvider } from 'firebase/auth';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import '../css/Login.css'
import  SignOut  from './SignUp';

export default function Login(){
    const [show,setShow] = useState(false);
	const auth = getAuth();
    const navigate = useNavigate();
	const [email,setEmail] =useState("");
	const [password,setPassword] =useState("");
	const [authing,setAuthing] =useState(false);
    const [errorMessage ,setErrorMessage] = useState("")
   
    const registration = async (e:any) =>{
    e.preventDefault()
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
		  console.log(userCredential.user)
		    navigate('home')
        })
        .catch((error) => {
          setErrorMessage(error.code);
          setErrorMessage(error.message);
		  console.log(error.code)
        });
    }
    const signInWithGoogle = async () => {
		signInWithPopup(auth, new GoogleAuthProvider())
		.then((response)=>{
			console.log(response.user.uid);
			 navigate('home');
		})
		.catch((error)=>{
	const errorCode = error.code;
    const errorMessage = error.message;
    const email = error.customData.email;
    const credential = GoogleAuthProvider.credentialFromError(error);
    setErrorMessage(errorCode)
    setErrorMessage(errorMessage)
    setErrorMessage(error.credential)
    setErrorMessage(email)
		})
	}
	const signInWithFacebook = async()=>{
		signInWithPopup(auth ,new FacebookAuthProvider())
		.then((response)=>{
			const credential = FacebookAuthProvider.credentialFromResult(response)
			 navigate("home")
		})
		.catch((error)=>{
            const errorCode = error.code;
            const errorMessage = error.message;
            const email = error.customData.email;
            const credential =FacebookAuthProvider.credentialFromError(error);
            setErrorMessage(errorCode)
            setErrorMessage(errorMessage)
            setErrorMessage(error.credential)
            setErrorMessage(email)
		})
	}
	const signInWithGithub = async()=>{
		signInWithPopup(auth, new GithubAuthProvider())
  .then((result) => {
	    navigate("home")
  }).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    const email = error.customData.email;
    const credential = GithubAuthProvider.credentialFromError(error);
    setErrorMessage(errorCode)
    setErrorMessage(errorMessage)
    setErrorMessage(error.credential)
    setErrorMessage(email)
	console.log(errorCode)
  });}
    return(
    <>
	 {
            show ? <SignOut/> : 
        <section className="login">
            <div className="login_box">
                <div className="left">
                    <div className="top_link"><a href="#" onClick={()=>setShow(true)}>New member? SIGN UP</a></div>
                    <div className="contact">
                        <form action="" onSubmit={registration}>
                            <h3>SIGN IN</h3>
                            <input type="text" placeholder="EMAIL" onChange={(e)=>setEmail(e.target.value)}/>
                            <input type="password" placeholder="PASSWORD"onChange={(e)=>setPassword(e.target.value)}/>
                            <button className="submit" onClick={registration}>SIGN IN</button> 
                            <div className="social-container">
                            <a  className="social" onClick={()=>signInWithFacebook()}><i className="fab fa-facebook "></i></a>
                            <a  className="social" onClick={()=>signInWithGoogle()} ><i className="fab fa-google"></i></a>
                            <a  className="social" onClick={()=>signInWithGithub()}><i className="fab fa-github"></i></a>
				        </div>
                        {
                            errorMessage != null ? <p style={{backgroundColor:"red",marginTop:"4px"}}>{errorMessage}</p> : <></>
                        }
                        </form>
                    </div>
                </div>
                <div className="right">
                    <div className="right-text">
                        <h2>WELCOME IN MY PAGE</h2>
                    </div>
                    <div className="right-inductor"><img src="" alt=""/></div>
                </div>
            </div>
        </section>
        }
    </>
    )
}