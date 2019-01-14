[Go to Overview Page](../AppDevInfra.md)

![](../../common/images/customer.logo2.png)
## Exploring Developer Cloud Service for Building a Docker Container ##

### Deploying a NodeJS application onto a Managed Kubernetes Cluster ###

### Introduction ###

In this lab you’ll learn how to build Docker Image for Nodejs REST service on Oracle Developer Cloud Service and use the Kubernetes deployment capability to deploy the Docker container on Oracle Kubernetes Engine.

You will use the build pipeline feature in Oracle Developer Cloud to perform the Docker build and Kubernetes deployment as part of the build pipeline.

#### Prerequisites ####

This is step 2 of this lab, you need to have executed step 1 first, and pushed your Docker container into the OCIR Registry before starting this lab.

Some extra elements you need for this Part 2:

- Install Git cli on your machine and have it configured in the path.

#### So how does Oracle Developer Cloud Service help you? 

Provisioning and managing cloud environment can be a daunting tasks without the automation tools and a platform to manage the development flows. We will use Oracle Developer Cloud Service to be the DevOps platform to create and manage your build pipeline for building and deploying Docker containers on Kubernetes.

#### Lab Structure:

This lab will have 8 milestones as described below:

1.	Getting ready for the lab.
2.	Creating and Configuring Build Templates and Build VMs.
3.	Developing the Nodejs REST Service and Docker.
4.	Preparing the Kubernetes Deployment scripts.
5.	Creating the Git repositories and pushing the code. 
6.	Configuring Docker and Kubernetes build jobs.
7.	Creating and Executing the Build Pipeline.
8.	Test the OCI instance access.



### Milestone 1: Getting ready for the Lab.

1.	Ensure you have the Kubernetes and NodeJSDocker projects in the Workshop folder.
2.	Login into the Developer Cloud Instance and make sure the project that you created is still there.
3.	Check in your browser that the index.html file we created in Lab 1 on the OCI instance is still accessible.
4.	Keep the URL handy, as we would need it in this lab. 

Milestone 2: Creating and Configuring Build Templates and Build VMs.
In this section you will be creating and configuring the Build Template and Build VM with the required software, which will be used by the build machines to execute your build jobs, which you will be creating later in this lab. 

1.	Continuing in the Organization menu where we had verified the Storage and Compute Cloud Service Configuration and created the Packer_Terraform VM Template in Lab 1. Now again click on the VM Templates button and then on the “New Template” button. In the dialog box that pops up, give a template name such as John Dunbar Docker_Kubernetes, adding your name to make the template name unique as these are shared across projects. And then select the platform as “Oracle Linux 7”.

 

2.	Now on creation of the template click on “Configure Software” button.


3.	Select Terraform and Packer from the list of software bundles available for configuration and click on the + sign for each software bundle that you intend to add to the template. For this lab it would be Docker, OCICli and Kubectl Then click on “Done” button to complete the Software configuration.




​            

4.	Click on the Virtual Machines tab, then click on “+New VM” button and in the dialog box that pops up, enter the number of VM you want to create and select the VM Template you just created, which would be “<Your Name> Docker_Kubernetes” for our lab.
   ​                              

Milestone 3: Developing the Nodejs REST Service and Docker
Before you proceed, make sure you have the Workshop.zip file on your machine in the unzipped in the drive.
The unzipped Workshop folder should have four project folders as in the screen shot below. We would be using the NodeJSDocker and Kubernetes folders for this lab.

 

Now we will be making changes to the NodeJSDocker Project. 

1.	NodeJSDocker Project folder consists of three files. Main.js, Dockerfile and package.json

 

2.	Open Main.js file in your text editor. You will have to provide the value of the ipaddress of your OCI instance on which you had deployed the index.html file in previous lab. 

var express = require("express"),
​    bodyParser = require("body-parser")
​    http = require('http'),
​    url = require('url'),
​    qs = require('querystring');
​	
var app = express();
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
var router = express.Router();

var options = {
  host: '<ipaddress>', // change the ip address as per the one assigned to your OCI instance
  port: 80,
  path: '/index.html'
};

router.get('/message',function(req,res){
  var message = '';
  http.get(options, function(res1) {


  res1.on("data", function(chunk) {
​	tmpMsg = chunk + '';
​    message = tmpMsg.slice(1, -2) + "- Welcome";
​	res.json({message});
  });
}).on('error', function(e) {
   console.log("Got error: " + e.message);
});

});



app.use('/',router);

app.listen(80,function(){
  console.log("Listening on PORT 80");
}) 

3.	For the Dockerfile replace the <port> with the port number 80 that we have scripted the Nodejs listener to listen on. 
  FROM node:6

ADD Main.js ./
ADD package.json ./

RUN npm install
EXPOSE <port>

