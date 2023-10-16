# simple-nestjs-microservice
A simple microservice developed in Nest JS
To open RabbitMQ, open browser and go to http://localhost:15672/ and you will see the RabbitMQ management login screen.


The default username and password is guest and guest respectively.

After login, under the “Queues” tab, give queue name as “user-messages” and click on the “Add queue” button to create the queue.

Next, we need to create a Virtual Host to contain our queues and connections.

Go to the “Admin” tab and click “Virtual Hosts” from the list of menus given on the right side of the page.

let our virtual hostname be “hello” and click “Add virtual host” button to save.

Run npm start in both microservice-app and microservice-client. Then go to http://localhost:3000/ and refresh. You can see “Hello World” printed in the microservice-app command line. That means our applications exchanged messages over the RabbitMQ instance we created.

