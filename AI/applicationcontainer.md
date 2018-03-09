[Go back to Overview Page](../README.md)

![](../common/images/customer.logo2.png)

# AI Development Lab - Step 2 #

## Introduction
In this lab we will clone some code from GitHub make a modification to point the application at our AI Service and then upload the application to the container cloud service. 

## Pre - requisite Creation of a Container Cloud Service
The instructors will have created a Application Container Cloud service for your team to use. The link to the Container Admin Console will be provided in the Access Document you will receive. If you are doing these labs on your own, make sure to first set up a running Application Container Cloud instance from the Cloud Services dashboard.

## Clone the base project

Open a command window on your local machine and clone the repositoy using hte following command:

```
git clone https://github.com/thebeebs/faceclassificationfrontend.git
```

Navigate to the file. ```Js/viewModels/dashboard.js``` and on line *173* change the URL to point to the service you created in step one. For user 5 this should like like:

![](step2-modifyURL.png)

One you have made this change Zip the content of the entire folder. This Zip folder will be what you upload to ACCS.
## Open the ACCS console

Follow the link provided to the Container Admin console. At this point your browser may complain about a self signed certificate. Accept the certificate and proceed to the console.

Enter the credentials supplied by the instructors.

![](http://via.placeholder.com/880x200)

You should now see the Dashboard.

![](http://via.placeholder.com/880x200)



### Create a new Application

Click on "Create Application" it will pop up a model window. Selet Node as the platform,

![](step2-createModel.png)

Give the Application the name faceclassificationUser01 where User01 is replaced by your own username.

![](step2-givname.png)

Click the create button at the bottom right to create the application.

It should then take no longer than 5 mintues to deploy the application. You may need to refresh the browser window.

Once the application has been deployed you should see a URL a the bottom of the screen.

![](step2-url.png)

Click the URL to navigate to the web application. You should now be able to upload an image and have the service recognise the faces and classify the emotions.



---
## License ##

Copyright (c) 2014, 2018 Oracle and/or its affiliates

The Universal Permissive License (UPL), Version 1.0   

[Details](../common/license.md)

---
[Go back to Overview Page](../README.md)