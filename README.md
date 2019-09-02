# Shopping Cart Project

## End to End Testing

Start JSON Server to mock Hello api that return สวัสดีชาวโลก
>json-server --watch tests/api/mock/hello.json --routes ./tests/api/mock/routes.json --p 8080

Run end to end testing, we using robot framework to create testing script and we can run with this command
>robot tests/end-to-end/*.robot
