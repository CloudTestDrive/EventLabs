[Go back to the Autonomous Overview Page](readme.md)

![](../common/images/customer.logo2.png)
## Autonomous Cloud Lab ##
### Section 2. Connecting to Autonomous Data Warehouse ###

In this section you will go through the steps of accessing the
credentials for connecting to your ADW instance with external clients,
like SQL Developer.

1.  The first step in accessing the credentials is to log in to the
    *Service Console* associated to your ADW instance. To do that, click
    on the **Service Console button** in the ADWCInstance001 overview.

![](./media/image25.png)


2.  Login to the *Service Console* with the following credentials:

    **Username*: admin**

    **Password:Welcome12345**

    **Note:** this is the password you specified during the provisioning
    of the service.

![](./media/image26.png)


3.  On the home page, click the **Administration** menu on the left side
    of the page.

![](./media/image27.png)


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

    **Connection Name: ADWCdb001**

    **Usernam: admin**

    **Password: Welcome12345**

    **Connection Type:* Cloud PDB**

    **Role:* default**

    **Configuration File**:* Browse to the location of the zipped
    wallet and select it

    **Keystore Password: Welcome12345**

    **Note**: The Keystore Password is the one you selected for your
    wallet before downloading it. The Service you need to choose is the
    name you gave to your service when provisioning it.

    **Service: adwcdb001\_high** - it is the service of the
    ADWCdb001 instance created which lead to consumer group high.

    Click **Test** to check the connection.

![](./media/image32.png)

8.  If the test is successful **Save** the connection and click
    **Connect** to access the database.

![](./media/image33.png)

We connected with SQL Developer to the database. The next step would be
to load date into the ADWC using SQL Developer.

---

[Continue to Section 2](Section3.md)

---
[Go back to the Autonomous Overview Page](readme.md)
