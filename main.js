/*const prevBtn = document.querySelector("#prev-btn");
const nextBtn = document.querySelector("#next-btn"); */
const bone = document.querySelector("#a-one");
const btwo = document.querySelector("#a-two");
const bthree = document.querySelector("#a-three");
const bfour = document.querySelector("#a-four");
const Wconcept = document.querySelector("#b-one");
const Tconcept = document.querySelector("#b-two");
const Hconcept = document.querySelector("#b-three");
const Pconcept = document.querySelector("#b-four");
const book = document.querySelector("#book");

const paper1 = document.querySelector("#p1");
const paper2 = document.querySelector("#p2");
const paper3 = document.querySelector("#p3");
const paper4 = document.querySelector("#p4");


/*prevBtn.addEventListener("click", goPrevPage);
nextBtn.addEventListener("click", goNextPage);*/


let currentLocation = 1;
let numOfPapers = 4;
let maxLocation = numOfPapers + 1;

function openBook() {
    book.style.transform = "translateX(50%)";
    /*prevBtn.style.transform = "translateX(-180px)";*/
    bone.style.transform ="translateX(-180px)";
    btwo.style.transform ="translateX(-180px)";
    bthree.style.transform ="translateX(-180px)";
    bfour.style.transform ="translateX(-180px)";
    Wconcept.style.transform = "translateX(180px)";
    Tconcept.style.transform = "translateX(180px)";
    Hconcept.style.transform = "translateX(180px)";
    Pconcept.style.transform = "translateX(180px)";
}

function closeBook(isAtBeginning) {
    if(isAtBeginning) {
        book.style.transform = "translateX(0%)";
    } else {
        book.style.transform = "translateX(100%)";
    }
    
    /*prevBtn.style.transform = "translateX(0px)";*/
    bone.style.transform ="translateX(0px)";
    btwo.style.transform ="translateX(0px)";
    bthree.style.transform ="translateX(0px)";
    bfour.style.transform ="translateX(0px)";
    Wconcept.style.transform = "translateX(0px)";
    Tconcept.style.transform = "translateX(0px)";
    Hconcept.style.transform = "translateX(0px)";
    Pconcept.style.transform = "translateX(0px)";
}

function wconcept(){
    if (currentLocation = 1){
        openBook();
        paper1.classList.add("flipped");
        paper1.style.zIndex = 1;
        Wconcept.style.display ='none';
        bone.style.display = 'block';
    }
}

function tconcept(){
   if(currentLocation = 1){ 
    openBook();
    paper1.classList.add("flipped");
    paper2.classList.add("flipped");
    paper1.style.zIndex = 1;
    paper2.style.zIndex = 2;
    Wconcept.style.display ='none';
    Tconcept.style.display ='none';
    bone.style.display ='block';
    btwo.style.display ='block';
}
    else if(currentLocation = 2){
        paper2.classList.add("flipped");
    paper2.style.zIndex = 2;
    Wconcept.style.display ='none';
    Tconcept.style.display ='none';
    btwo.style.display ='block';
    }
}

function hconcept(){
    if(currentLocation = 1){ 
        openBook();
        paper1.classList.add("flipped");
        paper2.classList.add("flipped");
        paper3.classList.add("flipped");
        paper1.style.zIndex = 1;
        paper2.style.zIndex = 2;
        paper3.style.zIndex = 3;
        Wconcept.style.display ='none';
        Tconcept.style.display ='none';
        Hconcept.style.display ='none';
        bone.style.display ='block';
        btwo.style.display ='block';
        bthree.style.display ='block';
    }
        else if(currentLocation = 2){
        paper2.classList.add("flipped");
        paper3.classList.add("flipped");
        paper2.style.zIndex = 2;
        paper3.style.zIndex = 3;
        Tconcept.style.display ='none';
        Hconcept.style.display ='none';
        btwo.style.display ='block';
        bthree.style.display ='block';
        }
        else if(currentLocation = 3){
            paper3.classList.add("flipped");
            paper3.style.zIndex = 3;
            Hconcept.style.display ='none';
            bthree.style.display ='block';
        }
}

