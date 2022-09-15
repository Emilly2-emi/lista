var nameofPeople=[]

function enviar(){
    var GuestName=document.getElementById("l2").value;
    nameofPeople.push(GuestName);
    document.getElementById("l4").innerHTML=nameofPeople.toString();
}

function mostrar(){
    nameofPeople.sort();
    
    var i=nameofPeople.join("<br>");
    document.getElementById("l5").innerHTML=i.toString();
}

function pesquisar(){
    var tamanho=nameofPeople.length;
    var s=document.getElementById("l6").value;
    var found=0;
    var j;
    for(j=0;j<tamanho;j++){
        if(s==nameofPeople[j]){
            found=found+1;
        }
    
    }
    document.getElementById("l7").innerHTML="nome encontrado"+found+"vez(es)";
    
}