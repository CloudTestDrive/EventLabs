[Go back to Overview Page](../README.md)

![](../common/images/customer.logo2.png)

# AI Service Container Lab #
## Import and deploy a AI Service Docker image onto Oracle Container Cloud Service ##

### Introduction ###
In this lab we will import and deploy an AI Service Docker image onto the Oracle Container Cloud Service (OCCS). The AI image is not included by default, we will download it from DockerHub.

### Pre - requisite Creation of a Container Cloud Service ###
The instructors will have created a Container Cloud service for your team to use. The link to the Container Admin Console will be provided in the Access Document you will receive. If you are doing these labs on your own, make sure to first set up a running Container Cloud instance from the Cloud Services dashboard.

### Open the OCCS console ###
Follow the link provided to the Container Admin console.  At this point your browser may complain about a self signed certificate.  Accept the certificate and proceed to the console.

Enter the credentials supplied by the instructors.

![](http://via.placeholder.com/350x150)

You should now see the Dashboard.

![](http://via.placeholder.com/350x150)

### Create a new service for AI Service

Click on Services. Click "New Service" to go to create a new service.

The service editor dialog box will open.  Fill in the basic details as shown:
- Service name : "faceclassification-user01", please use your own user name
- Service description : "aiservice-user01" 
- Image : thebeebs/faceclassification:latest

To be able to access the container from the outside world we need to add port mappings.
Each mapping routes traffic from \<host>:\<port> to \<container>:\<port>. But since we are all working on the same instance, we'll create an individual Host Port portnumber for each service :

- click on the "Ports" checkbox under "Available Options" on the right side of the screen
- click "+Add" in the "Ports" section that has appeared on the bottom left
- Add the three port mappings:
- - Host Port : Enter the sum of 8080 + your user number for the Host Port : e.g. user05 will use port 8080 + 5 = 8085
- - Container Port : 8084
- - Protocol : TCP

For example the 8080 mapping for user 05 should look like this:
![](http://via.placeholder.com/350x150)

The completed form should look like this:

![](http://via.placeholder.com/350x150)

The faceclassification service should now be shown in the "Services" list.  
- Click on "Deploy" for the service you just created

Take the defaults in the deploy faceclassification dialog and click "Deploy".

The faceclassification image should be downloaded and deployed to OCCS.

![](http://via.placeholder.com/350x150)

Click on the hostname link.  This is the host on which your image is deployed.

![](http://via.placeholder.com/350x150)

- Take a note of the IP address
- now browse to http://<host-ip-address>:8080 (plus your usernumber, e.g. 8085) to see the welcome screen.

Your service is now listening on the port you specified. We will now create an application that can consume it.

---
## License ##

Copyright (c) 2014, 2018 Oracle and/or its affiliates

The Universal Permissive License (UPL), Version 1.0   

[Details](../common/license.md)

---
[Go back to Overview Page](../README.md)