function pconcept(){
    if(currentLocation = 1){ 
        openBook();
        paper1.classList.add("flipped");
        paper2.classList.add("flipped");
        paper3.classList.add("flipped");
        paper4.classList.add("flipped");
        paper1.style.zIndex = 1;
        paper2.style.zIndex = 2;
        paper3.style.zIndex = 3;
        paper4.style.zIndex = 4;
        Wconcept.style.display ='none';
        Tconcept.style.display ='none';
        Hconcept.style.display ='none';
        Pconcept.style.display ='none';
        bone.style.display ='block';
        btwo.style.display ='block';
        bthree.style.display ='block';
        bfour.style.display ='block';
    }
        else if(currentLocation = 2){
        paper2.classList.add("flipped");
        paper3.classList.add("flipped");
        paper4.classList.add("flipped");
        paper2.style.zIndex = 2;
        paper3.style.zIndex = 3;
        paper4.style.zIndex = 4;
        Tconcept.style.display ='none';
        Hconcept.style.display ='none';
        Pconcept.style.display ='none';
        btwo.style.display ='block';
        bthree.style.display ='block';
        bfour.style.display ='block';
        }
        else if(currentLocation = 3){            
            paper3.classList.add("flipped");
            paper4.classList.add("flipped");
            paper3.style.zIndex = 3;
            paper4.style.zIndex = 4;
            Hconcept.style.display ='none';
            Pconcept.style.display ='none';
            bthree.style.display ='block';
            bfour.style.display ='block';
            }
        else if(currentLocation = 4){
            paper4.classList.add("flipped");
            paper4.style.zIndex = 4;
            Pconcept.style.display ='none';
            bfour.style.display ='block';
        }
}

function backfour(){
    if(currentLocation = 5){
    paper4.classList.remove("flipped");
    paper4.style.zIndex = 4;
    bfour.style.display = 'none';
    Pconcept.style.display = 'block';
    }
}

function backthree(){
    if(currentlocation = 5){
        paper4.classList.remove("flipped");
        paper3.classList.remove("flipped");
        paper4.style.zIndex = 3;
        paper3.style.zIndex = 4;
        bfour.style.display ='none';
        bthree.style.display='none';
        Hconcept.style.display = 'block';
        Pconcept.style.display = 'block'; 
    }
    else if(currentlocation = 4){
        paper3.classList.remove("flipped");
        paper3.style.zIndex = 4;
        bthree.style.display='none';
        Hconcept.style.display = 'block'; 
    }
}

function backtwo(){
    if(currentlocation = 5){
        paper4.classList.remove("flipped");
        paper3.classList.remove("flipped");
        paper2.classList.remove("flipped");
        paper2.style.zIndex = 4;
        paper4.style.zIndex = 2;
        paper3.style.zIndex = 3;
        bfour.style.display ='none';
        bthree.style.display='none';
        btwo.style.display = 'none';
        Hconcept.style.display = 'block';
        Pconcept.style.display = 'block';
        Tconcept.style.display = 'block'; 
    }
    else if(currentlocation = 4){
        paper3.classList.remove("flipped");
        paper3.style.zIndex = 3;
        paper2.classList.remove("flipped");
        paper2.style.zIndex = 4;
        bthree.style.display='none';
        btwo.style.display = 'none';
        Hconcept.style.display = 'block'; 
        Tconcept.style.display = 'block'; 
    }
    else if(currentlocation = 3){
        paper2.classList.remove("flipped");
        paper2.style.zIndex = 4;
        btwo.style.display = 'none';
        Tconcept.style.display = 'block'; 
    }
}

function backone(){
    if(currentlocation = 5){
        paper4.classList.remove("flipped");
        paper3.classList.remove("flipped");
        paper2.classList.remove("flipped");
        paper1.classList.remove("flipped");
        paper2.style.zIndex = 3;
        paper4.style.zIndex = 1;
        paper3.style.zIndex = 2;
        paper1.style.zIndex = 4;
        bfour.style.display ='none';
        bthree.style.display='none';
        btwo.style.display = 'none';
        bone.style.display = 'none';
        Hconcept.style.display = 'block';
        Pconcept.style.display = 'block';
        Tconcept.style.display = 'block'; 
        Wconcept.style.display = 'block';
    }
    else if(currentlocation = 4){
        paper3.classList.remove("flipped");
        paper3.style.zIndex = 2;
        paper2.classList.remove("flipped");
        paper2.style.zIndex = 3;
        paper1.classList.remove('flipped');
        paper1.style.zIndex = 4;
        bthree.style.display='none';
        btwo.style.display = 'none';
        bone.style.display ='none';
        Hconcept.style.display = 'block'; 
        Tconcept.style.display = 'block'; 
        Wconcept.style.display = 'block';
    }
    else if(currentlocation = 3){
        paper2.classList.remove("flipped");
        paper2.style.zIndex = 3;
        paper1.classList.remove("flipped");
        paper1.style.zIndex = 4;
        btwo.style.display = 'none';
        bone.style.display = 'none'
        Wconcept.style.display = 'block';
        Tconcept.style.display = 'block'; 
    }
    else if(currentlocation = 2){
        paper1.classList.remove("flipped");
        paper1.style.zIndex = 4;
        bone.style.display = 'none'
        Wconcept.style.display = 'block';
    }
}