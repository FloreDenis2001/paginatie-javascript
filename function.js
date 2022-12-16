function createCard(card){
    let containerCard=document.createElement('div');
    containerCard.classList.add("card");

    let cardImg=document.createElement('img');
    cardImg.classList.add("img-card");
    cardImg.src=card.picture.medium;

    let cardName=document.createElement('p');
    cardName.classList.add("card-name");
    cardName.textContent=card.name.first+" "+card.name.last;

    let cardEmail=document.createElement('p');
    cardEmail.classList.add("card-email");
    cardEmail.textContent=card.email;

    let cardLine=document.createElement('hr');
    cardLine.classList.add("card-line");

    let cardRegistered=document.createElement('p');
    cardRegistered.classList.add("card-registered");
    cardRegistered.textContent="Joined " + card.registered.date;


    containerCard.appendChild(cardImg);
    containerCard.appendChild(cardName);
    containerCard.appendChild(cardEmail);
    containerCard.appendChild(cardLine);
    containerCard.appendChild(cardRegistered);

    return containerCard;
}

function attachCards(cards){
    let sectionCards=document.querySelector('.cards');
    sectionCards.innerHTML="";
    for(let i=0;i<cards.length;i++){
        sectionCards.appendChild(createCard(cards[i]));
    }
}

function paginatie(arr,nrOfPage,nrObjects){
    let index = (nrOfPage*nrObjects)-nrObjects;
    let objectarr=[];
    let count=index+nrObjects;
    for(let i=index;i<count;i++){

        objectarr.push(arr[i]); 
          
    }
    return objectarr;
}

function countArr(arr){
    let count=0;
    for(let i=0;i<arr.length;i++){
        count++;
    }
    return count;
}


function howManyPageWeNeed(arr,nrObjects){
    let numberOfElements=countArr(arr);
    let numberOfPages=0;
    if(numberOfElements%nrObjects===0){
        numberOfPages=numberOfElements/nrObjects;
    }else if(numberOfElements%nrObjects>5){
        numberOfPages=(numberOfElements/nrObjects);
    }else if(numberOfElements%nrObjects<5){
        numberOfPages=(numberOfElements/nrObjects)+1;
    }

    return Math.round(numberOfPages);
}

function createButton(pageNumber){
    let pageLi=document.createElement('button');
    pageLi.classList.add("page-item");
    pageLi.classList.add("number");
    pageLi.textContent=pageNumber;
    
    return pageLi;

}


function createButtons(arr,nrObject){
    let pages=howManyPageWeNeed(arr,nrObject);
    let sectionPages=document.querySelector(".pagination .list");
    for(let i=0;i<pages;i++){
       sectionPages.appendChild(createButton(i+1));
    }
   
}


function createPage(pageNumber){
let filters=paginatie(data,pageNumber,6);
attachCards(filters);
}


function createModal(card){
    let cardModal=document.createElement('div');
    cardModal.classList.add('modal-container');

    let cardImg=document.createElement('img');
    cardImg.src=card.picture.medium;

    let cardName=document.createElement('p');
    cardName.classList.add('modal-name');
    cardName.textContent=card.name.first+" "+card.name.last;

    let cardEmail=document.createElement('p');
    cardEmail.classList.add('email-modal');
    cardEmail.textContent=card.email;


    let buttons=document.createElement('div');
    buttons.classList.add('buttons-container');

    let buttonEdit=document.createElement('button');
    buttonEdit.classList.add('edit-modal');
    buttonEdit.textContent='Edit';

    let buttonExit=document.createElement('button');
    buttonExit.classList.add('exit-btn');
    buttonExit.textContent='X';

    let buttonDelete=document.createElement('button');
    buttonDelete.classList.add('delete-modal');
    buttonDelete.textContent='Delete';
   

    let cardLine=document.createElement('hr');
    cardLine.classList.add("card-line");

    buttons.appendChild(buttonEdit);
    buttons.appendChild(buttonDelete);
    




   

    cardModal.appendChild(buttonExit);
    cardModal.appendChild(cardImg);
    cardModal.appendChild(cardName);
    cardModal.appendChild(cardEmail);
    cardModal.appendChild(cardLine);
    cardModal.appendChild(buttons);


    return cardModal;

}

function findObjectByEmail(arr,email){
    for(let i=0;i<arr.length;i++){
        if(arr[i].email===email){
            return arr[i];
        }
    }
    
}


function editCreate(card){
    let editDiv=document.createElement('div');
    editDiv.classList.add("edit-hover");
    let uploadDiv=document.createElement('div');
    uploadDiv.classList.add('upload');

    let img=document.createElement('img');
    img.src=card.picture.medium;
   
    let roundDiv=document.createElement('div');
    roundDiv.classList.add('round');

    let icon=document.createElement('i');
    icon.classList.add('fa-solid fa-upload');

    let inputImg=document.createElement('input');
    inputImg.type='file';

    roundDiv.appendChild(icon);
    roundDiv.appendChild(inputImg);
    
    uploadDiv.appendChild(img);
    uploadDiv.appendChild(roundDiv);

    

    let inputEmailCreate=document.createElement('input');
    inputEmailCreate.type='text';
    inputEmailCreate.classList.add="email-edit";

    let inputNameCreate=document.createElement('input');
    inputNameCreate.type='text';
    inputNameCreate.classList.add="name-edit";


     let saveContainer=document.createElement('div');
     saveContainer.classList.add('save-container');

     let btnSave=document.createElement('div');
     btnSave.classList.add('save-btn');



    editDiv.appendChild(inputNameCreate);
    editDiv.appendChild(inputEmailCreate);

    return editDiv;
   
}


