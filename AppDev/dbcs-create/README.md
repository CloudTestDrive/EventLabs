![](../common/images/customer.logo.png)
---
# ORACLE Cloud Test Drive #
## Lab: Application Development Infrastructure ##


[to Step 2](../jcs-create/README.md) | [to Overview Page](../AppDevInfra.md) | [to Step 4](../jcs-autoscale/README.md)

----
## Step 3 : Create Database Cloud Service instance using user interface ##

### Introduction ###

Oracle Database Cloud Service provides you the ability to deploy Oracle databases in the Cloud, with each database deployment containing a single Oracle database. You have full access to the features and operations available with Oracle Database, but with Oracle providing the computing power, physical storage and (optionally) tooling to simplify routine database maintenance and management operations.

When you create database deployments, Database Cloud Service creates compute nodes to host the database, using computing and storage resources provided by Oracle Compute Cloud Service. Additionally, it provides access to the compute nodes (and thus to the database) using networking resources provided by Oracle Compute Cloud Service.

### About this tutorial ###
This tutorial demonstrates how to:
	
+ create Database Cloud Service using the user interface.

### Prerequisites ###

- Oracle Public Cloud Service account including Database and Storage Cloud Service

### Steps ###

Go to the Console (see Access inforrmation that was delivered to you in the workshop, or login to your [trial environment](https://cloud.oracle.com/sign-in) ). After a successful login you will see your Dashboard. On the dashboard click the hamburger icon on the Database tile. Select **Open Service Console**.
![](images/01.png)

This is the Database Cloud Service Console page. To create new instance click **Create Service** button.
![](images/02.png)

Now you can fill in the key paramaters for choosing the caracteristics of the database you will create : 
+ **Service Name**: the name of the service instance e.g. techcoDB.
+ **Description**: any description for your service.
+ **Subscription type**: Select "Oracle Database Cloud Serice", this is the fully managed Oracle Database Cloud Service
+ **SSH Public Key**: public key which will be uploaded to the VM during the creation. It allows to connect to the VM through ssh connection using the private key. To avoid additional task to create keypairs select Create a New Key option and download the newly generated keypair for later usage. Download the zip file to your `GIT_REPO_LOCAL_CLONE/cloud-utils` folder and unzip for later usage.
![](images/06.png) 

+ **Software Release**: Select the "Oracle Database 12c Release 1
+ **Billing Frequency**: "Hourly"

For more details about subscription types see the [documentation](https://docs.oracle.com/cloud/latest/dbcs_dbaas/CSDBI/GUID-F1E6807A-D283-4170-AB2B-9D43CD8DCD92.htm#CSDBI3395).
![](images/db02.PNG)


The last input page is the Service Details page. The following parameters have to be provided:
	
+ **Shape**: number of OCPU and size of the RAM. Choose the smallest (default) one.
+ **Timezone**: set your timezone.

+ **Administrator Password**: database instance's system password. Don't forget to note the provided password.
+ **DB Name (SID)**: container database service identifier.
+ **PDB Name**: pluggable database service identifier. You can leave the default PDB1

+ **Backup Destination**: Leave default; Both Cloud and Local Storage
+ **Cloud Storage Container**: the name of the container for database instance. The format is the following: Storage-IDENTITYDOMAIN/CONTAINERNAME, for example Storage-gse00002323/user01. Replace the identitydomain value according to your environment and specify a container name. Container name is up to you. The container don't need to be created in advance, because -see below- there is an option to create automatically.
+ **Cloud Storage User Name and Password**: the credentials for storage. Usually it is the same what was used to sign in to Oracle Cloud Services.
+ **Create Cloud Storage Containers**: check in because the container does not exist what you specified above.
+ **Character Set**: The database character set for the database. Leave default.
+ **National Character Set**: The national character set is used for data stored in SQL NCHAR data types. Leave default.

![](images/db03.PNG)
For more details about parameters see the [documentation](https://docs.oracle.com/cloud/latest/dbcs_dbaas/CSDBI/GUID-D4A35763-53ED-4FBB-97BF-0366F21B05E0.htm#CSDBI3401). Click **Next**.

The final page is the summary about the configuration before submit the instance creation request.

ATTENTION : To save resources on our environment and to speed up this exercise, we will NOT create this new dabase.  Instead, we will use the database that is already created.

==> Click "Cancel"
![](images/08.png)

If you should have gone ahead and created the database, the request would have been accepted and the Database Service Console page would  show the new instance. The instance would first be in Maintenance (Progress) mode. 
![](images/09.png)

---
[to Step 2](../jcs-create/README.md) | [to Overview Page](../AppDevInfra.md) | [to Step 4](../jcs-autoscale/README.md)

