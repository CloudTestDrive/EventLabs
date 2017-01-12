![](../common/images/customer.logo.png)
---

### Prerequisite : Compute REST endpoint

As a prerequisite for this lab, you need to collect some information from your Compute Cloud environment.  For this, go to your Cloud Dashboard and click on the “Compute” topic to go to the service Dashboard.
Next copy the “Rest Endpoint” for your Compute Cloud service as shown below:

![](images/image002.png)

## Create a Bitnami account ##

Bitnami is a company that supplies pre – built images of common application stacks.  These can then be used to develop and run applications.
An extensive range of Bitnami images are available for deployment on the Oracle Cloud Platform IaaS Compute service.  The available stacks include application infrastructure components such as LAMP, Tomcat and Ruby.  The full range of images can be found [here](http://oracle.bitnami.com/).

In this exercise we’re going to walk through deployment of the Ruby image which includes both the Ruby runtime and Rails a popular web application framework that runs on it.
 
The first thing that we need is to log into Bitnami.  Go to http://bitnami.com/sign_in

![](images/image004.png)

You can either create a Bitnami account here or just use an external provider to log in (I’m going to log in with my Google account).
You’ll get sent an email with a link in to verify your email address.  Once you are logged in, click on “Console”:

![](images/image007.png)
 
This gives you a choice of cloud “launchpads”.  Click on the Oracle Launchpad:
 
![](images/image010.png)
 
This opens the Bitnami library for Oracle.  Scroll down and select Ruby:

![](images/image013.png)

When you hover over it you’ll see a “Launch” button, and a “Learn More” link.

![](images/image016.png)
  
Click on “Learn More” and a new tab will open giving you a full description of the image:

![](images/image018.png)
 
We can see that this image offers us a complete Ruby / Ruby on Rails environment.
Go back to the launchpad tab and click on launch:

![](images/image016.png)
 
If you already have an account, you will then need to unlock your Bitnami vault where your SSH keys are held:

![](images/image022.png)

 
Then you need to add your Oracle cloud account so Bitnami can access your cloud environment to create a VM.  Click “Add cloud account”:
 
![](images/image025.png)
 
If you’re doing this for the first time you will need to set up your Bitnami vault for SSH keys:

![](images/image027.png)
 
Enter the Oracle Cloud identity domain (eg gse000023xx), and your Oracle Cloud credentials (<Userxx> and password), and the Compute REST API endpoint you noted down earlier in the exercise, then click “Continue”:

![](images/image033.png)

 
You should see this screen:

![](images/image035.png)
 
Then click “Launch”.  Choose server size, disk capacity and OS (I’m just taking the defaults), then click “Create”:
 
![](images/image037.png)
 
The VM will then be created (go for a coffee while this happens : expect this to take approx. 12 minutes):

![](images/image039.png)

Once it is completed you will see the following:
 
![](images/image041.png)

Your Ruby image is now up and running ! Go back to the overview and take the next step to access your Ruby instance.
