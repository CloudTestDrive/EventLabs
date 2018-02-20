 



Autonomous Data Warehouse Cloud Service Workshop


February 2018
 
![](images/image002.png)

TABLE OF CONTENTS
INTRODUCTION	4
Section 1. Provisioning an ADWC Service	5
Section 2. Connecting to ADWC	8
Section 3. Data Loading	12
Section 4. Querying External Data	30
Section 5. Scaling an ADWC Service	38
Section 6. Monitoring ADWC	39


 
INTRODUCTION
Oracle Autonomous Data Warehouse Cloud provides an easy-to-use, fully autonomous database that scales elastically, delivers fast query performance and requires no database administration.
It is a fully-managed cloud service that makes it very simple to provision a data warehouse, quickly and easily load data and query that data using built-in web-based tools such as notebooks.
Oracle’s unique autonomous database framework ensures high availability and automatic security–without requiring any additional tasks.
Delivers high performance data warehousing straight out-of-the-box with unparalleled scalability and reliability. Built on key Oracle Database capabilities: parallelism, columnar processing and compression. All aspects of performance tuning are automatically managed so the service requires no database tuning.
Scale as needed-create and expand your data warehouse’s compute and storage capacity on demand and independently of each other with no downtime. Pay only for the resources you consume.
Integrates directly with the full spectrum of business analytics, data integration and IoT services within Oracle's comprehensive range of integrated cloud solutions.
This lab walks you through all the steps to get started using the Oracle Autonomous Data Warehouse Cloud. You will provision a new ADWC database, create DW users, load data from the object store and troubleshoot data loads, query external data residing on the object store, and scale up your ADWC database.
This is an instructor led lab, please follow the instructor’s guidance before doing the exercises. Stop and wait for indications before moving on to the next section.
This lab shows you only the functional aspects of ADWC. It does not have exercises to test the performance of ADWC.














Section 1. Provisioning an ADWC Service

In this section you will be provisioning an ADWC instance using the UI capabilities of the service.

Note: The cloud environment will be provided separately to this lab guide, by the host. It will include:
•	The URL to the environment
•	The Username
•	The Password
•	The Identity Domain
•	The Service Type

1.	Go to the URL provided by the host and log in using the credentials shared with you on the day of the workshop. Click Sign in.
 

2.	On the home page, click on Create Instance to create a new database.
 

3.	Enter the following information in the Create New Instance screen:
Database Name: EMEAXXYYY – Prefix your database name with EMEA followed by your country and first name, e.g. EMEANLLUIS. 
Note: Do not use the dash sign ‘-‘ as the provisioning Wizard will not allow you to continue.
Region: us-phoenix-1 (this may differ depending on the region the environment is deployed)
CPU Count: 2	
Storage Capacity (TB): 1
Administrator Password: Welcome12345
Click Next to go to the confirmation screen.
 

4.	Review your information and click Create to provision the database. This will take you to the Instances screen.
 

5.	Click the refresh arrow button to see the status of your database. Once the service is provisioned click on its name to open the Instance Overview.
 
 
Section 2. Connecting to ADWC
Once provisioned we can access the Service Console – the place from where we can download all the connection details required for accessing the database.

1.	Click on the menu in the upper right corner and click on Service Console.
 

2.	Login to the service console with the following credentials:
Username: admin
Password: Welcome12345
Note: this is the password you specified during the provisioning of the service.
 

3.	Click on Administration.
 

4.	Click on Download Client Credentials.
 

5.	Enter a password before downloading the wallet zip file containing the credentials. This password will protect the sensitive data residing in the file. You can use Welcome12345 as the password and then re-type it for confirmation. 
Click Download and save the file on your local computer.
 


6.	Open SQLDeveloper and click to create a new connection.
 

7.	Fill in the details to connect to the database as follows:
Connection Name: ADWC Admin
Username: admin
Password: Welcome12345
Connection Type: Cloud PDB
Role: default
Configuration File: Browse to the location of the zipped wallet and select it
Keystore Password: Welcome12345
Service: EMEAXXYYY_medium 

Note: the Keystore Password is the one you selected for your wallet before downloading it. The Service you need to choose is the name you gave to your service when provisioning it.
Click on Test to check the connection.
 

8.	If the test is successful save the connection and click Connect to access the database.
 
Section 3. Data Loading
In this section we will create a new user named SH, where we will load our data. 

1.	Connected as the Admin create a new user named SH and grant him the DWROLE role by using the following command:

create user SH identified by "Welcome12345";
grant DWROLE to SH;

 

2.	Create a new connection to the newly created user SH.
 

3.	Create the database tables by running the DDL statements below:

CREATE TABLE sh.sales (
    prod_id             NUMBER          NOT NULL,
    cust_id             NUMBER          NOT NULL,
    time_id             DATE            NOT NULL,
    channel_id          NUMBER          NOT NULL,
    promo_id            NUMBER          NOT NULL,
    quantity_sold       NUMBER(10,2)    NOT NULL,
    amount_sold         NUMBER(10,2)    NOT NULL);
    
