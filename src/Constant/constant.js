 

const devUrl = "http://localhost:3008/";
const  DeployURl = "https://blood-backend-er.vercel.app/";

export const BaseURl = DeployURl


 
export const AppRoutes ={
    login : BaseURl + "auth/login",
    register : BaseURl + "auth/register",
    Googlelogin : BaseURl + "auth/googlelogin",
    myinfo : BaseURl + "user/myinfo",
    donarForm : BaseURl + "donarsinfo",
     
     
}