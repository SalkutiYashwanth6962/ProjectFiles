//view works a s a controller (rendering logic=render function) 
var firstView=Backbone.View.extend({
    el:'#testing',
    //here we can also pass the tagName:h1 like this 
    //works like a constructor
    initialize:function(){
    this.render()
    },
    render:function(){
        console.log("hello world")
        this.$el.html("backbone js view demo")
        console.log(this.el);//contian dom element if tagname is h1 it directly shows h1 element 
        console.log(this.$el)//jquery pointer(address)
    }
});
//el contains all dom elements

var obj=new firstView({
    el:'#demo'
});
// obj.render(); no need to write this code why because of already we are calling render function in the intialize function