function validateForm(){
    const username = document.forms["loginForm"]["username"].value
    const password = document.forms["loginForm"]["password"].value

    if(username == "" || password ==""){
        alert("Username dan Password harus diisi")
        return false
    }else{
        alert("Login Berhasil")
    }
}