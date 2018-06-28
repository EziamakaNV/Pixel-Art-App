# Pixel-Art-App for the final Udacity quiz on the Beginner Front-End Web Developer Track
main.js
<!DOCTYPE html>
<html lang = 'en'>
<head>
    <meta charset='utf-8' />
    <meta http-equiv='X-UA-Compatible' content='IE=edge'>
    <title>Pixel Art</title>
    <meta name='viewport' content='width=device-width, initial-scale=1'>
    <script src = 'https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js'></script>
    <link href='https://fonts.googleapis.com/css?family=Sunflower:300' rel='stylesheet'/>
    <link rel='stylesheet' type='text/css' media='screen' href= 'main.css' />
</head>
<body>
    <h1>PixelArtMaker</h1>

    <article>
        <form>
            <h4>Please Input Required Height and Width of Canvas</h4>
            <label for = 'width'>Width</label>
            <input type = 'number' id = 'width'>
            <label for = 'height'>Height</label>
            <input type = 'number' id = 'height'>
            <button id = 'submit' type = 'button'  value = 'Enter' onclick= 'makeGrid(), displayOne()'>Submit</button>
        </form>

        <input class = 'input' type='color' >
        <p>
             <strong>Please Pick Color</strong>
        </p>
        <button id = 'refresh' onclick='refresh(), displayTwo()'>Click to Refresh</button> 
    </article>

    <article id = 'container'>
        <h4>
            <strong>Design Canvas</strong>
        </h4>
    </article>
    
    <script src = main.js></script>
</body>
</html>
