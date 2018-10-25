![](./media/image1.png)

**Autonomous Cloud Lab**

October 2018

![C:\\8bd96521c6a5369e2841d9199dc01703](./media/image2.tmp)

![](./media/image3.tmp)

**Table of Contents**
-----



[Introduction](#introduction)

[Environment](#environment)

[Lab prerequisites](#lab-prerequisites)

[Section 1. Provisioning an Autonomous Data Warehouse Service](#section-1.-provisioning-an-autonomous-data-warehouse-service)

[Section 2. Connecting to Autonomous Data Warehouse](#section-2.-connecting-to-autonomous-data-warehouse)

[Section 3. Provisioning an Autonomous Transaction Processing Service](#section-3.-provisioning-an-autonomous-transaction-processing-service)

[Section 4. Connecting to Autonomous Transaction Processing Database](#section-4.-connecting-to-autonomous-transaction-processing-database)

[Section 5. Creating an Autonomous Analytics Cloud instance](#section-5.-creating-an-autonomous-analytics-cloud-instance)

[Section 6. Using Oracle Autonomous Analytics](#_Toc525204419)

[Section 7. Conclusion](#section-7.-conclusion)



**Introduction**

Based on machine learning, Oracle Autonomous Cloud represents a new
category of software automation. Oracle recently introduced Oracle
Autonomous Database Cloud---an incredibly important milestone. Oracle
Autonomous Cloud leverages the power of AI and machine learning to
deliver self-driving, self-securing, and self-repairing autonomous
capabilities. This dramatically transforms how companies innovate by
simplifying processes, reducing inefficiencies, and allowing companies
to free resources to focus on innovation. With Oracle Autonomous Cloud,
companies can lower costs, reduce risks, accelerate innovation, and get
predictive insights.

 

**Self-Driving**

-   Auto provision, secure, monitor, back up, recover, and troubleshoot

-   Instantly grow and shrink compute or storage without downtime

 

**Self-Securing**

-   Adaptive intelligence-enabled cyber threat detection and remediation

-   Automatic data encryption, security patches application

 

**Self-Repairing**

-   Automated protection from downtime

-   Up to 99.995 percent availability\*. \< 2.5 minutes downtime per
    month, including planned maintenance

**Lab prerequisites**

**Access Check List**

To secure the best start for the hands-on we need to check the access
right.

This checklist will check access to below cloud service that is use for
the hands-on labs.

> **-** Autonomous Data Warehouse
>
> **-** Autonomous Transaction Processing
>
> \- Analytics Cloud
>
> **Autonomous Data Warehouse -- Access Check**
>
> To be able to provisioning the Cloud Service you need to member of
> 'OCI\_Administrator (Provide administrative access in Oracle Cloud
> Infrastructure.)'
>
> Required Role: **OCI\_Administrator (Provide administrative access in
> Oracle Cloud Infrastructure.)**
>
> **Autonomous Transaction Processing -- Access Check**
>
> To be able to provisioning the Cloud Service you need to member of
> 'OCI\_Administrator (Provide administrative access in Oracle Cloud
> Infrastructure.)'
>
> Required Role: **OCI\_Administrator (Provide administrative access in
> Oracle Cloud Infrastructure.)**
>
> **Analytics Cloud -- Access Check**
>
> To be able to provisioning the Cloud Service you need to member of
> 'AUTONOMOUS\_ANALYTICS\_ServiceAdministrator'
>
> **Required Role: AUTONOMOUS\_ANALYTICS\_ServiceAdministrator**

**How to check**

Sign into you Oracle Cloud
![](./media/image5.png)
<https://cloud.oracle.com/en_US/sign-in>
1\.Type you Cloud Account Name and press My Services

2\.Type your use name and password then press Sign In

![](./media/image6.png)

3\.Go to Users, top right corner

![](./media/image7.png)

4\.In User Management, find you self

![](./media/image8.png)

5\.Go to Role

![](./media/image9.png)

Scroll down the list and checkwhat role you have.If you do not have the need role. You need to talk to your Cloud Service Administator.


**SQL Developer**

You will need SQL Developer installed on your computer to do the
exercises in this lab guide. The minimum SQL Developer version that is
required to connect to an Oracle Autonomous Data Warehouse Cloud
instance is SQL Developer 17.4.

To exercise all labs, you will need the latest SQL Developer version
18.1.

> Follow these steps to install SQL Developer depending on your
> platform.
>
> **Windows 64-bit**
>
> Install SQL Developer 18.1 using "Windows 64-bit with JDK 8
> included" from:
>
> <http://www.oracle.com/technetwork/developer-tools/sql-developer/downloads/index.html>
>
> **Other platforms**
>
> 1\. Install JDK 8u161 from:
>
> <http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html>
>
> 2\. Install SQL Developer 18.1 for your platform:
>
> <http://www.oracle.com/technetwork/developer-tools/sql-developer/downloads/index.html>

**Good Practise**

It is recommend to you a **separated Compartment** in Oracle Cloud
Infrastructure. Therefore, it will not have impact of any other running
workload.

How to create a Compartment -
<https://docs.cloud.oracle.com/iaas/Content/Identity/Tasks/managingcompartments.htm>

**Section 1. Provisioning an Autonomous Data Warehouse Service**
----------------------

In this section you will be provisioning an Autonomous Data Warehouse
Cloud (ADWC) instance using the UI capabilities of the service.

**Note:** Using your cloud environment you should have access to:

-   The Cloud Account Name

-   The Username

-   The Password

1.  Go to
    [cloud.oracle.com](file:///D:\Workshops\Autonomous%20DW\Workshop\cloud.oracle.com)
    and click **Sign In** to login to your Oracle Cloud account.

![](./media/image10.png)

2.  Enter the **Cloud Account Name**. In this example, the Cloud Account
    Name is *gse00014216*. Click **My Services**.

![](./media/image11.png)

3.  On the login page, fill in the Username and Password for your cloud
    account. Click **Sign In**.

![](./media/image12.png)
4.  We will start from the Cloud Dashboard and go to Compute service
    console (the OCI Console). For this go to the Navigation Menu on the
    top left part of the Dashboard Home
    page.![](./media/image13.png)

5.  In the Services list choose Compute.

![](./media/image14.png)

6.  The OCI Console launches and it will take you to the Home page page.
    Autonomous Data Warehouse, as Autonomous Transaction Processing are
    both deployed on OCI datacentres and can be created from OCI
    interface.

    Click on the **Menu** on the top left of the Page.

![](./media/image15.png)

7.  A new Menu appears and select Autonomous Transaction Processing
    service under the Database Category\
    ![](./media/image16.png)

8.  On the right side of the page, you could choose a compartment if you
    have one already.

![](./media/image17.png)

9.  Click Create Autonomous Data Warehouse button to create a new
    service instance.

![](./media/image18.png)

10. A new window appears. Enter the following information in the
    **Create New Instance** screen:

    ***Display name*** -- Choose a unique display name. In our case we
    will use ADWCInstance001

**Database Name --** Choose a unique database name. In our case is
ADWCdb001

***CPU Count*:** **1**

***Storage Capacity (TB):* 1**

![](./media/image19.png)

In the Administrator Credentials section enter the Administrator
Password and confirm the password:

***Administrator Password:*** 12 Character password like
**Welcome12345**

Also tick the **SUBSCRIBE TO NEW DATABASE SOFTWARE LICENSES AND THE
DATABASE CLOUD SERVICE** radio button.

![](./media/image20.png)

Click **Create Autonomous Data Warehouse** button.

![](./media/image21.png)

11. Notice that the instance is on provisioning state

![](./media/image22.png)

12. Click the **refresh** arrow button to see the status of your
    database. Once the service is provisioned click on its name to open
    the *Service Overview* page.

![](./media/image23.png)

13. Check the ***Service Overview*** page for more details on your ADW
    instance.

![](./media/image24.png)

**Section 2. Connecting to Autonomous Data Warehouse**
-----------

In this section you will go through the steps of accessing the
credentials for connecting to your ADW instance with external clients,
like SQL Developer.

1.  The first step in accessing the credentials is to log in to the
    *Service Console* associated to your ADW instance. To do that, click
    on the **Service Console button** in the ADWCInstance001 overview.

![](./media/image25.png)

2.  Login to the *Service Console* with the following credentials:

    ***Username*:** **admin**

    ***Password*:** **Welcome12345**

    **Note:** this is the password you specified during the provisioning
    of the service.

![](./media/image26.png)

3.  On the home page, click the **Administration** menu on the left side
    of the page.

![](./media/image27.png)}

4.  Click **Download Client Credentials**.

![](./media/image28.png)

5.  Enter a password before downloading the wallet zip file containing
    the credentials. This password will protect the sensitive data
    residing in the file. You can use **Welcome12345** as the password
    and then re-type it for confirmation.

    Click **Download** and save the file on your local computer.

![](./media/image29.png)

A zip archive with the wallet was downloaded:

![](./media/image30.png)

Next we will open SQL Developer and create a connection there.

6.  Open **SQL Developer** and click to create a new connection.

![](./media/image31.png)

7.  Fill in the details to connect to the database as follows:

    ***Connection Name***: **ADWCdb001**

    ***Username***: **admin**

    ***Password***: **Welcome12345**

    ***Connection Type**:* **Cloud PDB**

    ***Role**:* **default**

    ***Configuration File**:* Browse to the location of the zipped
    wallet and select it

    ***Keystore Password**:* **Welcome12345**

    **Note**: The Keystore Password is the one you selected for your
    wallet before downloading it. The Service you need to choose is the
    name you gave to your service when provisioning it.

    ***Service***: **adwcdb001\_high** - it is the service of the
    ADWCdb001 instance created which lead to consumer group high.

    Click **Test** to check the connection.

![](./media/image32.png)

8.  If the test is successful **Save** the connection and click
    **Connect** to access the database.

![](./media/image33.png)

We connected with SQL Developer to the database. The next step would be
to load date into the ADWC using SQL Developer.

**Section 3. Provisioning an Autonomous Transaction Processing Service**
---------

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

***Display name*** -- Choose a unique display name. In our case we will
use ATPInstance001

**Database Name --** Choose a unique database name. In our case is
ATPdb001

***CPU Count*:** **1**

***Storage Capacity (TB):* 1**

![](./media/image37.png)

In the Administrator Credentials section enter the Administrator
Password and confirm the password:

***Administrator Password:*** 12 Character password like
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

Check the ***Service Overview*** page for more details on your ATP
instance.

![](./media/image42.png)

We created an ATP instance. Next we will download the database
credentials and connect to this instance using SQL Developer.

**Section 4. Connecting to Autonomous Transaction Processing Database**
------

In this section you will go through the steps of accessing the
credentials for connecting to your ADW instance with external clients,
like SQL Developer.

1.  The first step in accessing the credentials is to log in to the
    *Service Console* associated to your ATP instance. To do that, click
    on the **Service Console button** in the ATPInstance001 overview.

![](./media/image43.png)

2.  Login to the *Service Console* with the following credentials:

    ***Username*:** **admin**

    ***Password*:** **Welcome12345**

    **Note:** this is the password you specified during the provisioning
    of the service.

![](./media/image44.png)

3.  On the home page, click the **Administration** menu on the left side
    of the page.

![](./media/image45.png)

4.  Click **Download Client Credentials**.

![](./media/image46.png)

5.  Enter a password before downloading the wallet zip file containing
    the credentials. This password will protect the sensitive data
    residing in the file. You can use **Welcome12345** as the password
    and then re-type it for confirmation.

    Click **Download** and save the file on your local computer.

![](./media/image47.png)

A zip archive with the wallet was downloaded:

![](./media/image48.png)

Next we will open SQL Developer and create a connection there.

6.  Open **SQL Developer** and click to create a new connection.

![](./media/image31.png)

7.  Fill in the details to connect to the database as follows:

    ***Connection Name***: **ATPdb001**

    ***Username***: **admin**

    ***Password***: **Welcome12345**

    ***Connection Type**:* **Cloud PDB**

    ***Role**:* **default**

    ***Configuration File**:* Browse to the location of the zipped
    wallet and select it

    ***Keystore Password**:* **Welcome12345**

    **Note**: The Keystore Password is the one you selected for your
    wallet before downloading it. The Service you need to choose is the
    name you gave to your service when provisioning it.

    ***Service***: **atpdb001\_high** - it is the service of the
    ATPdb001 instance created which lead to consumer group high.

    Click **Test** to check the connection.

![](./media/image49.png)

8.  If the test is successful **Save** the connection and click
    **Connect** to access the database.

![](./media/image50.png)

The connection to the ATP database using SQL Developer is created. The
next step would be to load a table using SQL Developer from a local
file.

**Section 5. Creating an Autonomous Analytics Cloud instance**
---------

You use Oracle Cloud Stack to set up services with Oracle Autonomous
Analytics Cloud.

1.  In My Services, open the dashboard.

2.  ![](./media/image51.jpeg)
    Navigate to **Autonomous Analytics**,
    click the **Action Menu**, and then select **Open Service Console**.

3.  Click **Create Instance**.

![](./media/image52.jpeg)

4.  In the **Details** area:

    -   **Name**: Enter a name for your service instance. The name must
        start with a letter and can contain only letters and numbers.

    -   **Description:** (Optional) Enter a description.

    -   **Notification Email**: Enter the email address of the person
        who should receive status updates about this service. This
        person is usually you, the Cloud Account Administrator who's
        setting up the service.

    -   **Region**

    -   **Tags:** (Optional) Add tags and assign tags to this service.

    -   **License Type:** Bring your own license or subscribe to a new
        Autonomous Analytics Cloud software license and the Autonomous
        Analytics Cloud.

> For example:
>
> ![](./media/image53.png)

5.  In the **Select Region** area:

    -   **Region**: A region is a localized geographic area.

> ![](./media/image54.jpeg)
    For example:

6.  In the **Choose Service Options** area:

    -   **Edition:** Select the edition of Oracle Analytics Cloud that
        you want to use. The edition that you select determines the
        feature set that you can use.

        -   Enterprise Edition --- **EE-Enterprise**

        -   Standard Edition --- **SE-Standard**

        -   Data Lake Edition --- **DATALAKE-Datalake**

    -   **Feature Set:** Select the features that you want to deploy.
        The options available to you depend on the edition you're
        subscribed to. If you select **Business Intelligence**, you
        automatically have access to Data Visualization.

        -   Standard Edition --- **Data Visualization**

        -   Data Lake Edition --- **Data Visualization** or **Essbase**

        -   Enterprise Edition --- **Data
            Visualization** or **Essbase** or **Business
            Intelligence** (includes Data Visualization)

    -   **Number of OCPUs:** Select the number of Oracle Compute Units
        (OCPUs) for your environment.

> **\* You can raise a service request to change the compute shape after
> creating the service, if the needs of your business change.**
>
> For example:
>
> ![](./media/image55.png)

7.  Click **Next**.

8.  Verify that the details are correct, and click **Confirm**.

It takes about half an hour to create the service. Oracle sends an email
to the designated email address when your service is ready. Display the
Activity page to check the current status. 

9.  After the instance has been created you can go ahead and launch the
    platform by clicking on the menu drop-down button and selecting
    **Oracle Analytics Cloud URL**

![](./media/image56.png)

10. ![](./media/image57.png)
    You will be redirected to the
    following page, which is the Data Visualization welcome page:

11. In the left hand side you will find the Analytics Cloud menu with
    the following
    options:![](./media/image58.png)

    -   **Home:** easy access to manage your connections, view existing
        data sets, projects and data flows.

    -   **Projects:** you can manage folders and projects from this
        section.

    -   **Data:** displays all the datasets, connections, dataflows and
        sequences.

    -   **Machine Learning:** manage and inspect the models that you
        have created.

    -   **Console:** add/edit map layers, jobs, administer users and
        roles, manage snapshots, connections and configure mail
        settings.

    -   **Academy:** useful resources for getting started.

[]{#_Toc525204419 .anchor}

**Section 6. Using Oracle Autonomous Analytics**
-------

Creating a Project

1.  ![](./media/image59.png)
    You may now head back to the home page
    and click **Create** in the right hand side and select **Project**

2.  ![](./media/image60.png)
    You can select either from the
    existing data sets or create a new one, given that this is a fresh
    instalation, go ahead and click **Create Data Set**

3.  ![](./media/image61.png)
    In the **Create Data Set** dialog box there will be displayed all the
    current connections as well as the option to upload a file (.csv,
    .xlsx)

> ![](./media/image62.png)
    Proceed to **Create Connection** in
> order to connect to a database.
>
> These is the list of possible connections in Oracle Analytics Cloud,
> for this workshop we are going to connect to **Oracle A**utonomous
> **D**ata **W**arehouse **C**loud (short -- ADWC or ADW).

4.  Fields for creating a connection to **ADWC**:

    -   **Connection Name:** This name will be used to display the
        connection for easier access on the screens that we have
        previously seen

    -   **Description (Optional)**: for internal purposes

    -   **Host:** host name from the wallet you have downloaded -- open
        **tnsnames**

    -   **Port:** default for **ADWC** is 1522, also available in the
        **tnsnames** file

    -   **Client Credentials:** browse for the .sso file provided in the
        wallet

    -   **Username:** the username you have provided when creating the
        **ADWC** instance

    -   **Password:** the password you have set

    -   ![](./media/image63.png)
        **Service Name:** same procedure as
        for the **host** -- open **tnsnames**

This should be the end result. Click **Save** and proceed to the next
step.

5.  After completing the previous step, all the schemas in the database
    will be shown, for the purpose of this exercise we are going to use
    **SH** which is a sample schema provided with the creation of a new
    database.

    ![](./media/image64.png)
    Select **SH** to proceed.

6.  ![](./media/image65.png)
    After selecting the schema, the
    following **Tables** will be retrieved, we are going to use the
    **Customers** table

7.  ![](./media/image66.png){
    Now that you have selected the table,
    select all the columns by clicking **Add All**, afterwards you can
    name your dataset and finally click **Add** to finish the importing
    process.

8.  ![](./media/image67.png)
    After you click **Add** the data will be available
    for preparation, by default columns that contain numeric values will
    be imported as measures (**\#**), to change that click on the symbol
    and select **Attribute**. Repeat this for all the columns that
    contain **ID** in their header.

> ![](./media/image68.png)
    Once this is done, click **Apply
>   Script** to save changes and proceed to the **Visualize** tab.
>
> ![](./media/image69.png)
    You will be taken to a blank canvas and
>   on the left hand side you will see the dataset that you have created.

9.  ![](./media/image70.png)
    For the purpose of this exercise, we need an
    additional table, which can be added by clicking on the **+** sign
    next to the magnifier.

>   An **Add Data Set** dialog box will pop up, the same one as we have
>   seen in step 2. only this time we already have the connection created
>
> ![](./media/image71.png)
>
> ![](./media/image72.png)
    Select the connection you have created:
>
> ![](./media/image73.png
    Choose the same schema -- **SH** -- and
>   this time pick the table **SALES**, click **Add All**, name your
>   dataset and finish by clicking **Add**
>
> ![](./media/image74.png)
>
> ![](./media/image75.png)
    Make sure you change all the columns
>   that contain **ID** to Attributes by clicking the **\#** sign, **Apply
>   Script** and proceed to the next step.

10. In order to correlate data, we will **Join** columns that can be
    found in the same tables to create relationships between the
    datasets.

    ![](./media/image76.png)
    This can be done by clicking **Data
    Diagram** on the bottom of the Canvas while you are in the
    **Prepare** section.

> ![](./media/image77.png)
    Given the fact that we have uploaded the
>   tables from the same schema and there are two columns with identical
>   names **CUST\_ID**, the service has created the join automatically and
>   now we can correlate data from two different sets. If the join does
>   not exist, create one by clicking **Add Match**, select the matching
>   columns and click **OK**.

11. Now that you have joined the datasets, click on **Visualize** and
    focus on the left hand side.

> Expand the datasets, hold **CTRL** to select both **CUST\_CITY** from
> **CUSTOMERS** and **AMOUNT\_SOLD** from **SALES**, right click and
> select **Create Best Visualization**.
>
> ![](./media/image78.png)
>
> ![](./media/image80.png)
    The result should look like this,
>   although, while the result is readable, due to the high number of
>   values in **CUST\_CITY**, some of the labels are not displayed.

12. ![](./media/image81.png)
    Change the visualization type to
    **Map** by clicking on the actual type -- **Horizontal Stacked**.

> ![](./media/image82.png)
>
> Now the values are displayed in an interactive map that you can zoom
> in on, drag around and check different values.
>
> ![](./media/image83.png)
    The colour of the bubble is based on the value of
> **AMOUNT\_SOLD**, for a better result, click and drag **AMOUNT\_SOLD**
> to **Size**.
>
> The end result is displayed below.
>
> ![](./media/image84.png)

13. ![](./media/image85.png
    Create another visualization using
    **Create Best Visualization** by expanding **TIME\_ID** in **SALES**
    and selecting **AMOUNT\_SOLD** and **Quarter of Year**.

> ![](./media/image86.png)
    This visualization will automatically be
>   positioned on the Canvas next to the previously created Map.
>
> Given the fact that **Quarter of Year** is a time dimension, we can
> add **Trend Lines**. To do that we hover on the top right corner of
> the visualization -- not the canvas, click the menu and **Add Trend
> Line**
>
> ![](./media/image87.png)
>
> ![](./media/image88.png)
    This will generate a line on the
>   visualization that summarizes the performance for the four years of
>   data in our dataset.

14. ![](./media/image89.png)
    Rename the Canvas by clicking the
    drop-down property menu in the bottom left corner and select
    **Rename**.

> Give it a name and proceed to the next step.

15. ![](./media/image90.png)
    Clicking on **Narrate** you can add
    Canvases to present them in your meetings.

> Drag your canvas on the blank page, add a text box in which you can
> explain the depicted information and click
> Present.![](./media/image91.png)

**Section 7. Conclusion**
-----

Oracle Cloud Platform's built-in autonomous capabilities transform the
way cloud services are delivered and consumed. Benefits for
organizations include:

**Lower Cost**

-   Reduce administration costs by up to 80 percent with complete
    > automation of operations and tuning

-   Reduce runtime costs by up to 70 percent by paying only for
    > resources needed at any given time

-   Deploy new apps in minutes versus months, save tens of thousands of
    > dollars in resource costs

**Reduce Risk**

-   Mitigate breach impact by avoiding reputational damage, associated
    > breach costs, and revenue losses

-   Reduce human error; under 2.5 minutes of downtime per month.

-   Run highest throughput, mission-critical workloads on proven Oracle
    > and open source technologies

**Accelerate Innovation**

-   Develop new apps within hours with self-generating code, plus
    > intelligent and secure CI/CD pipelines

-   Deploy new business processes within minutes versus days with
    > voice-enabled, self-defining integrations

-   Provision a data warehouse in seconds and accelerate time to
    > innovation

**Predictive Insights**

-   Proactively discover new insights with ML-based continuous data
    > analysis

-   Analyze data using AI with predictive data visualization, narration,
    > and intelligent data discovery

-   Get proactive insights with comprehensive, in-database analytics for
    > SQL, ML, Graph, R, and Times series
