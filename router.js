var first=Backbone.View.extend({
    initialize:function(){
        this.render()
    },
    render:function(){
        console.log("first view")
    }
})

var second=Backbone.View.extend({
    initialize:function(){
        this.render()
    },
    render:function(){
        console.log("second view")
    }
})
var third=Backbone.View.extend({
    initialize:function(){
        this.render()
    },
    render:function(){
        console.log("third view")
    }
})


//how to retrieve view with the routing 
// create the views and then after create one route inside that mention the routes for which route path we want which function inside that particular function create the object of the particular view  and last create the object for the route and call statement named Backbone.history.start() and in the li you have to specify the data -url otherwise you can specify it in the a href attribute 

//here we are retrieving the view with routing
//to create route
var route=Backbone.Router.extend({
 routes:{
    //route path:function name
    'view1':'firstView',
    'view2':'secondView',
    '':'thirdView'
 },
firstView:function(){
    var fv1=new first();
    console.log("this is example1 route")
},
secondView:function(){
     var sv2= new second();
    console.log("this is example2 route")
},
thirdView:function(){
    var sv3=new third()
console.log('third')
}
});

var router=new route();
Backbone.history.start();