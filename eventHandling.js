//event handling with in the view 
$(document).ready(function(){
var firstView=Backbone.View.extend({
    events:{
    'click #btnEvent':'func'
    },
    func:function(){
        this.$el.html("welcome to backbone js")
       // console.log("welcome to backbone js")
    },
    template:_.template($('#eventContainer').html()),
    initialize:function(){
        this.render();
        },
    render:function(){
     this.$el.html(this.template())
     console.log("working fine1")
    }
    
})

var fv=new firstView({
    el:"#demo",
    
});
});