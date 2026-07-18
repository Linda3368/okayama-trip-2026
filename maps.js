/* ===================================
   岡山瀨戶內慢旅
   Leaflet 互動地圖
=================================== */


/*
    景點座標資料
*/


const spots = {


    okayamaStation:{
        name:"岡山站",
        lat:34.6668,
        lng:133.9185
    },


    onomichi:{
        name:"尾道 千光寺",
        lat:34.4092,
        lng:133.2050
    },


    neko:{
        name:"尾道 貓之細道",
        lat:34.4098,
        lng:133.2058
    },


    kibitsuHiko:{
        name:"吉備津彥神社",
        lat:34.6738,
        lng:133.8467
    },


    kibitsu:{
        name:"吉備津神社",
        lat:34.6708,
        lng:133.8461
    },


    kokubunji:{
        name:"備中國分寺",
        lat:34.6742,
        lng:133.7590
    },


    kurashiki:{
        name:"倉敷美觀地區",
        lat:34.5966,
        lng:133.7718
    },


    korakuen:{
        name:"岡山後樂園",
        lat:34.6687,
        lng:133.9368
    },


    okayamaCastle:{
        name:"岡山城",
        lat:34.6673,
        lng:133.9350
    },


    hiruzen:{
        name:"蒜山高原",
        lat:35.2968,
        lng:133.6585
    },


    aeon:{
        name:"AEON Mall 岡山",
        lat:34.6655,
        lng:133.9176
    }


};





/*
    建立地圖
*/


let map;



function initMap(){


    map = L.map('map-area')
    
    .setView(

        [
            34.6668,
            133.9185
        ],

        11

    );



    L.tileLayer(

        'https://tile.openstreetmap.org/{z}/{x}/{y}.png',

        {

        attribution:
        '&copy; OpenStreetMap'

        }

    )

    .addTo(map);




    Object.values(spots)

    .forEach(

        spot=>{


            L.marker(

                [
                    spot.lat,
                    spot.lng
                ]

            )

            .addTo(map)

            .bindPopup(

                `
                <b>${spot.name}</b>
                <br>
                <br>
                <a target="_blank"
                href="https://www.google.com/maps/search/?api=1&query=${spot.lat},${spot.lng}">
                開啟導航
                </a>
                `

            );


        }

    );


}





window.addEventListener(

"load",

()=>{


    if(

        document.getElementById(
            "map-area"
        )

    ){

        initMap();

    }


}

);
