[Go back to the Autonomous Overview Page](readme.md)

![](../common/images/customer.logo2.png)
## Autonomous Cloud Lab ##
### Section 3. Provisioning an Autonomous Transaction Processing Service ###

In this section you will be provisioning an Autonomous Transaction
Processing (ATP) instance using the UI capabilities of the service.

We will start from the Cloud Dashboard and go to Compute service console
(the OCI Console). For this go to the **Navigation Menu** on the top
left part of the **Dashboard** Home page.

![](./media/image13.png)


The navigation Menu appears and drop down the **Services** list.

![](./media/image34.png)


In the **Services** list choose **Compute**.

![](./media/image14.png)


The OCI Console launches and it will take you to the Home page page.
Autonomous Data Warehouse, as Autonomous Transaction Processing are both
deployed on OCI datacentres and can be created from OCI interface.

Click on the **Menu** on the top left of the Page.

![](./media/image15.png)


A new Menu appears and select Autonomous Transaction Processing service
under the Database Category

![](./media/image35.png)


The Home page for ATP appears.

On the right side of the page, you could choose a compartment if you
have one already created or use the default **root** compartment. In our
case we are going to choose the DEMO compartment where the instances
will be created.

![](./media/image17.png)


Click Create Autonomous Transaction Processing Database button to create
a new service instance.

![](./media/image36.png)


A new window appears. Enter the following information in the **Create
New Instance** screen:

**Display name** -- Choose a unique display name. In our case we will
use ATPInstance001

**Database Name --** Choose a unique database name. In our case is
ATPdb001

**CPU Count*: 1**

**Storage Capacity (TB): 1**

![](./media/image37.png)

In the Administrator Credentials section enter the Administrator
Password and confirm the password:

**Administrator Password:** 12 Character password like
**Welcome12345**

Also tick the **SUBSCRIBE TO NEW DATABASE SOFTWARE LICENSES AND THE
DATABASE CLOUD SERVICE** radio button.

![](./media/image38.png)

Click **Create Autonomous Transaction Processing Database** button.

![](./media/image39.png)

Notice that the instance is on provisioning state. It takes less than 2
minutes for the instance to provision.

![](./media/image40.png)

Click the **refresh** arrow button to see the status of your database.
Once the service is provisioned click on the Instance name
(ATPInstance001) to open the *Service Overview* page.

![](./media/image41.png)

Check the **Service Overview** page for more details on your ATP
instance.

![](./media/image42.png)

We created an ATP instance. Next we will download the database
credentials and connect to this instance using SQL Developer.


---

[Continue to Section 4](Section4.md)

---
[Go back to the Autonomous Overview Page](readme.md)
