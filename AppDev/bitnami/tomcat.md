![](../common/images/customer.logo.png)
---

In this lab we will be using the Marketplace to deploy a Tomcat Image file onto a Compute node on the Oracle Cloud. 

## Using the Create Image wizard ##

Go to your Cloud Console, and click on the "Instance" text in the "Compute" pane

![](images/comp0.PNG)

Now you can see the already defined instances, and use the "Create Instance button to start the creation wizard of a new instance:

![](images/comp1.PNG)

On the image creation creen, select "Marketplace" on the right side
Now you can use the search function to locate all the images containing the word "Tomcat"
Once you have the right selection, you select the Tomcat image on Ubuntu

![](images/comp2.PNG)

After hitting the "Select" button, you will get a dialog box asking you to accept the Oracle Terms of Use.
Check the checkbox and hit "Install".

![](images/comp3.PNG)

Now  you will see your image is "Selected", click on the right arrow on the top right

![](images/comp4.PNG)

In this screen you can select your compute shape.  To conserve resources, choose the smallest shape (General Purpose, oc3, 1 OCPU, 7.5 GB)
Now hit the "Next " button ">" in the top right.

![](images/comp7.PNG)

Here you have to enter a series of parameters :
+ Name: choose a name containing the "userxx" account you are using, so you will recognize your image easily
+ Label: choose the same as the name
+ SSH Keys: in order to manage the instance and access the console, you will use a public/private key when establishing an ssh connection.  You can use the keys we prepared for this lab ([public](bin/ctd_pub.pub) / [private](bin/ctd_priv.openssh)), or create your own key using for example puttygen

![](images/comp8.PNG)

Leave all other parameters as per default, and hit the "next" button ">"

![](images/comp9.PNG)

On the storage page, take all default parameters and hit the "next" button ">"

Tou have now arrived at the Review screen.  Check all your paramaters and hit "Create".

## Following the creation process ##
As the image is created (this takes approx. 5 minutes), we will follow the various steps :

+ Check the "Orchestrations", you will see 3 entries containing the name you gave your image

![](images/comp10.PNG)

+ Check the "Storage Volume" page, this will contain the storage volume you specified in the wizard
+ Check the "Instances" page, you will see your image appear and go into state "Running".

Now we will open HTTP access to this image to check if Tomcat is available.

+ On the "Instances" page, use the hamburger symbol besides your image to select "View"

![](images/comp11.PNG)

Scroll down to the "Security List" paragraph, and hit the "Add to Security List" button.  In the "Security List", select the "JK-For-http-access" list and click "Add"

![](images/comp12.PNG)

Scroll back up on this page and note the "Public IP Address" value.

You can now use a browser to go to this address, and the Tomcat console should appear:

![](images/comp13.PNG)







