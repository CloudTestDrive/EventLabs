![](../common/images/customer.logo.png)
---
# Infrastructure Labs - IaaS Focus #

## Introduction ##

This page regroups the Infrastructure parts of the Cloud Test Drive labs, focussing on the Container, Compute and Storage Cloud Services.

These exercises have been specifically taylored to fit in the "Cloud Test Drive" format, if you are interested to do more extensive exercises, please make sure to also check out the [AppDev Labs](https://github.com/CloudTestDrive/EventLabs/blob/master/AppDev/README.md) of the Cloud Test Drive, or visit the more technical exercises of the [Cloud Native DevOps Workshop](https://github.com/oracle/cloud-native-devops-workshop) project on GitHub.

----

## Setting up Compute Cloud Service ##
+ Step 1 : [Create a Tomcat instance on a Compute node using the Oracle Marketplace](../AppDev/bitnami/tomcat.md)

Note: we skip steps 2, 3 and 4 of the complete AppDev Infrastructure lab, and go straigt to step 5.

## Working with the Container Cloud Service ##
Following steps will demonstrate the use of the Oracle Container Cloud Service.  In these labs, we will use an existing Container Cloud Service instance.  The creation of this instance is out of the scope of these labs.
- Step 5 : [Start-up a Container with a Tomcat image](../AppDev/container/tomcat_deploy.md)
- Step 6 : [Create a new image based on the Docker GlassFish image and run it](../AppDev/container/glassfish_import.md)

An optional step is available as part of the CanDo workshops series :
- [Build Node.js-MongoDB container packaged application using Wercker](https://github.com/oracle/cloud-native-devops-workshop/blob/master/containers/nodejs-mongodb-stack/README.md)

## Optional exercise ##
To demonstrate how open the Oracle Compute Cloud Service is, you can also deploy images from 3rd parties straight into your Oracle Cloud infrastructure: below you can find an optional exercise where we will deploy a Ruby image from the 3rd party Bitnami environment into the Compute Cloud Service
+ Optional Step 7 : [Deploy a Bitnami Ruby image onto the Oracle Compute Cloud](../AppDev/bitnami/create_account.md)
+ Optional Step 8 : [Connect to the newly created Ruby instance](../AppDev/bitnami/connect.md)

