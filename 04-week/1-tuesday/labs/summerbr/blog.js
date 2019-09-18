var navbar = document.createElement('nav');
var header = document.createElement('h1');
header.innerHTML = 'Curse of the Current Reviews';
var main = document.createElement('main');
main.innerHTML = 'Last month Apple released the anticipated WatchKit Framework for developers in the form iOS 8.2 beta SDK release. The WatchKit framework enable the developers to create Apple Watch applications. In this article we are going to focus on the basics of getting started with the WatchKit framework and developing apps for the Apple Watch.';
var newEntry = document.createElement('section');
newEntry.innerHTML = '<h3>Hello WatchKit<h3>';
var newArticle = document.createElement('article');
newArticle.innerHTML = 'When you want to buy any application from the Apple iTunes store you have more choices than you can handle.  Most of the users scroll past the application description completely avoiding it like ads displayed on the right column of your webpage. Their choice is dependent on three important factors: price, screenshot and reviews.';

var parent = document.getElementById('container');
parent.appendChild(header);
parent.appendChild(main);
main.appendChild(newEntry);
main.appendChild(newArticle);

// navigation.appendChild(navbar)
// navigation.appendChild(document.createElement('ul'));

// p1 h2 Hello WatchKit
// bar comment likes
// p2 h2 text Introduction to Swift
// "Swift is a modern programming language developed by Apple to create the next generation of iOS and OSX applications.  Swift is a fairly new language and still in development but it clearly reflects the intentions and the future direction.  This article will revolve around the basic concepts in the Swift language and how you can get started."
// bar comment likes