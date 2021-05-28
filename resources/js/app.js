const app = {
    data() {
        return {
            title: "VueTwitter",
            item: "", // When twit is written use this
            items:[
                {
                    avatar: `https://avatars.dicebear.com/api/male/1.svg`,
                    body: "hello vue 3",
                    date: new Date(Date.now()).toLocaleString(),
                }
            ]
        };
    },
    methods: {
        onSubmit(e){ //e is event
            e.preventDefault(); // prevent reload
            this.items.push({
                body: this.item, // Turns form into body element
                date: new Date(Date.now()).toLocaleString(), // creates new date on submit and turns it into string
                avatar: `https://avatars.dicebear.com/api/male/${Date.now()}.svg`
            }) // push item into items, which is located in html {{items}}
            this.item ="" //Reset form when onsubmit is triggered

        }
    }
}
Vue.createApp(app).mount("#app")