---
tags:
  - TIL
date: 2024-04-27
type: til-note
title: Remove a folder using terminal commands
draft: false
---
I know this might sound trivial, but sometimes I forget it, or I struggle to remember exactly what I am doing.

If you want to remove a file, the command is quite simple. Just use `rm`. For example, the command below simply removes the file.

```terminal
rm a-file.txt
```

If you try the same command with a folder, you'll likely get this error.

```
rm: a-folder: is a directory
```

When it comes to deleting a directory, it's essential to use the correct command. In this case, you'll need to add the `-r` option to the `rm` command. This option is crucial as it tells the system to delete the directory and all its contents. Here's an example to illustrate this:

```
rm -r a-folder
```

The `r` stands for recursive.

If you find that your deleting request is being denied, you can use the '-f' option to force the deletion. *However, be extremely cautious when using this option. It stands for 'force,' and it will delete files and directories without asking for confirmation. If you use this command in the wrong folder, you could lose data irretrievably. Only use the '-f' option if you are sure of what you are doing.*

Adding such an option turns the command, as you can see below.

```terminal
rm -rf a-folder
```
