#Process Cloud Service : Lab 2.0 #

 
Introduction
In this lab, you will create a business process using PCS. This Order Approvals process will be initiated when a user enters an order. The business logic is as follows:
•	Small orders, those < € 100, will be automatically approved.
•	All other orders, let’s call them large, need to be manually approved.
•	If an order is rejected, it needs to be sent to Management for a final decision.
There are 3 functional roles within this process –
•	OrderEntry
•	OrderApproval
•	OrderManagement
Note (for later)
Here is the XSD, defining an Order, you will need to simply copy and paste it later. Skip it for now.

<?xml version="1.0" encoding="windows-1252" ?>
<xsd:schema xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns="http://www.example.org"
            targetNamespace="http://www.example.org" elementFormDefault="qualified">
   <xsd:element name="Order">
        <xsd:complexType>
            <xsd:sequence>
                <xsd:element name="orderNr" type="xsd:string"/>
                <xsd:element name="custFirstName" type="xsd:string"/>
                <xsd:element name="custLastName" type="xsd:string"/>
                <xsd:element name="custEmail" type="xsd:string"/>
				<xsd:element name="custCountry" type="xsd:string"/>
				<xsd:element name="exportRestriction" type="xsd:string"/>
				<xsd:element name="orderStatus" type="xsd:string"/>
	            <xsd:element name="product" type="xsd:string"/>
				<xsd:element name="supplier" type="xsd:string"/>
			    <xsd:element name="unitPrice" type="xsd:int"/>
                <xsd:element name="quantity" type="xsd:int"/>
          		<xsd:element name="totalPrice" type="xsd:int"/>
            </xsd:sequence>
        </xsd:complexType>
    </xsd:element>
</xsd:schema>


 
Logging in to PCS
Your instructor will assign you a Group (1 or 2) and a user and password for logging in. 
•	If you have been allocated Group 1 – then use the URL from the table on the front page
•	If you have been allocated Group 2 – then use the URL from the table on the front page
Your instructor will also assign a Prefix – you will not need it for now, only for later
Once logged in, you will see the below screen:
 
From here you can do develop processes, work on tasks e.g. approve orders that have been assigned to you. One can also monitor what is going on via tracking.
•	Click on Composer Home on the top navigation bar

 

Create the Process
•	Click on the “Create” button at the left
 

•	Select to Create a new Space
 
•	Call the new Space AAXXOrdersSpace, AAXX being the prefix assigned to you by the instructor.

 

•	Click on the newly created Space
 
•	Click on New Application
•	Enter AAXXOrdersApp (where AAXX is the prefix assigned to you)
 
 

 
Create the Order Business Object

•	Click on Business Types to add the Orders XSD to this application (left hand side of the screen).
 

•	Click on Schema Files
 
•	Click on the + to add the XSD
 
•	Add NCOrder.xsd – this file should is in the downloads folder.  You can also create it from the XSD definition in this document)
 
•	Click Validate
 

•	Click Upload
 
Note: The XSD has been successfully uploaded
 
•	Click on the XSD
 
•	Click on the Promote link
 
Note: This creates a PCS business object from the Order definition within the XSD.
•	Name it OrderBO
 
•	Click Ok

Well done! You have successfully created your first PCS business object. This process could have been done in a graphical way too but we are using the imported file to save some time.
 
Create the Order processing form

•	Click on Forms at the left
 
•	Click on the plus button to create a new form
 
•	Click on New Basic Form
 

•	Name the Basic Form OrderBasicForm

 
Note: the screenshot shows the forms designer. Now you will add the Order business object to the form.
 
•	Click on the Manage Business Objects button, located at the top right of the page. 
 
 
 

•	Move the Business Object to Selected and click on OK
•	Expand Business Objects in the palette (appearing at the bottom left of the tools menu).  Click on the word “Business Objects” to expand it, not the ‘+’ sign.
 
