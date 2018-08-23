
[Go to Overview Page](../Develop.md)

![](../../common/images/customer.logo2.png)
## AppDev Development - Building applications with DevOps ##
### Deploy SpringBoot demo application to Application Container Cloud ###

### Legacy Developer Cloud Build setup screenshots ###

You are on the page with the "old" version screenshots of this tutorial.  See if these screens fit your environment, otherwise hit the "Back" button of your browser!


### Configure build job for Spring Boot sample application ###

Once the Repository creation is done let's create the build job to compile and package the sample Spring Boot application to the desired format for Application Container Cloud Services.

Select **Build** item on the left side menu and click the **New Job** button.

![alt text](images/05.new.job.png "Configure new build job")

- Enter a name for the new job, and prefix it with your username (i.e User04BuildJob). 
- Select the *Create a free-style job* option and save.

![alt text](images/NewJob.PNG "Create new build job")

On the Main configuration page of the newly created job make sure **JDK 8** is the selected JDK.

![alt text](images/06.job.main.png "Configure job")

Change to the **Source Control** tab and select **Git**. In the git's properties section select the Git repository you created from the dropdown list. Leave the advanced settings default.

![alt text](images/07.job.scm.png "Configure source control")

Click **Triggers** tab to configure *SCM polling*. Select **Based on SCM polling schedule**. This ensures if any files in the source code repository has changed then the build will be fired.

![alt text](images/07.scm.trigger.png "Configure source control")

Change to **Build Steps** tab and add **Maven 3** build step. Enter **clean install** as Goals and **AppDev/springboot-sample/pom.xml** to POM File field. (In case if Build Steps tab just shows **Loading...** for a long time, save the Build configuration then re-open and continue.)

![alt text](images/08.job.maven.png "Add build step")

Finally change to Post Build tab and check in the **Archive the artifacts** option. Enter **AppDev/springboot-sample/target/\*.zip** into **Files To Archive** field.

![alt text](images/09.job.post.png "Post build")

Click on **Save** to update the new job configurations. To check the build job click on **Build Now** on the job's detail page. Once the job is done check the archived artifacts. It should be the following: `springbootdemo-0.0.1.zip`

![alt text](images/10.build.artifacts.png "Build artifacts")

Please note the build job contains an extra build step which packs the default artifact `springbootdemo-0.0.1.war` and `manifest.json` (ACCS descriptor from the *AppDev/springboot-sample/src/acc.resources* folder) into a zip archive. This archive is the desired format to deploy a Java application to ACCS.

### Configure Application Container Cloud service deployment ###

Now we will create a deployment configuration which enable direct deployment to Application Container Cloud services after a successful build job. In order to deploy automatically to this service, you first need to collect your identity domain from the ACCS Overview screen.  

- Switch to the window where you have your Cloud Domain Dashboard, and click on the word "Application Container".  This will lead you to the Application Container Service Overview
- Note the Data region of your instance: this is probably EMEA Commercial 2 (code EM2), or US Commercial 2 (code US2)
- Depending on the type of instance you are using, you will either use the "Identity Service ID", which has the form "idcs-xxxxxxx", or in case you do not see this parameter on your Overview screen, you will use the "Identity Domain ID", which has a form of "gse00xxxxx".

Switch back to the browser window where you have Developer Cloud running, change to the **Deploy** page, and create **New Configuration** 

![alt text](images/11.new.deploy.png "New deploy configuration")

Set the following properties.
![alt text](images/NewDeploy.PNG "Deployment Configuration")

- **Configuration Name**: the name to identify deployment configuration. Attention, this name cannot be longer than 30  characters and can only contain letters and numbers : for example "MyDeployUser01"
- **Application Name**: instance name in ACCS. You can use the same name as the Configuration name.
- **Deployment Target**: click **New** and select Application Container Cloud... and define connection properties such as **Data center**, **Identity Domain** and **credentials**. 
![alt text](images/dev001.PNG "ACCS Configuration")
![alt text](images/dev002.PNG "ACCS Configuration")
- **Type**: select **Automatic** which means auto deploy after a successful execution of the build job. Select your previously created job and its artifact to deploy.


Finally specify the Deployment Manifest to launch 1 instance with 1 GB of memory : 
- Click the "Include ACCS Deployment" flag
- Paste the below manifest:

```
    {
    "memory": "1G",
    "instances": "1" 
    }
```

![alt text](images/DeploymentProfile.PNG "ACCS Deployment Profile")

Click **Save**. 

### Build and deploy the sample application ###

To initiate a deployment to Application Container Cloud Service now there are two options. You can Start deployment process using the newly created Deployment configuration. Click gear icon and select **Start**.

![alt text](images/14.deploy.start.png "Deployment Start")

Other option is to fire a new Build Job execution which will deploy artifact after a successfull build. Go back to **Build** page and click the wrench icon belongs to Spring Boot sample application build job.

![alt text](images/15.build.now.png "Build Now") 

Both way deploys Spring Boot sample application on Application Container Cloud Service. You can check the deployment result on the **Deploy** page. Once the deploy is ready (this may take a while) click the **Deploy to ACCS** link.

![alt text](images/16.deploy.ready.png "Deploy ready")

This opens the Application Container Cloud Services console. You should see your Spring Boot sample application in the list. Click the application's URL to test.

![alt text](images/17.accs.console.png "ACCS Console")

The Spring Boot sample application main page should look like this.

![alt text](images/18.sample.app.png "Sample Application")

There are many other option to trigger this deploy process. For example build can be triggered by source changes or can be scheduled to specific time of the day.

### + Optional step: Make changes in the application ###

Prerequisites: Git client, Text editor

Clone your newly created Git repository hosted on Developer Cloud Service to your local machine using basic or your favourite Git tool. Make small changes for example in the JSP file. Push changes to DevCS remote repository, execute Build again and check the changes on the redeployed application.

---
[Go to Overview Page](../Develop.md)
