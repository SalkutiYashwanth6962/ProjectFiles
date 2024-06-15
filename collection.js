//collection - group of related models
//model
var Team=Backbone.Model.extend();
//object
var player1=new Team({
    name:'sachin',
    team:'mumbai',
    runs:98
});
var player2=new Team({
    name:'dhoni',
    team:'chennai',
    runs:75
});

//collection
var players=Backbone.Collection.extend();
var p=new players([
    player1,
    player2
])
//collections operations
//add,push(to add new objects/models),unshift(add at start ),remove(),shift(first index remove),pop(last index remove),where(),findwhere(only first instance to search models),each(to retrieve ),filter(logical related thing situation )
//p.add(new Team({name:'rohit',team:'mumbai'}))
//if we want to store at particular index at that time after object {at:2}
//remove():p.remove(id) we need to pass id inorder to remove the particular id value
//where() returns an array with the matching object we have given 
//p.add(new Team({'name':'rohit',team':'mumbai'}))     p.where({name:'dhoni'})  p.remove('c1')
p.each(function(player){
    console.log(player);
})

//var res1=p.where({runs>30}) for where we cannot passs the conditions related things
var res1=p.filter(function(player){
    return player.get('runs')>75;
})
//first create the model and then after create two instances and after that create the collection and then after create the object for the collection and pass the instance references to the object creation of collection
//add push pop remove shift unshift each filter where findwhere 