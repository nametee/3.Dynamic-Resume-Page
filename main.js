function changeColorName(color){
    document.getElementById("fullName").style.color = color;
}

function changeName(){
    let fullName = document.getElementById("fullName");
    let text = prompt("New Full Name ["+ fullName.innerText +"]",fullName.innerText);
    if (text === null){
        console.log("cancel");
    }else{ 
        fullName.innerText = text;
    }
} 
 
let backgroundColor = ["#fff","#FFC0CB","#F0E68C","#90EE90","#66CDAA","rgb(82, 168, 211)"];
let indexbackgroundColor = 0;

function changeBackgroundColor(){
    let main = document.getElementById('main');
    let maxIndex = backgroundColor.length;
    if (indexbackgroundColor === maxIndex){
        indexbackgroundColor=0;
    }else{
        indexbackgroundColor+=1;
    }
    main.style.backgroundColor = backgroundColor[indexbackgroundColor];
}

let specialSkill = ["Babysitter","Chatty"]; 

function getListSpecialSkill(){ 
    let list = document.getElementById("listSpecialSkill"); 
    for (let i in specialSkill){   
        let textNode = document.createTextNode(specialSkill[i]);
        let li = document.createElement("li");  
        let id = "li-special-skill-" + i;
        li.setAttribute("id",id);
        li.setAttribute("onclick","editItemListSpecialSkill('" + id + "' , " + i + ")");
        li.appendChild(textNode); 
        list.appendChild(li);
    }
}

function newItemListSpecialSkill(){
    let newItem = prompt("New Special Skill",""); 
    if (newItem){
        specialSkill.push(newItem); 
        let count = specialSkill.length -1;
        let list = document.getElementById("listSpecialSkill"); 
        let textNode = document.createTextNode(newItem);
        let li = document.createElement("li");  
        let id = "li-special-skill-" + count;
        li.setAttribute("id",id);
        li.setAttribute("onclick","editItemListSpecialSkill('" + id + "'," + count + ")"); 
        li.appendChild(textNode); 
        list.appendChild(li);  
    }
}

function editItemListSpecialSkill(id,index){ 
    let li = document.getElementById(id); 
    let newText = prompt("Edit Special Skill [" + li.innerText + "]  ** if text is empty : remove item **",li.innerText);
    if (newText === null){
        console.log("cancel");
    }else{  
        if (newText ===""){
            let list = document.getElementById("listSpecialSkill"); 
            list.removeChild(li);
            specialSkill.length = 0;  
            let count = 0;
            let node =document.querySelectorAll('#listSpecialSkill li');
            for (let i =0; i < node.length; i++){  
                let id = "li-special-skill-" + i;
                node[i].setAttribute("id",id);
                node[i].setAttribute("onclick","editItemListSpecialSkill('" + id + "'," + i + ")");  
            }
        }else{ 
            li.innerText = newText;
            specialSkill[index] = newText;  
        }
    }

} 

