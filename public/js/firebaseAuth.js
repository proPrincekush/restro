function checkIfLoggedIn(){

    firebase.auth().onAuthStateChanged(function(user){
        if(user){  
            var photoURL = user.photoURL;
            console.log("user signed in");
                  
            console.log(user);
                    document.getElementById("goodToGo")
                    .setAttribute("style",'display:none;visibility:hidden');
        
                    document.getElementById("Bye")
                    .setAttribute("style",'display:inline-block;visibility:visible');
                    document.getElementById("pic").src=photoURL;

                    document.getElementById("userSignedIn")
                    .setAttribute("style",'visibility:visible');


            }
            else{
                console.log("user signed out");
                document.getElementById("goodToGo")
                    .setAttribute("style",'display:inline-block;visibility:visible')
                  
                document.getElementById("Bye")
                    .setAttribute("style",'display:none;visibility:hidden');

               
                document.getElementById("userSignedIn")
                    .setAttribute("style",'display:none;visibility:hidden');     
                }
            });
   

    // if(localStorage.getItem("firebase_idToken")){
    //         document.getElementById("goodToGo")
    //         .setAttribute("style",'display:none;visibility:hidden');

    //         document.getElementById("Bye")
    //         .setAttribute("style",'display:inline-block;visibility:visible');

    //         document.getElementById("pic").src=localStorage.getItem("googleUserPic");
    // }
    // else{
    //     document.getElementById("goodToGo")
    //         .setAttribute("style",'display:inline-block;visibility:visible')
          
    //    document.getElementById("Bye")
    //         .setAttribute("style",'display:none;visibility:hidden');
    
    //     }

      
}

window.onload=function(){
    checkIfLoggedIn();
}

function LogInWithGoogle() {
   
firebase.auth().signInWithRedirect(new firebase.auth.GoogleAuthProvider());

   // Using a popup.
firebase.auth().getRedirectResult()
.then(function(result) {
    console.log(result);  
//  This gives you a Google Access Token.
 var idtoken = result.credential.idToken;
//  localStorage.setItem("firebase_idToken",idtoken);
//  localStorage.setItem("googleUserPic",result.user.photoURL);

 // The signed-in user info.
//  var user = result.user;
 var userName = result.user.displayName;
 var UserEmail = result.user.email;
console.log(userName);
console.log(UserEmail);
    document.getElementById("userName").innerHTML=userName;
    document.getElementById("userEmail").innerHTML=UserEmail;
    document.getElementById("pic").src=photoURL;

    checkIfLoggedIn();
})
.catch(function(error){
    console.log(error);  
})


}

function LogOut() {
    
    firebase.auth().signOut();
    checkIfLoggedIn();
    location.reload();  
}
// location.reload();
// checkIfLoggedIn();