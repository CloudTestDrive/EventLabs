
[to Step 4](../jcs-autoscale/README.md) | [to Overview Page](../AppDevInfra.md) | [to Step 6](../container/glassfish_import.md)

![](../../common/images/customer.logo2.png)
## Application Development Infrastructure lab ##
## Step 5 : Deploy the Tomcat Docker image (included by default) onto Oracle Container Cloud Service ##

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

Click "Next" to go to the second page.  Now click the "Edit" button of the "Tomcat" image.  Because all participants are launching their instance on the same container service, we need to assign a specific port to identify your instance:

- Scroll down to see the paragraph "Ports"
- Click on the little arrow besides the rule that is already there, and choose "Edit"

![](images/edit-service.png)

- Now change the Host Port to the port number assigned to you in the access document
- Leave the Container Port unchanged at 8080
- Save the Port configuration by clicking on the "Save" button

![](images/edit-port.png)

- Now save the Service via the "Save As" button, and choose a new name comprising your port number:

![](images/save-as-service.png)

You are now redirected back to the list of services, where you will see your newly created service appear.  Click the "Deploy" button for the service you just created, for example "tomcat-8090"

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

To finish the exercise, stop the instance you just started: 
- go to "Deployments" and click Stop.  
- wait for Tomcat to stop and then click "Remove".

![](images/deployments.png)

---
[to Step 4](../jcs-autoscale/README.md) | [to Overview Page](../AppDevInfra.md) | [to Step 6](../container/glassfish_import.md)
