function getUsername(){
  return localStorage.getItem('qb_usename') || 'Champion';

}

function openPopup(){
  const name = getUsername();
  document.getElementById('popup-username').textContent = name;
  document. getElementById('thankyou-popup').classList.add('active');
}

function closePopup(){
  document.getElementById('thankyou-popup').classList.remove('active');
}

document.getElementById('thankyou-popup').addEventListener('click',function(e){
  if(e.target=== this) closePopup();
})

 
//let state={};
//let rtStart, rtWait=false, rtTimer;

//function show(id){document.querySelectorAll('.task').forEach(s=>s.classList.remove('active'));document.getElementById(id).classList.add('active');}

//function play(){
  //  state={rtTimes:[],visScore:0,visQ:0,verbScore:0,verbQ:0,memWords:[],memRecalled:[],memTaps:[]};
    //show('t-sk'); startRT();
//}


  