CREATE TABLE sh.costs (
    prod_id     NUMBER          NOT NULL,
    time_id     DATE                    NOT NULL,
    promo_id    NUMBER          NOT NULL,
    channel_id  NUMBER          NOT NULL,
    unit_cost   NUMBER(10,2)    NOT NULL,
    unit_price  NUMBER(10,2)    NOT NULL);

CREATE TABLE sh.times (
    time_id                     DATE            NOT NULL,
    day_name                    VARCHAR2(9)     NOT NULL,
    day_number_in_week          NUMBER(1)       NOT NULL,
    day_number_in_month         NUMBER(2)       NOT NULL,
    calendar_week_number        NUMBER(2)       NOT NULL,
    fiscal_week_number          NUMBER(2)       NOT NULL,
    week_ending_day             DATE            NOT NULL,
    week_ending_day_id          NUMBER          NOT NULL,
    calendar_month_number       NUMBER(2)       NOT NULL,
    fiscal_month_number         NUMBER(2)       NOT NULL,
    calendar_month_desc         VARCHAR2(8)     NOT NULL,
    calendar_month_id           NUMBER          NOT NULL,
    fiscal_month_desc           VARCHAR2(8)     NOT NULL,
    fiscal_month_id             NUMBER          NOT NULL,
    days_in_cal_month           NUMBER          NOT NULL,
    days_in_fis_month           NUMBER          NOT NULL,
    end_of_cal_month            DATE            NOT NULL,
    end_of_fis_month            DATE            NOT NULL,
    calendar_month_name         VARCHAR2(9)     NOT NULL,
    fiscal_month_name           VARCHAR2(9)     NOT NULL,
    calendar_quarter_desc       CHAR(7)         NOT NULL,
    calendar_quarter_id         NUMBER          NOT NULL,
    fiscal_quarter_desc         CHAR(7)         NOT NULL,
    fiscal_quarter_id           NUMBER          NOT NULL,
    days_in_cal_quarter         NUMBER          NOT NULL,
    days_in_fis_quarter         NUMBER          NOT NULL,
    end_of_cal_quarter          DATE            NOT NULL,
    end_of_fis_quarter          DATE            NOT NULL,
    calendar_quarter_number     NUMBER(1)       NOT NULL,
    fiscal_quarter_number       NUMBER(1)       NOT NULL,
    calendar_year               NUMBER(4)       NOT NULL,
    calendar_year_id            NUMBER          NOT NULL,
    fiscal_year                 NUMBER(4)       NOT NULL,
    fiscal_year_id              NUMBER          NOT NULL,
    days_in_cal_year            NUMBER          NOT NULL,
    days_in_fis_year            NUMBER          NOT NULL,
    end_of_cal_year             DATE            NOT NULL,
    end_of_fis_year             DATE            NOT NULL );

CREATE TABLE sh.products (
    prod_id                     NUMBER(6)       NOT NULL,
    prod_name                   VARCHAR2(50)    NOT NULL,
    prod_desc                   VARCHAR2(4000)  NOT NULL,
    prod_subcategory            VARCHAR2(50)    NOT NULL,
    prod_subcategory_id         NUMBER          NOT NULL,
    prod_subcategory_desc       VARCHAR2(2000)  NOT NULL,
    prod_category               VARCHAR2(50)    NOT NULL,
    prod_category_id            NUMBER          NOT NULL,
    prod_category_desc          VARCHAR2(2000)  NOT NULL,
    prod_weight_class           NUMBER(3)       NOT NULL,
    prod_unit_of_measure        VARCHAR2(20)    ,
    prod_pack_size              VARCHAR2(30)    NOT NULL,
    supplier_id                 NUMBER(6)       NOT NULL,
    prod_status                 VARCHAR2(20)    NOT NULL,
    prod_list_price             NUMBER(8,2)     NOT NULL,
    prod_min_price              NUMBER(8,2)     NOT NULL,
    prod_total                  VARCHAR2(13)    NOT NULL,
    prod_total_id               NUMBER          NOT NULL,
    prod_src_id                 NUMBER          ,
    prod_eff_from               DATE            ,
    prod_eff_to                 DATE            ,
    prod_valid                  VARCHAR2(1)     );

CREATE TABLE sh.channels (
    channel_id                  NUMBER          NOT NULL,
    channel_desc                VARCHAR2(20)    NOT NULL,
    channel_class               VARCHAR2(20)    NOT NULL,
    channel_class_id            NUMBER          NOT NULL,
    channel_total               VARCHAR2(13)    NOT NULL,
    channel_total_id            NUMBER          NOT NULL);

