---
tags:
  - TIL
date: 2024-04-27
type: til-note
title: Git Merging
draft: false
---
## What is Merging?

As you become familiar with the concept of [[Git Branches|branching]], ask yourself, "Now that I have all these changes going on, how can I bring those to the main branch?"

Here is when merging comes into place. Merging is a fundamental operation in version control systems. Thanks to it, changes made in different branches are brought together into a single branch.

When you're juggling multiple branches, there comes a time when you need to bring them together. This usually happens when you know that changes you made on the secondary branch are tests and can be safely added to the main one.

## How to Perform a Merge in Git

Let's assume you have two different files on the main branch, `file01.txt` and `file02.txt` (you can leave them empty for the sake of this example).

Now, [[Git Branches#Create a new branch|create a new branch]] called `secondary-branch` (or whatever else you like). After that, you can make whatever changes you want and commit such changes.

Just to double-check, you can go to the `master` branch and check that your last changes are not available. You can do this with `git checkout master` (I highly suggest you do some back and forth between branches if you are a beginner with `git`).

Now, it's time for merging.

Let's start by going to the destination branch, which, in this case, is the `master` branch. That's so because you want to transfer changes from the `secondary-branch` to the `master` branch. 

```terminal
git checkout master
```

Then, you want to run this command.

```terminal
git merge secondary-branch
```

Remember, that's because you want to incorporate changes from `secondary-branch` (that's why you use it in the latter command) to the `master` branch (that's why you checkout into it at the beginning).
## That's only the tip of the iceberg

If you [look at the documentation](https://git-scm.com/docs/git-merge), you will see many available options for `git merge`. Furthermore, you might encounter situations in which the basic merging described above fails. This means you should take some action to fix the inconvenience. 
