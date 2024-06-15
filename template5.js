
//complex app data rendering situation(inline,external)
//reusability purpose underscore.js functionality
var view = Backbone.View.extend({
    //inline template 
    //template:_.template("this is a template example"),
    template:_.template($('#demoTemplate').html()),
    initialize:function(){
    this.render()
    },
     render:function(){
    //console.log("working")
   // this.$el.html("template tutorial")
    this.$el.html(this.template())
    
    }
});
  
var v = new view({
    el:'#demo1'
});
//template:inline ,external(template:_.template($('#demoTemplate').html()))
