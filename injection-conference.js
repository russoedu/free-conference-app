/* eslint-disable no-param-reassign */
/* eslint-disable spaced-comment */
/* eslint-disable no-console */
const usersCSV = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQpVYRWrMtFUF9ZGCWzuDgcSBBUT1ylBoTpQqJiRmKvAP0Xii0-5W97HbNhfzeSuhWiwqwMxG1uJO_n/pub?gid=111019831&single=true&output=csv'
const participantsSelector = '#app > div > div:nth-child(1) > div > div > div.call-sidebar > div.participant-list > div'
//                    #app > div > div:nth-child(1) > div > div > div.call-sidebar > div.participant-list > div > div.item > div.item__content

const speakerSelector = '#app > div > div:nth-child(1) > div > div > div.call-main > div:nth-child(3) > div.call-media.call-media--overlay > div > div > div';
let participantsTranslation = null;

const Http = new XMLHttpRequest();
const url = usersCSV;
Http.open('GET', url);
Http.send();

Http.onreadystatechange = (e) => {
  const csv = Http.responseText;
  const arr = csv.split('\n');
  participantsTranslation = [];
  const headers = arr[0].split(',');

  for (let k = 2; k < arr.length - 5; k += 1) {
    const data = arr[k].split(',');
    const obj = {};
    for (let l = 0; l < 2; l += 1) {
      obj[headers[l]] = data[l];
    }
    participantsTranslation.push(obj);
  }
  participantsTranslation.push({ Phone: 'James P', Name: 'HOST' });
  console.log(participantsTranslation);
};

// Wait until the participants panel is open
setTimeout(function waitParticipantsPanel() {
  if (document.querySelector(participantsSelector)) {
    const participants = document.querySelector(participantsSelector).getElementsByClassName('item__label');
    participants.forEach((element) => {
      participantsTranslation.forEach((translation) => {
        if (element.innerHTML === translation.Phone) {
          element.innerHTML += ` - ${translation.Name}`;
        }
      });
    });
    setTimeout(waitParticipantsPanel, 4000);
  } else {
    setTimeout(waitParticipantsPanel, 1000);
  }
}, 5000);

setTimeout(function waitSpeaker() {
  if (document.querySelector(speakerSelector)) {
    const speaker = document.querySelector(speakerSelector).getElementsByClassName('avatar__full-name')[0];
    console.log(speaker.innerHTML);
    participantsTranslation.forEach((translation) => {
      if (speaker.innerHTML === translation.Phone) {
        console.log(speaker, translation.Phone, translation.Name);
        speaker.innerHTML += `<br/>${translation.Name}`;
      }
    });
    setTimeout(waitSpeaker, 900);
  } else {
    setTimeout(waitSpeaker, 800);
  }
}, 5200);
