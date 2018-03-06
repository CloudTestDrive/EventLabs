![](common/images/customer.logo2.png)
---
# ORACLE Cloud Test Drive #

## Introduction ##

This Oracle Cloud project contains the lab materials for the Oracle Cloud Test Drive events organized in various locations.  Participants can experiment through these labs with a series of Oracle Cloud Services from the IaaS and PaaS family.  

![](common/images/Introslide.PNG)

During this day you will be able to experience the various cloud services from Oracle hands-on.  Below you find the link to all labs already available : 


## Application Development ##
+ [AppDev Infrastructure lab](AppDev/AppDevInfra.md) - Set up the infrastructure to run your applications : create a Database and Application Servers, either using DBaaS or JCS, or use Docker Container to spin up any conainer from the Docker repository
+ [AppDev Development lab](AppDev/Develop.md) - Building applications with DevOps: using Developer Cloud Service to build a SpringBoot application and deploying to Application Container Cloud Service
+ [DevStar Lab](https://github.com/oracledevstar/devstarworkshop/blob/master/README.md) - Join a rebel squad, develop Microservices together and defeat the DevStar backend application


## Container Native labs ##
**First exercises to get acquainted with Containers: Oracle Container CLoud Service**
+ [Deploy a Tomcat Docker image](AppDev/container/tomcat_deploy.md)
+ [Create a new image based on the Docker GlassFish image](AppDev/container/glassfish_import.md)

**Advanced exercises with Wercker and Kubernetes**
+ [CI/CD with Container Pipelines, Container Registry and Kubernetes Cluster to deploy an Angular Node application](AppDev/K8S/readme.md)
+ [CI/CD with Wercker, Docker Registry and OCCS: Build a Node.js-MongoDB container application](AppDev/container/wercker.md)
+ [Run your first serverless Function using FnProject](AppDev/functions/readme.md)


## Low Code Development ##
+ [Develop a MAX Application](http://docs.oracle.com/cd/E65774_01/tutorials/tut_mcs_max_short/tut_mcs_max_short_1a.html) - Develop a Mobile application using the Mobile Application Accelerator (MAX) utility from the Mobile Cloud Service
+ [Use Visual Builder to develop a simple web application to extend SaaS](AppDev/vbcs/readme.md)
+ [Building an intelligent Banking Bot](Mobile/IntelligentBots/readme.md) - Define a simple ChatBot, create two intents and a few utterances.  Finally you'll train and test your bot to see how it works.


## Process Cloud Service ##
In this lab, you will create a business process using PCS. This Order Approvals process will be initiated when a user enters an order.
[Follow this link for the details](Process/readme.md)


## Integration ##

+ [Integration Cloud Service](Integration/readme.md) - 
This lab will show you how to set up integration between 2 systems simply using the drag & drop features of Integration Cloud Service.  In this exercise we will set up an integration between a RightNow instance and a generic REST service of a mobile Application.

+ [API Platform Cloud Service](Integration/APIPCS-Manager.md) - 
The objective of this lab is to give you a comprehensive overview of the Oracle API Platform Cloud Service as an API Manager. 

## Infrastructure-as-a-Service ##
This chapter regroups a subset of the exercises already detailed in the previous topics to create a specific focus on IaaS services only.  This covers Compute CS and Container CS.  [Follow this link for the details](IaaS/readme.md)


## Prerequisites ##

The workshop is intended to work with the Oracle Cloud account information handed out to you during the event.  You will need the following information to start working on these exercises :

+ Oracle Cloud account **username** and **password**
+ Oracle Cloud **identity domain**
+ **Data center/region**

Alternatively you can request an Oracle PaaS trial account. To get an account look into [here](common/request.for.trial.md).

