//首頁

/*****************FIREBASE*****************/
/*****************FIREBASE*****************/
/*****************FIREBASE*****************/

var firebase = require("firebase");
var config = {
   apiKey: "AIzaSyA6XwbquEGRHx2czHHnLckfuPqW2zWc5r0",
   authDomain: "cool-project-669f6.firebaseapp.com",
   databaseURL: "https://cool-project-669f6.firebaseio.com/",
   storageBucket: "cool-project-669f6.appspot.com"
 };
 firebase.initializeApp(config);
 var database = firebase.database();
 

var message= new Array();
firebase.database().ref('/message').once('value').then(function(snapshot) {
  //console.log(snapshot.val());
  message=snapshot.val();
});

function writeMessageData(num, name, content) {
  var msgRef = database.ref('message/'+num);
  msgRef.set({
    name: name,
    content: content
  });
  message= new Array();
  firebase.database().ref('/message').once('value').then(function(snapshot) {
  //console.log(snapshot.val());
  message=snapshot.val();
});
}

/*****************--------*****************/
/*****************--------*****************/
/*****************--------*****************/

exports.index = function(req, res) {

        res.render('pages/index', {
            ogheadTitle: '首頁內容',
            listdata: message,
        });

};

//傳統輸入 

exports.post = function(req, res) {
    console.log(req.body.num);
    console.log(req.body.name);
    console.log(req.body.content);
    num = req.body.num;
    name = req.body.name;
    content = req.body.content;
    res.render('pages/success');
    writeMessageData(num,name,content);
};



