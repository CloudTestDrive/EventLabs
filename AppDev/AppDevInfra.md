
[Go to the Cloud Test Drive Overview](../README.md)

![](../common/images/customer.logo2.png)

# Application Development Infrastructure Lab #

## Setting up a Cloud Infrastructure to run your applications ##

This lab will showcase the various types of infrastructure you can use to run your applications, using either thr traditional Oracle components such as the Oracle Database and the Weblogic application Server, or using common Opensource components such as Tomcat or Glassfish.
We'll run these components on the various levels of the infrastructure : either directly on a Compute instance, using Docker Containers, or using the PaaS services to run Oracle Database, MySQL, Weblogic, Java SE, Node, etc.

+ Step 1 : [Create a Java Cloud Service Instance using user interface](jcs-create/README.md)
+ Step 2 : [Create a new Oracle Database instance via the GUI](dbcs-create/README.md)
+ Step 3 : [Oracle Java Cloud Service Policy Based Auto Scaling](jcs-autoscale/README.md) : Experiment with the existing JCS instance in the Cloud Test Drive environment: 

Following steps will demonstrate the use of the Oracle Container Cloud Service:
- Step 4: [Deploy a Tomcat Docker image](container/tomcat_deploy.md)
- Step 5: [Create a new image based on the Docker GlassFish image](container/glassfish_import.md)
- Step 6: Spin up a Weblogic instance in a container

An optional Container excercise is available where you will create a CI-CD flow for containers with Wercker :
- Step 7: [Build Node.js-MongoDB container packaged application using Wercker](container/wercker.md)

To demonstrate how open the Oracle Compute Cloud Service is, you can also deploy images from 3rd parties straight into your Oracle Cloud infrastructure: below you can find an optional exercise where we will deploy a Ruby image from the 3rd party Bitnami environment into the Compute Cloud Service
+ Step 8 : [Deploy a Bitnami Ruby image onto the Oracle Compute Cloud](bitnami/create_account.md)
+ Step 9 : [Connect to the newly created Ruby instance](bitnami/connect.md)

---

## License ##
Copyright (c) 2014, 2017 Oracle and/or its affiliates
The Universal Permissive License (UPL), Version 1.0   
[Details](../common/license.md)

---
[Go to the Cloud Test Drive Overview](../README.md)
