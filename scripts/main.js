const app = Vue.createApp({
    data: function () {
        return {
            showMenuButton: true,
            showMobileNav: false,

            skillsList: 
                {
                    HTML: {
                        name: "HTML",
                        image: "./Assets/Icons/HTML_Icon.png"
                    },
                    CSS: {
                        name: "CSS",
                        image: "./Assets/Icons/CSS_Icon.png",
                    },
                    JS: {
                        name: "JavaScript",
                        image: "./Assets/Icons/Js_Icon.png",
                    },
                    Figma: {
                        name: "Figma",
                        image: "./Assets/Icons/Figma_Icon.png",
                    },
                    Git: {
                        name: "Git",
                        image: "./Assets/Icons/Git_Icon.png",
                    },
                    Github: {
                        name: "Github",
                        image: "./Assets/Icons/GitHub_Icon.png",
                    },
                    Python: {
                        name: "Python",
                        image: "./Assets/Icons/Python_Icon.png",
                    },
                    Flask: {
                        name: "Flask",
                        image: "./Assets/Icons/Flask_Icon.png",
                    },
                    API: {
                        name: "API",
                        image: "./Assets/Icons/API_Icon.png",
                    },
                    Pandas: {
                        name: "Pandas",
                        image: "./Assets/Icons/API_Icon.png",
                    },
                    Seaborn: {
                        name: "Seaborn",
                        image: "./Assets/Icons/Seaborn_Icon.png",
                    },
                    Matplot: {
                        name: "Matplot",
                        image: "./Assets/Icons/Matplot_Icon.png",
                    },
                    PowerBI: {
                        name: "Power BI",
                        image: "./Assets/Icons/PowerBI_Icon.png",
                    },
                    Excel: {
                        name: "Excel",
                        image: "./Assets/Icons/Excel_Icon.png",
                    },
                    MySql: {
                        name: "MySQL",
                        image: "./Assets/Icons/MySQL_Icon.png",
                    }

                }
            
            ,

            projectList: [
                {
                    name: "DataSet creation MCU",
                    image: "./Assets/images/MCU_Image.png",
                    description: "In this project, I used Python and its pandas library in Google Colab to clean and preprocess a dataset containing information about MCU movies and series.",
                    tags:{
                        Python: {
                            id: "Python--ID",
                            name: "Python"
                        },
                        Pandas: {
                            id: "Pandas--ID",
                            name: "Pandas"
                        },
                    },
                    repoLink: "https://github.com/andyreinozaa/LimpiezaDatos_MCU",
                },
                {
                    name: "Felinos",
                    image: "./Assets/images/Felinos_Image.png",
                    description: "Python code modeling feline behavior, including a 'baghera' instance for demonstration. Try this OOP Project!",
                    tags:{
                        Python: {
                            id: "Python--ID",
                            name: "Python"
                        },
                        OOP: {
                            id: "POO--ID",
                            name: "OOP"
                        },
                    },
                    repoLink: "https://github.com/andyreinozaa/Felinos",
                },
                {
                    name: "Batatabit Clone",
                    image: "./Assets/images/Batatabit_Image.png",
                    description: "Here is my clone to the BatataBit Prototype. This is a criptocurrency exchange, made in the Mobile First course in Platzi.",
                    tags:{
                        HTML: {
                            id: "HTML--ID",
                            name: "HTML"
                        },
                        CSS: {
                            id: "CSS--ID",
                            name: "CSS"
                        }

                    },
                    repoLink: "https://github.com/andyreinozaa/BataBitPrototype"
                }
            ]
        }
    },


    methods: {
        toggleNav() {
            this.showMenuButton =  !this.showMenuButton
            this.showMobileNav = !this.showMobileNav
        },

    }
    }
)

app.mount("#app")