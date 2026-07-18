/* ===================================
   岡山瀨戶內慢旅
   Checklist System
=================================== */


const checklistItems = [

    // 🧳 行李收納
    "行李箱",
    "行李袋",
    "背包",
    "隱形腰包",
    "衣物收納袋",
    "盥洗用品收納包",
    "化妝包",
    "環保購物袋",
    "行李箱束帶",
    "行李電子秤",
    "手機掛繩",

    // 📄 證件與重要物品
    "機票",
    "護照",
    "身分證",
    "駕照",
    "行程表",
    "2吋大頭照",
    "鑰匙",
    "外幣現金",
    "信用卡",

    // 📱 3C用品
    "手機",
    "充電器",
    "行動電源",
    "耳機",
    "自拍桿",

    // 👕 衣物
    "短袖衣服",
    "短褲",
    "長褲",
    "內搭褲",
    "內衣",
    "內褲",
    "睡衣",
    "薄外套",
    "帽子",
    "襪子",
    "拖鞋",

    // 🧴 盥洗用品
    "洗面乳",
    "毛巾",
    "潔牙用品",
    "化妝棉",
    "棉花棒",
    "眼鏡盒",
    "隱形眼鏡",
    "太陽眼鏡",
    "防曬乳",
    "化妝用品",

    // 🧻 生活用品
    "衛生紙",
    "口罩",
    "飲料提袋",
    "濕紙巾",

    // 💊 其他
    "常備藥物",
    "衛生棉"

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