CMD [ "npm", "start" ] 
4.	You may also have a look at the package.json for understanding purpose, but you do not have to make any changes to it.


Milestone 4: Preparing the Kubernetes Deployment scripts
Now we will be needing some parameters that need to be configured in both Packer and Terraform scripts. You may want to keep the information handy by copying it in a notepad or text pad to avoid repeating the iteration for information retrieval.
To get the required information, login into Oracle Cloud Infrastructure. On login you can start collecting the information from the landing page itself. The below screenshot shows where you can retrieve your tenancy_ocid from.

 


To get the user_ocid, click on the user name in the OCI console and then select User Settings from the drop down. Then click on the copy link in the User Information tab to copy the user_ocid value and the fingerprint, as shown in the screen shot below. 

 

You can retrieve the Region as shown below.





 


1.	The Kubernetes project folder in the Workshop folder consists of 3 files. 
  get-kubeconfig.sh – Shell script to download the kubeconfig file on the build slave.
  nodejs-micro.yaml – To deploy the Docker container for Nodejs service that you will be building to deploy on Oracle Kubernetes Engine.
  oci_api_key.pem – It is the private key file for accessing the OCI instance to execute the 

2.	In the get-kubeconfig.sh file replace the function main with the below snippet. Before you do that you will have to place the appropriate values for tenancy_ocid, fingerprint,user_ocid and region that you have retrieved following the instructions above from the OCI instance. 
      Note: Do not place the angular brackets with the respective values.

function main {
​    [[ -z "${1}" ]] && die_usage "Cluster ID must be passed as first argument"
​    [[ -z "${ENDPOINT}" ]] && die_usage "environment variable for ENDPOINT must be set"
​    
    TENANCY=<tenany_ocid>
    USERID=<user_ocid>
    PRIVATEKEYPATH=oci_api_key.pem
    FINGERPRINT=<fingerprint>
    REGION=<region>
    
    oci-curl "${TENANCY}" "${USERID}" "${FINGERPRINT}" "${PRIVATEKEYPATH}" "${1}"
}

3. In the nodejs-micro.yaml, wherever you find nodejsmicro append it with nodejsmicro<first two letters of your First Name and first 2 letters of your last name concatenated>
  Sample script for the user John Dunbar would be as below. Also, replace <hub.docker.com username> with your hub.docker.com username.

            apiVersion: apps/v1beta1
  kind: Deployment
  metadata:
  name: nodejsmicroJODU-k8s-deployment
  spec:
  selector:
    matchLabels:
  ​    app: nodejsmicroJODU
  replicas: 1 # deployment runs 1 pods matching the template
  template: # create pods using pod definition in this template
    metadata:
  ​    labels:
  ​      app: nodejsmicroJODU
    spec:
  ​    containers:
  ​    - name: nodejsmicroJODU
  ​      image: <hub.docker.com username>/nodejsmicro:latest
  ​      ports:
  ​      - containerPort: 80 #Endpoint is at port 80 in the container
---
apiVersion: v1
kind: Service
metadata:
  name: nodejsmicroJODU-k8s-service
spec:
  type: NodePort #Exposes the service as a node port
  ports:
  - port: 80
    protocol: TCP
    targetPort: 80
      selector:
    app: nodejsmicroJODU



Milestone 5: Creating the Git repositories and pushing the Packer and Terraform scripts into it.
1.	Go to the Developer Cloud project landing page and click on the”+ New Repository” button. 


2.	On click of the button the dialog pops up. 
  Give name as NodeJSDocker and Description as Nodejs Docker. 
  Select Empty Repository for Initial content field.
  Then click on the create button. 


3. Similarly repeat step 1 for Kubernetes project. And when the dialog pops up:
  Give name as Kubernetes and Description as Kubernetes Scripts. 
  Select Empty Repository for Initial content field.
  Then click on the create button. 

  ​          


4.	Once the Git repositories are created you will see these listed in the Repositories tab on the Project landing page. You will need the Git repository URLS for the NodeJSDocker and Kubernetes respectively. 





5.	Check if the Git cli is installed on your machine and set in the path, by typing the command: git --version

 

6.	Now change the prompt to the NodeJSDocker folder first and run the  below set of commands in the same order as given below:

Command prompt > cd <to the NodeJSDocker folder>
Command prompt > git init
Command prompt > git add –all
Command prompt > git commit –m “First Commit”
​            Command prompt > git remote add origin < NodeJSDocker Git repository URL>
​            Command prompt > git push origin master

Note: While trying to push the code, using the git push command, you will be prompted for the Git repository credentials. Here, you should be using your Developer Cloud credentials. 

This will result in the code being pushed to the Oracle Developer Cloud Git repositories for NodeJSDocker and Kubernetes and you will be able to browse and also edit code from the Code tab in the Developer Cloud console.

 





Milestone 6: Configuring Docker and Kubernetes build jobs

