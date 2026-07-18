/* ===================================
   岡山瀨戶內慢旅
   Checklist System
=================================== */


const checklistItems = [

    "護照",

    "機票資料",

    "手機",

    "行動電源",

    "充電線",

    "日本轉接頭",

    "ICOCA",

    "日幣",

    "信用卡",

    "常備藥",

    "防曬用品",

    "帽子",

    "雨傘",

    "薄外套",

    "相機",

    "記憶卡"

];





/*
    建立清單
*/


function createChecklist(){


    const area =

    document.getElementById(
        "checklist-area"
    );



    if(!area){

        return;

    }



    let html="";



    checklistItems.forEach(

        (item,index)=>{


            let checked=

            localStorage.getItem(

                "check_"+index

            )

            ==="true";



            html+=`

            <label class="check-item">

            <input

            type="checkbox"

            ${checked?"checked":""}

            onchange="saveCheck(${index},this.checked)"

            >

            ${item}

            </label>

            <br>

            `;


        }

    );



    area.innerHTML=html;


}





/*
    保存勾選狀態
*/


function saveCheck(

    index,

    value

){


    localStorage.setItem(

        "check_"+index,

        value

    );


    updateProgress();


}






/*
    完成比例
*/


function updateProgress(){


    let done=0;



    checklistItems.forEach(

        (_,index)=>{


            if(

            localStorage.getItem(

                "check_"+index

            )

            ==="true"

            ){

                done++;

            }


        }

    );



    let percent=

    Math.round(

        done /

        checklistItems.length *

        100

    );



    const result=

    document.getElementById(

        "check-progress"

    );



    if(result){

        result.innerHTML=

        `完成度：${percent}%`;

    }


}




window.addEventListener(

"load",

()=>{


    createChecklist();


    updateProgress();


});
