// isloggedIn=>

export const isLoggedIn = () =>{
    let data = localStorage.getItem("data");
    if(data != null) return true;
    else return false;
  
};

//docLogin => set to localStorage

export const doLogin = (data,next) => {
    localStorage.setItem("data",JSON.stringify(data));
    next()
};

//doLogout=> remove from localStorage

export const doLogout = (next) =>{
    localStorage.removeItem("data");
    next()
};
//get currentUser

export const getCurrentUserDetail = () =>{
    if(isLoggedIn){
        return JSON.parse(localStorage.getItem("data")).user;
    } else{
        return false;
    }
}