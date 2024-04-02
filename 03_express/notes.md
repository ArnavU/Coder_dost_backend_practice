## 3 Ways of sending data in request
1. **Using query parameters**
    ``` javascript
    app.get('/users', (req, res) => {
        const name = req.query.name;
        const age = req.query.age;
        
        // rest of the code
    })
    ```
    ***url:*** localhost:8000/?name=Arnav&age=20

2. **Using path parameters**
    ``` javascript
    // Route with optional path parameter
    app.get('/users/:userId/posts/:postId?', (req, res) => {
        const userId = req.params.userId;
        const postId = req.params.postId || 'No Post ID provided';
        res.send(`User ID: ${userId}, Post ID: ${postId}`);
    });
    ```

3. **Using request body**
    ``` javascript
    // Middleware to parse JSON data
    app.use(express.json());

    // Route for creating a new user
    app.post('/users', (req, res) => {
        const { name, email } = req.body;

        // Here you might save the user data to a database
        // For demonstration purposes, we'll just log the data
        console.log('Creating a new user:', { name, email });

        res.status(201).send('User created successfully');
    });
    ```

## Different Types of Middlewares
#### 1. Application-level middleware
#### 2. Router-level middleware
#### 3. Error-handling middleware
#### 4. Built-in middleware
#### 5. Third-party middleware

#### 1) Application-level middleware

``` javascript
// Logger middleware (Application-level)
app.use((req, res, next) => {
    console.log('Logging request:', req.method, req.url);
    next();
});
```
#### 2) Router-level middleware
``` javascript
// a middleware sub-stack shows request info for any type of HTTP request to the /user/:id path
const mWare = (req, res, next) => {
  console.log('Request URL:', req.originalUrl)
  next()
}

router.use('/user/:id', mWare, (req, res, next) => {
  console.log('Request Type:', req.method)
  next()
})
```

#### 3) Error-handling middleware

``` javascript
app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})
```

#### 4) Built-in middleware
- express.static
- express.json
- express.urlencoded

#### 4) Third-party middleware
``` javascript
const express = require('express')
const app = express()
const cookieParser = require('cookie-parser')

// load the cookie-parsing middleware
app.use(cookieParser())
```