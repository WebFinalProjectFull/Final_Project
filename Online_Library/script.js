Swal.fire({
    icon: "info",
    text: "creator Amanzhol Nursultan"
}).then(function() {
    Swal.fire({
        title: "Play music?",
        confirmButtonText: "Yes",
        showDenyButton: true
    }).then(function(permission) {
        if (permission.isConfirmed) {
            document.getElementById("music").play()
        }
    })
})


function myFunction(stat) {
    alert("Browser is  📶 ");
}
