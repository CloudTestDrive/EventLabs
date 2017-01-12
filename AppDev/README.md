![](common/images/customer.logo.png)
---
# ORACLE Cloud Test Drive Event - Application Development Labs #

## Introduction ##

This Oracle Cloud project contains the materials for the AppDev part of the Cloud Test Drive events, using a series of Oracle Cloud Services from the IaaS and PaaS family.  More specifically, these labs cover the following exercises :
+ Setting up a Weblogic infrastructure in the cloud via the GUI wizard of the Java Cloud Services.
+ Deploying a Bitnami opensource image onto the Oracle Compute Cloud
+ Deploying a Node.js script onto the Application Container Cloud via the GUI
+ Setting up a Springboot project using the Developer Cloud Services and deploying this to Application Container Cloud.

These 4 exercises have been specifically taylored to fit in the "Cloud Test Drive" format, if you are interested to do more extensive exercises, please feel free to visit the [Cloud Native DevOps Workshop](https://github.com/oracle/cloud-native-devops-workshop) project on GitHub.

### Prerequisites ###

The workshop is intended to work with the Oracle Cloud account information handed out to you during the event.  You will need the following information to start working on these exercises :

+ Oracle Cloud account **username** and **password**
+ Oracle Cloud **identity domain**
+ **Data center/region**

Alternatively you can request an Oracle PaaS trial account. To get an account look into [here](common/request.for.trial.md).
NOTE: Before you start to use your new Oracle Public Cloud services make sure that the replication policy has been set for your account. Otherwise you can not create storage container which is necessary for most of the services. See [Selecting a Replication Policy for Oracle Storage Cloud Service](https://docs.oracle.com/cloud/latest/storagecs_common/CSSTO/GUID-5D53C11F-3D9E-43E4-8D1D-DDBB95DEC715.htm). 

----

#### AppDev Lab 3.1 : Creating and Managing a JCS instance throught the GUI####
+ [Create Java Cloud Service Instance using user interface](jcs-create/README.md)

If you are finished early with the first part of this lab, you can do some more exerises :
+ Experiment with the existing JCS instance in the Cloud Test Drive environment: [Oracle Java Cloud Service Policy Based Auto Scaling](jcs-autoscale/README.md)
+ Create a new database, a step we skipped in the initial part of this lab : [Create an Oracle Database instance via the GUI](dbcs-create/README.md)

#### AppDev Lab 3.2 : Deploy a Bitnami opensource image onto the Oracle Compute Cloud####
+ [Deploy a Bitnami Ruby image onto the Oracle Compute Cloud](bitnami/create_account.md)
+ [Connect to the newly created Ruby instance](bitnami/connect.md)

#### AppDev Lab 4.1 : Deploy a Node.js application on ACCS####
Download the application artifacts and deploy the ZIP file on ACCS:
+ [Deploy a Node.js script onto the Application Container Cloud via the GUI](node_jet/node_deploy.md)
+ [Scale up/down Application Container Service using user interface and PaaS Service Manager (PSM) Command Line Interface (CLI) tool](accs-psm/README.md)

#### AppDev Lab 4.2 : Support SpringBoot application development lifecycle using Oracle Developer Cloud Service, Application Container Cloud Service####
+ [Create Oracle Developer Cloud Service project for SpringBoot application](springboot-sample/create.devcs.project.md)
+ [Create continuous build integration using Oracle Developer Cloud Service and Oracle Application Container Cloud Service](springboot-sample/devcs.accs.ci.md)

---

## Want to do more exercises ?

The above 4 exercises have been specifically taylored to fit in the "Cloud Test Drive" format, if you are interested to do more extensive work, please feel free to visit the [Cloud Native DevOps Workshop](https://github.com/oracle/cloud-native-devops-workshop) project on GitHub.  You will need to request your personal Trial account for executing those labs.

---

## [License](LICENSE.md)
Copyright (c) 2014, 2016 Oracle and/or its affiliates
The Universal Permissive License (UPL), Version 1.0

