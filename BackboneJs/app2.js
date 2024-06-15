var MyCollection = Backbone.Collection.extend({
  url: "http://localhost:8080/getUsers",
});

var DataView = Backbone.View.extend({
  initialize: function () {
    this.render();
  },
  render: function () {
    $("tbody").empty();
    this.collection.each(function (model) {
      this.$("tbody").append(
        "<tr><td>" +
          model.get("name") +
          "</td>" +
          "<td>" +
          model.get("email") +
          "</td>" +
          "<td>" +
          model.get("phNumber") +
          "</td>" +
          "<td>" +
          model.get("password") +
          "</td>" +
          `<td>  <button class="btn btn-primary" id="update" ><a href="update2.html" style="text-decoration:none;color:white">Update</a></button>
          <button class="btn btn-danger" id="delete" onClick="deleteUser(` +
          model.get("phNumber") +
          `)">Delete</button></td>` +
          "</tr>"
      );
    });
  },
});

var myCollection = new MyCollection();
function getUserData() {
  myCollection.fetch({
    success: function (collection, response, options) {
      console.log("Data fetched successfully:", collection);
      var dataView = new DataView({ collection: myCollection });
    },
    error: function (collection, response, options) {
      console.error("Error fetching data:", response);
    },
  });
}
$("#getdata").click(function () {
  getUserData();
});

//inorder to save the details in th e backend we will be using the save method for the the model
//create a model where as provide the url to it and then do creatre the object for it and pass the detils by using the jquery selectors.val()
//then after use the save() on it and write type ,success,error
$("#form").submit(function (e) {
  e.preventDefault();

  var MyModel = Backbone.Model.extend({
    urlRoot: "http://localhost:8080/registerUser2",
  });
  //fetch ,destroy ,save,
  //
  var newUser = new MyModel({
    name: $("#username").val(),
    email: $("#email").val(),
    phNumber: $("#phNumber").val(),
    password: $("#password").val(),
  });
  newUser.save({
    type: "POST",
    success: function (model, response, options) {
      console.log("New User saved successfully:", model.toJSON());
      getUserData();
    },
    error: function (model, xhr, options) {
      console.error("Failed to save new User:", xhr.statusText);
    },
  });
});

function deleteUser(phNumber) {
  var MyModel = Backbone.Model.extend({
    idAttribute: "phNumber",
    url: "http://localhost:8080/deleteUser1/" + phNumber,
  });
  var user = new MyModel({ phNumber: phNumber });
  console.log(phNumber);

  user.destroy({
    success: function (model, response, options) {
      console.log("User deleted successfully:", model);
      getUserData();
    },
    error: function (model, response, options) {
      console.error("Failed to delete user:", response);
    },
    type: "DELETE",
  });
}

/*
// Lets try to update a book [UPDATE]
var book1 = new Book({ ID: 40 });
book1.fetch({
    success: function (bookResponse) {
        console.log("Found the book: " + bookResponse.get("BookName"));
        // Let us update this retreived book now (doing it in the callback) [UPDATE]
        bookResponse.set("BookName", bookResponse.get("BookName") + "_updated");
        bookResponse.save({}, {
            success: function (model, respose, options) {
                console.log("The model has been updated to the server");
            },
            error: function (model, xhr, options) {
                console.log("Something went wrong while updating the model");
            }
        });
    }
});

*/

//create collection pass url then after create a view and intialize function and call render method in that collection.each(function(model){
//this.$("tbody").append("")
//then after create the object for the collection and then do use of the fetch(success:function(collection,response,options))
//success:function(){we will create object for the view and thenafter pass the collection through it}
//})
//create a function and create a model for it and and pass url and specify the idAttibute for which column it behaves uniquely
//and thtn pass it to a partiular object instance
// Event listener for delete button clicks
// $(document).on('click', '.delete-btn', function() {
//     // Get the user ID from the data attribute
//     var userId = $(this).data('user-id');

//     // Find the corresponding Backbone model instance in the collection
//     var user = users.get(userId);

//     // Ensure the model exists before attempting to delete
//     if (user) {
//         // Call destroy directly on the model instance
//         user.destroy({
//             success: function(model, response, options) {
//                 console.log("User deleted successfully:", response);
//                 // Optionally, fetch updated user data after deletion
//                 fetchUserData();
//             },
//             error: function(model, response, options) {
//                 console.error("Failed to delete user:", response);
//             }
//         });
//     } else {
//         console.error("User not found in collection");
//     }
// });

/*
window.deleteUser = function (phNumber) {
    
    $.ajax({
      
      url: "http://localhost:8080/deleteUser1/" + phNumber,
      method: "DELETE",
      
      success: function (response) {
        fetchUserData();
        console.log("User deleted successfully:", response);
       // fetchUserData(); // Refresh user data after deletion
      },
      error: function (error) {
        console.error("Error deleting user:", error);
      },
    });
   
  };




 var formData={
        name:$("#username").val(),
        email:$("#email").val(),
        phNumber:$("#phNumber").val(),
        password:$("#password").val()
    };
    $.ajax({
    method: "POST",
    contentType: "application/json",
    url: "http://localhost:8080/registerUser2",
    data: JSON.stringify(formData),
    dataType: "json",
    success: function (result) {
    console.log("user registered successfully:"+result);
  },
    error: function (e) {
    console.log("there was some error while registering data: ", e);
  },
});
*/
