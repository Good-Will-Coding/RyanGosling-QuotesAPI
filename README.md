# RyanGosling-QuotesAPI


![alt text](https://bostonhassle.com/wp-content/uploads/2017/04/drive-movie-wallpaper-8.jpg)

## An API to retrieve Ryan Gosling quotes.
Check it out at https://ryangosling-quotes.herokuapp.com/

Built with Node.js and Express.js.


# API

To retrieve all Ryan Gosling quotes, send a GET request to the following:

`https://ryangosling-quotes.herokuapp.com/api/quotes`

To retrieve a random quote, send a GET request to the following:

`https://ryangosling-quotes.herokuapp.com/api/quotes/random`

For a certain amount of quotes,
send a GET request and change the number parameter to the desired amount of quotes you wish to receive back:

`https://ryangosling-quotes.herokuapp.com/api/quotes/{number}`


Example Request

`https://ryangosling-quotes.herokuapp.com/api/quotes/2`


## Example Response
Request to `https://ryangosling-quotes.herokuapp.com/api/quotes/random`
```
[
  {

    "quote": "I just wanted you to know, just getting to be around you, that was the best that ever happened to me.",
    "movie": "Drive"

  }
]
```

# Why?
...Why not?


