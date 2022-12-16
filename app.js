let paginationSection=document.querySelector(".pagination");
let cardsSection=document.querySelector(".cards");
let asideContainer=document.querySelector(".modal");


createButtons(data,6);
createPage(1);

paginationSection.addEventListener("click",(e)=>{
    let obj=e.target;

    if(obj.classList.contains("number")){

        let number =+obj.firstChild.textContent;

        createPage(number);
        
    }
})

cardsSection.addEventListener("click",(e)=>{
    let obj=e.target;
    if(obj.classList.contains('card')){
        asideContainer.style.display='flex';
        let findObject=findObjectByEmail(data,obj.children[2].textContent);
        asideContainer.appendChild(createModal(findObject));
    }
})


asideContainer.addEventListener("click",(e)=>{
      let obj=e.target;
      if(obj.classList.contains('exit-btn')){
        asideContainer.style.display='none';
        asideContainer.removeChild(asideContainer.children[0]);
      }
     
})
