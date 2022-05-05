var express = require('express');
var app = express();
const cors = require('cors');

app.use(cors());
// app.use(express.json());
// var fs = require("fs");

var events = [
    {
        "id": 5431,
        "title": "Engineering week",
        "image": "dinner",
        "description":"Engineering week; a fun-filled week hosted by the faculty.",
        "note": `
        <p>
        Held consecutively for the past 3 years, the next one is scheduled to hold during the first semester of the coming session.
        There are many event held during this week.Always two weeks to the exams of the first semester, it is a time for students of the faculty to have fun and learn outside the school curriculum.
        <p>
        The week usally kicks off with a football betwwen the levels of different department of the faculty. it is played through the week alongside other activities of the week.
        </p>
        <p>
            THE next activity is the NUESA seminar. Prominent figures from NSE come to lecture the students.
        </p>
        <p>
            TO  spice up things intellectually, chess and quiz competitions are held too with cash prices to be won. sometimes excursions are added.
        </p>
        <p>
            Finally the crowing event of the week, the Dinner and award night. Graced by professors and students alike, its a night to remember. Awards are given out and taken by outstanding members of the faculty.
        
        </p>
        `
    },
    {
        "id": 5432,
        "title": "Elections",
        "image": "week",
        "description":"Elections; a time for students of this faculty to chose worthy executives to lead the uniuyo chapter of NUESA. Held every second semester, the next one is scheduled to hold this coming semester",
        "note": `
        <p>
            THE first part of this event is the formulation of the eleco board. In charge of coordinaating a free and fair election, they hold the assiociation till the next excutetives are electec.
        </p>
        <p>
         The second is the sales of forms by the eleco board to interested aspirants. the qualifications for each position are also declared.
        </p>
        <p>
        The third part is the screening of candidates. Candidates who meet the qualifications are given the opportunity to hold manifestos in the general congress meeting ; in which they declare things they hope achieve if elected.
        </p>
        <p>
        The fourth is the main elections where students are given the opportunity to vote for worthy leaders.
        </p>
        <p>
        THe last is the declarations of elected candidates for each office.
        </p>
        `
    },
    {
        "id": 5433,
        "title": "Executetive inaugration",
        "image": "inauguration1",
        "description":"After the sucessful election, elected candidates are sworn in on chosen date.",
        "note": `
        <p>
        This one-day event marks the beginning of a new regime for the faculty which will be hopeful better than last.
        </p>
        <p>
        Held exactly a week after the election, it is a time for students to meet elected excos.
        </p>
        <p>
        The president and other executive are sworn-in by taking the oath of office. They promise to do their best.
        </p>
        <p>
        To end the event, the documents from the last regime is handed over by the acting president(the previous vice-president)to the current president after her farewell speech. THen to mark the beginning of his tenure, the president dissolves the eleco and assumes power. 
                </p>
        
        `
    },
    {
        "id": 5434,
        "title": "Level representative election and inaugration",
        "image": "LRC",
        "description":"The LRC just like excutetives are elected and inaugrated just like executives",
        "note": `
        <p>
        The LRC are two students representatives chosen from each level of each department to represent all the students of the faculty.
        </p>
        <p>
        Just like the excutetives, their tenure lasts for only a year.
        </p>
        
        `
    },
    {
        "id": 5435,
        "title": "Congress meeting",
        "image": "congress",
        "description":"Congress meeting; a meeting where all students are invited to meet the excos. Though, it should be noted that all meeting involve the general students.",
        "note": `
        <p>
        Called by the president, it is an opportunity for students to lay their complain to the president directly. It is also for them to trash any issue of the faculty and find lasitng solutions.
        </p>
        <p>
        The president is expected to call this congress at least every 3months and all those are expected to honor his invitation.
        </p>
        
        `
    },
    
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