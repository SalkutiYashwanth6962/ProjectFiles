//bind will take two arguments(event,function) where as it is used to bind some events with some functions 

var students=Backbone.Model.extend({
    initialize:function(){
        this.bind('change',function(){
            console.log("model changed ")
        })
     console.log("it is working fine")
    }
});

var student= new students({
    name:'yashwanth',
    age:23
});

//this.bind('change',function(){})