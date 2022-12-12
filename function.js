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
    console.log(sectionCards);
    for(let i=0;i<cards.length;i++){
        sectionCards.appendChild(createCard(cards[i]));
    }
}

//function primeste ca parametru  un vector numarul paginii si numarul de elemente pe pagina 
//si retunrneaza doar obiectle de pe pagina respectiva


//[12,32,43,54,56,1,2,3,4,5]   2  3

function paginatie(arr,nrOfPage,nrObjects){
    let index = (nrOfPage*nrObjects)-nrObjects;
    let objectarr=[];
    let count=index+nrObjects;
    for(let i=index;i<count;i++){

        objectarr.push(arr[i]); 
          
    }
    return objectarr;
}

