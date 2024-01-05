document.addEventListener("DOMContentLoaded", function () {
       let burger =  document.getElementById('menu')
       var clicked = false
       window.addEventListener('click', function(){
            if (!clicked){
                burger.classList.toggle('hiden')
            }
            else{
                burger.classList.toggle('unhiden')
            }
            clicked = !clicked
       
       })
})