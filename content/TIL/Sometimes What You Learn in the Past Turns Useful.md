---
tags:
  - TIL
date: 2024-03-29
type: til-note
title: Sometimes What You Learn in the Past Turns Useful
draft: false
---
# Sometimes, What You Learn in the Past Turns Useful

Have you ever had one of those moments when a random skill you picked up years ago suddenly becomes the hero of the day? Let me tell you about mine.

This note is not about a specific trick I learned today. It's an unexpected thought from my past learning: a simple web design fact.

Without going into details, I was working with a third-party application that was a web plugin for displaying simple GIFs. This is quite vague, I know, but this is not the point.

I completed all the standard procedures correctly but found a big white border around the GIF I was working with.

I stared at that mess for some time. It was hideous, and at first glance, it was clear it was not my fault.

Then, I had an idea.

Some years ago, I started learning the basics of web design. I aimed to gain some basic knowledge of the work behind a webpage. Back then, I didn't know this could have been useful today for an easy task I was assigned.

I recall that the main body of an [[HTML]] file has a default 8px thick margin (I didn't remember the exact dimensions, but I checked it with the Chrome inspection tool). If you are unfamiliar with HTML, knowing that every web page, by default, has a little border would be enough. This is done to allow some space and not make the text stuck to the left side of the page. This is very clear when you look at websites from the nineties.

After this discovery, the solution became clear very soon. I had to build an HTML file and link the GIF directly. The only care I should have taken was to set the default margin to 0px.

This was a manageable barrier. With some googling, I would have sorted such an issue.

But having a little spark that made me work out such a solution only because of something I was playing with some years ago, which made me very satisfied with what learning can do.

This small victory reminded me that no learning is ever wasted. Curiosity-driven explorations, no matter how trivial they seem at the time, can pave the way for unexpected solutions.
