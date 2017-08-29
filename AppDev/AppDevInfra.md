![](../common/images/customer.logo2.png)

# Application Development Infrastructure Lab #

## Setting up a Cloud Infrastructure to run your applications ##

This lab will showcase the various types of infrastructure you can use to run your applications, using either thr traditional Oracle components such as the Oracle Database and the Weblogic application Server, or using common Opensource components such as Tomcat or Glassfish.
We'll run these components on the various levels of the infrastructure : either directly on a Compute instance, using Docker Containers, or using the PaaS services to run Oracle Database, MySQL, Weblogic, Java SE, Node, etc.

+ Step 1 : Please skip this step, depreciated exercise (Create a Tomcat instance on a Compute node using the Oracle Marketplace)
+ Step 2 : [Create a Java Cloud Service Instance using user interface](jcs-create/README.md)
+ Step 3 : [Create a new Oracle Database instance via the GUI](dbcs-create/README.md)
+ Step 4 : Experiment with the existing JCS instance in the Cloud Test Drive environment: [Oracle Java Cloud Service Policy Based Auto Scaling](jcs-autoscale/README.md)

Following steps will demonstrate the use of the Oracle Container Cloud Service:
- Step 5: [Start-up a Tomcat image](container/tomcat_deploy.md)
- Step 6: [Create a new image based on the Docker GlassFish image](container/glassfish_import.md)

An optional Container excercise is available where you will create a CI-CD flow for containers with Wercker :
- Step 6-bis: [Build Node.js-MongoDB container packaged application using Wercker](container/wercker.md)

To demonstrate how open the Oracle Compute Cloud Service is, you can also deploy images from 3rd parties straight into your Oracle Cloud infrastructure: below you can find an optional exercise where we will deploy a Ruby image from the 3rd party Bitnami environment into the Compute Cloud Service
+ Step 7 : [Deploy a Bitnami Ruby image onto the Oracle Compute Cloud](bitnami/create_account.md)
+ Step 8 : [Connect to the newly created Ruby instance](bitnami/connect.md)

## Want to do more exercises ? ##

The above exercises have been specifically taylored to fit in the "Cloud Test Drive" format, if you are interested to do more extensive work, please feel free to visit the [Cloud Native DevOps Workshop](https://github.com/oracle/cloud-native-devops-workshop) project on GitHub.  You will need to request your personal Trial account for executing those labs.

---

## License ##
Copyright (c) 2014, 2017 Oracle and/or its affiliates
The Universal Permissive License (UPL), Version 1.0   
[Details](../common/license.md)

---
[Go to the Cloud Test Drive Overview](../README.md)
