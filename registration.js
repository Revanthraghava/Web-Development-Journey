//module
function checkforuser(){
    console.log("checking for user");
    return true;
}

function registerUser(){
    console.log("user registered successfully")
}

module.exports={
    checkforuser:checkforuser,
    registerUser:registerUser
}