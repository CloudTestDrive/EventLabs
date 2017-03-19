![](../common/images/customer.logo.png)
---
# ORACLE Cloud Test Drive Event
----
## Deploy the Tomcat Docker image (included by default) onto Oracle Container Cloud Service

### Introduction
In this lab we will deploy the Tomcat Docker image that is provided by default onto the Oracle Container Cloud Service (OCCS).

Since creation of Docker containers is fast, and they are lightweight, this will go extremely fast.

### Pre - requisite Creation of a Container Cloud Service
The instructors will have created a Container Cloud service for your team to use.  The link to the Container Admin console will be provided in the Access Document you will receive.  If you are doing these labs on your own, make sure to first set up a running Container Cloud Instance from the Cloud Services Dashboard of your account.


### Open the OCCS console

Follow the link provided to the Container Console.  At this point your browser may complain about a self signed certificate.  Accept the certificate and proceed to the console.

Enter the credentials supplied by the instructors.

![](images/admin-login.png)

You should now see the Dashboard.

![](images/dashboard.png)

### Deploy the Tomcat Docker Image

Click on Services.  Each of the "services" in the list represents a container and configuration ready for deployment onto OCCS.

![](images/services-page-1.png)

Click "Next" to go to the second page.  Click the "Deploy" button for the service with the id "tomcat".

![](images/services-page-2.png)

Take the default options in the dialog box, and click "Deploy".

![](images/deployment-defaults.png)

In a few seconds the container should start.

![](images/deployed.png)

Click on the hostname link.  This is the host on which your image is deployed.

![](images/host.png)

Take a note of the IP address and then browse to http://<host-ip-address>:8888

You should see the Apache Tomcat title page.

![](images/tomcat.png)

If other members of your team want to try, go to "Deployments" and click Stop.  Wait for Tomcat to stop and then click "Remove".

![](images/deployments.png)

Once the deployment has disappeared, you can redeploy Tomcat.