CREATE TABLE sh.promotions (
    promo_id                    NUMBER(6)       NOT NULL,
    promo_name                  VARCHAR2(30)    NOT NULL,
    promo_subcategory           VARCHAR2(30)    NOT NULL,
    promo_subcategory_id        NUMBER          NOT NULL,
    promo_category              VARCHAR2(30)    NOT NULL,
    promo_category_id           NUMBER          NOT NULL,
    promo_cost                  NUMBER(10,2)    NOT NULL,
    promo_begin_date            DATE            NOT NULL,
    promo_end_date              DATE            NOT NULL,
    promo_total                 VARCHAR2(15)    NOT NULL,
    promo_total_id              NUMBER          NOT NULL);

CREATE TABLE sh.customers (
    cust_id                     NUMBER          NOT NULL,
    cust_first_name             VARCHAR2(20)    NOT NULL,
    cust_last_name              VARCHAR2(40)    NOT NULL,
    cust_gender                 CHAR(1)         NOT NULL,
    cust_year_of_birth          NUMBER(4)       NOT NULL,
    cust_marital_status         VARCHAR2(20)    ,
    cust_street_address         VARCHAR2(40)    NOT NULL,
    cust_postal_code            VARCHAR2(10)    NOT NULL,
    cust_city                   VARCHAR2(30)    NOT NULL,
    cust_city_id                NUMBER          NOT NULL,
    cust_state_province         VARCHAR2(40)    NOT NULL,
    cust_state_province_id      NUMBER          NOT NULL,
    country_id                  NUMBER          NOT NULL,
    cust_main_phone_number      VARCHAR2(25)    NOT NULL,
    cust_income_level           VARCHAR2(30)    ,
    cust_credit_limit           NUMBER          ,
    cust_email                  VARCHAR2(50)    ,
    cust_total                  VARCHAR2(14)    NOT NULL,
    cust_total_id               NUMBER          NOT NULL,
    cust_src_id                 NUMBER          ,
    cust_eff_from               DATE            ,
    cust_eff_to                 DATE            ,
    cust_valid                  VARCHAR2(1)     );

CREATE TABLE sh.countries (
    country_id                  NUMBER          NOT NULL,
    country_iso_code            CHAR(2)         NOT NULL,
    country_name                VARCHAR2(40)    NOT NULL,
    country_subregion           VARCHAR2(30)    NOT NULL,
    country_subregion_id        NUMBER          NOT NULL,
    country_region              VARCHAR2(20)    NOT NULL,
    country_region_id           NUMBER          NOT NULL,
    country_total               VARCHAR2(11)    NOT NULL,
    country_total_id            NUMBER          NOT NULL,
    country_name_hist           VARCHAR2(40));


CREATE TABLE sh.supplementary_demographics
  ( CUST_ID          NUMBER not null,
    EDUCATION        VARCHAR2(21),
    OCCUPATION       VARCHAR2(21),
    HOUSEHOLD_SIZE   VARCHAR2(21),
    YRS_RESIDENCE    NUMBER,
    AFFINITY_CARD    NUMBER(10),
    bulk_pack_diskettes NUMBER(10),
    flat_panel_monitor  NUMBER(10),
    home_theater_package NUMBER(10),
    bookkeeping_application NUMBER(10),
    printer_supplies NUMBER(10),
    y_box_games NUMBER(10),
    os_doc_set_kanji NUMBER(10),
    COMMENTS         VARCHAR2(4000));

ALTER TABLE sh.promotions
  ADD CONSTRAINT promo_pk
  PRIMARY KEY (promo_id)
  RELY DISABLE NOVALIDATE;

ALTER TABLE sh.sales
  ADD CONSTRAINT sales_promo_fk
  FOREIGN KEY (promo_id) REFERENCES sh.promotions (promo_id)
  RELY DISABLE NOVALIDATE;

ALTER TABLE sh.costs
  ADD CONSTRAINT costs_promo_fk
  FOREIGN KEY (promo_id) REFERENCES sh.promotions (promo_id)
  RELY DISABLE NOVALIDATE;

ALTER TABLE sh.customers
  ADD CONSTRAINT customers_pk
  PRIMARY KEY (cust_id)
  RELY DISABLE NOVALIDATE;

ALTER TABLE sh.sales
  ADD CONSTRAINT sales_customer_fk
  FOREIGN KEY (cust_id) REFERENCES sh.customers (cust_id)
  RELY DISABLE NOVALIDATE;

ALTER TABLE sh.products
  ADD CONSTRAINT products_pk
  PRIMARY KEY (prod_id)
  RELY DISABLE NOVALIDATE;

ALTER TABLE sh.sales
  ADD CONSTRAINT sales_product_fk
  FOREIGN KEY (prod_id) REFERENCES sh.products (prod_id)
  RELY DISABLE NOVALIDATE;

ALTER TABLE sh.costs
  ADD CONSTRAINT costs_product_fk
  FOREIGN KEY (prod_id) REFERENCES sh.products (prod_id)
  RELY DISABLE NOVALIDATE;

