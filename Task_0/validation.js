document.querySelector("#sign-up-form")
    .addEventListener('submit',
    function(event){
        let userInformation = document.querySelectorAll("#sign-up-form>div>input");
        let user = {
            name: userInformation[0].value,
            email: userInformation[1].value,
            password: userInformation[2].value,
        };
        let json = JSON.stringify(user);
        let request = new XMLHttpRequest();
        request.open("POST", "http://127.0.0.1:8080/");
        request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
        request.onreadystatechange = function () {
                if (request.readyState == 4 && request.status == 200)
                    alert(request.responseText);
        }
        request.send(json);
});