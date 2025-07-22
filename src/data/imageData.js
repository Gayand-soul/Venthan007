
//separata arrayer för varje kategori med bilder-Arrayer

const imageDatabase = {
     
    //welcome-category
    welcome: {
        main: {
             thumbnails: [
                { id:1, thumbnailSrc:'/images/home/thumbnails/yellow01.jpg', fullsizeSrc:'/images/home/fullsize/MG_3226.jpg', alt:"Yellow building"},
                { id:2, thumbnailSrc:'/images/home/thumbnails/triangle01.jpg', fullsizeSrc:'/images/home/fullsize/Q000684.jpg', alt:'Triangle Bridge'},
                { id:3, thumbnailSrc:'/images/home/thumbnails/toilett02.jpg', fullsizeSrc:'/images/home/fullsize/MG_3141.jpg', alt:"Man waiting WC"},
                { id:4, thumbnailSrc:'/images/home/thumbnails/thepair01.jpg', fullsizeSrc:'/images/home/fullsize/U8A9462.jpg', alt:'Pair walking front Entrance'},
                { id:5, thumbnailSrc:'/images/home/thumbnails/detlef01.jpg', fullsizeSrc:'/images/home/fullsize/Q001475.jpg', alt:'Dear Detlef'},
                { id:6, thumbnailSrc:'/images/home/thumbnails/glass01.jpg', fullsizeSrc:'/images/home/fullsize/MG_2724.jpg', alt:'Glas with white&colorful Entrance'},

            ]
        }     
    },

     //people-category
    people: {
        main: {
            thumbnails: [
                { id:1, thumbnailSrc:'/images/home/thumbnails/detlef01.jpg', fullsizeSrc:'/images/home/fullsize/Q001475.jpg', alt:'Dear Detlef'},
                { id:2, thumbnailSrc:'/images/home/thumbnails/china01.jpg', fullsizeSrc:'/images/home/fullsize/MG_7150.jpg', alt:'China Museum'},
                { id:3, thumbnailSrc:'/images/home/thumbnails/muslim01.jpg', fullsizeSrc:'/images/home/fullsize/MG_5806.jpg', alt: 'Muslim woman'},
                { id:4, thumbnailSrc:'/images/home/thumbnails/egyptyellow01.jpg', fullsizeSrc:'/images/home/fullsize/MG_5860.jpg', alt:'Egypt pilar in yellow'},
                { id:5, thumbnailSrc:'/images/home/thumbnails/stripewall01.jpg', fullsizeSrc:'/images/home/fullsize/R010170.jpg', alt:'Green/Gray stripes building'},
                { id:6, thumbnailSrc:'/images/home/thumbnails/thepair01.jpg', fullsizeSrc:'/images/home/fullsize/U8A9462.jpg', alt:'Pair walking front Entrance'},
                { id:7, thumbnailSrc:'/images/home/thumbnails/detlef01.jpg', fullsizeSrc:'/images/home/fullsize/Q001475.jpg', alt:'Dear Detlef'},
                { id:8, thumbnailSrc:'/images/home/thumbnails/toilett02.jpg', fullsizeSrc:'/images/home/fullsize/MG_3141.jpg', alt:'Man waiting WC'},  

            ]
        },
        // Underkategorier (Project1, Project2)
        project1: {
            thumbnails: [
                { id:1, thumbnailSrc:'/images/home/thumbnails/thepair01.jpg', fullsizeSrc:'/images/home/fullsize/U8A9462.jpg', alt:'Pair walking front Entrance'},
                { id:2, thumbnailSrc:'/images/home/thumbnails/detlef01.jpg', fullsizeSrc:'/images/home/fullsize/Q001475.jpg', alt:'Dear Detlef'},
                { id:3, thumbnailSrc:'/images/home/thumbnails/toilett02.jpg', fullsizeSrc:'/images/home/fullsize/MG_3141.jpg', alt:'Man waiting WC'},
                { id:4, thumbnailSrc:'/images/home/thumbnails/stripewall01.jpg', fullsizeSrc:'/images/home/fullsize/R010170.jpg', alt:'Green/Gray stripes building'},
                { id:5, thumbnailSrc:'/images/home/thumbnails/glass01.jpg', fullsizeSrc:'/images/home/fullsize/MG_2724.jpg', alt:'Glas with white&colorful Entrance'},
                { id:6, thumbnailSrc:'/images/home/thumbnails/china01.jpg', fullsizeSrc:'/images/home/fullsize/MG_7150.jpg', alt:'China Museum'},
            ]

        },
        project2: {
            thumbnails: [
                { id:1, thumbnailSrc:'/images/home/thumbnails/egyptyellow01.jpg', fullsizeSrc:'/images/home/fullsize/MG_5860.jpg', alt:'Egypt pilar in yellow'},
                { id:2, thumbnailSrc:'/images/home/thumbnails/egyptgray01.jpg', fullsizeSrc:'/images/home/fullsize/MG_8234.jpg', alt:'Egypt pilar in gray'},
                { id:3, thumbnailSrc:'/images/home/thumbnails/glass01.jpg', fullsizeSrc:'/images/home/fullsize/MG_2724.jpg', alt:'Glas with white&colorful Entrance'},
                { id:4, thumbnailSrc:'/images/home/thumbnails/china01.jpg', fullsizeSrc:'/images/home/fullsize/MG_7150.jpg', alt:'China Museum'},
                { id:5, thumbnailSrc:'/images/home/thumbnails/toilett02.jpg', fullsizeSrc:'/images/home/fullsize/MG_3141.jpg', alt:'Man waiting WC'},
                { id:6, thumbnailSrc:'/images/home/thumbnails/thepair01.jpg', fullsizeSrc:'/images/home/fullsize/U8A9462.jpg', alt:'Pair walking front Entrance'},
            ]

        },
     
    },

     //street-category
     street: {
        main: {
            thumbnails: [
                { id:1, thumbnailSrc:'/images/home/thumbnails/triangle01.jpg', fullsizeSrc:'/images/home/fullsize/Q000684.jpg', alt:'Triangle Bridge'},
                { id:2, thumbnailSrc:'/images/home/thumbnails/muslim01.jpg', fullsizeSrc:'/images/home/fullsize/MG_5806.jpg', alt: 'Muslim woman'},
                { id:3, thumbnailSrc:'/images/home/thumbnails/balcony01.jpg', fullsizeSrc:'/images/home/fullsize/U8A9878.jpg', alt:'balcony missing'},
                { id:4, thumbnailSrc:'/images/home/thumbnails/stripewall01.jpg', fullsizeSrc:'/images/home/fullsize/R010170.jpg', alt:'Green/Gray stripes building'},
                { id:5, thumbnailSrc:'/images/home/thumbnails/thepair01.jpg', fullsizeSrc:'/images/home/fullsize/U8A9462.jpg', alt:'Pair walking front Entrance'},
                { id:6, thumbnailSrc:'/images/home/thumbnails/glass01.jpg', fullsizeSrc:'/images/home/fullsize/MG_2724.jpg', alt:'Glas with white&colorful Entrance'},
            ]
        },
        // Underkategorier (Project1, Project2)
        project1: {
            thumbnails: [
                { id:1, thumbnailSrc:'/images/home/thumbnails/china01.jpg', fullsizeSrc:'/images/home/fullsize/MG_7150.jpg', alt:'China Museum'},
                { id:2, thumbnailSrc:'/images/home/thumbnails/toilett02.jpg', fullsizeSrc:'/images/home/fullsize/MG_3141.jpg', alt:'Man waiting WC'},
                { id:3, thumbnailSrc:'/images/home/thumbnails/thepair01.jpg', fullsizeSrc:'/images/home/fullsize/U8A9462.jpg', alt:'Pair walking front Entrance'},
                { id:4, thumbnailSrc:'/images/home/thumbnails/china01.jpg', fullsizeSrc:'/images/home/fullsize/MG_7150.jpg', alt:'China Museum'},
                { id:5, thumbnailSrc:'/images/home/thumbnails/toilett02.jpg', fullsizeSrc:'/images/home/fullsize/MG_3141.jpg', alt:'Man waiting WC'},
                { id:6, thumbnailSrc:'/images/home/thumbnails/thepair01.jpg', fullsizeSrc:'/images/home/fullsize/U8A9462.jpg', alt:'Pair walking front Entrance'},

            ]
        },
        project2: {
            thumbnails: [
                { id:1, thumbnailSrc:'/images/home/thumbnails/egyptyellow01.jpg', fullsizeSrc:'/images/home/fullsize/MG_5860.jpg', alt:'Egypt pilar in yellow'},
                { id:2, thumbnailSrc:'/images/home/thumbnails/egyptgray01.jpg', fullsizeSrc:'/images/home/fullsize/MG_8234.jpg', alt:'Egypt pilar in gray'},
                { id:3, thumbnailSrc:'/images/home/thumbnails/glass01.jpg', fullsizeSrc:'/images/home/fullsize/MG_2724.jpg', alt:'Glas with white&colorful Entrance'},
                { id:4, thumbnailSrc:'/images/home/thumbnails/egyptyellow01.jpg', fullsizeSrc:'/images/home/fullsize/MG_5860.jpg', alt:'Egypt pilar in yellow'},
                { id:5, thumbnailSrc:'/images/home/thumbnails/egyptgray01.jpg', fullsizeSrc:'/images/home/fullsize/MG_8234.jpg', alt:'Egypt pilar in gray'},
                { id:6, thumbnailSrc:'/images/home/thumbnails/glass01.jpg', fullsizeSrc:'/images/home/fullsize/MG_2724.jpg', alt:'Glas with white&colorful Entrance'},

            ]
        },

            
    },

    //city-category
    city: {
        main: {
             thumbnails: [
                { id:1, thumbnailSrc:'/images/home/thumbnails/balcony01.jpg', fullsizeSrc:'/images/home/fullsize/U8A9878.jpg', alt:'balcony missing'},
                { id:2, thumbnailSrc:'/images/home/thumbnails/egyptyellow01.jpg', fullsizeSrc:'/images/home/fullsize/MG_5860.jpg', alt:'Egypt pilar in yellow'},
                { id:3, thumbnailSrc:'/images/home/thumbnails/glass01.jpg', fullsizeSrc:'/images/home/fullsize/MG_2724.jpg', alt:'Glas with white&colorful Entrance'},
                { id:4, thumbnailSrc:'/images/home/thumbnails/toilett02.jpg', fullsizeSrc:'/images/home/fullsize/MG_3141.jpg', alt:'Man waiting WC'},
                { id:5, thumbnailSrc:'/images/home/thumbnails/egyptgray01.jpg', fullsizeSrc:'/images/home/fullsize/MG_8234.jpg', alt:'Egypt pilar in gray'},
                { id:6, thumbnailSrc:'/images/home/thumbnails/china01.jpg', fullsizeSrc:'/images/home/fullsize/MG_7150.jpg', alt:'China Museum'},
            ]
        },
         // Underkategorier (Project1, Project2)
        project1: {
            thumbnails: [
                { id:1, thumbnailSrc:'/images/home/thumbnails/detlef01.jpg', fullsizeSrc:'/images/home/fullsize/Q001475.jpg', alt:'Dear Detlef'},
                { id:2, thumbnailSrc:'/images/home/thumbnails/china01.jpg', fullsizeSrc:'/images/home/fullsize/MG_7150.jpg', alt:'China Museum'},
                { id:3, thumbnailSrc:'/images/home/thumbnails/egyptyellow01.jpg', fullsizeSrc:'/images/home/fullsize/MG_5860.jpg', alt:'Egypt pilar in yellow'},
                { id:4, thumbnailSrc:'/images/home/thumbnails/detlef01.jpg', fullsizeSrc:'/images/home/fullsize/Q001475.jpg', alt:'Dear Detlef'},
                { id:5, thumbnailSrc:'/images/home/thumbnails/china01.jpg', fullsizeSrc:'/images/home/fullsize/MG_7150.jpg', alt:'China Museum'},
                { id:6, thumbnailSrc:'/images/home/thumbnails/egyptyellow01.jpg', fullsizeSrc:'/images/home/fullsize/MG_5860.jpg', alt:'Egypt pilar in yellow'},
            ]

        },
        project2: {
             thumbnails: [
                { id:1, thumbnailSrc:'/images/home/thumbnails/triangle01.jpg', fullsizeSrc:'/images/home/fullsize/Q000684.jpg', alt:'Triangle Bridge'},
                { id:2, thumbnailSrc:'/images/home/thumbnails/muslim01.jpg', fullsizeSrc:'/images/home/fullsize/MG_5806.jpg', alt: 'Muslim woman'},
                { id:3, thumbnailSrc:'/images/home/thumbnails/balcony01.jpg', fullsizeSrc:'/images/home/fullsize/U8A9878.jpg', alt:'balcony missing'},
                { id:4, thumbnailSrc:'/images/home/thumbnails/triangle01.jpg', fullsizeSrc:'/images/home/fullsize/Q000684.jpg', alt:'Triangle Bridge'},
                { id:5, thumbnailSrc:'/images/home/thumbnails/muslim01.jpg', fullsizeSrc:'/images/home/fullsize/MG_5806.jpg', alt: 'Muslim woman'},
                { id:6, thumbnailSrc:'/images/home/thumbnails/balcony01.jpg', fullsizeSrc:'/images/home/fullsize/U8A9878.jpg', alt:'balcony missing'},
            ]

        },
           

    },
 //still-category
    still: {
        main: {
            thumbnails: [
                { id:1, thumbnailSrc:'/images/home/thumbnails/detlef01.jpg', fullsizeSrc:'/images/home/fullsize/Q001475.jpg', alt:'Dear Detlef'},
                { id:2, thumbnailSrc:'/images/home/thumbnails/china01.jpg', fullsizeSrc:'/images/home/fullsize/MG_7150.jpg', alt:'China Museum'},
                { id:3, thumbnailSrc:'/images/home/thumbnails/glass01.jpg', fullsizeSrc:'/images/home/fullsize/MG_2724.jpg', alt:'Glas with white&colorful Entrance'},
                { id:4, thumbnailSrc:'/images/home/thumbnails/toilett02.jpg', fullsizeSrc:'/images/home/fullsize/MG_3141.jpg', alt:'Man waiting WC'},
                { id:5, thumbnailSrc:'/images/home/thumbnails/egyptyellow01.jpg', fullsizeSrc:'/images/home/fullsize/MG_5860.jpg', alt:'Egypt pilar in yellow'},
                { id:6, thumbnailSrc:'/images/home/thumbnails/egyptgray01.jpg', fullsizeSrc:'/images/home/fullsize/MG_8234.jpg', alt:'Egypt pilar in gray'},


            ]

        },
        // Underkategorier (Project1, Project2) 
        project1: {
            thumbnails: [
                { id:1, thumbnailSrc:'/images/home/thumbnails/balcony01.jpg', fullsizeSrc:'/images/home/fullsize/U8A9878.jpg', alt:'balcony missing'},
                { id:2, thumbnailSrc:'/images/home/thumbnails/egyptyellow01.jpg', fullsizeSrc:'/images/home/fullsize/MG_5860.jpg', alt:'Egypt pilar in yellow'},
                { id:3, thumbnailSrc:'/images/home/thumbnails/glass01.jpg', fullsizeSrc:'/images/home/fullsize/MG_2724.jpg', alt:'Glas with white&colorful Entrance'},
                { id:4, thumbnailSrc:'/images/home/thumbnails/toilett02.jpg', fullsizeSrc:'/images/home/fullsize/MG_3141.jpg', alt:'Man waiting WC'},
                { id:5, thumbnailSrc:'/images/home/thumbnails/egyptgray01.jpg', fullsizeSrc:'/images/home/fullsize/MG_8234.jpg', alt:'Egypt pilar in gray'},
                { id:6, thumbnailSrc:'/images/home/thumbnails/china01.jpg', fullsizeSrc:'/images/home/fullsize/MG_7150.jpg', alt:'China Museum'},
            ]
        },
        project2: {
            thumbnails: [
                { id:1, thumbnailSrc:'/images/home/thumbnails/triangle01.jpg', fullsizeSrc:'/images/home/fullsize/Q000684.jpg', alt:'Triangle Bridge'},
                { id:2, thumbnailSrc:'/images/home/thumbnails/muslim01.jpg', fullsizeSrc:'/images/home/fullsize/MG_5806.jpg', alt: 'Muslim woman'},
                { id:3, thumbnailSrc:'/images/home/thumbnails/balcony01.jpg', fullsizeSrc:'/images/home/fullsize/U8A9878.jpg', alt:'balcony missing'},
                { id:4, thumbnailSrc:'/images/home/thumbnails/china01.jpg', fullsizeSrc:'/images/home/fullsize/MG_7150.jpg', alt:'China Museum'},
                { id:5, thumbnailSrc:'/images/home/thumbnails/egyptgray01.jpg', fullsizeSrc:'/images/home/fullsize/MG_8234.jpg', alt:'Egypt pilar in gray'},
                { id:6, thumbnailSrc:'/images/home/thumbnails/toilett02.jpg', fullsizeSrc:'/images/home/fullsize/MG_3141.jpg', alt:'Man waiting WC'},
            ]
        }  

    },
}

export default imageDatabase;
