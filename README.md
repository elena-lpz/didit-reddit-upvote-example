## Upvote

Upvote is a Reddit-esque web application that allows users to create posts, upvote and downvote posts, and comment on posts in a multi-threaded, nested list.

# Requirements

I completed all the core requirements for the project. The deployment went smoothly, and authentication is fully functional.

# Stretch goals

I successfully implemented the following stretch goals:

- Dynamic Page Titles: Added metadata to dynamically update page titles on post pages.

- Improved Auth Error UX: Made the error experience more user-friendly when a user tries to vote without being logged in. I considered using a toast notification but ultimately opted for a redirect to a dedicated page to maintain consistency with the rest of the app—similar to how the "Add" button behaves.

- Schema Constraints: Added constraints to my database schema (see schema.sql, There's a comment on there I would like some feedback on, to see if I'm understanding correctly). Interestingly, some constraints appeared to work even before explicitly defining them, though I may have misinterpreted the behavior. Regardless, the ALTER TABLE statements should now be correctly implemented.

# I did not achieve

- Tiptap Integration: I attempted to integrate Tiptap as a rich text editor. It’s partially implemented. I was able to install it and render the basic template (you’ll see "hello world" on the page), but I didn’t progress much beyond that. I found the setup and documentation a bit confusing and wasn’t able to fully integrate it in time.

# Things I Wanted to Improve

Post-Fetching Logic Refactor: I planned to extract the post-fetching logic into a reusable getPostById(postId) function. This would have allowed me to keep the code DRY and use the same logic in both the generateMetadata() function and the main SinglePostPage component. Unfortunately, I wasn’t able to implement this refactor as I was not able to work on the project after class and needed to finish by 5pm.

# Some notes

I really enjoyed this exercise because it gave me the opportunity to work with code that was written by someone else. I think this more closely reflects the kind of work developers do in real-world settings, where you're often joining existing projects, reading through unfamiliar code, and making changes or improvements.
