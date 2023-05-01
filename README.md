## Tweet Cards 

# Technical Specification:

- According to the [design layout](https://www.figma.com/file/zun1oP6NmS2Lmgbcj6e1IG/Test?node-id=0%3A1&t=VoiYTfiXggVItgVd-1), user cards need to be implemented.

- When the "Follow" button is clicked, the text should change to "Following." Additionally, the color of the button should change. The follower count should also increase by one. For example, if the initial follower count is 100,500, it should become 100,501 after clicking the button.

- The final state of the user's actions should be preserved when the page is refreshed. This means that if the button was clicked and the page is refreshed, the button should remain in the "Following" state with the corresponding color, and the follower count should not be reset to the initial value.

- When the button is clicked again, its text, color, and follower count should return to the initial state. The follower count should decrease by one (e.g., from 100,501 to 100,500).

- The number 100,500 should be represented by a single value (100500) in the code. In the user interface (UI), it should be displayed with a comma (100,500).

- Create routing using React Router.
The application should have the following routes.
'/' - Home - the home page.
'/tweets' - Tweets - page displaying tweets.
 If the user enters a non-existent route, they should be redirected to the home page.
On the tweets page, there should be a Back button that leads to the home page.

- Add filtering functionality for the cards.