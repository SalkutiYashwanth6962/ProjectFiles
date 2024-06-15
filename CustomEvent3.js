//object as a event 
var person={
    name:'yashwanth',
    test:function(){
    // console.log("custom event lesson")
    this.trigger('demo1')
    }
}
//to convert to event
_.extend(person,Backbone.Events)
person.on('demo1',function(){//here the demo1 is the custom event name
    console.log("custom event lesson")
})

//to convert a object as a event 
//_.extend(object,backbone.events)
//_.extend(person,Backbone.Events)
//person.on('name1',function(){})
//inorder to triggger this event we have to use this.trigger('event name')

//view 