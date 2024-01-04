const URL = 'https://cat-fact.herokuapp.com/facts';
const uri = "https://animechan.xyz/api/random";
let txt = document.querySelector('#facts');
let txt2 = document.querySelector('#facts2');

const getFacts = async () =>{
    const response = await fetch(URL);
    const data = await response.json();
    txt.innerText = data[0].text;
}
getFacts();

// Same thing can be done through promise chaining 
//( using promise to handle multiple asynchronous tasks )

function getFacts2 (){
    
    fetch(uri).then((response2)=>{
        return response2.json();
    }).then((data)=>{
        txt2.innerText=data.quote;
    })
}
getFacts2();