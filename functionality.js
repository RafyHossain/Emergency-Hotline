
function setCount(id) {
    const count = document.getElementById(id);
    const newCount = parseInt(count.innerText)+1;
    count.innerText =newCount; 
     
}



function setPointCount() {
    const count=document.getElementById("point-count");
    const current=parseInt(count.innerText);
    if (current<20) {
        alert("You have not enough coin.Atlest 20 coin needed.");
        return 0;
        
        
    } 
    else {
        
        
        count.innerText=current-20;
        return 1;
        

    }
}


const hearts=document.getElementsByClassName("hearts");
for (const heart of hearts) {
    heart.addEventListener("click", function () {
        setCount("heart-count");
        
    });
}


const historyContainer=document.getElementById("call-history");
const points = document.getElementsByClassName("points");

for (const point of points) {
    point.addEventListener("click", function () {
       
        //setPointCount();
        if(!setPointCount()){
         return;
    }
       

        const card=point.closest(".card-search");
        const title=card.querySelector(".card-title").innerText;
        const number=card.querySelector(".card-number").innerText;

        alert("Calling "+title+" "+ number)

        const div = document.createElement("div");
        div.innerHTML = `
            <div class="flex justify-between items-center bg-[#fafafa] p-3 rounded-lg">
          <div>
            <p class="font-bold text-black">${title}</p>
          <p class="text-xs text-gray-400">${number}</p>
          </div>
          <p class="text-xs text-black">${new Date().toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric',second:'numeric',hour12:true })}</p>
        </div>
        `;
        historyContainer.appendChild(div);
    });
}


const clearBtn =document.getElementById("clear-btn"); 
clearBtn.addEventListener("click", function () {
    const callHistory=document.getElementById("call-history");
    callHistory.innerHTML=""; 
});



const copyButtons=document.getElementsByClassName("copy-text");

for (const btn of copyButtons) {
    btn.addEventListener("click", function () {
             
        const card=btn.closest(".card-search"); 
        const number=card.querySelector(".card-number").innerText;
        navigator.clipboard.writeText(number);
        alert("Copied: "+ number);
        setCount("copy-count")

        
        
    });
}