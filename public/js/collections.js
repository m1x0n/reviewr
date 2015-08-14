/*
 *---------------------------------------------------
 *  Users Collection
 *---------------------------------------------------
 */

App.Collections.Users = Backbone.Collection.extend({
    url: App.getPrefix() + '/user',
    model: App.Models.User

});

//instantiate collection of users

var users = new App.Collections.Users();


/*
 *---------------------------------------------------
 *  Requests Collection
 *---------------------------------------------------
 */

App.Collections.Requests = Backbone.Collection.extend({
    url: App.getPrefix() + '/reviewrequest',
    model: App.Models.Request

});

//instantiate collection of requests

var requests = new App.Collections.Requests();

/*
 *---------------------------------------------------
 *  My Requests Collection
 *---------------------------------------------------
 */

App.Collections.MyRequests = Backbone.Collection.extend({
    url: App.getPrefix() + '/reviewrequest/my',
    model: App.Models.Request

});

//instantiate collection of myRequests

var myRequests = new App.Collections.MyRequests();


/*
 *---------------------------------------------------
 *  Reviewer Collection
 *---------------------------------------------------
 */

App.Collections.Reviewers = Backbone.Collection.extend({
    url: App.getPrefix() + '/reviewrequest/:id/offers',
    model: App.Models.Reviewer

});

//instantiate collection of reviewers

var reviewers = new App.Collections.Reviewers();


/*
 *---------------------------------------------------
 *  Tags Collection
 *---------------------------------------------------
 */

 App.Collections.Tags = Backbone.Collection.extend({
 	url: App.getPrefix() + '/tag',
 	model: App.Models.Tag
 });

 //instantiate collection of tags

 var tags = new App.Collections.Tags();


 /*
 *---------------------------------------------------
 *  Tags Collection For Specific Review Request
 *---------------------------------------------------
 */

 App.Collections.RequestTags = Backbone.Collection.extend({
 	url: App.getPrefix() + '/reviewrequest/:id/tags',
 	model: App.Models.Tag
 });

 //instantiate collection of tags

 var request_tags = new App.Collections.RequestTags();