let el=document.getElementById("letter");
let input=document.getElementById("box");

function sort_on(){
    let value=input.value.split(",");
    value.sort(function(a,b){
        return a-b;
    });
    el.innerHTML=value.join(",");
}
function reverse_on(){
    let value=input.value.split(",");
    el.innerHTML=value.reverse().join(",");
}
function EvenOdd(){
    let number=input.value.split(",");
    const even=number.filter((num)=>num%2==0);
    const odd=number.filter((num)=>num%2!=0);
    el.innerHTML=("Even: "+even+" &odd:"+odd);

}
function MaxMin(){
    let num=input.value.split(",");
    let max=num[0];
    for(let i=0;i<num.length;i++){
        if(max<num[i]){
            max=num[i];
        }
    }
    let min=num[0];
    for(let i=0;i<num.length;i++){
        if(min>num[i]){
            min=num[i];
        }
    }
    el.innerHTML =("Max: "+max+" &MIN: "+min);
}
function AddElement(){
    el.innerHTML=input.value;
}