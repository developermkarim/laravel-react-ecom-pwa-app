<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Forget Password Link</title>
</head>
<body>
    
    <a href="http://localhost:3000/reset/{{ $mailData }}">Click Here</a>

    Pin Code : {{ $mailData }}
</body>
</html>