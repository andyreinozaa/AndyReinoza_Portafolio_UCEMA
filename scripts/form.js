const app = Vue.createApp({
    data: function() {
        return {
            showMenuButton: window.innerWidth < 768 ? true : false,
            showCloseButton: false,
            showDesktopNav: window.innerWidth > 768 ? true : false,
            showMobileNav: false,
            navLinkList: [
                { name: "About me", link: "/index.html#About-me--section" },
                { name: "Skills", link: "/index.html#skillset--section" },
                { name: "Experience", link: "/index.html#experience--section" },
                { name: "Projects", link: "/index.html#projects--section" },
                { name: "Contact me", link: "/index.html#contact--section" },
              ],

            UserDigited: {
                user: "",
                password: "",

            }
            ,
            UserList:{
                user:"Andy",
                password:"1234"
            }
        }
    },
    methods: {
        tryLogin(e){
            if (this.UserList.user === this.UserDigited.user && this.UserList.password === this.UserDigited.password) {
                let userData = { user: this.UserDigited.user, password: this.UserDigited.password };
                localStorage.setItem("UserData", JSON.stringify(userData)); // Corrección en la clave "UserData"
                console.log("Felicidades, acceso concedido");
            } else {
                alert("Wrong access credentials, try again");
            }
        },
        
        getUser() {
            const userLocalStorage = JSON.parse(localStorage.getItem("UserData")); // Corrección en la clave "UserData"
            console.log("User Data recovered", userLocalStorage);
        },
        toggleNav() {
            this.showMenuButton = !this.showMenuButton;
            this.showMobileNav = !this.showMobileNav;
        },
    }
    

})

app.mount("#app")