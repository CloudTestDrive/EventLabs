![](../common/images/customer.logo.png)
---
# Application Development Labs #

## Introduction ##

This Oracle Cloud project contains the materials for the AppDev part of the Cloud Test Drive events, using a series of Oracle Cloud Services from the IaaS and PaaS family.  More specifically, these labs cover the following exercises :
+ Lab 3 : Setting up a Cloud Infrastructure : Creating a Tomcat, WebLogic and Database instance on top of Compute and Storage services
+ Lab 4 : Set up a SpringBoot application in Developer Cloud Service, and deploy it to Application Container Cloud

These exercises have been specifically taylored to fit in the "Cloud Test Drive" format, if you are interested to do more extensive exercises, please feel free to visit the [Cloud Native DevOps Workshop](https://github.com/oracle/cloud-native-devops-workshop) project on GitHub.

----

## AppDev Lab 3 : Setting up a Cloud Infrastructure : Tomcat, WebLogic and Database instance Creation##
+ Step 1 : [Create a Tomcat instance on a Compute node using the Oracle Marketplace](bitnami/tomcat.md)
+ Step 2 : [Create a Java Cloud Service Instance using user interface](jcs-create/README.md)
+ Step 3 : [Create a new Oracle Database instance via the GUI](dbcs-create/README.md)
+ Step 4 : Experiment with the existing JCS instance in the Cloud Test Drive environment: [Oracle Java Cloud Service Policy Based Auto Scaling](jcs-autoscale/README.md)

Following steps will demonstrate the use of the Oracle Container Cloud Service:
- Step 5: [Start-up a Tomcat image](container/tomcat_deploy.md)
- Step 6: [Create a new image based on the Docker GlassFish image](container/glassfish_import.md)


To demonstrate how open the Oracle Compute Cloud Service is, you can also deploy images from 3rd parties straight into your Oracle Cloud infrastructure: below you can find an optional exercise where we will deploy a Ruby image from the 3rd party Bitnami environment into the Compute Cloud Service
+ Step 7 : [Deploy a Bitnami Ruby image onto the Oracle Compute Cloud](bitnami/create_account.md)
+ Step 8 : [Connect to the newly created Ruby instance](bitnami/connect.md)

----

## AppDev Lab 4 : Set up a SpringBoot application development environment in Developer Cloud Service, and deploy the application into Application Container Cloud##

+ Step 1 : [Set up your Oracle Developer Cloud Service project with a SpringBoot application](springboot-sample/create.devcs.project.md)
+ Step 2 : [Create continuous build integration using Oracle Developer Cloud Service and Oracle Application Container Cloud Service](springboot-sample/devcs.accs.ci.md)

If you finished these first steps, you can experiment further in thep 3 and 4:
+ Step 3 : [Scale up/down Application Container Service using user interface and PaaS Service Manager (PSM) Command Line Interface (CLI) tool](accs-psm/README.md)
+ Step 4 : [Deploy a Node.js script onto the Application Container Cloud via the GUI](node_jet/node_deploy.md)


---

## Want to do more exercises ?

The above exercises have been specifically taylored to fit in the "Cloud Test Drive" format, if you are interested to do more extensive work, please feel free to visit the [Cloud Native DevOps Workshop](https://github.com/oracle/cloud-native-devops-workshop) project on GitHub.  You will need to request your personal Trial account for executing those labs.

---

## [License](LICENSE.md)
Copyright (c) 2014, 2016 Oracle and/or its affiliates
The Universal Permissive License (UPL), Version 1.0

