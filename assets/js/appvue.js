//global component registration type
  Vue.component('counter',{
    template:'#click-counter-template',
    data(){
      return {
        count:0,

      }
    }

  })
//local component registration type
let PlanComponent = {
  template:'#plan-template',
  // props:['name','label','clase'],
  data(){
    return {
      plans:[
        {
        label:"Location",
        name:"A108 Adam Street, New York, NY 535022",
        class:"address"
      },
      {
      label:"email",
      name:"info@example.com",
      class:"email"
    }
    ]
    }
  }


}

// when life is settled, load up the fun stuff
// document.addEventListener('DOMContentLoaded', function () {
  new Vue({
    el: '#app',
    components:{
      "plan-info":PlanComponent
    },
  //  define data - initial display text
    data: {
      state:"default",
      m1: "Spearhead Mall",
      message:"Number one shooping mall",
      name:"",
      email:"",
      form:"",
      items:[
        // "Home",
        // "About",
        // "Services",
        // "Contact"
      ],

    },

    // components:{
    //   "plan-info":PlanComponent
    // },

    methods:{
      saveItem: function(){
this.items.push(this.name);
this.name="";
this.email="";
},
changeState: function(newState){
this.state=newState;
this.name="";
}
    }
  })




// })
// //global component registration type
//   Vue.component('counter',{
//     template:'#click-counter-template',
//     data(){
//       return {
//         count:0,
//
//       }
//     }
//
//   })
// //local component registration type
//   let PlanComponent = {
// // let PlanComponent = {
//     template:'#plan-template',
//      // props:['name','label','clase'],
//     data(){
//       return {
//         plans:[
//           {
//           label:"Location",
//           name:"A108 Adam Street, New York, NY 535022",
//           class:"address"
//         },
//         {
//         label:"email",
//         name:"info@example.com",
//         class:"email"
//       }
//       ]
//       }
//     }
//
//
//   }
