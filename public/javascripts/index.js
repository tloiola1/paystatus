$(document).ready( function(){
    $(document).on('submit', function () {
        localStorage.setItem("email", $("#email").val().trim());
    });
}) 


function enter(res){
    window.location = "/userpage";
    // document.cookie = "username=; expires=Mon, 30  Jan 2023 12:00:00 UTC; path=/userpage";
}

