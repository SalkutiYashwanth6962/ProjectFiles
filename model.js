
// how to create a model
var Tutorial=Backbone.Model.extend(
    {
       initialize: function(){
            console.log("hello every one ,this is backbone js tutorial")
        },
        s1:function(){
            console.log("hello this is  tutorial 2344")
        }
    }
);
var backbone=new Tutorial().s1();