•	Add the Order to the form. Click on the + as shown below. This will add the business object and all its fields to the form.
 



 
Note: You can, of course, configure each field’s properties via the palette. However, just leave, as is, for now.  


•	Click Save
 

•	Click Application Home
 

You will see your new form.
 
Create the Order Process – The Happy Path

Now, you will create the process.
•	Click on Processes
o	You will select Start with a form
 
•	Name the process OrderProcess  - make sure the Form pattern is selected and click Create 
 
 
Add Process Roles 
Add the roles mentioned in the introduction, 
OrderEntry
OrderApproval
OrderManagement
 

•	First, edit the top “swim-lane”: Click on the left empty box to make it blue – and to have the “edit” pencil icon appear.
•	Click on the pencil icon.
 
 

 
•	Add the OrderApproval role by clicking on the big “plus” button
 
Press on the let box of the swim lane and then click on the pencil button
 
 
 
 
Add the OrderManagement role
 
 
Your screen should now look like this:
 

Add the Process logic

For the start event, we simply need to point to the Web Form you created.
•	Click on the Start icon and select Open Properties
•	Specify the form to use
 
 
•	Enter a title – Order Entry Form - then browse to select the form previously created
 
 
 
•	Minimize the properties panel
•	Click Save     
•	Rename the activity from Start to Enter Order (double click on Start text)
  should become 
 

Now you will implement the business logic to approve an order. Remember, the OrderApprovers do this.
•	Drop an Approve task into the OrderApprovers swimlane
 


 
•	Now connect as follows –
 
 
•	Delete the line between Enter Order and End
 

 

 
 
•	Rename User Task to Approve Order
 
 

•	Click the Validate Application icon
o	Top right, last icon
 
	
 

 
All you need to do is specify the Order data for the approval task. This is done automatically when we assign a Form to the task.
 

 
•	Enter Title – Approve an Order
o	Select the same form (at the “Basic Form” property click on search)
 

 
•	Click Save
•	Collapse the  Properties pane (small icon to the right)
•	Validate again
  
 
Testing

•	Click Test
 

•	Click Deploy

 

•	Click on Deploy again

 

 
  
Note: You have 2 options for testing, either within the Composer itself via Play, or using the PCS Workspace. The Workspace is the default interface used to approve tasks and monitor process execution.
•	Select Try in Workspace

 
Note: the Start Application panel on the left, shows you the applications which you can start. 
•	Click on the icon  that corresponds to you App – AAXXOrdersApp
 
•	Fill in all the fields, then click Submit
 

 

Note: As you are testing, your user has been added to all process roles, so you can approve the order.
•	Click Work on Tasks
 
Note: The “Approve order task” will be displayed. Search criteria can be specified in the left panel. Here, one can, for example, also search for completed instances.
But back to the task at hand, let us approve the order. 
 
•	Click on the > icon to see the details
 
•	Approve the order
 

You will now view the process audit trail.
•	Click on Tracking
 

•	Also select Completed
  

 
•	View the process instance details

 


Adding Process logic 

•	Click on Home  Develop Processes Return to Application
 
Here you will add the logic to automatically approve orders  < €100.
•	Click on your Process
 
•	Add a Decision Gate, based on the order value
 
•	Drop this to the OrderEntry swimlane 
 
•	Connect as follows 
o	First to the End step and then to the Approve Order task
 
 
•	Enter a condition on the Approval path

 
•	Enter Large Order as the name and then open the Expression Builder
 
•	Click on the “orderWebFormDataObject” to expand the payload, then on OrderBO
 
Note: The condition is unitPrice * quantity >= €100 so find the unitPrice object in the payload and select it
Click on “Insert Into Expression”

 

 
•	Manually add the multiplication symbol * into the expression builder and then find the quantity object from the Data Objects and insert it into the expression 
 
•	Then complete the condition by adding >= 100
 