ALTER TABLE sh.times
  ADD CONSTRAINT times_pk
  PRIMARY KEY (time_id)
  RELY DISABLE NOVALIDATE;

ALTER TABLE sh.sales
  ADD CONSTRAINT sales_time_fk
  FOREIGN KEY (time_id) REFERENCES sh.times (time_id)
  RELY DISABLE NOVALIDATE;

ALTER TABLE sh.costs
  ADD CONSTRAINT costs_time_fk
  FOREIGN KEY (time_id) REFERENCES sh.times (time_id)
  RELY DISABLE NOVALIDATE;

ALTER TABLE sh.channels
  ADD CONSTRAINT channels_pk
  PRIMARY KEY (channel_id)
  RELY DISABLE NOVALIDATE;

ALTER TABLE sh.sales
  ADD CONSTRAINT sales_channel_fk
  FOREIGN KEY (channel_id) REFERENCES sh.channels (channel_id)
  RELY DISABLE NOVALIDATE;

ALTER TABLE sh.costs
  ADD CONSTRAINT costs_channel_fk
  FOREIGN KEY (channel_id) REFERENCES sh.channels (channel_id)
  RELY DISABLE NOVALIDATE;

ALTER TABLE sh.countries
  ADD CONSTRAINT countries_pk
  PRIMARY KEY (country_id)
  RELY DISABLE NOVALIDATE;

ALTER TABLE sh.customers
  ADD CONSTRAINT customers_country_fk
  FOREIGN KEY (country_id) REFERENCES sh.countries (country_id)
  RELY DISABLE NOVALIDATE;

ALTER TABLE sh.supplementary_demographics
  ADD CONSTRAINT supp_demo_pk
  PRIMARY KEY (cust_id)
  RELY DISABLE NOVALIDATE;

 

4.	To load the data, we will use a Storage Container where the data files will reside. The credentials to the storage container will be provided by the host in the day of the workshop. 
To login use the link provided by the host and in the first step, type the Cloud Tenant name and click Continue.
 

5.	In the second step, fill in the username and password provided by the host. Click Sign In.
 

6.	In the upper right corner click the username to expand the menu and click on User Settings.
 

7.	From the left menu, click on the Swift Password entry to list the available Swift passwords. We will use the Swift password when authenticating in the data loading process.
 

8.	Expand the Storage tab and select Object Storage.
 

9.	The list of available containers is displayed, click the DEMO_DATA bucket.
 


10.	In the DEMO_DATA container you should have all the data files available for the next steps.
If the container is empty, hit the Upload Object button and add the data files provided to you by the host.
 

11.	Once the data files are available on the object storage, we can start running the loading script which will use the DBMS_CLOUD package. 
Open a new SQL Worksheet for the SH schema and run the script below.
Make sure you use the connection details provided to you by the host.
 
set define off;

begin
  DBMS_CLOUD.create_credential(
    credential_name => 'OBJ_STORE_CRED',
    username => '<STORAGE_USERNAME>',
    password => ‘<SWIFT_PASSWORD>’
  );
end;
/

begin
 dbms_cloud.copy_data(
    table_name =>'CHANNELS',
    credential_name =>'OBJ_STORE_CRED',
    file_uri_list =>'https://swiftobjectstorage.<region>.oraclecloud.com/v1/<identity_domain>/DEMO_DATA/chan_v3.dat',
    format => json_object('ignoremissingcolumns' value 'true', 'removequotes' value 'true')
 );
end;
/

begin
 dbms_cloud.copy_data(
    table_name =>'COUNTRIES',
    credential_name =>'OBJ_STORE_CRED',
    file_uri_list =>'https://swiftobjectstorage.<region>.oraclecloud.com/v1/dwcsdemo/DEMO_DATA/coun_v3.dat',
    format => json_object('ignoremissingcolumns' value 'true', 'removequotes' value 'true')
 );
end;
/

begin
 dbms_cloud.copy_data(
    table_name =>'CUSTOMERS',
    credential_name =>'OBJ_STORE_CRED',
    file_uri_list =>'https://swiftobjectstorage.<region>.oraclecloud.com/v1/<identity_domain>/DEMO_DATA/cust1v3.dat',
    format => json_object('ignoremissingcolumns' value 'true', 'removequotes' value 'true', 'dateformat' value 'YYYY-MM-DD-HH24-MI-SS')
 );
end;
/

begin
 dbms_cloud.copy_data(
    table_name =>'SUPPLEMENTARY_DEMOGRAPHICS',
    credential_name =>'OBJ_STORE_CRED',
    file_uri_list =>'https://swiftobjectstorage.<region>.oraclecloud.com/v1/<identity_domain>/DEMO_DATA/dem1v3.dat',
    format => json_object('ignoremissingcolumns' value 'true', 'removequotes' value 'true')
 );
end;
/

