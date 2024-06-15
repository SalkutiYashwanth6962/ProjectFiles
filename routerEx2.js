var chicken=Backbone.View.extend({
    render:function(){
        this.$el.html("you have ordered chicken")
    }
})

var egg=Backbone.View.extend({
    render:function(){
        this.$el.html("you have ordered egg")
    }
})

var routeDemo=Backbone.Router.extend({
    routes:{
        'firstOrder':'chickenOrder',
        'secondOrder':'eggOrder',
        '*other':'default'
    },
    chickenOrder:function(){
      
   var view = new chicken({
    el:"#demo1"
   })
   view.render();
    },
    eggOrder:function(){
      
        var view = new egg({
         el:"#demo1"
        })
        view.render();
   },
   default:function(){
      console.log("you have ordered nothing")
   }
})

var router=new routeDemo();
Backbone.history.start();

var foodCourt=Backbone.View.extend({
    events:{
        'click':'onClick'
    },
    onClick:function(e){
        var $li=$(e.target);
        router.navigate($li.attr("data-url"),{trigger:true})
    }
})

var v= new foodCourt({
    el:'#orderNav'
})








