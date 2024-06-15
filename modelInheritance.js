
//if we want to inherit one model into another model 
var sachin=Backbone.Model.extend({
    game:function(){
        console.log("cricket")
    }
})
 
var sachingame=sachin.extend({
    game:function(){
        sachin.prototype.game.apply()
        console.log("football")
    }
});

var k=new sachingame().game();

//var parent=Backbone.model.extend({func1:function(){clg}})
//var child=parent.extend({func1:function(){ parent.prototype.func1.apply() clg}})
