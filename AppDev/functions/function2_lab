# Fn Functions Lab

In this lab you will also explore serverless computing using functions with the
Docker-based open source Fn project.

This document is meant to be an overview of the entire lab.  Throughout, you may
be directed to other labs, to run specific sections.  It is important that when
you finish each major section, you return to *this* document for the next
section.

As you make your way through the tutorials, look out for this icon.
![](images/userinput.png) Whenever you see it, it's time for you to
perform an action.

## Section 1 - Setting up a Docker Environment

* [Docker Options](vm.md)

## Section 2 - Verifying your Docker Install

Before we get started with functions we're going to verify that Docker is
installed and working. In a terminal, type the following command:

![](images/userinput.png)
>```
> docker --version
>```

If Docker is installed and running, you should see output something like:

```
Docker version 17.0x.x-ce, build 276fd32
```

NOTE: Depending on how you've installed Docker you may need to prefix `docker`
commands with `sudo` in which case you would have to type:

![](images/userinput.png)
>```
> sudo docker --version
>```

## Section 3 - Functions

With Docker successfully installed it's time to move on to functions.
Functions as a Service (FaaS) platforms provide a way to deploy code to
the cloud without having to worry about provisioning or managing any compute
infrastructure. The goal of the open source Fn project is to provide a functions
platform that you can run anywhere--on your laptop or in the cloud. And Fn will
also be the basis of a fully serverless FaaS platform.  With Fn you can develop
locally and deploy to the cloud knowing your functions are running on *exactly*
the same underlying platform.

### Installing Fn

You've got Docker installed so the principal Fn prerequisite is satisfied. So
let's start by [Installing Fn](http://fnproject.io/tutorials/install).

### Your First Function

Now that the Fn server and CLI are installed we can dig into the creation and
running of functions.  In this tutorial you'll create, run locally, and deploy
a Go function.  If you aren't a Go programmer don't panic! All the code is
provided and is pretty easy to understand.  The focus of this tutorial is on
becoming familiar with the basics of Fn, not Go programming.

So let's [create and deploy your first function](http://fnproject.io/tutorials/Introduction).

### Introducing the Java Function Developer Kit

Fn provides an FDK (Function Developer Kit) for each of the core supported
programming languages.  But the Java FDK is the most advanced with support for
Maven builds, automatic function argument type conversions, and comprehenive
support for function testing with JUnit.

The [Introduction to Java Functions](http://fnproject.io/tutorials/JavaFDKIntroduction)
tutorial covers all these topics and more.

### Troubleshooting

If you've been following the instructions in the tutorials carefully you
shouldn't have run into any unexpected failures--hopefully!!  But in real life
when you're writing code things go wrong--builds fail, exceptions are thrown,
etc.  Fortunately the [Troubleshooting](http://fnproject.io/tutorials/Troubleshooting)
tutorial introduces techniques you can use to track down the source of a
failure.

### Containers as Functions

One of the coolest features of Fn is that while it's easy to write functions
in various programming languages, you can also deploy Docker images as
functions. This opens up entire world's of opportunity as you can package
existing code, utilities, or use a programming language not yet supported by
Fn.  Try the [Containers as Functions](http://fnproject.io/tutorials/ContainerAsFunction/)
tutorial to see how easy it is.

### Function Applications

In some of the tutorials you've tried so far we've breezed over the concept
of an 'application'. In Fn, functions must belong to an application. They
function as a namespace, a place to set configuration common across functions,
and can be used as a deployment unit.  The
[Applications](http://fnproject.io/tutorials/Apps) tutorial shows how you can
use an application to organize and deploy functions.

## More Fn Tutorials!

If you've completed these tutorial and want to try
more you're in luck.  There's an ever expanding
collection of Fn tutorials you can try on your own time.

Check out these [Fn Tutorials](http://fnproject.io/tutorials) and just
skip the ones you've already completed.
