---
tags:
  - TIL
date: 2024-07-06
type: til-note
title: Start a React Project
draft: false
---
# Start a React Project

Ok, I still don't want to really start using React. This is probably the most used Javascript framework nowadays, but I don't know if this is that's what I really want to do with my career.

Let's just start.

First, you should initialize your React project. You want to do it by using the following command:

```
npx create-react-app ./
```

The `./` symbol is a crucial part of the command (I struggled to make it run the first time because I forgot about it). It indicates to the system that you want to build the app in the current directory. If you prefer a different location, you can simply type it there.

After 1-2 minutes of waiting, you will see some folders appear.

A good thing worth noting is the `public/index.html` file. If you delete all the comments, you'll find that in the `body` tag, there is only a div element whose root is id.

```
<div id="root"></div>
```

That's essentially the primary section of your website. Any programming you do will populate this tag.