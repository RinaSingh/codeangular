# Trapeze Ice Cream Store #

### Goal
As a store owner, I would like a Single Page Application that allows the user to purchase some ice cream.
A rough user flow is outlined here: [Store UX](https://www.figma.com/file/8rSa9tu1uPqp4oXhit1jGC/Core-Ice-Cream-Shop?node-id=0:1)
The application will have the 3 following steps:

 1. Selection of user + one base. Three users are defined below. The base will be be one of: Cup, Cake Cone, Sugar Cone, Waffle Cone
 2. Selection of flavours + scoops
 3. Determination of the final price + payment

 The SPA will need to make a POST request to the following API:

 - An endpoint to insert a record of what ice cream was purchased, including the name of the person who purchased the ice cream, the amount paid for the ice cream, the base of the ice cream, and the scoops and flavours of ice cream.

The general information about purchasing an ice cream are:

 - An ice cream can have any base out of the available base types. All bases cost $3, except for the Waffle Cone, which costs $4.
 - An ice cream can have one, two, three, or four scoops. The prices are $2, $3, $3.50, and $3.80 respectively.
 - The total cost of an ice cream cone is the cost of the base + the cost of the scoop(s).

Some validation rules when purchasing or getting the price of an ice cream:

 - The ice cream base must be from the list of available bases.
 - The ice cream flavours must be from the list of available flavours.
 - Only a cup of ice cream can have 4 scoops.
 - We will not give Cookie Dough flavour in the Sugar Cone base.
 - We will not give Strawberry and Mint Chocolate Chip flavours together.
 - We will not give Cookies And Cream, Moose Tracks, and Vanilla together. We will give any combination of two of the above though. I.e. Cookies And Cream  and Vanilla are ok together.
	 - The only exception to the 3 combined ice cream flavours rule above is if the base is a Cake Cone.

### Development notes

 - The `IceCreamBase` enum and the `IceCreamFlavour` enum contain the base type and flavours mentioned above, and are found in the `models` folder.
 - You **cannot** make any changes to the `IceCreamBase` or `IceCreamFlavour` enums.
 - you **must** use [material components](https://v11.material.angular.io/) for translating the mockup to realized code.

### How do I get set up?

 - Using the IDE of your choosing (our preferred one is Visual Studio Code), open the `client` folder. 
 - The basic template code is configured with Angular 11. You can build a new project from scratch if you wish, using https://angular.io/cli/new

### How do I use the API?

The API, along with its documentation can be found [here](https://trapezeicecreamapi.azurewebsites.net/swagger/).
The API has Basic authentication already rolled into the code. This means, an `Authorization` header is required when accessing the API. 

There are 3 users within the service:

 - Alanna Mosvani
	 - Username: `amosvani`
	 - Password: `TW9zdmFuaXh4`
	 - Authorization Header: `YW1vc3Zhbmk6VFc5emRtRnVhWGg0`
 -  Mat Cauthon
	 - Username: `mcauthon`
	 - Password: `Q2F1dGhvbnh4`
	 - Authorization Header: `bWNhdXRob246UTJGMWRHaHZibmg0`
 -  Moiraine Damodred
	 - Username: `mdamodred`
	 - Password: `RGFtb2RyZWR4`
	 - Authorization Header: `bWRhbW9kcmVkOlJHRnRiMlJ5WldSNA==`

To authorize, pass in an `Authorization` header with the format `Basic {header}` where the header is one of the 3 authorization headers above. I.e. `Basic YW1vc3Zhbmk6VFc5emRtRnVhWGg0`. Please note the space between `Basic` and the authorization header.

To do this in Postman, you have 2 methods. Either manually add the Authorization header to the list of headers, or follow the steps [here](https://learning.postman.com/docs/sending-requests/authorization/#basic-auth) to add the username and password combination.