//how to pass model into  a view 
var Player=Backbone.Model.extend();

var obj1=new Player({
    name:'sachin',
    team:'mumbai'
})

var PlayerView=Backbone.View.extend({
    render:function(){
        console.log("working fine..")
        this.$el.html("passing data example")
        this.$el.html(this.model.get('name'))
       // this.$el.html(this.model.get('team'))

    }
});

var pv=new PlayerView({
    el:'#demo1',
    model:obj1
    //for model we need to pass the particular model object not the model
});
pv.render()

//this.$el.html(this.model.get('property-name'))