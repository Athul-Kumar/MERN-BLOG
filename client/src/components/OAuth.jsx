import { Button } from "flowbite-react";
import { AiFillGoogleCircle } from "react-icons/ai";
import { app } from "../firebase";
import {getAuth, GoogleAuthProvider, signInWithPopup} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {signInSuccess} from "../redux/user/userSlice.js";

const OAuth = ()=>{

    const dispatch = useDispatch();
    const Navigate = useNavigate();

    const handleGoogleClick = async()=>{
        const auth = getAuth(app);
        const provider = new GoogleAuthProvider();
        provider.setCustomParameters({prompt:'select_account'});
       
        try{

            const resultFromGoogle = await signInWithPopup(auth,provider)
            const res = await fetch('/api/auth/google',{
                method:"POST",
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify({
                    name:resultFromGoogle.user.displayName,
                    email:resultFromGoogle.user.email,
                    googlePhotoUrl:resultFromGoogle.user.photoURL,
                }),
            })
            const data = await res.json()
            
            if(res.ok){
               dispatch(signInSuccess(data));
               Navigate("/");
            }

        }catch(err){
            console.log(err);
        }

    }
    
    return (
      <Button outline gradientDuoTone="pinkToOrange" onClick={handleGoogleClick}>
        <AiFillGoogleCircle className="w-6 h-6 mr-2" />
        Continue with Google
      </Button>
    );
}


export default OAuth;