begin
 dbms_cloud.copy_data(
    table_name =>'SALES',
    credential_name =>'OBJ_STORE_CRED',
    file_uri_list =>'https://swiftobjectstorage.<region>.oraclecloud.com/v1/<identity_domain>/DEMO_DATA/dmsal_v3.dat',
    format => json_object('ignoremissingcolumns' value 'true', 'removequotes' value 'true', 'dateformat' value 'YYYY-MM-DD')
 );
end;
/

begin
 dbms_cloud.copy_data(
    table_name =>'PRODUCTS',
    credential_name =>'OBJ_STORE_CRED',
    file_uri_list =>'https://swiftobjectstorage.<region>.oraclecloud.com/v1/<identity_domain>/DEMO_DATA/prod1v3.dat',
    format => json_object('delimiter' value '|', 'quote' value '^', 'ignoremissingcolumns' value 'true', 'dateformat' value 'YYYY-MM-DD-HH24-MI-SS', 'blankasnull' value 'true')
 );
end;
/

begin
 dbms_cloud.copy_data(
    table_name =>'PROMOTIONS',
    credential_name =>'OBJ_STORE_CRED',
    file_uri_list =>'https://swiftobjectstorage.<region>.oraclecloud.com/v1/<identity_domain>/DEMO_DATA/prom1v3.dat',
    format => json_object('ignoremissingcolumns' value 'true', 'removequotes' value 'true', 'dateformat' value 'YYYY-MM-DD-HH24-MI-SS', 'blankasnull' value 'true')
 );
end;
/

begin
 dbms_cloud.copy_data(
    table_name =>'SALES',
    credential_name =>'OBJ_STORE_CRED',
    file_uri_list =>'https://swiftobjectstorage.<region>.oraclecloud.com/v1/<identity_domain>/DEMO_DATA/sale1v3.dat',
    format => json_object('ignoremissingcolumns' value 'true', 'removequotes' value 'true', 'dateformat' value 'YYYY-MM-DD', 'blankasnull' value 'true')
 );
end;
/

begin
 dbms_cloud.copy_data(
    table_name =>'TIMES',
    credential_name =>'OBJ_STORE_CRED',
    file_uri_list =>'https://swiftobjectstorage.<region>.oraclecloud.com/v1/<identity_domain>/DEMO_DATA/time_v3.dat',
    format => json_object('ignoremissingcolumns' value 'true', 'removequotes' value 'true', 'dateformat' value 'YYYY-MM-DD-HH24-MI-SS', 'blankasnull' value 'true')
 );
end;
/

	
begin
 dbms_cloud.copy_data(
    table_name =>'COSTS',
    credential_name =>'OBJ_STORE_CRED',
    file_uri_list =>'https://swiftobjectstorage.<region>.oraclecloud.com/v1/<identity_domain>/DEMO_DATA/costs.dat',
    format => json_object('ignoremissingcolumns' value 'true', 'dateformat' value 'YYYY-MM-DD', 'blankasnull' value 'true')
 );
end;
/

 

12.	After the data has been loaded, we will run a sample query.

SELECT c.cust_id, t.calendar_quarter_desc, TO_CHAR (SUM(amount_sold),
  '9,999,999,999.99') AS Q_SALES, TO_CHAR(SUM(SUM(amount_sold))
OVER (PARTITION BY c.cust_id ORDER BY c.cust_id, t.calendar_quarter_desc
ROWS UNBOUNDED
PRECEDING), '9,999,999,999.99') AS CUM_SALES
  FROM sales s, times t, customers c
  WHERE s.time_id=t.time_id AND s.cust_id=c.cust_id AND t.calendar_year=2000
    AND c.cust_id IN (2595, 9646, 11111)
  GROUP BY c.cust_id, t.calendar_quarter_desc
  ORDER BY c.cust_id, t.calendar_quarter_desc;

 

13.	To see the status of the loading jobs, you can query user_load_operations. Here you will see all load operations along with status and elapsed time. 
select * from user_load_operations;
 

14.	The next step will showcase a failed job. The script below will throw an error due to a mismatch in the mapping of the table to the data file. 
begin
 dbms_cloud.copy_data(
    table_name =>'CHANNELS',
    credential_name =>'OBJ_STORE_CRED',
    file_uri_list =>'https://swiftobjectstorage.<region>.oraclecloud.com/v1/<identity_domain>/DEMO_DATA/chan_v3_error.dat',
    format => json_object('ignoremissingcolumns' value 'true', 'removequotes' value 'true')
 );
end;
/

 

15.	Query again the user_load_operations view for the failed jobs.
Note: In the example below, I ran the failing script three times.
select * from user_load_operations
where status='FAILED';
 
 
Section 4. Querying External Data
In this section you will be querying files on the OCI Object Storage directly without loading them to your database.
Connected as the SH user, copy and paste the below script to SQL Developer and run it to create external tables on top of files residing on the OCI Object Storage. Note that we are still using the same credential we created when loading data in the previous section.

