[Go to Overview Page](Dev2OKE.md)

![](../../common/images/customer.logo2.png)
## AppDev Development - Building applications with DevOps ##
### Setup your Developer Cloud Service Instance ###

### Introduction ###

This page will guide you through the setup of a new Developer Cloud instance :
- Enabling DevCS on your Dashboard
- Creating an instance
- Configuring the storage and Build parameters for your instance

This guide is meant for new Developer Cloud Service instances (post June 2018) cloud environments

### Enable DevCS on your dashboard ###

- Login to your cloud account and navigate to the dashboard

![alt text](images/dashboard.png)



- Make sure the "Developer Cloud" service is "visible" on the dashboard as in the above screenshot.  If this is not the case, use the "Customize Dashboard" button to enable it.

![alt text](images/customize.png)

### Create an instance ###

- Go into the Developer Cloud Service Overview by clicking on the Service title

![alt text](images/service.png)

- Open the Service Console.  You should have no existing instances.  If you have, you can skip the following steps and just validate you have a build engine witht the correct libraries included.

![alt text](images/empty.png)

- Use the "Create Instance" button to create a new Developer Cloud instance

![alt text](images/create.png)

- Hit the "Next" button and then "Create"

![alt text](images/confirm.png)

- Now the instance is being created.  This will take a few minutes, you can hit the small arrow to requery the status.

![alt text](images/creating.png)


### Configuring your DevCS Instance ###

Once the instance is available, you need to configure a few things to be able to create projects and run builds.  Please perform following steps to complete this configuration.

- Open a second window where you navigate to the Cloud Services Dashboard
- Open the Compute Classic Service Overview, and note down following elements :
   - Service Instance ID
   - Rest Endpoint

![alt text](images/compute.png)

- Navigate back to the Dashboard, and now select the "Storage Classic" Service Overview.  Note down following element:
   - Auth V1 Endpoint

![alt text](images/storage.png)

- Return to your initial window with the Developer Cloud Services, and click on the hamburger icon on the right of the newly created service.  Select "Access Service Instance".

![alt text](images/access.png)

- Now go to the "Organization" by clicking on the icon top right with your username initials

![alt text](images/toOrg.png)

- Navigate to the "Storage" configuration, and enter the storage parameters.  Test the connection to validate.
   - Service-ID : ue the syntax "Storage-xxxxx" where xxxxx is your cloud instance name

![alt text](images/storageConfig.png)

![alt text](images/editStorage.png)



- Now navigate to the "Virtual Machine configuration, and hit the **Configure Compute Account** button:

![alt text](images/vmOverview.png)

![alt text](images/configCompute.png)



### Creating a Virtual Machine

- Navigate to the VM Template menu and create a new template.

![alt text](images/newTemplate.png)



- In the dialog box, specify a name, for example **DockerOCIOKE**  and use the default **Oracle Linux 7** image.  Then hit the **Create** button.

  ![alt text](images/im04.png)


- Now select the template you just created (DockerOCIOKE), and add the required software packages by clicking on the **Configure Software** button.

![alt text](images/im05.png)

- Select the following packages:
  - Docker 1
  - Kubectl
  - OCIcli ==> this will prompt you to also install Python3

![alt text](images/im06.png)



- Finally, navigate to the **Virtual Machines** menu on the left, and hit the **New VM** button.

  ![alt text](images/im07.png)

  - Choose **Quantity = 1**
  - Select the template you just created: **DockerOCIOKE**

You finished all the steps to finalize the Developer Cloud setup.  Please use the "Back" button of your browser to return to the main tutorial.



 

---

[Go to Overview Page](Dev2OKE.md)

