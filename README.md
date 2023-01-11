# Shopbanx-FrontEnd

## How do I run this project? 
 
 <div align="justify"> 
    
    Dev:
    - Clone this project into your computer;
    - Change to the "development" branch
    - Inside the "Shopbanx-FrontEnd" folder, on your terminal:
    - Type "npm i";
    - After installing all the dependencies, run the command: "npm run dev";
    - Access the project by opening your browser and accessing the URI: 
    "http://localhost:3000/".

    Prod:
    - Clone this project into your Virtual Machine;
    - Change to the "development" branch
    - Inside the "Shopbanx-FrontEnd" folder, on the VM's terminal:
    - Type "npm i";
    - After installing all the dependencies, run the commands: "npm run build", "npm run start &";
    - Access the project by opening your browser and accessing the VM's public IP or DNS.
 
    Re-build:
    - sudo lsof -i :3000            //check processes running on port 80 (default TCP port);
    - kill -9 id-of-that-process    //down current running process;
    - npm run build                 //creates an optimized production build of your application;
    - npm run start &               //starts the application in production mode. The "&" runs the process in the background, after the terminal is closed.


 <div> 

 ## What are the features of this project so far? 
 
 <div align="justify"> 
    
Accessing the main page, you will see the login form. There, you can follow three different flows. 

    1- Clicking in "Entre em contato": You will be redirect to the company's Whatsapp. 

    2- Clicking in "Primeiro acesso" button: You will be asked to type your CPF or CNPJ, after, the system will find your register and you will access the Validation Code page. After inserting the code, you can redefine the password, following the described criterias. 
    Then, you will the the "News" swiper. After finishing swiping, you will be back to the login page.  

    3- Clicking in "Esqueci minha senha" link: You will be asked to type your e-mail, after, the system will find your register and you will access the Validation Code page. After inserting the code, you can redefine the password, following the described criterias. Then, you will be back to the login page.  

 <div> 
