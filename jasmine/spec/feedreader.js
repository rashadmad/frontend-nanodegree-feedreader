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


    /* TODO: Write a new test suite named "Initial Entries" */

        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */

    /* TODO: Write a new test suite named "New Feed Selection" */

        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
}());
