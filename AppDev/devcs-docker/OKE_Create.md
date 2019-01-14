[Go to Overview Page](Dev2OKE.md)

![](/Users/jleemans/dev/github/EventLabs/common/images/customer.logo2.png)

## AppDev Development - Building applications with DevOps

### Setup your Managed Kubernetes Instance

### **STEP 1**: Create a Compartment for your Kubernetes nodes

Compartments are used to isolate resources within your OCI tenant. Role-based access policies can be applied to manage access to compute instances and other resources within a Compartment.

- Click the **hamburger icon** in the upper left corner to open the navigation menu. Under the **Identity** section of the menu, click **Compartments**

  [![img](https://github.com/CloudTestDrive/learning-library/raw/master/workshops/container-native-development-with-oke/images/200/LabGuide200-c32a35b9.png)](https://github.com/CloudTestDrive/learning-library/blob/master/workshops/container-native-development-with-oke/images/200/LabGuide200-c32a35b9.png)

  

  - If you already have a **Demo** compartment already, ***SKIP THIS STEP***. Otherwise, Click **Create Compartment**

    

    [![img](https://github.com/CloudTestDrive/learning-library/raw/master/workshops/container-native-development-with-oke/images/200/7.png)](https://github.com/CloudTestDrive/learning-library/blob/master/workshops/container-native-development-with-oke/images/200/7.png)

    

  - In the **Name** field, enter `Demo`. Enter a description of your choice. Click **Create Compartment**.

    

    [![img](https://github.com/CloudTestDrive/learning-library/raw/master/workshops/container-native-development-with-oke/images/200/LabGuide200-9341ed24.png)](https://github.com/CloudTestDrive/learning-library/blob/master/workshops/container-native-development-with-oke/images/200/LabGuide200-9341ed24.png)

    

### **STEP 2**: Add a Policy Statement for OKE

- Before the Oracle managed Kubernetes service can create compute instances in your OCI tenancy, we must explicitly give it permission to do so using a policy statement. From the OCI Console navigation menu, choose **Identity->Policies**.

  [![img](https://github.com/CloudTestDrive/learning-library/raw/master/workshops/container-native-development-with-oke/images/200/LabGuide200-13c980fa.png)](https://github.com/CloudTestDrive/learning-library/blob/master/workshops/container-native-development-with-oke/images/200/LabGuide200-13c980fa.png)

- In the Compartment drop down menu on the left side, choose the **root compartment**. It will have the same name as your OCI tenancy (Cloud Account Name).

  [![img](https://github.com/CloudTestDrive/learning-library/raw/master/workshops/container-native-development-with-oke/images/200/LabGuide200-a321171a.png)](https://github.com/CloudTestDrive/learning-library/blob/master/workshops/container-native-development-with-oke/images/200/LabGuide200-a321171a.png)

- Click **PSM-root-policy**

  [![img](https://github.com/CloudTestDrive/learning-library/raw/master/workshops/container-native-development-with-oke/images/200/LabGuide200-e67b7705.png)](https://github.com/CloudTestDrive/learning-library/blob/master/workshops/container-native-development-with-oke/images/200/LabGuide200-e67b7705.png)

- Click the **Add Policy Statement** button

  [![img](https://github.com/CloudTestDrive/learning-library/raw/master/workshops/container-native-development-with-oke/images/200/LabGuide200-3d4a7471.png)](https://github.com/CloudTestDrive/learning-library/blob/master/workshops/container-native-development-with-oke/images/200/LabGuide200-3d4a7471.png)

- In the Statement box, enter: `allow service OKE to manage all-resources in tenancy` and click **Add Statement**

  [![img](https://github.com/CloudTestDrive/learning-library/raw/master/workshops/container-native-development-with-oke/images/200/LabGuide200-bd5bcbd1.png)](https://github.com/CloudTestDrive/learning-library/blob/master/workshops/container-native-development-with-oke/images/200/LabGuide200-bd5bcbd1.png)

### **STEP 3**: Provision Kubernetes Using the OCI Console

- Now we're ready to create our Kubernetes cluster. From the OCI Console navigation menu, select **Developer Services->Container Clusters (OKE)**.

  [![img](https://github.com/CloudTestDrive/learning-library/raw/master/workshops/container-native-development-with-oke/images/200/LabGuide200-5c0a2b4c.png)](https://github.com/CloudTestDrive/learning-library/blob/master/workshops/container-native-development-with-oke/images/200/LabGuide200-5c0a2b4c.png)

- In the Compartments drop down, select the **Demo** compartment.

  [![img](https://github.com/CloudTestDrive/learning-library/raw/master/workshops/container-native-development-with-oke/images/200/LabGuide200-4071818d.png)](https://github.com/CloudTestDrive/learning-library/blob/master/workshops/container-native-development-with-oke/images/200/LabGuide200-4071818d.png)

- Click **Create Cluster**

  [![img](https://github.com/CloudTestDrive/learning-library/raw/master/workshops/container-native-development-with-oke/images/200/LabGuide200-2e2ab7ca.png)](https://github.com/CloudTestDrive/learning-library/blob/master/workshops/container-native-development-with-oke/images/200/LabGuide200-2e2ab7ca.png)

- We don't need to make any changes to the default values on this form, but let's look at what will be created when we submit it.

  [![img](https://github.com/CloudTestDrive/learning-library/raw/master/workshops/container-native-development-with-oke/images/LabGuide200-6ff14524.png)](https://github.com/CloudTestDrive/learning-library/blob/master/workshops/container-native-development-with-oke/images/LabGuide200-6ff14524.png) [![img](https://github.com/CloudTestDrive/learning-library/raw/master/workshops/container-native-development-with-oke/images/LabGuide200-11191333.png)](https://github.com/CloudTestDrive/learning-library/blob/master/workshops/container-native-development-with-oke/images/LabGuide200-11191333.png)

  - Starting at the top you'll notice that the cluster will be created in our **Demo** compartment.
  - We can customize the name of this cluster if we want
  - Multiple versions of Kubernetes are available, with the newest version selected by default
  - The default cluster creation mode will automatically create a Virtual Cloud Network for our cluster, including 2 load balancer subnets and 3 subnets for our worker VMs
  - We can customize the size and quantity of worker VMs in the node pool; by default we will get 3x 1 OCPU VMs, one in each Availability Domain.
  - We can also add more node pools to the cluster after creation.
  - The dashboard and Tiller will be installed by default.

- Click **Create**. You will be brought to the cluster detail page.



[Go to Overview Page](Dev2OKE.md)