# Fn Functions Lab

In this lab you will explore serverless computing using functions with the
Docker-based open source Fn project.

This page is an overview, pointing you to various individual steps, often pointing directly to the up-to-date function tutorials on fnpro-ject.io.

**Attention !!** Always use the "back" button of your browser to go back to *this* overview, or you might end up on the generic Functions tutorial repository.


## Section 1 - Setting up your Environment ##

You have several options to set up your Functions environment.  Some key elements that will determine your choice are the type of OS you are running (Windows, Mac or Linux), your ability to install new software on your machine, and whether you already have Docker or VirtualBox available on your machine.

1. **Use a remote instance on a Ravello Server**

    Pro : you only need a browser or a ssh client on your machine
    
    Cons : Temporary access only during the session, console emulator via browser not super responsive
    
    ==> Follow the link provided by your instructor to access the environment
  

2. **Install a VM on your machine using VirtualBox, then run a VM image with Functions provided**
  
    Pro : local install, you can continue to use it later.  Linux desktop to run the lab.
    
    Cons : Need to install/download VirtualBox and the .ova file (3 GB)
    
    ==> Your lab instructor may have a USB stick with installers or you can download from
http://www.oracle.com/technetwork/server-storage/virtualbox/overview/index.html

    ==> Follow instructions on [this page](vm.md) for spinning up the VM
 
 
 3. **Install locally on your machine (advised for Mac and Linux OS)**
  
    Pro: local install, best experience and reactivity

    Cons : Install of Docker required
    
    ==> Check out this page for installing Docker on Mac: https://docs.docker.com/docker-for-mac/install/

    ==> [Installing Fn](http://fnproject.io/tutorials/install).
    


## Section 2 - Verifying your Docker and Fn Installs

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

Now do the same fo Functions :

![](images/userinput.png)
>```
> fn --version
>```

You should see something like 

```
fn version 0.4.113
```


## Section 3 - Functions

With Docker and Fn successfully installed it's time to move on to functions.
Functions as a Service (FaaS) platforms provide a way to deploy code to
the cloud without having to worry about provisioning or managing any compute
infrastructure. The goal of the open source Fn project is to provide a functions
platform that you can run anywhere--on your laptop or in the cloud. And Fn will
also be the basis of a fully serverless FaaS platform.  With Fn you can develop
locally and deploy to the cloud knowing your functions are running on *exactly*
the same underlying platform.

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