•	Click validate to check it is correct syntax
•	Minimize the panel
•	Click OK and click Save

 
Now you will add the logic to escalate REJECTED orders to management.
•	Add an Exclusive Gateway after the Approve Order task
 

 
•	Add a new Approval Task to the OrderManagement swimlane
o	Configure as per the Approve Order task, except for giving it a different name.
 
 
 
Populate the Title to Management Approval
Then add the Order Approval form in the “Form” field
 
•	Click Save
•	Minimize the Panel
 
•	Connect as follows
 
 
•	Rename the Gateways

 

 
•	Enter the condition for Management Approval
 
 
 
 

•	Click Ok and Save
•	Add a path between Management Approval and End.
Note: You probably would require yet another Gateway here, but for the sake of time, do not implement this.

 
•	Validate your process
 
•	Click on Test Deploy  Try in Workspace
 
 
 
•	Enter a small order
 

•	Click on Work on Tasks
 

•	Check the audit trail (Tracking)
o	Remember to also select Completed
 
•	Check the details of the latest instance
 
Try a second test, where you REJECT a large order. Then do the Management Approval.

Importing the solution
You can very easily import a PCS application into your space.
We have provided you with a demo solution for the lab. It is in the file - AA01OrdersApp.exp.
Steps to import –
•	Click on your Space link.

 

•	Click Create
 

•	Select Import Application.
 

•	Select the .exp file
•	Rename the application to Solution2OrdersApp
•	Make sure your Space is selected.

 
 

 

Document Cloud Service Integration

This is a bonus lab, so to speak. We all know how often processes involve documents; for example, our orders process may require legal documents, if the products are going to be sent to a particular country. 
For our particular example, let’s imagine that Irish orders require legal documentation.
•	Open your application
•	Click on Documents
 


Note: This shows the default folder that will be created in Docs CS, when a process instance is created.

 
You see the key is set to the internal {instance id}.
Per default this folder is visible to all process participants.
•	Click on Application Documents
•	Change the folder name to Order Documents
 
  
Note: There are 4 access types for folders. Contributor can add files to the folder. Downloader can download files from the folder. Viewer can only view the files. None means the user has no access to the folder at all.
•	Add a new folder called Legal by clicking on the +
 
 
Note: There are 3 patterns available. Managed Folder means the folder is defined at design time and will be available once the process has been instantiated. Choose Incoming Folder, if you want your process to be instantiated on the creation of a Docs folder. Choose Incoming Document, if you want your process to be instantiated on the upload of a document to a Docs folder.
In this case, we will stick with Managed Folder.

 
In our simple scenario, only approvers can upload documents to this folder. Managers can only view documents in this folder.
•	Open the Process
 
•	Select Approve Order and click on Properties.
 

•	Click on Documents
 

 
Note: We are ok with these settings for the Approver.
But what about the Manager?
•	Select Management Approval and click on Properties.


 

 
We need to change the Document Access Type to Viewer.
•	Click Override and set to Viewer
 

 

 
•	Click Save
•	Click Test and validation is passed
•	Click Deploy
•	Click Try in Workspace
 
•	Make sure your total order value – item * price is > 500 so we go to Approval
•	Look over to the right of the page, you will see the Docs icon
o	Click on it. 

 

You see the default Orders Documents folder
 

Don’t add any document yet. We will do that at the Order Approvals stage.
•	Submit the Order, by clicking Submit.
•	Open the Approve Order task.
 

•	Click on the Documents icon, to the right of the page.
 

 
Note: You see the 2 folders.
 
Now you will add a doc to the Legal folder.
The doc is called Export conditions for Ireland.pdf.
•	Open the Legal folder

 
•	Click Upload
 

 
 
•	Reject the Order, so that it goes to Management
•	Open the Management Approval task

 
•	Click on the Documents icon
 
•	Open the Legal folder
 

Note: You only have Viewer permissions.

 

End of Lab.
