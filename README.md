# Front End Developer Exercise

*....what I hope you think is a well thought-out and creative approach to your request.*

##### SPECS
- React, Redux, Thunk, Router, FontAwesome, Webpack, Babel

##### DELIVERABLES
- You can view the assignment online at [mlth.acceptabletone.com](http://mlth.acceptabletone.com). 
- The following link proxies mlth.acceptabletone.com through a variety of device displays to give you an idea of the site responsiveness: [websiteresponsivetest.com](http://www.websiteresponsivetest.com/?url=http://mlth.acceptabletone.com/#5)
- Code is hosted in the following repo: [github.com/AccepTableTone/MLTH](https://github.com/AccepTableTone/MLTH).
- To run the project locally, clone the above repo, run *npm install* then *npm start*
- The site is fully functional using Chrome 66.0, Firefox 60.0, Microsoft Edge 41 and IE 11 (IE 11 as you would expect, little tricky - not the same experience )


##### DEVIATIONS
- Although a drop down list of possible directions was described in the 'Requirements' I opted for a stop list for each possible direction on that route; this bypasses that extra action the user would have needed to take to get a list of stops to select from. (Although the separate lists may not be ideal when dealing with routes like 34-Eglington East, 36-Finch West and the like, I am standing by my decision)
- After perusing the [ NextBus API specs](http://www.nextbus.com/xmlFeedDocs/NextBusXMLFeed.pdf) I added the ability to get vehicle predictions by stop ID (I used it one time and found it useful, so figured what the heck)
- Initially when I first saw the data responses from NextBus I saw that each stop included a longitude and latitude; my seemingly endless adoration for Google maps drove me to think creating a route map with each stop marked would be fun...... relatively quickly after that I decided that wasn't the kind of fun I was interested in but I was stuck on the idea of having a route map section. Long story short, I remembered every stop has a route picture, those pictures must be somewhere, yada... yada... yada, a route maps section.
- After the original route maps section idea I knew I needed some filler to make it look like a website so I added the TTC twitter feed, some accessiblity font sizing, and a faintly ttc.ca'ish look.

##### POINTS OF NOTE
- I do use redux but only to maintain the route list that is used in multiple places. All other state is specific to the component.
- I use the Context API to move the route list between components (have been wanting to try it out)
- I used CSS Grid to simplify the responsiveness of the site (also new for me, already a big fan)
- The project layout is not how I prefer; I prefer each page to have it's own 'components' folder. I thought one main components folder would work but even with this small project it quickly proved the wrong move.
- Dev time was around 15-16 hours give or take. Fiddling around with styles, finding logos, sorting out the Context API, having a sandwich, stuff like that is part of it; so if I had to do it again, like...for a game show or something like that, I could definitely do it in a faster grand prize winner amount of time.
- I didn't configure my hosting server to handle any links other that the base link, so refreshing will give you a 404

##### OUTSTANDING ITEMS
- Not having a total understanding of the prediction data variations is most definitely making room for some unhandled errors somewhere.
- The UX needs a few tweaks; form resetting after searching is one, as well the search page isn't an ideal height for mobile with the current two search option layout
- Also...just thought of this, I don't I have any error handling with the initial route list fetch - I track if there is an error but there isn't any messaging to the user, maybe I'll take care of that before you read this far.


Anyway, hope this is the best one you've seen so far  o[''/]o 


-D


[davidmckinnon.ca](http://davidmckinnon.ca/) ||
[acceptabletone.com](http://acceptabletone.com/)