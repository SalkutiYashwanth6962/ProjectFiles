//model
var firstModel=Backbone.Model.extend();

var obj1=new firstModel({
    title:'manasu mare',
    movie:'v'
});
//view
var Song=Backbone.View.extend({
    events:{
        'click':'onclickfunction',
        'click .stop':'onClickStop'
    },
    //generic function works for every function
    onclickfunction:function(){
      console.log("song played")
    },
    onClickStop:function(e){
        e.stopPropagation();
        console.log("song stopped")
    },

    render:function(){
    this.$el.html(this.model.get('title')+"<button>Play</button>  <button class='stop'>Stop</button>")
    }
});
 var song=new Song({
    el:'#demo1',
    model:obj1
 })
 song.render();

 //model is passed to the view and also the el (dom element) and next thing is the view we can passs the events object and syntax like event:function name and after that individually we can declare the functions
 //e.stopPropagation()
 //we need to call render() inordder to execute the view 
 //