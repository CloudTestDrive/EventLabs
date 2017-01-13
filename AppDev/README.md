![](../common/images/customer.logo.png)
---
# Application Development Labs #

## Introduction ##

This Oracle Cloud project contains the materials for the AppDev part of the Cloud Test Drive events, using a series of Oracle Cloud Services from the IaaS and PaaS family.  More specifically, these labs cover the following exercises :
+ Lab 3.1 : Setting up a Weblogic infrastructure in the cloud via the GUI wizard of the Java Cloud Services.
+ Lab 3.2 : Deploying a Bitnami opensource image onto the Oracle Compute Cloud
+ Lab 4.1 : Deploying a Node.js script onto the Application Container Cloud via the GUI
+ Lab 4.2 : Setting up a Springboot project using the Developer Cloud Services and deploying this to Application Container Cloud.

These 4 exercises have been specifically taylored to fit in the "Cloud Test Drive" format, if you are interested to do more extensive exercises, please feel free to visit the [Cloud Native DevOps Workshop](https://github.com/oracle/cloud-native-devops-workshop) project on GitHub.

----

## AppDev Lab 3.1 : Creating and Managing a JCS instance throught the GUI##
+ Step 1 : [Create Java Cloud Service Instance using user interface](jcs-create/README.md)
+ Step 2 : Experiment with the existing JCS instance in the Cloud Test Drive environment: [Oracle Java Cloud Service Policy Based Auto Scaling](jcs-autoscale/README.md)
+ Step 3 : (Optional) Create a new database, a step we skipped in the initial part of this lab : [Create an Oracle Database instance via the GUI](dbcs-create/README.md)

## AppDev Lab 3.2 : Deploy a Bitnami opensource image onto the Oracle Compute Cloud##
+ Step 1 : [Deploy a Bitnami Ruby image onto the Oracle Compute Cloud](bitnami/create_account.md)
+ Step 2 : [Connect to the newly created Ruby instance](bitnami/connect.md)

## AppDev Lab 4.1 : Deploy a Node.js application on ACCS##
Download the application artifacts and deploy the ZIP file on ACCS:
+ Step 1 : [Deploy a Node.js script onto the Application Container Cloud via the GUI](node_jet/node_deploy.md)
+ Step 2 : [Scale up/down Application Container Service using user interface and PaaS Service Manager (PSM) Command Line Interface (CLI) tool](accs-psm/README.md)

## AppDev Lab 4.2 : Support SpringBoot application development lifecycle using Oracle Developer Cloud Service, Application Container Cloud Service##
+ Step 1 : [Create Oracle Developer Cloud Service project for SpringBoot application](springboot-sample/create.devcs.project.md)
+ Step 2 : [Create continuous build integration using Oracle Developer Cloud Service and Oracle Application Container Cloud Service](springboot-sample/devcs.accs.ci.md)

---

## Want to do more exercises ?

The above 4 exercises have been specifically taylored to fit in the "Cloud Test Drive" format, if you are interested to do more extensive work, please feel free to visit the [Cloud Native DevOps Workshop](https://github.com/oracle/cloud-native-devops-workshop) project on GitHub.  You will need to request your personal Trial account for executing those labs.

---

## [License](LICENSE.md)
Copyright (c) 2014, 2016 Oracle and/or its affiliates
The Universal Permissive License (UPL), Version 1.0

