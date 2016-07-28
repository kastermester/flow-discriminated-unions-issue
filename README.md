# Repo meant to show a performance issue with flow
Basically this simple repo will force tools like nuclide to go completely berserk on my system.
By that I mean my CPU usage goes through the roof, autocompletion never shows up, etc.

With flow 0.29.0, here is a time output:
```
$ time flow check
Found 0 errors
flow check  0.34s user 0.04s system 2% cpu 12.859 total
```

Which I'd say for such a simple program should be quite a bit faster.
