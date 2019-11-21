const usersCSV = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQpVYRWrMtFUF9ZGCWzuDgcSBBUT1ylBoTpQqJiRmKvAP0Xii0-5W97HbNhfzeSuhWiwqwMxG1uJO_n/pub?gid=111019831&single=true&output=csv"
const participantsSelector = "#app > div > div:nth-child(1) > div > div > div.call-sidebar > div.participant-list > div"
//                    #app > div > div:nth-child(1) > div > div > div.call-sidebar > div.participant-list > div > div.item > div.item__content

const speakerSelector = "#app > div > div:nth-child(1) > div > div > div.call-main > div:nth-child(3) > div.call-media.call-media--overlay > div > div > div";
//
//let csv;
let participantsTranslation = null;


let i = 0;
let j = 0;

const Http = new XMLHttpRequest();
const url = usersCSV;
Http.open("GET", url);
Http.send();

Http.onreadystatechange = (e) => {
  let csv = Http.responseText;
  let arr = csv.split('\n');
  participantsTranslation = [];
  var headers = arr[0].split(',');
  for (var i = 2; i < arr.length - 5; i++) {
    var data = arr[i].split(',');
    var obj = {};
    for (var j = 0; j < 2; j++) {
      obj[headers[j]] = data[j];
    }
    participantsTranslation.push(obj);
  }
  participantsTranslation.push({ Phone: "James P", Name: "HOST" });
  console.log(participantsTranslation);
}



// Wait until the participants panel is open
setTimeout(function waitParticipantsPanel() {
    if (document.querySelector(participantsSelector)) {
        const participants = document.querySelector(participantsSelector).getElementsByClassName("item__label");
        participants.forEach(element => {
            participantsTranslation.forEach(translation => {
                //console.log(translation.Phone, " - ", element.innerHTML)
                if(element.innerHTML == translation.Phone) {
                    //console.log(element, translation.Phone, translation.Name);
                    element.innerHTML += " - " + translation.Name;
                }
            });
        });
        //console.log(`running list ${i++}`);
        setTimeout(waitParticipantsPanel, 4000);
    } else {
        //console.log(`waiting list ${i++}`);
        setTimeout(waitParticipantsPanel, 1000);
    }
}, 5000);

setTimeout(function waitSpeaker() {
    if (document.querySelector(speakerSelector)) {
        const speaker = document.querySelector(speakerSelector).getElementsByClassName("avatar__full-name")[0];
        console.log(speaker.innerHTML);
        //let participant = participantsTranslation.find(participant => participant.Phone == speaker.innerHTML);
        participantsTranslation.forEach(translation => {
            //console.log(translation.Phone, " - ", speaker.innerHTML)
            if(speaker.innerHTML == translation.Phone) {
                console.log(speaker, translation.Phone, translation.Name);
                speaker.innerHTML += "<br/>" + translation.Name;
            }
        });
        console.log(`running speaker ${j++}`);
        setTimeout(waitSpeaker, 900);
    } else {
        console.log(`waiting speaker ${j++}`);
        setTimeout(waitSpeaker, 800);
    }
}, 5200);