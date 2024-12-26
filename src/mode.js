const element = document.body;
function myFunction(){
    element.classList.toggle("dark-mode");
    
    if(element.classList.contains("dark-mode")){
        localStorage.setItem('theme','dark')
    }
    else{
        localStorage.setItem('theme', 'light')
    }
}

window.addEventListener('DOMContentLoaded', () =>{
    const user_saved = localStorage.getItem('theme');
    if(user_saved == 'dark'){
        element.classList.add("dark-mode");
    }
});

