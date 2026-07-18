/* ===================================
   岡山瀨戶內慢旅
   Budget System 修正版
=================================== */


let expenses = JSON.parse(
    localStorage.getItem("okayama_budget")
) || [];



function saveExpenses(){

    localStorage.setItem(
        "okayama_budget",
        JSON.stringify(expenses)
    );

}



function addExpense(){


    const item =
    document.getElementById("budget-item").value;


    const money =
    document.getElementById("budget-money").value;


    const type =
    document.getElementById("budget-type").value;



    if(item === "" || money === ""){

        alert("請輸入花費項目與金額");

        return;

    }



    expenses.push({

        item:item,

        amount:Number(money),

        type:type,

        date:new Date().toLocaleDateString("zh-TW")

    });



    saveExpenses();


    renderBudget();


    document.getElementById("budget-item").value="";

    document.getElementById("budget-money").value="";


}




function renderBudget(){


    const list =
    document.getElementById("budget-list");


    const total =
    document.getElementById("budget-total");



    if(!list){

        return;

    }



    let html="";


    let sum=0;



    expenses.forEach((e,index)=>{


        sum += e.amount;



       html += `

<div class="schedule-item">

📌 ${e.item}

<br>

💴 ${e.amount} 日圓

<br>

📂 ${e.type}

<br>

📅 ${e.date}

<br><br>

<button onclick="deleteExpense(${index})">

🗑️ 刪除

</button>


</div>

`;


    });



    list.innerHTML=html;



    if(total){

        total.innerHTML=
        "目前總花費：" + sum + " 日圓";

    }


}




window.onload=function(){

    renderBudget();

};
function deleteExpense(index){


    if(confirm("確定刪除此筆花費嗎？")){


        expenses.splice(index,1);


        saveExpenses();


        renderBudget();


    }


}
