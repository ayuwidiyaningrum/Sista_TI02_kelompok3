function login(){
    let email = document.getElementById("exampleInputEmail1").value;
    let password = document.getElementById("exampleInputPassword1").value;

    if(email == "admin@gmail.com" && password == "admin123"){
        alert("Login Sukses");
        window.location = "index1.html" 
        return false
    }else if(email == "user@gmail.com" && password == "user123"){
            alert("Login Sukses");
            window.location = "index1_1.html" 
            return false
    }else{
        return alert("Email atau Password Salah");
    }
}

document.querySelector("#login").addEventListener('click', function (event){
    event.preventDefault()
        login()
})
