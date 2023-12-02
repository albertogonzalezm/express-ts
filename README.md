### How to execute Express Application

First install dependencies with

```shell
$ npm install
```

After installing the dependencies you can choose in which of these modes you want to run the application

```shell
# Development and watch mode
$ npm run dev

# Production mode
$ npm run build && npm start
```

### Paths

```yaml
# Example: http://localhost:3000/signin
/signin:
  post:
    tags:
      - Authentication
    summary: "Get task by id"
    requestBody:
      content:
        application/json:
          schema:
            type: object
            properties:
              username:
                type: string
                example: admin
              password:
                type: string
                example: admin
    responses:
      200: "OK"
      400: "Bad Request"
      500: "Internal Server Error"

# Example: http://localhost:3000/task/1
/task/:id:
  get:
    tags:
      - Task
    parameters:
      - name: id
        in: path
        type: number
        description: Task id
    responses:
      200: "OK"
      404: "Not Found"
      500: "Internal Server Error"

# Example: http://localhost:3000/tasks
/tasks:
  get:
    tags:
      - Task
    summary: "Get all tasks"
    responses:
      200: "OK"
      404: "Not Found"
      500: "Internal Server Error"
```