1.	Use the DBMS_CLOUD package to create external tables for each of the files in the Object Storage. 
begin
 dbms_cloud.create_external_table(
    table_name =>'CHANNELS_EXT',
    credential_name =>'OBJ_STORE_CRED',
    file_uri_list =>'https://swiftobjectstorage.<region>.oraclecloud.com/v1/<identity_domain>/DEMO_DATA/chan_v3.dat',
    format => json_object('ignoremissingcolumns' value 'true', 'removequotes' value 'true'),
    column_list => 'CHANNEL_ID NUMBER, 
	CHANNEL_DESC VARCHAR2(20), 
	CHANNEL_CLASS VARCHAR2(20), 
	CHANNEL_CLASS_ID NUMBER, 
	CHANNEL_TOTAL VARCHAR2(13), 
	CHANNEL_TOTAL_ID NUMBER'
 );
end;
/

begin
 dbms_cloud.create_external_table(
    table_name =>'COUNTRIES_EXT',
    credential_name =>'OBJ_STORE_CRED',
    file_uri_list =>'https://swiftobjectstorage.<region>.oraclecloud.com/v1/<identity_domain>/DEMO_DATA/coun_v3.dat',
    format => json_object('ignoremissingcolumns' value 'true', 'removequotes' value 'true'),
    column_list => 'COUNTRY_ID NUMBER , 
	COUNTRY_ISO_CODE CHAR(2) , 
	COUNTRY_NAME VARCHAR2(40) , 
	COUNTRY_SUBREGION VARCHAR2(30) , 
	COUNTRY_SUBREGION_ID NUMBER , 
	COUNTRY_REGION VARCHAR2(20) , 
	COUNTRY_REGION_ID NUMBER , 
	COUNTRY_TOTAL VARCHAR2(11) , 
	COUNTRY_TOTAL_ID NUMBER , 
	COUNTRY_NAME_HIST VARCHAR2(40)'
 );
end;
/

begin
 dbms_cloud.create_external_table(
    table_name =>'CUSTOMERS_EXT',
    credential_name =>'OBJ_STORE_CRED',
    file_uri_list =>'https://swiftobjectstorage.<region>.oraclecloud.com/v1/<identity_domain>/DEMO_DATA/cust1v3.dat',
    format => json_object('ignoremissingcolumns' value 'true', 'removequotes' value 'true', 'dateformat' value 'YYYY-MM-DD-HH24-MI-SS'),
    column_list => 'CUST_ID NUMBER , 
	CUST_FIRST_NAME VARCHAR2(20) , 
	CUST_LAST_NAME VARCHAR2(40) , 
	CUST_GENDER CHAR(1) , 
	CUST_YEAR_OF_BIRTH NUMBER(4,0) , 
	CUST_MARITAL_STATUS VARCHAR2(20), 
	CUST_STREET_ADDRESS VARCHAR2(40) , 
	CUST_POSTAL_CODE VARCHAR2(10) , 
	CUST_CITY VARCHAR2(30) , 
	CUST_CITY_ID NUMBER , 
	CUST_STATE_PROVINCE VARCHAR2(40) , 
	CUST_STATE_PROVINCE_ID NUMBER , 
	COUNTRY_ID NUMBER , 
	CUST_MAIN_PHONE_NUMBER VARCHAR2(25) , 
	CUST_INCOME_LEVEL VARCHAR2(30), 
	CUST_CREDIT_LIMIT NUMBER, 
	CUST_EMAIL VARCHAR2(50), 
	CUST_TOTAL VARCHAR2(14) , 
	CUST_TOTAL_ID NUMBER , 
	CUST_SRC_ID NUMBER, 
	CUST_EFF_FROM DATE, 
	CUST_EFF_TO DATE, 
	CUST_VALID VARCHAR2(1)'
 );
end;
/

begin
 dbms_cloud.create_external_table(
    table_name =>'SUPPLEMENTARY_DEMOGRAPHICS_EXT',
    credential_name =>'OBJ_STORE_CRED',
    file_uri_list =>'https://swiftobjectstorage.<region>.oraclecloud.com/v1/<identity_domain>/DEMO_DATA/dem1v3.dat',
    format => json_object('ignoremissingcolumns' value 'true', 'removequotes' value 'true'),
    column_list => 'CUST_ID NUMBER , 
	EDUCATION VARCHAR2(21), 
	OCCUPATION VARCHAR2(21), 
	HOUSEHOLD_SIZE VARCHAR2(21), 
	YRS_RESIDENCE NUMBER, 
	AFFINITY_CARD NUMBER(10,0), 
	BULK_PACK_DISKETTES NUMBER(10,0), 
	FLAT_PANEL_MONITOR NUMBER(10,0), 
	HOME_THEATER_PACKAGE NUMBER(10,0), 
	BOOKKEEPING_APPLICATION NUMBER(10,0), 
	PRINTER_SUPPLIES NUMBER(10,0), 
	Y_BOX_GAMES NUMBER(10,0), 
	OS_DOC_SET_KANJI NUMBER(10,0), 
	COMMENTS VARCHAR2(4000)'
 );
