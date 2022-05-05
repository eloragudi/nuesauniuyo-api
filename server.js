var express = require('express');
var app = express();
// var fs = require("fs");

var events = [
    {
        "id": 5431,
        "title": "Engineering week",
        "image": "name",
        "description":"Engineering week memememem emememe memememe memmeme em e ememememe mememe mememe mememme mememe memem emememmem emmeme memmeme mememe meme",
        "note": `
        <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, ipsum autem facilis perspiciatis rem, eius hic eveniet quibusdam ipsam, nostrum consequuntur veniam quod doloribus. Eligendi, sapiente? Accusantium velit expedita officia!
        </p>
        <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, ipsum autem facilis perspiciatis rem, eius hic eveniet quibusdam ipsam, nostrum consequuntur veniam quod doloribus. Eligendi, sapiente? Accusantium velit expedita officia!
        </p>
        <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, ipsum autem facilis perspiciatis rem, eius hic eveniet quibusdam ipsam, nostrum consequuntur veniam quod doloribus. Eligendi, sapiente? Accusantium velit expedita officia!
        </p>
        <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, ipsum autem facilis perspiciatis rem, eius hic eveniet quibusdam ipsam, nostrum consequuntur veniam quod doloribus. Eligendi, sapiente? Accusantium velit expedita officia!
        </p>
        <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, ipsum autem facilis perspiciatis rem, eius hic eveniet quibusdam ipsam, nostrum consequuntur veniam quod doloribus. Eligendi, sapiente? Accusantium velit expedita officia!
        </p>
        `
    },
    {
        "id": 5432,
        "title": "Engineering week",
        "image": "name",
        "description":"Engineering week memememem emememe memememe memmeme em e ememememe mememe mememe mememme mememe memem emememmem emmeme memmeme mememe meme",
        "note": `
        <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, ipsum autem facilis perspiciatis rem, eius hic eveniet quibusdam ipsam, nostrum consequuntur veniam quod doloribus. Eligendi, sapiente? Accusantium velit expedita officia!
        </p>
        <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, ipsum autem facilis perspiciatis rem, eius hic eveniet quibusdam ipsam, nostrum consequuntur veniam quod doloribus. Eligendi, sapiente? Accusantium velit expedita officia!
        </p>
        <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, ipsum autem facilis perspiciatis rem, eius hic eveniet quibusdam ipsam, nostrum consequuntur veniam quod doloribus. Eligendi, sapiente? Accusantium velit expedita officia!
        </p>
        <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, ipsum autem facilis perspiciatis rem, eius hic eveniet quibusdam ipsam, nostrum consequuntur veniam quod doloribus. Eligendi, sapiente? Accusantium velit expedita officia!
        </p>
        <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, ipsum autem facilis perspiciatis rem, eius hic eveniet quibusdam ipsam, nostrum consequuntur veniam quod doloribus. Eligendi, sapiente? Accusantium velit expedita officia!
        </p>
        `
    },
    {
        "id": 5433,
        "title": "Engineering week",
        "image": "name",
        "description":"Engineering week memememem emememe memememe memmeme em e ememememe mememe mememe mememme mememe memem emememmem emmeme memmeme mememe meme",
        "note": `
        <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, ipsum autem facilis perspiciatis rem, eius hic eveniet quibusdam ipsam, nostrum consequuntur veniam quod doloribus. Eligendi, sapiente? Accusantium velit expedita officia!
        </p>
        <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, ipsum autem facilis perspiciatis rem, eius hic eveniet quibusdam ipsam, nostrum consequuntur veniam quod doloribus. Eligendi, sapiente? Accusantium velit expedita officia!
        </p>
        <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, ipsum autem facilis perspiciatis rem, eius hic eveniet quibusdam ipsam, nostrum consequuntur veniam quod doloribus. Eligendi, sapiente? Accusantium velit expedita officia!
        </p>
        <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, ipsum autem facilis perspiciatis rem, eius hic eveniet quibusdam ipsam, nostrum consequuntur veniam quod doloribus. Eligendi, sapiente? Accusantium velit expedita officia!
        </p>
        <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, ipsum autem facilis perspiciatis rem, eius hic eveniet quibusdam ipsam, nostrum consequuntur veniam quod doloribus. Eligendi, sapiente? Accusantium velit expedita officia!
        </p>
        `
    },
    {
        "id": 5434,
        "title": "Engineering week",
        "image": "name",
        "description":"Engineering week memememem emememe memememe memmeme em e ememememe mememe mememe mememme mememe memem emememmem emmeme memmeme mememe meme",
        "note": `
        <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, ipsum autem facilis perspiciatis rem, eius hic eveniet quibusdam ipsam, nostrum consequuntur veniam quod doloribus. Eligendi, sapiente? Accusantium velit expedita officia!
        </p>
        <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, ipsum autem facilis perspiciatis rem, eius hic eveniet quibusdam ipsam, nostrum consequuntur veniam quod doloribus. Eligendi, sapiente? Accusantium velit expedita officia!
        </p>
        <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, ipsum autem facilis perspiciatis rem, eius hic eveniet quibusdam ipsam, nostrum consequuntur veniam quod doloribus. Eligendi, sapiente? Accusantium velit expedita officia!
        </p>
        <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, ipsum autem facilis perspiciatis rem, eius hic eveniet quibusdam ipsam, nostrum consequuntur veniam quod doloribus. Eligendi, sapiente? Accusantium velit expedita officia!
        </p>
        <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, ipsum autem facilis perspiciatis rem, eius hic eveniet quibusdam ipsam, nostrum consequuntur veniam quod doloribus. Eligendi, sapiente? Accusantium velit expedita officia!
        </p>
        `
    },
    {
        "id": 5435,
        "title": "Engineering week",
        "image": "name",
        "description":"Engineering week memememem emememe memememe memmeme em e ememememe mememe mememe mememme mememe memem emememmem emmeme memmeme mememe meme",
        "note": `
        <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, ipsum autem facilis perspiciatis rem, eius hic eveniet quibusdam ipsam, nostrum consequuntur veniam quod doloribus. Eligendi, sapiente? Accusantium velit expedita officia!
        </p>
        <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, ipsum autem facilis perspiciatis rem, eius hic eveniet quibusdam ipsam, nostrum consequuntur veniam quod doloribus. Eligendi, sapiente? Accusantium velit expedita officia!
        </p>
        <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, ipsum autem facilis perspiciatis rem, eius hic eveniet quibusdam ipsam, nostrum consequuntur veniam quod doloribus. Eligendi, sapiente? Accusantium velit expedita officia!
        </p>
        <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, ipsum autem facilis perspiciatis rem, eius hic eveniet quibusdam ipsam, nostrum consequuntur veniam quod doloribus. Eligendi, sapiente? Accusantium velit expedita officia!
        </p>
        <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, ipsum autem facilis perspiciatis rem, eius hic eveniet quibusdam ipsam, nostrum consequuntur veniam quod doloribus. Eligendi, sapiente? Accusantium velit expedita officia!
        </p>
        `
    },
    {
        "id": 5436,
        "title": "Engineering week",
        "image": "name",
        "description":"Engineering week memememem emememe memememe memmeme em e ememememe mememe mememe mememme mememe memem emememmem emmeme memmeme mememe meme",
        "note": `
        <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, ipsum autem facilis perspiciatis rem, eius hic eveniet quibusdam ipsam, nostrum consequuntur veniam quod doloribus. Eligendi, sapiente? Accusantium velit expedita officia!
        </p>
        <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, ipsum autem facilis perspiciatis rem, eius hic eveniet quibusdam ipsam, nostrum consequuntur veniam quod doloribus. Eligendi, sapiente? Accusantium velit expedita officia!
        </p>
        <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, ipsum autem facilis perspiciatis rem, eius hic eveniet quibusdam ipsam, nostrum consequuntur veniam quod doloribus. Eligendi, sapiente? Accusantium velit expedita officia!
        </p>
        <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, ipsum autem facilis perspiciatis rem, eius hic eveniet quibusdam ipsam, nostrum consequuntur veniam quod doloribus. Eligendi, sapiente? Accusantium velit expedita officia!
        </p>
        <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, ipsum autem facilis perspiciatis rem, eius hic eveniet quibusdam ipsam, nostrum consequuntur veniam quod doloribus. Eligendi, sapiente? Accusantium velit expedita officia!
        </p>
        `
    },
    {
        "id": 5437,
        "title": "Engineering week",
        "image": "name",
        "description":"Engineering week memememem emememe memememe memmeme em e ememememe mememe mememe mememme mememe memem emememmem emmeme memmeme mememe meme",
        "note": `
        <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, ipsum autem facilis perspiciatis rem, eius hic eveniet quibusdam ipsam, nostrum consequuntur veniam quod doloribus. Eligendi, sapiente? Accusantium velit expedita officia!
        </p>
        <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, ipsum autem facilis perspiciatis rem, eius hic eveniet quibusdam ipsam, nostrum consequuntur veniam quod doloribus. Eligendi, sapiente? Accusantium velit expedita officia!
        </p>
        <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, ipsum autem facilis perspiciatis rem, eius hic eveniet quibusdam ipsam, nostrum consequuntur veniam quod doloribus. Eligendi, sapiente? Accusantium velit expedita officia!
        </p>
        <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, ipsum autem facilis perspiciatis rem, eius hic eveniet quibusdam ipsam, nostrum consequuntur veniam quod doloribus. Eligendi, sapiente? Accusantium velit expedita officia!
        </p>
        <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, ipsum autem facilis perspiciatis rem, eius hic eveniet quibusdam ipsam, nostrum consequuntur veniam quod doloribus. Eligendi, sapiente? Accusantium velit expedita officia!
        </p>
        <p>thjkrdghsh</p>
        `
    }
 ]
 let port = process.env.PORT || 8801;
 
 app.get('/', function (req, res) {
    res.json(events);
 })
 app.get('/events/:id', function (req, res) {
     let id = req.params.id;
     let eventDetail;
    events.forEach(event => {
        if (event.id == id) {
            eventDetail = event;
        }
    })
    res.json(eventDetail);
    // res.send(id);
 })

//  app.get('/:id', function (req, res) {
//     // First read existing users.
//     fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
//        var users = JSON.parse( data );
//        var user = users["user" + req.params.id] 
//        console.log( user );
//        res.end( JSON.stringify(user));
//     });
//  })


// var server = app.listen(8081, function () {
//    var host = server.address().address
//    var port = server.address().port
//    console.log("Example app listening at http://localhost:${port}`)
// })
app.listen(port, () => {
    console.log(`Example app is listening on port http://localhost:${port}`);

});