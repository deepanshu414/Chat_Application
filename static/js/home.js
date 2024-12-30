document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        const usersList = document.querySelectorAll('.users-list');
        searchInput.addEventListener('keyup', function() {
        const searchTerm = this.value.toLowerCase();
        usersList.forEach(function(user) {
            const username = user.querySelector('.username').textContent.toLowerCase();
            if (username.includes(searchTerm)) {
            user.style.display = '';
            } else {
            user.style.display = 'none';
            }
        });
        });
    } else {
        console.error("Element with id 'searchInput' not found");
    }
});
function handleClick(event){
    let clickedDiv = event.target.closest('.users-list');
    let currentuserid = clickedDiv.querySelector('#hide').value;
    let currentuserimage = clickedDiv.querySelector('#currentimage');
    let currentusername = clickedDiv.querySelector('#username').innerHTML;
    sessionStorage.setItem("current_user_id",currentuserid);
    sessionStorage.setItem("current_user_name",currentusername);
    sessionStorage.setItem("current_user_image",currentuserimage.src);
}
function updateStatus() {
    if (navigator.onLine) {
        sessionStorage.setItem("status","Online");
    } else {
        sessionStorage.setItem("status","Offline");
    }
}
function funcall(){
window.addEventListener('online', updateStatus);
window.addEventListener('offline', updateStatus);
updateStatus();
}
setInterval(funcall, 3000);
function main_user(){
    let main_user_id=document.getElementById("hide1").value;
    let main_user_lastname=document.getElementById("hid").value;
    let main_user_name=document.getElementById("mainusername").innerHTML;
    let main_user=main_user_name+main_user_lastname;
    sessionStorage.setItem("filepath","");
    sessionStorage.setItem("main_user_id",main_user_id);
    sessionStorage.setItem("main_user_name",main_user);
}
main_user()
function logout(){
    sessionStorage.removeItem("main_user_id");
    sessionStorage.removeItem("filepath");
    sessionStorage.removeItem("main_user_name");
    sessionStorage.removeItem("current_user_id");
    sessionStorage.removeItem("current_user_name");
    sessionStorage.removeItem("query_array_7_48");
    sessionStorage.removeItem("current_user_image");
}
function inputshow(){
    let input=document.getElementById("searchInput");
    let label=document.getElementById("label");
    let search=document.getElementById("search");
    let cross=document.getElementById("cross");
    input.style.display="inline-block";
    label.style.display="none";
    search.style.display="none";
    cross.style.display="inline-block";
}
function notinputshow(){
    let input=document.getElementById("searchInput");
    let label=document.getElementById("label");
    let search=document.getElementById("search");
    let cross=document.getElementById("cross");
    input.value="";
    const usersList = document.querySelectorAll('.users-list');
    usersList.forEach(function(user) {
    user.style.display = '';
    });
    input.style.display="none";
    label.style.display="inline-block";
    search.style.display="inline-block";
    cross.style.display="none";
}