

var MyCollection = Backbone.Collection.extend({
    url: 'https://fakestoreapi.com/products',
});

var DataView = Backbone.View.extend({
   
    initialize: function() {
        this.render()
    },
    render: function() {
        this.$('#data').empty();
        this.collection.each(function(model) {
            this.$('tbody').append('<tr><td>' + model.get('id') +'</td>'+ '<td>'+model.get('title')+'</td>'+'<td>'+model.get('price')+'</td>'+'<td>'+model.get('description').slice(0,100)+'</td>'+'<td>'+model.get('category').slice(0,100)+'</td></tr>'); 
        });
    }
});

var myCollection = new MyCollection();

myCollection.fetch({ 
   
    success: function(collection, response, options) {
       
        console.log("Data fetched successfully:", collection);
        var dataView = new DataView({ collection: myCollection });
    },
    error: function(collection, response, options) {
        
        console.error("Error fetching data:", response);
    }
});





































//we have to create a collection
//we have to pass urlcreate aview render,intilize 





// Define a Backbone model
// var MyModel = Backbone.Model.extend({
//     urlRoot: 'https://fakestoreapi.com/products' // Specify the URL endpoint for your model
// });

/*

// Define a Backbone collection
var MyCollection = Backbone.Collection.extend({
    url: 'https://fakestoreapi.com/products',
   // model: MyModel 
});

// Create a view to render the fetched data
var DataView = Backbone.View.extend({
    el: '#data-table tbody', // The tbody element of the table to which the view will be bound

    initialize: function() {
        this.listenTo(this.collection, 'reset', this.render);
        //this.render()
    },

    render: function() {
        this.$el.empty(); // Clear the existing content
        this.collection.each(function(model) {
            this.$el.append('<tr><td>' + model.get('id') +'</td>'+ '<td>'+model.get('title')+'</td>'+'<td>'+model.get('price')+'</td>'+'<td>'+model.get('description').slice(0,100)+'</td>'+'<td>'+model.get('category').slice(0,100)+'</td></tr>'); // Assuming 'name' is an attribute of your model
        }, this);
        return this; // Enable method chaining
    }
});

// Create an instance of the collection
var myCollection = new MyCollection();

// Create an instance of the view, passing the collection to it
var dataView = new DataView({ collection: myCollection });

// Fetch data from the server using Fetch API
myCollection.fetch({
    reset: true, // Resets the collection before adding new models
    success: function(collection, response, options) {
        // Handle successful fetch
        console.log("Data fetched successfully:", collection);
    },
    error: function(collection, response, options) {
        // Handle fetch error
        console.error("Error fetching data:", response);
    }
});

*/