end;
/

begin
 dbms_cloud.create_external_table(
    table_name =>'PRODUCTS_EXT',
    credential_name =>'OBJ_STORE_CRED',
    file_uri_list =>'https://swiftobjectstorage.<region>.oraclecloud.com/v1/<identity_domain>/DEMO_DATA/prod1v3.dat',
    format => json_object('delimiter' value '|', 'quote' value '^', 'ignoremissingcolumns' value 'true', 'dateformat' value 'YYYY-MM-DD-HH24-MI-SS', 'blankasnull' value 'true'),
    column_list => 'PROD_ID NUMBER(6,0) , 
	PROD_NAME VARCHAR2(50) , 
	PROD_DESC VARCHAR2(4000) , 
	PROD_SUBCATEGORY VARCHAR2(50) , 
	PROD_SUBCATEGORY_ID NUMBER , 
	PROD_SUBCATEGORY_DESC VARCHAR2(2000) , 
	PROD_CATEGORY VARCHAR2(50) , 
	PROD_CATEGORY_ID NUMBER , 
	PROD_CATEGORY_DESC VARCHAR2(2000) , 
	PROD_WEIGHT_CLASS NUMBER(3,0) , 
	PROD_UNIT_OF_MEASURE VARCHAR2(20), 
	PROD_PACK_SIZE VARCHAR2(30) , 
	SUPPLIER_ID NUMBER(6,0) , 
	PROD_STATUS VARCHAR2(20) , 
	PROD_LIST_PRICE NUMBER(8,2) , 
	PROD_MIN_PRICE NUMBER(8,2) , 
	PROD_TOTAL VARCHAR2(13) , 
	PROD_TOTAL_ID NUMBER , 
	PROD_SRC_ID NUMBER, 
	PROD_EFF_FROM DATE, 
	PROD_EFF_TO DATE, 
	PROD_VALID VARCHAR2(1)'
 );
end;
/

begin
 dbms_cloud.create_external_table(
    table_name =>'PROMOTIONS_EXT',
    credential_name =>'OBJ_STORE_CRED',
    file_uri_list =>'https://swiftobjectstorage.<region>.oraclecloud.com/v1/<identity_domain>/DEMO_DATA/prom1v3.dat',
    format => json_object('ignoremissingcolumns' value 'true', 'removequotes' value 'true', 'dateformat' value 'YYYY-MM-DD-HH24-MI-SS', 'blankasnull' value 'true'),
    column_list => 'PROMO_ID NUMBER(6,0) , 
	PROMO_NAME VARCHAR2(30) , 
	PROMO_SUBCATEGORY VARCHAR2(30) , 
	PROMO_SUBCATEGORY_ID NUMBER , 
	PROMO_CATEGORY VARCHAR2(30) , 
	PROMO_CATEGORY_ID NUMBER , 
	PROMO_COST NUMBER(10,2) , 
	PROMO_BEGIN_DATE DATE , 
	PROMO_END_DATE DATE , 
	PROMO_TOTAL VARCHAR2(15) , 
	PROMO_TOTAL_ID NUMBER '
 );
end;
/

begin
 dbms_cloud.create_external_table(
    table_name =>'SALES_EXT',
    credential_name =>'OBJ_STORE_CRED',
    file_uri_list =>'https://swiftobjectstorage.<region>.oraclecloud.com/v1/<identity_domain>/DEMO_DATA/sale1v3.dat,https://swiftobjectstorage.<region>.oraclecloud.com/v1/<identity_domain>/DEMO_DATA/dmsal_v3.dat',
    format => json_object('ignoremissingcolumns' value 'true', 'removequotes' value 'true', 'dateformat' value 'YYYY-MM-DD', 'blankasnull' value 'true'),
    column_list => 'PROD_ID NUMBER , 
	CUST_ID NUMBER , 
	TIME_ID DATE , 
	CHANNEL_ID NUMBER , 
	PROMO_ID NUMBER , 
	QUANTITY_SOLD NUMBER(10,2) , 
	AMOUNT_SOLD NUMBER(10,2)'
 );
end;
/

