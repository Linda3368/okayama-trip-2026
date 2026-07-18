/* =================================
   岡山瀨戶內慢旅
   App JavaScript
================================= */


/*
    Google Maps 導航
*/

const maps = {


    onomichi:

    "https://www.google.com/maps/search/?api=1&query=Senkoji+Temple+Onomichi",


    kibiji:

    "https://www.google.com/maps/search/?api=1&query=Bitchu+Kokubunji+Temple",


    kurashiki:

    "https://www.google.com/maps/search/?api=1&query=Kurashiki+Bikan+Historical+Quarter",


    hiruzen:

    "https://www.google.com/maps/search/?api=1&query=Hiruzen+Highland",


    korakuen:

    "https://www.google.com/maps/search/?api=1&query=Okayama+Korakuen"

};



function openMap(place){


    if(maps[place]){


        window.open(
            maps[place],
            "_blank"
        );


    }else{


        alert(
            "地圖資料準備中"
        );


    }

}





/*
    行李清單記憶功能

    勾選後會保存在手機瀏覽器
*/


const checkboxes =

document.querySelectorAll(
    'input[type="checkbox"]'
);



checkboxes.forEach(
    
    (box,index)=>{


        let saved =

        localStorage.getItem(
            "bag_"+index
        );


        if(saved==="true"){

            box.checked=true;

        }



        box.addEventListener(
            "change",
            ()=>{


                localStorage.setItem(

                    "bag_"+index,

                    box.checked

                );


            }

        );


    }

);






/*
    旅行資訊
*/


const tripInfo={


    start:

    "2026/07/22",


    end:

    "2026/07/27",


    people:

    4,


    destination:

    "日本岡山"


};





/*
    計算距離出發日期
*/


function tripCountdown(){


    const today=

    new Date();


    const start=

    new Date(
        "2026-07-22"
    );


    const diff=

    start-today;


    const days=

    Math.ceil(

        diff /
        (1000*60*60*24)

    );



    console.log(

        "距離岡山旅行還有 "+
        days+
        " 天"

    );


}



tripCountdown();







/*
    簡易預算紀錄

    後續會連接 budget.js
*/


let budget={


    flight:0,

    hotel:0,

    transport:0,

    food:0,

    shopping:0

};



function totalBudget(){


    return (

        budget.flight+

        budget.hotel+

        budget.transport+

        budget.food+

        budget.shopping

    );

}





/*
    開啟時提醒
*/


window.onload=function(){


    console.log(

        "🍑 岡山瀨戶內慢旅 App 啟動"

    );


};
