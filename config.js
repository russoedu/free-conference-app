module.exports = {
  conferenceUrl: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQpVYRWrMtFUF9ZGCWzuDgcSBBUT1ylBoTpQqJiRmKvAP0Xii0-5W97HbNhfzeSuhWiwqwMxG1uJO_n/pub?gid=111019831&single=true&output=csv',
  spreadsheetUrl: '',
  participantsSelector: "#app > div:nth-child(1) > div > div > div.call-sidebar > div.participant-list > div",
  participantClassName: 'item__label',
  participantSeparator: ' • ',
  speakerSelector: "#app > div:nth-child(1) > div > div > div.call-main > div:nth-child(3) > div.call-media.call-media--overlay.call-media--current > div > div > div",
  speakerClassName: 'avatar__full-name',
  speakerSeparator: '<br/>'
}