begin
 dbms_cloud.create_external_table(
    table_name =>'TIMES_EXT',
    credential_name =>'OBJ_STORE_CRED',
    file_uri_list =>'https://swiftobjectstorage.<region>.oraclecloud.com/v1/<identity_domain>/DEMO_DATA/time_v3.dat',
    format => json_object('ignoremissingcolumns' value 'true', 'removequotes' value 'true', 'dateformat' value 'YYYY-MM-DD-HH24-MI-SS', 'blankasnull' value 'true'),
    column_list => 'TIME_ID DATE , 
	DAY_NAME VARCHAR2(9) , 
	DAY_NUMBER_IN_WEEK NUMBER(1,0) , 
	DAY_NUMBER_IN_MONTH NUMBER(2,0) , 
	CALENDAR_WEEK_NUMBER NUMBER(2,0) , 
	FISCAL_WEEK_NUMBER NUMBER(2,0) , 
	WEEK_ENDING_DAY DATE , 
	WEEK_ENDING_DAY_ID NUMBER , 
	CALENDAR_MONTH_NUMBER NUMBER(2,0) , 
	FISCAL_MONTH_NUMBER NUMBER(2,0) , 
	CALENDAR_MONTH_DESC VARCHAR2(8) , 
	CALENDAR_MONTH_ID NUMBER , 
	FISCAL_MONTH_DESC VARCHAR2(8) , 
	FISCAL_MONTH_ID NUMBER , 
	DAYS_IN_CAL_MONTH NUMBER , 
	DAYS_IN_FIS_MONTH NUMBER , 
	END_OF_CAL_MONTH DATE , 
	END_OF_FIS_MONTH DATE , 
	CALENDAR_MONTH_NAME VARCHAR2(9) , 
	FISCAL_MONTH_NAME VARCHAR2(9) , 
	CALENDAR_QUARTER_DESC CHAR(7) , 
	CALENDAR_QUARTER_ID NUMBER , 
	FISCAL_QUARTER_DESC CHAR(7) , 
	FISCAL_QUARTER_ID NUMBER , 
	DAYS_IN_CAL_QUARTER NUMBER , 
	DAYS_IN_FIS_QUARTER NUMBER , 
	END_OF_CAL_QUARTER DATE , 
	END_OF_FIS_QUARTER DATE , 
	CALENDAR_QUARTER_NUMBER NUMBER(1,0) , 
	FISCAL_QUARTER_NUMBER NUMBER(1,0) , 
	CALENDAR_YEAR NUMBER(4,0) , 
	CALENDAR_YEAR_ID NUMBER , 
	FISCAL_YEAR NUMBER(4,0) , 
	FISCAL_YEAR_ID NUMBER , 
	DAYS_IN_CAL_YEAR NUMBER , 
	DAYS_IN_FIS_YEAR NUMBER , 
	END_OF_CAL_YEAR DATE , 
	END_OF_FIS_YEAR DATE '
 );
end;
/

	
begin
 dbms_cloud.create_external_table(
    table_name =>'COSTS_EXT',
    credential_name =>'OBJ_STORE_CRED',
    file_uri_list =>'https://swiftobjectstorage.<region>.oraclecloud.com/v1/<identity_domain>/DEMO_DATA/costs.dat',
    format => json_object('ignoremissingcolumns' value 'true', 'dateformat' value 'YYYY-MM-DD', 'blankasnull' value 'true'),
    column_list => 'PROD_ID NUMBER , 
	TIME_ID DATE , 
	PROMO_ID NUMBER , 
	CHANNEL_ID NUMBER , 
	UNIT_COST NUMBER(10,2) , 
	UNIT_PRICE NUMBER(10,2) '
 );
end;
/
 

2.	Run the query below on the newly created external tables.
SELECT c.cust_id, t.calendar_quarter_desc, TO_CHAR (SUM(amount_sold),
  '9,999,999,999.99') AS Q_SALES, TO_CHAR(SUM(SUM(amount_sold))
OVER (PARTITION BY c.cust_id ORDER BY c.cust_id, t.calendar_quarter_desc
ROWS UNBOUNDED
PRECEDING), '9,999,999,999.99') AS CUM_SALES
  FROM sales_ext s, times_ext t, customers_ext c
  WHERE s.time_id=t.time_id AND s.cust_id=c.cust_id AND t.calendar_year=2000
    AND c.cust_id IN (2595, 9646, 11111)
  GROUP BY c.cust_id, t.calendar_quarter_desc
  ORDER BY c.cust_id, t.calendar_quarter_desc;
 
Section 5. Scaling an ADWC Service
In this section we will scale up the ADWC service by adding additional CPUs and Storage. 

1.	Identify your database in the instances tab and click Scale Service in the actions menu.
 

2.	In the popup window choose the scale operation and fill in the additional number of CPUs / TB of Storage and click the Scale Service button.
 
3.	The Scale operation will restart your service. Once the operation is done you can check the new values.
Section 6. Monitoring ADWC
In this section you will use the ADWC service console to monitor the database by going through the Overview and Activity tabs in the service console to monitor the performance of your database.

1.	Log in to the Service Console and on the Overview page you will see a summary of your instance’ activity and metrics.
 

2.	From the upper right corner switch to the Activity tab and by default you will see the Real Time graphics on your database’ activity and resource consumption.
 
3.	For a historical view, click on Time period tab, select the time period you wish to analyse and hit Submit. Similar graphics will be displayed. 
 

4.	Navigate to the Monitor SQL tab where you will see all the queries and loading jobs that were made against the database. 
 


