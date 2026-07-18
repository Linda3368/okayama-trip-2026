/* ===================================
   岡山瀨戶內慢旅
   Budget System
=================================== */


/*
    初始預算資料
*/


let expenses = JSON.parse(

    localStorage.getItem(
        "okayama_budget"
    )

) || [];





/*
    新增花費

    category:
    flight
    hotel
    transport
    food
    shopping

*/


function addExpense(

    category,

    item,

    amount,

    currency="JPY"

){


    const expense={


        id:Date.now(),


        category:category,


        item:item,


        amount:Number(amount),


        currency:currency,


        date:

        new Date()

        .toLocaleDateString(
            "zh-TW"
        )


    };



    expenses.push(expense);



    saveExpenses();


    renderBudget();

}





/*
    儲存
*/


function saveExpenses(){


    localStorage.setItem(

        "okayama_budget",

        JSON.stringify(
            expenses
        )

    );

}





/*
    計算總額
*/


function totalExpense(){


    return expenses.reduce(

        (sum,item)=>

        sum+item.amount,

        0

    );

}





/*
    顯示預算
*/


function renderBudget(){


    const area=

    document.getElementById(
        "budget-area"
    );



    if(!area){

        return;

    }



    let html="";



    expenses.forEach(

        e=>{


            html+=`

            <div class="budget-item">

            📌 ${e.item}

            <br>

            💴 ${e.amount}

            ${e.currency}

            <br>

            📅 ${e.date}

            </div>

            `;


        }

    );




    html+=`

    <hr>

    <h3>

    總花費：

    ${totalExpense()}

    </h3>


    `;



    area.innerHTML=html;


}





/*
    清除資料
*/


function clearBudget(){


    if(

        confirm(
            "確定清除所有花費？"
        )

    ){


        expenses=[];


        saveExpenses();


        renderBudget();


    }


}





window.addEventListener(

"load",

()=>{


    renderBudget();


}

);
