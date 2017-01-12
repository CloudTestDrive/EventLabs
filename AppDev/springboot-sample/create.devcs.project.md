![](../common/images/customer.logo.png)
---
# ORACLE Cloud-Native DevOps workshop #

## Create Oracle Developer Cloud Service project using initial git repository ##

### About this tutorial ###
**Oracle Developer Cloud Service** is a cloud-based software development Platform as a Service (PaaS) and a hosted environment for your application development infrastructure. It provides an open-source standards-based solution to manage the application development life cycle effectively through integration with Hudson, Git, Maven, issues, and wikis. Using Oracle Developer Cloud Service, you can commit your application source code to the Git repository on the Oracle Cloud, track assigned issues and defects online, share information using wiki pages, peer review the source code, and monitor project builds. After successful testing, you can deploy the project to Oracle Java Cloud Service - SaaS Extension, publicly available Oracle Java Cloud Service instances, Oracle Application Container Cloud Service instances, or to an on-premise production environment.

![](images/00.dcs.png)

The key features of Oracle Developer Cloud Service include:

Project creation, configuration, and user management

+ Version control and source code management with Git
+ Storage of application dependencies and libraries with Maven
+ Continuous build integration with Hudson
+ Wiki for document collaboration
+ Issue tracking system to track tasks, defects, and features
+ Repository branch merge after code review
+ Deployment to Oracle Java Cloud Service - SaaS Extension, Oracle Java Cloud Service, and Oracle Application Container Cloud Service

Oracle Developer Cloud Service is available as a web interface accessible from a web browser and from Integrated Development Environments (IDEs) such as Oracle Enterprise Pack for Eclipse (OEPE), Oracle JDeveloper, and NetBeans IDE.

This tutorial demonstrates how to:

- Configure an Oracle Developer Cloud Service Project to be using an existing external Git repository

### Prerequisites ###

- Oracle Public Cloud Service account including Developer Cloud Service

----

#### Create Oracle Developer Cloud Service project ####

Sign in to [https://cloud.oracle.com/sign-in](https://cloud.oracle.com/sign-in). First select your datacenter then provide the identity domain and credentials. After a successful login you will see your Dashboard. Find the Developer services tile and click the hamburger icon. In the dropdown menu click **Open Service Console**.
![](images/01.dashboard.png)

On the Developer Cloud Service console, you should have access to the project "CloudTestDrive".

![](images/dev001.png)

+ Open the project by clicking on the name "CloudTestDrive
+ Now create a new repository using the green button

![](images/dev002.png)

+ Enter the name of the repository : springboot-userxx
+ Choose the option *Import existing repository*
+ Enter or copy the *https://github.com/janleemans/CloudTestDrive.git* repository address.
+ Click **Create**

![](images/dev003.png)

The repository will be created, you will see the progress of the import.

You have now created a new repository with seeded content from the github repository.
