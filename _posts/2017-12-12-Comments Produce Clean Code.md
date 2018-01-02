---
title: Comments Produce Clean Code
date: 12-12-2017
permalink: comments-produce-clean-code
---

Ok, this my first time to write here *in my blog*, anyway I will give you small tips you will learn
how to write Comments on turns it will Produce clean and maintainable code.

# Comment like a smart person.

Comment your code. Obviously. If you write a procedure, fail to comment it, and return to it a few months later to rework it (and you will), not having comments will cost you time.

But commenting, like anything else, is a skill. You get better with practice.

You don't want to write too much. Suppose you write comments for a function that, in the future, saves you ten minutes of time understanding your code.
Great. But suppose your comments are so verbose that it takes five minutes to write them and then, later, five minutes to read them. Then you've saved yourself zero time. Not so good.

You don't want to write too little, either. If code goes on for a page or two without something breaking down what's going on, well, I hope that code is clear as crystal, because otherwise you're wasting future time.

And you don't want to comment in stupid ways. When people first start writing comments, they often get hyper and write things like:

```js
// now we are increasing User Balance by 50$
user_balance = user_balance + 50;
```
Uhmmm, duh. 
If something is so obvious, it doesn't need a comment. Comments don't just save time, they cost it. They take time to read.
So, if you are writing code, in the absence of a boss or a company policy telling you what to do, how do you comment it?
Well, what I do for code I am stuck with maintaining myself is write an introduction. When I return to a procedure I forgot that I wrote,I want to see an explanation for what is going on.
Once I understand what the machinery is doing, it becomes infinitely easier to understand the actual coding.
### This generally involves:

1. A few sentences before the procedure/function saying what it does.
2. A description of the values being passed into it.
3. If a function, a description of what it returns.
4. Inside the procedure/function, comments that split the code up into shorter tasks.

The following example shows how to document a simple class with a constructor, two instance methods, and one static method:

```js
/** Class representing a point. */
class Point {
    /**
     * Create a point.
     * @param {number} x - The x value.
     * @param {number} y - The y value.
     */
    constructor(x, y) {
        // ...
    }

    /**
     * Get the x value.
     * @return {number} The x value.
     */
    getX() {
        // ...
    }

    /**
     * Get the y value.
     * @return {number} The y value.
     */
    getY() {
        // ...
    }

    /**
     * Convert a string containing two comma-separated numbers into a point.
     * @param {string} str - The string containing two comma-separated numbers.
     * @return {Point} A Point object.
     */
    static fromString(str) {
        // ...
    }
}
```
> this example from [JSDocs](http://usejsdoc.org/)

# Use TODO: ,BUG:
When you write code you make bugs , a **LOT**. when you find a bug and you don't know how to fix it , or you need to fix it later
then You should add a **//BUG:** tag in near the line where the bug exists , it will help you to get and find bugs later
also for new things that should be added to your code base , you could use **//TODO:** for mention it
a lot of new IDE like *webstorm, VSCode, Atom ..* Support this kind of comments, it could make a full review of your code and find where these comments.