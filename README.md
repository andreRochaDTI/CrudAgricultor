## Prerequisites

### MySQL Workbench

### MySQL React

### MySQL Node and NPM

## Steps

### back

1-Configure a local connection (some variables like password, user, host, aot. are in the file dbConfig.js), as below: ![image](https://github.com/andreRochaDTI/CrudAgricultor/assets/126532430/2f5aa6be-c439-4554-a10e-13546c54e4db)

2- Create a local schema called crudatto (isn't necessary to create the table, the migration will do it), as below: ![image](https://github.com/andreRochaDTI/CrudAgricultor/assets/126532430/a4b120d3-18d7-4ed1-866d-7fa2dc5e9873)

3- cd back and npm install

4- npx knex migrate:make create_table

5- control + c in the file migrations\migration_example.js

6- in the generated file in step 4, control + v (some name like that: 20231006204625_create_table)

7- npx knex migrate:latest (in this step, the table "person" should be created, as below) ![image](https://github.com/andreRochaDTI/CrudAgricultor/assets/126532430/13811917-e3ad-4b3a-875e-6601db86215f)

8- npm run dev

### front 

1- cd front/my-app 
2- npm install
3- npm run start

## Maintainers

* [André Silva](https://github.com/andreRochaDTI)

## Screenshots

![image](https://github.com/andreRochaDTI/CrudAgricultor/assets/126532430/49a70f61-f6f3-4b89-b738-d9447d6238f2)
![image](https://github.com/andreRochaDTI/CrudAgricultor/assets/126532430/0d1a73be-8771-4915-9195-511b8f9debc7)
![image](https://github.com/andreRochaDTI/CrudAgricultor/assets/126532430/e8308c42-1a91-4f04-a362-45565579ee3c)
![image](https://github.com/andreRochaDTI/CrudAgricultor/assets/126532430/720c077f-9e3a-46c6-8658-406541120b76)


