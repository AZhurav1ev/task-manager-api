# task-manager-api

Working app is on https://azhurav1ev-task-manager.herokuapp.com/

# commands
{{url}} = https://azhurav1ev-task-manager.herokuapp.com

# POST
Create user: {{url}}/users <br />
Login user: {{url}}/users/login <br />
Logout user: {{url}}/users/logout <br />
Logout all user sessions: {{url}}/users/logoutall <br />
Upload avatar: {{url}}/users/me/avatar <br />
Create task: {{url}}/task

# GET 
Read profile: {{url}}/users/me <br />
Read all tasks of current user: {{url}}/tasks <br />
Read task: {{url}}/task/:id

# PATCH
Update user: {{url}}/users/me <br />
Update task: {{url}}/tasks/:id

# DELETE
Delete user: {{url}}/users/me <br />
Delete task: {{url}}/tasks/:id <br />
Delete avatar: {{url}}/users/me/avatar