We will first configure the NodeJSDocker build Job. The order is important as Kubernetes build job is dependent on the Docker image being deployed by the NodeJSDocker build job.

Configuring NodeJSDocker Build Job:

1.	Click on the Build tab on the left hand side menu in Developer Cloud console. 
2.	Then click on the “+ New Job” button to create a new Build Job.


3.	In the create Build Job dialog, enter the Build Job name as NodeJSMicroDockerBuild and select John Dunbar Docker_Kubernetes as the Software template from the drop down. This is the same VM Template that you have created as part of the Milestone 2 as part of this lab.


4.	For Job Configuration in the Source Control tab, select the NodeJSDocker.git in the Repository dropdown. And master as the Branch. Also check the Automatically perform build on SCM commit.


5.	In the Builders tab select Docker Builder from the Add Builder dropdown. And then select Docker Login, Docker Build and Docker Push.
  In the Docker Login form give your hub.docker.com credentials.
  In the just give the image name as <docker hub username>/nodejsmicro, also select Context root in Workspace as Source.
  And in Docker Push, give image as <docker hub username>/nodejsmicro

 


6.	Now click on the Save button to complete the creation of the NodeJSMicroDockerBuild Build Job.

Configuring Kubernetes Build Job:

1.	Click on the Build tab on the left hand side menu in Developer Cloud console. 
2.	Then click on the “+ New Job” button to create a new Build Job.

 

3.	In the create Build Job dialog, enter the Build Job name as KubernetesBuild, description as Kubernetes Scripts and select John Dunbar Docker_Kubernetes as the Software template from the drop down. This is the same VM Template that you have created as part of the Milestone 2 as part of this lab.


4.	For Job Configuration in the Source Control tab, select the Kubernetes.git in the Repository dropdown. And master as the Branch. 




5.	In the Builders tab select Unix Shell Builder from the Add Builder dropdown.
  And then add the below script. You will have to change the cluster ocid and ENDPOINT(in green) as per instructions given in the classroom.

chmod +x get-kubeconfig.sh
export ENDPOINT=containerengine.us-phoenix-1.oraclecloud.com
./get-kubeconfig.sh ocid1.cluster.oc1.phx.aaaaaaaaae4dembqmm4dqmjygy2wgndchftgcmrvha3gcmrqmcrdknbsgu3g > ~/kubeconfig
export KUBECONFIG=~/kubeconfig
kubectl get nodes
kubectl create -f nodejs_micro.yaml
sleep 120
kubectl get services nodejsmicroJODU-k8s-service
kubectl get pods
kubectl describe pods
​         


6.	Now click on the Save button to complete the creation of the KubernetesBuild Job.

Milestone 7: Creating and Executing the Build Pipeline.
1. In the Build tab of Developer Cloud, Click on the Pipelines tab. And then on the “+ New Pipeline” button to create a new build pipeline.

2. In the Create Pipeline dialog box give DockerK8SPipeline as name and select he two check boxes as shown in the screenshot below.

      

3. Now drag and drop the two Build jobs NodeJSMicroDockerBuild and Kubernetes Build in the UI and connect them as shown in the screenshot below. Then click on the Save button to save the Build Pipeline.

 

4.	In the Pipelines tab on the Build page execute the pipeline by clicking the play icon for the Pipeline we just created, as shown in the screenshot below. Now wait for the execution to go through.


5.	To monitor the execution, you can check the Build Queue for status.

6.	Now let us make a small change to the Main.js file in Developer Cloud console directly.

a.	To do this, first click on the Code tab on the left hand side in Developer Cloud.
b.	Then select the NodeJSDocker.git and master in the respective dropdowns.
c.	Now click on the Main.js link.
d.	Once you see the code, click on the pencil icon to edit the file.



 

e.	Add your name as below and then click on the commit button. 


f.	Again click on the commit button in the dialog to commit the changes.


g.	This will trigger the build of the NodeJSMicroDockerBuild build job and that in turn will trigger the execution of the DockerK8SPipeline.


Milestone 8: Test the OCI instance access
1.	Post the execution of KubernetesBuild build job, go to the Build Log. 

 


2.	Retrieve the IP address where the nodejsmicroJODU-k8s-service is running.<ipaddress>

3.	Also retrieve the port on which the service is accessible.<port>

4.	Now use the ip address and the port to construct the REST service URL, which will be as below. And you should be able to access it in your browser.
  http:// <ipaddress>:<port>/message
  You should see a message on your browser:
  ‘This is my webserver running on Oracle Cloud Infrastructure’ – Welcome <Your Name>
  Summary
  By completion of all the 8 Milestones in this lab, you should now have the knowhow of how to build a pipeline to build and push a Docker image and deploy it to Oracle Kubernetes Engine using Developer Cloud.



---
[Go to Overview Page](../AppDevInfra.md)
