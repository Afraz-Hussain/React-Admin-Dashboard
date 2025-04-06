export const sidebardata=[
    {
        id:1,
        title:"Menu",
        listitem:[
            {
                id:1,
                itemtext:"Home",
                icon:"home-outline"
            },
            {
                id:2,
                itemtext:"Profile",
                icon:"person-circle-outline"
            },
        ]


    },
    {
        id:1,
        title:"VIEWS",
        listitem:[
            {
                id:1,
                itemtext:"Stats",
                icon:"bar-chart-outline"
            },
            {
                id:2,
                itemtext:"Users",
                icon:"people-outline"
            },
            {
                id:3,
                itemtext:"Products",
                icon:"newspaper-outline"
            },
            
            {
                id:4,
                itemtext:"All Orders",
                icon:"folder-open-outline"
            },
        ]


    },
    {
        id:1,
        title:"GENERAL",
        listitem:[
            {
                id:1,
                itemtext:"calender",
                icon:"calendar-number-outline"
            },
            {
                id:2,
                itemtext:"up to date",
                icon:"chatbox-ellipses-outline"
            },
            {
                id:3,
                itemtext:"settings",
                icon:"qr-code-outline"
            },
            
            {
                id:4,
                itemtext:"All Orders",
                icon:"folder-open-outline"
            },
        ]


    }
]

export const userlist=[
   {
        id:1,
        name:'alex',
        email:"alex32@gmail.com",
        img:"imgs/pic02.jpg",
        price:'$43'
    },
    {
        id:2,
        name:'Robin',
        email:"robin@gmail.com",
        img:"imgs/pic01.jpg",
        price:'$77'
    },
    {
        id:1,
        name:'Lama',
        email:"alex32@gmail.com",
        img:"imgs/pic02.jpg",
        price:'$43'
    },
    {
        id:1,
        name:'Mob',
        email:"mob32@gmail.com",
        img:"imgs/pic03.jpg",
        price:'$54'
    },
    {
        id:1,
        name:'Juli',
        email:"juli@gmail.com",
        img:"imgs/pic01.jpg",
        price:'$73'
    }
]

export const chartBoxUser = {
    color: "#8884d8",  
    icon:"cellular-outline",
    title: "Total Users",
    number: "11.2",
    dataKey: "users",
    percentage: 45,
    chartData: [
      { name: "Sun", users: 400 },
      { name: "Mon", users: 600 },
      { name: "Tue", users: 500 },
      { name: "Wed", users: 700 },
      { name: "Thu", users: 400 },
      { name: "Fri", users: 500 },
      { name: "Sat", users: 450 },
    ],
  };
  export const chartBoxProduct = {
    color: "skyblue",
    icon:"pulse-outline",
    title: "Total Products",
    number: "238",
    dataKey: "products",
    percentage: 21,
    chartData: [
      { name: "Sun", products: 400 },
      { name: "Mon", products: 600 },
      { name: "Tue", products: 500 },
      { name: "Wed", products: 700 },
      { name: "Thu", products: 400 },
      { name: "Fri", products: 500 },
      { name: "Sat", products: 450 },
    ],
  };
  export const chartBoxRevenue = {
    color: "teal",
    icon: "ribbon-outline",
    title: "Total Revenue",
    number: "$56.432",
    dataKey: "revenue",
    percentage: -12,
    chartData: [
      { name: "Sun", revenue: 100 },
      { name: "Mon", revenue: 200 },
      { name: "Tue", revenue: 600 },
      { name: "Wed", revenue: 200 },
      { name: "Thu", revenue: 100 },
      { name: "Fri", revenue: 400 },
      { name: "Sat", revenue: 650 },
    ],
  };
  export const chartBoxConversion = {
    color: "gold",
    icon:"star-half-outline",
    title: "Total Ratio",
    number: "2.6",
    dataKey: "ratio",
    percentage: 12,
    chartData: [
      { name: "Sun", ratio: 200 },
      { name: "Mon", ratio: 500 },
      { name: "Tue", ratio: 100 },
      { name: "Wed", ratio: 800 },
      { name: "Thu", ratio: 300 },
      { name: "Fri", ratio: 300 },
      { name: "Sat", ratio: 850 },
    ],
  };