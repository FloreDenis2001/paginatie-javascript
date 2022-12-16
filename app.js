let paginationSection=document.querySelector(".pagination");
let cardsSection=document.querySelector(".cards");
let asideContainer=document.querySelector(".modal");
let asideEdit=document.querySelector(".edit-container");


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
      }else if(obj.classList.contains('edit-modal')){
        asideContainer.style.display='none';
        asideEdit.style.display='flex';   
        let container=obj.parentNode.parentNode;
        let findObject=findObjectByEmail(data,container.children[3].textContent);
        console.log(editCreate(findObject));
        asideEdit.appendChild(editCreate(findObject));
    }else if(obj.classList.contains('delete-modal')){
        let container=obj.parentNode.parentNode;
        let findObject=findObjectByEmail(data,container.children[3].textContent);
        removeCard(data,findObject);
        createButtons(data,6);
      
    }
})


asideEdit.addEventListener("click",(e)=>{
    let obj=e.target;
    if(obj.classList.contains("cancel-btn")){
        asideEdit.style.display='none'; 
        asideContainer.style.display='flex';
        asideEdit.innerHTML=" ";
    }else if(obj.classList.contains("save-btn")){
        let container=obj.parentNode.parentNode;
        console.log(container);
        let findObject=findObjectByEmail(data,container.children[2].value);
        console.log(findObject);
        let valueName=container.children[1].value;
        let valueEmail=container.children[2].value;
        updateName(findObject,valueName);
        findObject.email=valueEmail;
        console.log(valueEmail+" "+valueName);
    }
})