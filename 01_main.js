function updateTitle(titleContents, id){
    for(let i = 0; i < titleContents.length; i++){
        if (i === id){
            titleContents[i].classList.add("active")
        } else{
            titleContents[i].classList.remove("active")
        }
    }
}
function updateTable(tableContents, id){
    for(let i = 0; i < tableContents.length; i++){
        if (i === id){
            tableContents[i].classList.add("active")
        } else{
            tableContents[i].classList.remove("active")
        }
    }
}

function handleClick(titleContents, tableContents, btns){
    return function (event){
        let id = Array.from(event.target.parentNode.children).indexOf(event.target)
        updateTitle(titleContents, id)
        updateTable(tableContents, id)
        for(let i = 0; i <btns.length; i++){
            if(i===id) {
                btns[i].classList.add("active")
            } else{
                btns[i].classList.remove("active")
            }
        }
    }
}


document.addEventListener("DOMContentLoaded", function () {
    const titleContents= document.getElementsByClassName("title_content");
    const tableContents = document.getElementsByClassName("wrapper__content");
    const btns = document.getElementsByClassName("nav_button");
    for(let nav_button of btns){
        nav_button.addEventListener("click", handleClick(titleContents, tableContents, btns))
    }

});
