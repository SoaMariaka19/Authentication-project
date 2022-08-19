export const config = {
    firebaseConfig:{
        apiKey:process.env.REACT_APP_APIKEY ,
        authDomain: process.env.REACT_APP_DOMAIN,
        projectId: process.env.REACT_APP_ID,
        storageBucket: process.env.REACT_APP_BUCKET,
        messagingSenderId:process.env.REACT_APP_SENDERID ,
        appId: process.env.REACT_APP_APPID,
        measurementId: process.env.REACT_APP_MEASUREMENTID
    }
}