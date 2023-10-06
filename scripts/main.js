const app = Vue.createApp({
    data: function() {
        return {
            skillsList:[
                {
                    HTML:{
                        name:"HTML",
                        image:"./Assets/Icons/HTML_Icon.png"
                    },
                    CSS:{
                        name:"CSS",
                        image:"",
                    },
                    JS:{
                        name:"JavaScript",
                        image:"./Assets/Icons/Js_Icon.png",
                    },
                    Figma:{
                        name:"Figma",
                        image:"./Assets/Icons/Figma_Icon.png",
                    },
                    Git:{
                        name:"Git",
                        image:"./Assets/Icons/Git_Icon.png",
                    }
                }
            ]
            ,
            tags:[
                {
                    Python:{
                        id:"Python--ID",
                        name:"Python"
                    },
                    Pandas:{
                        id:"Pandas--ID",
                        name:"Pandas"
                    },
                    OOP:{
                        id:"POO--ID",
                        name:"OOP"
                    },
                    CSS:{
                        id:"CSS--ID",
                        name:"CSS"
                    },
                    HTML:{
                        id:"HTML--ID",
                        name:"HTML"
                    }
                }
            ]
            ,
            projectList:[
                {
                    name:"DataSet creation MCU",
                    image:"./Assets/images/MCU_Image.png",
                    description:"In this project, I used Python and its pandas library in Google Colab to clean and preprocess a dataset containing information about MCU movies and series.",
                    tags:[this.Python, this.Pandas],
                    repoLink:"https://github.com/andyreinozaa/LimpiezaDatos_MCU",
                },
                {
                    name:"Felinos",
                    image:"./Assets/images/Felinos_Image.png",
                    description:"Python code modeling feline behavior, including a 'baghera' instance for demonstration. Try this OOP Project!",
                    tags:[this.Python, this.OOP],
                    repoLink: "https://github.com/andyreinozaa/Felinos",
                },
                {
                    name:"Batatabit Clone",
                    image:"./Assets/images/Batatabit_Image.png",
                    description:"Here is my clone to the BatataBit Prototype. This is a criptocurrency exchange, made in the Mobile First course in Platzi.",
                    tags:[this.HTML, this.CSS],
                    repoLink: "https://github.com/andyreinozaa/BataBitPrototype"
                }
            ]
        }
    },
    methods: {
        
    },

})

app.mount("#app")