/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        it('all have URLS', function() {
            for(let feed of allFeeds){
              expect(feed.url).toBeDefined();
            }
        });

        it('all have names', function() {
            for(let feed of allFeeds){
              expect(feed.name).toBeDefined();
            }
        });
    });

    describe('The menu', function () {
      const BODY = document.body;
      const MOCKBUTTON = $('.menu-icon-link');

      it('is hidden by default', function() {
        expect($("body").hasClass("menu-hidden")).toBe(true);
      });
      //check for button click to change css selector

      it('displays when the menu icon is clicked', function () {
        expect($("body").hasClass("menu-hidden")).toBe(true);
        MOCKBUTTON.click();
      });
      //check for button click after button click
      it('hides when the menu icon is clicked when the menu is displaying', function(){
        expect($("body").hasClass("")).toBe(true);
        MOCKBUTTON.click();
        MOCKBUTTON.click();
      });
    });

    describe('Initial Entries', function() {
      beforeEach(function(done){
         loadFeed(0, done);
      });

      it('completes work after its invoked', function(){
        const FEED = document.querySelector('.feed');
        expect(FEED.children.length > 0).toBe(true);
      });
    });

    describe('New Feed Selection', function(){
      const feed = document.querySelector('.feed');
      const firstFeed = [];
        beforeEach(function(done){
          loadFeed(0);
          Array.from(feed.children).forEach(function(entry) {
              firstFeed.push(entry.innerText);
          });
          console.log(feed.children[0].innerText);
          loadFeed(1,done);
        });
        it('content changes', function(){
          Array.from(feed.children).forEach(function(entry,index){
            expect(entry.innerText === firstFeed[index]).toBe(false);
          });
        });
    });
}());
