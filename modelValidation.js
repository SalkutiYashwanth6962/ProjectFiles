var tutorial=Backbone.Model.extend({
    validate:function(attrs){
    // if(!attrs.name){
    //     return "name is required"
    // }
    if(attrs.age<0){
        return "age should not be negative "
    }
    }

})

var backbone=new tutorial({
    name:"yashwanth",
    age:-1
});

//to check in console we have to use backbone.validate ,backbone.isValid() to change values we will use backbone.set() where as it will return boolean values
//validate:function(atrs){if(attrs.age>0){return "age is not correct"}}
