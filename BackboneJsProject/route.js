var view1 = Backbone.View.extend({
  //events object on specific event we have to perform some task
  events: {
    submit: "handleSubmit",
  },
  template: _.template($("#demoTemplate").html()),

  initialize: function () {
    this.render();
  },
  render: function () {
    this.$el.html(this.template());
  },
  handleSubmit: function (e) {
    e.preventDefault();

    var MyModel = Backbone.Model.extend({
      urlRoot: "http://localhost:8080/registerUser2",
    });
    //fetch ,destroy ,save,
    //fetch,destroy,save(type,success,error callback)
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
        //getUserData();
      },
      error: function (model, xhr, options) {
        console.error("Failed to save new User:", xhr.statusText);
      },
    });
  },
});
var view2 = Backbone.View.extend({
  events: {
    "click #get ": "handleClick",
    "click #delete": "deleteUser",
  },
  template: _.template($("#demoTemplate2").html()),
  initialize: function () {
    this.render();
  },
  render: function () {
    //this.$el.html("you have ordered e");
    this.$el.html(this.template());
    // $("tbody").empty();
    this.handleClick();
  },
  handleClick: function (e) {
    // e.preventDefault();
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
              `<td>  <button class="btn btn-primary" id="update" ><a href="#update" style="text-decoration:none;color:white">Update</a></button>
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

    getUserData();
  },
}); //fetch ,save,destroy
var view3 = Backbone.View.extend({
  events: {
    click: "handleSubmit",
  },
  template: _.template($("#demoTemplate3").html()),
  initialize: function () {
    this.render();
  },
  render: function () {
    this.$el.html(this.template());
  },
  handleSubmit: function (e) {
    e.preventDefault();
    var phNumber = $("#phNumber").val();

    var MyModel = Backbone.Model.extend({
      url: "http://localhost:8080/updateUser/" + phNumber,
    });

    var modifiedUser = new MyModel({
      id: phNumber,
      name: $("#username").val(),
      email: $("#email").val(),
      password: $("#password").val(),
      phNumber: phNumber,
    });
    // let updateData = {

    // };
    modifiedUser.save(null, {
      type: "PUT",
      success: function (model, response, options) {
        window.alert("updated successfully");
        console.log("Updated User saved successfully:", model.toJSON());

        $("#username").val("");
        $("#email").val("");
        $("#password").val("");
        $("#phNumber").val("");
        //
      },
      error: function (model, xhr, options) {
        console.error("Failed to update new User:", xhr.statusText);
      },
    });
  },
});
var routeDemo = Backbone.Router.extend({
  //create the router specify some routes along with the function names and then provide function in that create the object of the view and specify the element
  routes: {
    register: "route1",
    getData: "route2",
    update: "route3",
    about: "route3",
    "": "defaultroute",
  },
  route1: function () {
    var view = new view1({
      el: "#demo1",
    });
  },
  route2: function () {
    var view = new view2({
      el: "#demo1",
    });
  },
  route3: function () {
    var view = new view3({
      el: "#demo1",
    });
  },
  route4: function () {
    var view = new ActivitiesView({
      el: "#demo1",
    });
  },
  default: function () {
    console.log("you have ordered nothing");
  },
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
      //getUserData();
    },
    error: function (model, response, options) {
      console.error("Failed to delete user:", response);
    },
    type: "DELETE",
  });
}
var router = new routeDemo();
Backbone.history.start();

var someView = Backbone.View.extend({
  events: {
    click: "onClick",
  },
  onClick: function (e) {
    var $li = $(e.target);
    router.navigate($li.attr("href"), { trigger: true });
  },
});

var v = new someView({
  el: "#navbar-nav",
  el: "#update",
});
$("#update").click(function () {
  router.navigate("update", { trigger: true });
});
$("#updbtn,#regbtn").click(function () {
  router.navigate("#getData", { trigger: true });
});

// Activities collection
var ActivitiesCollection = Backbone.Collection.extend({
  url: "http://localhost:8080/api/activities",
});

var ActivitiesView = Backbone.View.extend({
  el: "#activities",

  // template: _.template($("#demoTemplate4").html()),

  initialize: function () {
    this.collection.on("add", this.renderActivity, this);
    this.collection.on("reset", this.render, this);
    this.collection.fetch({ reset: true });
  },

  render: function () {
    this.$el.empty();
    //act();

    this.collection.each(this.renderActivity, this);
    return this;
  },

  renderActivity: function (activity) {
    var icon = "";
    var message = activity.get("message");
    if (message.includes("added")) {
      icon = '<i class="fas fa-plus-circle"></i>';
    } else if (message.includes("updated")) {
      icon = '<i class="fas fa-pencil-alt"></i>';
    } else if (message.includes("deleted")) {
      icon = '<i class="fas fa-trash-alt"></i>';
    }

    var htmlContent =
      icon +
      " " +
      message +
      " (" +
      new Date(activity.get("date")).toLocaleString() +
      ")";

    var listItem = $("<li>").html(htmlContent);
    this.$el.append(listItem);
  },
});
$(document).ready(function () {
  var activitiesCollection = new ActivitiesCollection();
  var activitiesView = new ActivitiesView({ collection: activitiesCollection });

  // Fetch activities initially
  activitiesCollection.fetch();

  //act();
});
//fetch ,destroy ,save mainly we use this method in backbone js inorder to perform the crud operations on models and the collections
