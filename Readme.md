<h1>REST API BASIC</h1>

<p>
REST API (Representational State Transfer Application Programming Interface) is a set of architectural constraints and principles for designing networked applications. It uses HTTP requests to perform CRUD (Create, Read, Update, Delete) operations on resources, which can be data, services, or objects. REST APIs are widely used for web services and allow different software systems to communicate with each other over the internet.

We use REST APIs because they provide a standardized and scalable way for applications to interact, making it easier to:

Achieve interoperability: REST APIs allow different systems, regardless of their programming languages or platforms, to communicate and exchange data seamlessly.

Simplify integration: They enable integration between various software components, making it easier to connect and utilize different services and data sources.

Scalability: REST APIs can handle large numbers of clients and requests, making them suitable for building scalable and distributed systems.

Statelessness: Each request from a client to a REST API is self-contained and doesn't rely on the server storing information about the client's state, which simplifies server management and allows for easy load balancing.

Uniform interface: REST APIs use a consistent and standardized set of HTTP methods (GET, POST, PUT, DELETE) and status codes, making them easy to understand and work with.

In summary, REST APIs are used to enable communication between different software systems in a simple, standardized, and scalable way, making them a fundamental component of modern web and mobile application development.
</p>

<h1> REST Principle </h1>

<p>
Stateless: Each request from a client to a server must contain all the information necessary to understand and process the request. The server should not rely on any information from previous requests, making each request self-contained. This simplifies server management and allows for easy scalability.

Client-Server Architecture: REST separates the client (user interface) and the server (data storage and processing). This separation of concerns allows for independent evolution and scalability of client and server components.

Uniform Interface: REST APIs should have a uniform and consistent interface, which is typically achieved through the use of standard HTTP methods (GET, POST, PUT, DELETE) and standard status codes (e.g., 200 OK, 404 Not Found). This simplifies client and server implementation and promotes a clear and predictable interaction model.

Resource-Based: Resources are the key abstractions in REST. Resources can represent data, services, or objects, and they are identified by unique URLs (Uniform Resource Locators). Clients interact with resources through the standard HTTP methods to perform CRUD (Create, Read, Update, Delete) operations on them.

Representation: Resources can have multiple representations (e.g., JSON, XML, HTML). Clients interact with resources by exchanging representations. Clients can request a specific representation of a resource by specifying the desired media type in the request header (e.g., "Accept: application/json").

Stateless Communication: RESTful communication is stateless, meaning that each request from a client to a server should not rely on any previous request. If the server needs to maintain state, it should be done on the client side, typically through session tokens or cookies.

Layered System: REST allows for the use of intermediary components (e.g., proxies, load balancers, caches) between the client and server, creating a layered architecture. This promotes scalability, security, and system flexibility.

Code on Demand (Optional): This constraint is optional and rarely used. It allows the server to send executable code (e.g., JavaScript) to the client to extend its functionality. This is often seen in web browsers when downloading and executing scripts.

</p>

<h1>Creating our REST API Project & Implementing the Route Setup</h1>

<p>
Steps for REST API:

Step 01: Install Express Packages
Step 02: Install nodemon for realtime output application 
<code> npm install --save-dev nodemon</code>
Step 03: Now create app.js file
Step 04: Now create routes folder and create files for route folder to write get and post request. and also Controller folder

Note: This code will run when we use event listener and fetch method to get and post API and the software we use POSTMAN

</p>