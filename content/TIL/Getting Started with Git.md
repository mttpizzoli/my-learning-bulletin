---
title: Getting Started with Git
draft: false
tags:
  - git
  - versioning
  - keeping-track
---
## Introduction

When you think about `git`, your mind often wanders to GitHub. Most people don't know that you can run `git` even on your computer and only need some simple command to start getting something useful about it.

While [GitHub](https://github.com/) utilizes Git for version control, allowing for collaboration and project sharing online, learning to use Git on your local machine is the first step towards mastering version control.

In this little guide, I will explore the most basic command, you need to learn to use git locally on your computer.

First, let's ensure that Git is correctly installed on your machine. Don't worry if it still needs to be installed. The installation process is straightforward. All the commands I'll mention are for Mac, but you'll find that [Windows commands](https://gitforwindows.org/) are pretty similar.

Checking if git is installed is very easy. Open the terminal and type:

```terminal
git --version
```

If you don't have it installed, my favorite way to install it is by using [Homebrew](https://brew.sh/). You can find a guide on how to do this in [this link](https://git-scm.com/download/mac).

## Git initialization

Now that you are all set up, you are ready to go.

Using the terminal, go to the folder you are using to deal with version control and type

```terminal
git init
```

There are a lot of options you can append to this command. Check [this guide]() for some details. But for now, using the command I just typed is okay.

This command creates the folder `.git`. This is the support folder the system uses to track changes you make to your work.

Another essential command you want to learn is:

```terminal
git status
```

When you type it, you will get some helpful information you want to consult while working on your project.

Here is what you shall see if you type this just after the initialization command:

```
On branch master

No commits yet

nothing to commit (create/copy files and use "git add" to track)
```

## Adding New Files

You can start creating files as you want. You can use whatever text editor you want, or you might even use Mac Finder. It doesn't matter as long as you stay in the same directory you previously entered the `git init` command.

If you type run the `git status` command (check the documentation at [this link](https://git-scm.com/docs/git-status)), you should get a similar output.

```
On branch master

No commits yet

Untracked files:
	(use "git add <file>..." to include in what will be committed)
		new-file-1.txt

Nothing added to commit but untracked files present (use "git add" to track)
```

I received such an output because I created a file named `new-file-1.txt`.

The output I pasted already guides to the next step. If you want to start tracking the file, you have to run the `git add` command. In my case, this is:

```terminal
git add new-file-1.txt
```

Note: I can run such a command because the file name I created does not contain spaces. If there were spaces, the file name should be between quotes (e.g., `git add "new file 1.txt").

If you create other files, this is the first command you should always run to ensure the file is correctly versioned.

## Committing New Changes

In versioning control, the word `commit` is the most frequent you'll use on a working day. Check the entire documentation at [this link](https://git-scm.com/docs/git-commit).

When you commit your changes in Git, you're essentially asking it to create a snapshot of your file at that point in time. This snapshot is accompanied by a brief message, which serves as a reminder of your actions for future reference.

Continuing with the example I started, after modifying the `new-file-1.txt`, you should run this command:

```terminal
git commit -m "<your-commit-message>"
```

You can add whatever message you want between quotes.

There are many philosophies on what style you should use, but as you are getting started, be sure you are using a message to help your future self understand what's going on.

As you might have read in the documentation, the commit command allows you to use many arguments. The most important is the commit message, but if you use it, as I showed in the previous example, your commit involves all files in the project.

If you want your commit to only involve a small selection of files, follow the next example.

Let's create a second file. In my example, this is `new-file-2.txt`. If you only want to commit something specific about it the command is the following:

```terminal
git commit -m "<specific-message>" new-file-2.txt
```

On the contrary, if you have a lot of files and you want to commit them all in one go, the command is:

```terminal
git commit -a -m "<message>"
```

In it, the `a` stands for "all".

## Check What You Have Done

If you want to look at all previous commits, the command is quite simple ([documentation here]()):

```terminal
git log
```

This will prompt you to list all the commits you made. This also includes a list of all the commit messages you typed, offering a narrative of your project's evolution.

For insights tied to a specific file, like `new-file-1.txt`, the command is:

```terminal
git log new-file-1.txt
```

This method makes checking all your changes to a single file easier. It will also help you understand how each piece evolved over time.

---
