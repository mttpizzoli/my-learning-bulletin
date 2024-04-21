---
tags:
  - TIL
  - python
  - virtual-environment
date: 2024-03-01
type: til-note
source: https://www.geeksforgeeks.org/creating-python-virtual-environment-windows-linux/
draft: 
title: Building a Virtual Environment on Python
---
# Building a Virtual Environment on Python

According to [Wikipedia](https://en.wikipedia.org/wiki/Virtual_environment), *a **virtual environment** is a networked application that allows a user to interact with the computing environment and the work of other users.*

With [Python](https://www.python.org/), specifically, this represents a system you can use to code using Python and keep what you do separately from your system-level installation.

When you have multiple projects going on at the same time, there might be different Python versions used. Would you imagine how annoying it would be to update your system-level settings each time you need to switch between projects?

To create a Virtual Environment in Python, go to your folder project and type this command on your terminal.

`python -m venv <venv-folder-name>`

`<venv-folder-name>` could be any name you want. By convention, you'll often find it named `venv`

If you are using Python 3.x, you might have to use the keyword `python3`.

To activate this, you want to run this command (this works for Mac, if you are using Windows, the command is a little bit different.)

`source venv/bin/activate`

In other words, you kind of have to run the `activate` file in the folder you've just created. You can either run the command I typed or move to the `bin` folder with the cd keyword and simply type:

`source activate` 

I often prefer this second option as when you are writing a short command on your terminal, you reduce possible errors that could invalidate the entire command.