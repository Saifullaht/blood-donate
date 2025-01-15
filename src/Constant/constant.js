 

const devUrl = "http://localhost:4000/";
const  DeployURl = "https://blood-backend-er.vercel.app/";

export const BaseURl = devUrl


 
export const AppRoutes ={
    login : BaseURl + "auth/login",
    register : BaseURl + "auth/register",
    Googlelogin : BaseURl + "auth/googlelogin",
    myinfo : BaseURl + "user/myinfo",
    DonarForm : BaseURl + "donarsinfo",
     
     
}