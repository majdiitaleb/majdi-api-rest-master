
# api-rest-players
simple application to get players from a json file,

there are three rest function

**for starting application, please run node start**
## get players

Returns json data about a single list of players in the json Data.

**URL**

/players/

**Method:**

GET


Success Response:

Code: 200 
> Content: [
               {
                   "id": 95,
                   "firstname": "Venus",
                   .....
                }
                ]
                

## get player by Id

Returns json data about a single list of players in the json Data.

**URL**

>/players/:id

**Method:**

GET

**param**
> id (example: 52)

**Success Response:**

Code: 200 
> Content: 
               {
                   "id": 95,
                   "firstname": "Venus",
                   .....
                }

**error reponse**    
> no player found      

## delete player by Id

Returns json data about a single list of players in the json Data.

**URL**

>/players/:id

**Method:**

Delete

**param**
> id (example: 52)

**Success Response:**

Code: 200 
> content: the player has been deleted

**error reponse**    
> no player found    