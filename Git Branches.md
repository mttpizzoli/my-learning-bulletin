---
title: Git Branches
draft: false
tags:
---
# Start Using Git Branches

## Introduction

Imagine you're in the middle of a project with a collection of stable files. Now, you're planning some significant updates that could potentially complicate the readability or usability of your work. This is where the practicality of using branches comes into play.

This is a clear example of the inescapability of the use of branches.

Branches in [[Getting Started with Git|Git]] are essentially separate versions of the main repository. They allow you to work on different aspects of your project simultaneously without interfering with the stable version. This is why, when you need to make large updates, you might want to freeze the current working version and start working on something else.

You might have noticed that when you initialize your `git` folder and check what's going on behind the curtain (using `git status`), you might get such an answer.

```
On branch master

No commits yet

nothing to commit (create/copy files and use "git add" to track)
```

The first thing you are told is the branch you are working into. If you don't specify any name during the configuration, the default will be set automatically. In my case, this is `master`.

## Branching with Git initialization

If you check the [`git init`](https://git-scm.com/docs/git-init) documentation, you will find that one of the possible arguments is `-b <branch-name>`. If you follow such instructions, you will end up with the following command.

```terminal
git init -b branch-name
```

After running it, if you check the status (with `git status`), the output shall be:

```
On branch branch-name

No commits yet

nothing to commit (create/copy files and use "git add" to track)
```

Similar to the example in the introduction but with a clear difference right in the branch name.

## Create a new branch

Assume you have a project with two files in the `master` branch. Everything looks good, and you are planning some huge updates for one of the files.

If you want to reach the status I described, quickly run all the following commands.

```terminal
git init
```
```terminal
touch file01.txt
```
```terminal
touch file02.txt
```
```terminal
git add file01.txt file02.txt
```
```terminal
git commit -m "initial commit"
```

To create a branch called `new-branch`, you can run the following command.

```terminal
git branch new-branch
```

This is enough to create a new branch but not enough to move your working copy into it. In fact, if you run `git branch -a` you should see a similar output. The asterisk indicates that you are still in the `master` branch.

```
* master
  new-branch
```

You can move to `new-branch` by running the following command.

```terminal
git checkout new-branch
```

Alternatively, you can create a new branch and move directly to it by running:

```terminal
git checkout -b new-branch-2
```

## Switching Between Branches

Once your branches have been created, the command to switch among them is similar to what we have previously seen. If you want to come back to the `master` branch, the command is as follows (without the `-b`)

```terminal
git checkout master
```
