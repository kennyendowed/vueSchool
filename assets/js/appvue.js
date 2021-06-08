// when life is settled, load up the fun stuff
document.addEventListener('DOMContentLoaded', function () {
  new Vue({
    el: '#app',
    // define data - initial display text
    data: {
      state:"default",
      m1: "Spearhead Mall",
      message:"Number one shooping mall",
      newitem:"",
      items:[
        // "Home",
        // "About",
        // "Services",
        // "Contact"
      ]

    },
    methods:{
      saveItem: function(){
this.items.push(this.newitem);
this.newitem=" ";
      }
    }
  })
})
