//we can insert/set data into the backbone js in 3 ways
var tutorial = Backbone.Model.extend({
  defaults: {
    name: "yashwanth reddy",
  },
});
// var backbone=new tutorial({
//     name:'yashwanth reddy ',
//     subject:'javascript',
//     gender:"male",
//     age:23

// });

var backbone = new tutorial();
//backbone.set("name","yashwanth");

// backbone.set({
//     name:"yashwanth reddy",
//     age:23
// })
//backbone.get('name') to get data of a specific attribute
//backbone.toJSON() to get all data in form of a object
backbone.unset("age");
//backbone.has('age')=true or false output
//backbone.attributes
//backbone.clear() to destroy whole data present inside the model

//set,get ,has,unset,attributes,clear
