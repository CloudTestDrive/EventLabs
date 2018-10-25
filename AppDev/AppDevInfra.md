
[Go to the Cloud Test Drive Overview](../README.md)

![](../common/images/customer.logo2.png)

# Application Development Infrastructure Lab #

## Setting up a Cloud Infrastructure to run your applications ##

### Prerequisites ###
To run these labs you will need access to an Oracle Cloud Account.  If you are participating in a live event, your instructor will provide you the required credentials.

If you are running these labs on your own, please check out the instructions on the [Oracle Cloud Adventure page](https://cloudtestdrive.github.io/Trial.html) to learn how to get a Trial account or how to et up your corporate UC subxcription for this lab.


### Introduction ###

This lab will showcase the various types of infrastructure you can use to run your applications, using either thr traditional Oracle components such as the Oracle Database and the Weblogic application Server, or using common Opensource components such as Tomcat or Glassfish.
We'll run these components on the various levels of the infrastructure : either directly on a Compute instance, using Docker Containers, or using the PaaS services to run Oracle Database, MySQL, Weblogic, Java SE, Node, etc.

+ Step 1 : [Create a new Oracle Database instance via the GUI](dbcs-create/README.md).  In case you are using a demo account provided during an event, you can skip this step and use the seeded database service that is already available.
+ Step 2 : [Create a Java Cloud Service Instance using the Cloud user interface](jcs-create/README.md)
+ Step 3 : [Oracle Java Cloud Service Policy Based Auto Scaling](jcs-autoscale/README.md) : Experiment with the existing JCS instance in the Cloud Test Drive environment: 

To demonstrate how open the Oracle Compute Cloud Service is, you can also deploy images from 3rd parties straight into your Oracle Cloud infrastructure: below you can find an optional exercise where we will deploy a Ruby image from the 3rd party Bitnami environment into the Compute Cloud Service
+ Step 4 : [Deploy a Bitnami Ruby image onto the Oracle Compute Cloud](bitnami/create_account.md)
+ Step 5 : [Connect to the newly created Ruby instance](bitnami/connect.md)

---

## License ##
Copyright (c) 2014, 2017 Oracle and/or its affiliates
The Universal Permissive License (UPL), Version 1.0   
[Details](../common/license.md)

---
[Go to the Cloud Test Drive Overview](../README.md)
