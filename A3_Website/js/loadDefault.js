// add jquery
let scriptTag = document.createElement('script');
scriptTag.src = 'https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js';
document.head.appendChild(scriptTag);



// after jquery loads
window.onload = () => {
    $(document).ready(function() {
        $("#header").load("../html/header.html");
    });

    $(document).ready(function() {
        $("#footer").load("../html/footer.html");
    });
}





var link = document.createElement("link");
link.rel = "stylesheet";
link.type = "text/css";
link.href = "../style/header.css";
document.head.appendChild(link);




link = document.createElement("link");
link.rel = "stylesheet";
link.type = "text/css";
link.href = "../style/footer.css";
document.head.appendChild(link);


link = document.createElement("link");
link.rel = "stylesheet";
link.type = "text/css";
link.href = "../style/defaults.css";
document.head.appendChild(link);