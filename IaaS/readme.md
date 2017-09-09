
[Go to the Cloud Test Drive Overview](../README.md)

![](../common/images/customer.logo2.png)
---
# Infrastructure Labs - IaaS Focus #

## Introduction ##

This page regroups the Infrastructure parts of the Cloud Test Drive labs, focussing on the Container, Compute and Storage Cloud Services.

----

## Working with the Container Cloud Service ##
Following steps will demonstrate the use of the Oracle Container Cloud Service.  In these labs, we will use an existing Container Cloud Service instance.  The creation of this instance is out of the scope of these labs.
- [Start-up a Container with a Tomcat image](../AppDev/container/tomcat_deploy.md)
- [Create a new image based on the Docker GlassFish image and run it](../AppDev/container/glassfish_import.md)

An optional step is available where you will create a CI-CD flow for containers with Wercker :
- [Build Node.js-MongoDB container packaged application using Wercker](https://github.com/CloudTestDrive/EventLabs/blob/master/AppDev/container/wercker.md)

## Setting up Compute Cloud Service ##
+ [Create a Tomcat instance on a Compute node using the Oracle Marketplace](../AppDev/bitnami/tomcat.md)

## Optional exercise ##
To demonstrate how open the Oracle Compute Cloud Service is, you can also deploy images from 3rd parties straight into your Oracle Cloud infrastructure: below you can find an optional exercise where we will deploy a Ruby image from the 3rd party Bitnami environment into the Compute Cloud Service
+ [Deploy a Bitnami Ruby image onto the Oracle Compute Cloud](../AppDev/bitnami/create_account.md)
+ [Connect to the newly created Ruby instance](../AppDev/bitnami/connect.md)

---
[Go to the Cloud Test Drive Overview](../README.md)
