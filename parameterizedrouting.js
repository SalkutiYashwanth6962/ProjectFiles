//parameterized routing 
var view1=Backbone.View.extend({
    render:function(){
        this.$el.html("My favourite player is sachin tendulkar");   
    }
})
var view2=Backbone.View.extend({
    render:function(){
        this.$el.html("My favourite player is dhoni");   
    }
})
var view3=Backbone.View.extend({
    render:function(){
        this.$el.html("My favourite player is kohli");   
    }
})
var router=Backbone.Router.extend({
    routes:{
        'first/:tshirtno':'firstPlayer',
        'second':'secondPlayer',
        'third/:tshirtNumber/:playerName':'thirdPlayer'
    },
    firstPlayer:function(tshirtno){
        console.log(tshirtno)
        if(tshirtno==10){
            var view=new view1({
                el:'#testing'
            });
            view.render();
        }
       
    },
    secondPlayer:function(){
        var view=new view2({
            el:'#testing'
        });
        view.render();
    },
    thirdPlayer:function(tshirtNumber,playerName){
        console.log(tshirtNumber+"&"+playerName)
        var view=new view3({
            el:'#testing'
        });
        view.render();
    }
})
var r=new router
Backbone.history.start();

//in the routes we have to specify the route and the thing  we have to do is that we have to specify the url path like the url/:somevar :'functionName'
//where as we need to specify the functionaluty and we have to create the objects for the particular view inorder to calll that particular view then that oobject gets rendered and the thing is likely to be the we have to specify the router object at last and call the backbone.history.start()
