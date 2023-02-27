### get task

## http://localhost:4000 or https://taskmanagertest-production.up.railway.app

### Create token Token
POST /api/token

### GET all tasks
GET /api/task

### Create task
POST /api/task
Content-Type: application/json

{
    "title": "negro",
    "description": "memo",
    "status": 2,
    "deadline": "2023-02-25 ",
    "comments": "algo",
    "responsible": 1,
    "create_by": 1,
    "tag": 1
}

### Get task by id
GET /api/task/2

### Delete task by id
DELETE /api/task/2

### Update an task
PUT /api/task/2
Content-Type: application/json

{
    "title": "negro",
    "description": "memo",
    "status": 2,
    "deadline": "2023-02-25 ",
    "comments": "algo",
    "responsible": 1,
    "create_by": 1,
    "tag": 1
}