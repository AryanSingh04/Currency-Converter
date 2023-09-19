const list=document.querySelectorAll(".list");
var list_arry=[...list]
var frate="0",trate="0",tcode
let opt="";
function country(){
  for(let i=0; i<list.length; i++){
    for(currency_list in country_list){
  let selected
  if(i==0){
    selected=currency_list == "USD" ? "selected":" "
 }
 if(i==1){
  selected=currency_list == "INR" ? "selected":" "
}
             opt+=`<option value=${currency_list} ${selected}>${country_list[currency_list]}</option>`;  
             list[i].innerHTML=opt;

    }

    list[i].addEventListener("change",function(e){
     
      for(currency_list in country_list){
        if(e.target.value == currency_list)
        {
      let flag=country_list[currency_list]
      let img=list[i].parentElement.getElementsByTagName("img")[0];;
      img.src=`https://www.countryflagicons.com/FLAT/64/${flag}.png`
      }
   } })}
}
country();
function api(){
  let from =document.getElementById("from-c").value
  let to =document.getElementById("to-c").value
  let url="https://api.currencyfreaks.com/v2.0/rates/latest?apikey=c69cea2f54284f9fac600036fab03713"
  fetch(url).then(response=>response.json()).then((data)=>{
   frate=(data.rates[from])
   trate=(data.rates[to])
   tcode=to
 
   let amount= document.getElementById("amount").value
   let result = (amount * Number((trate/frate))).toFixed(3) 
       var dsplay=document.querySelector("#rate");
       dsplay.textContent =`${tcode} ${(result)}`;
  })}

function fun(){
  let button = document.getElementById("button")
  button.addEventListener("click",function(e){
    e.stopPropagation()
    if(amount=="" || amount==0){
      alert('Please enter the Amount')
      return;
     }
    api()
  })
}
fun()
let swap=document.getElementById("swap")
  swap.addEventListener("click",function(){
      let temp=list[0].value;
      list[0].value=list[1].value  ; 
      list[1].value=temp;
      let timg=list[0].parentElement.getElementsByTagName("img")[0].src;
      list[0].parentElement.getElementsByTagName("img")[0].src=list[1].parentElement.getElementsByTagName("img")[0].src;
      list[1].parentElement.getElementsByTagName("img")[0].src=timg
     
  })
