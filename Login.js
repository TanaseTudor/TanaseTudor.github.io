function LoginPage() {
    let name = document.getElementById("q").value;
    let password = document.getElementById("w").value;

    if(name == "tudor") {
        if(password == "3894") {
            
                location.href = "conectat.html"
            
        }
    }

    if(name == "rares") {
        if(password == "2431") {
            
                location.href = "conectat.html"
            
        }
    }
}

function DespreMine() {
    let name = document.getElementById("q").value;
    let password = document.getElementById("w").value;

    if(name == "tudor") {
        if(password == "12") {
            
                location.href = "DespreMine2.html"
            
        }
    }

    if(name == "rares") {
        if(password == "12") {
            
                location.href = "DespreMine2.html"
            
        }
    }
}

function Limitat()  {
    location.href = "limitat.html"
}