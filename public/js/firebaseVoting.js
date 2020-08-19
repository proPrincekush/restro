function AddRest(){
    // e.preventDefault();
    var database = firebase.database();
    var restRef = database.ref("/Restaurent");
    let restInput = document.getElementById("add");
    let Address = document.getElementById("location").value;

    let restName = restInput.value
   
    restInput.value="";
    console.log(restName);
    restRef.push({
        name:restName,
        address:Address,
        votes:0,
        upvotes:0,
        downvotes:0
    })
    .then(function(){
        location.reload(); 
    })
    .catch(function(err){
        console.log(err);
        
    })
    return true
}


function voted(key){
    var database = firebase.database();
    
    
    var user = firebase.auth().currentUser
    var userId = user.uid
    var displayName = user.displayName
    var restRef = database.ref("/Restaurent/"+key+"/votes/"+userId)
    console.log(userId);


   restRef.set(displayName)
   .then(function(){
       console.log("voted");
          location.reload()
   })
   .catch(function(err){
       console.log(err);
       
   })

}


function upvote(key){
    voted(key);
    console.log(key);
    var database = firebase.database();
    
    
     var user = firebase.auth().currentUser
     var userId = user.uid
     var displayName = user.displayName
     var restRef = database.ref("/Restaurent/"+key+"/upvotes/"+userId)
     console.log(userId);


    restRef.set(displayName)
    .then(function(){
        console.log("upvoted");
           location.reload()
    })
    .catch(function(err){
        console.log(err);
        
    })
 
}
function downvote(key) {
    voted(key);
    var database = firebase.database();
    
    var user = firebase.auth().currentUser
    var userId = user.uid
    var displayName = user.displayName
    var restRef = database.ref("/Restaurent/"+key+"/downvotes/"+userId)
 
    // restRef.remove()
    restRef.set(displayName)
    .then(function(){
        console.log("downVoted");
        location.reload()
    })
    .catch(function(err){
        console.log(err);
        
    })
   
}