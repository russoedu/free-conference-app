const Http = new XMLHttpRequest()
const config = require('./config')

const participantsSelector = "#app > div:nth-child(1) > div > div > div.call-sidebar > div.participant-list > div"
const speakerSelector = "#app > div:nth-child(1) > div > div > div.call-main > div:nth-child(3) > div.call-media.call-media--overlay.call-media--current > div > div > div"
const participantClassName = 'item__label'
const speakerClassName = 'avatar__full-name'
const participantNameSeparator = ` ${config.participantNameSeparator} `
const speakerNameSeparator = `${config.speakerNameSeparator}`

let participantsList = []

function getParticipantsList() {
  const Http = new XMLHttpRequest()
  const usersCSV = `${config.csvUrl}&_=${new Date().getTime()}`
  Http.open("GET", usersCSV)
  Http.setRequestHeader('cache-control', 'no-cache, must-revalidate, post-check=0, pre-check=0')

  let participants = null
  Http.send()
  return new Promise((result, error) =>{
    Http.onreadystatechange = () => {
      let csv = Http.responseText
      let arr = csv.split('\n')

      participants = []
      const headers = arr[0].split(',')
      for(var i = 2; i < arr.length - 3; i++) {
        const data = arr[i].split(',')
        const obj = {}
        for(let j = 0; j < 2; j++) {
          obj[headers[j]] = data[j]
        }
        participants.push(obj)
      }

      if (participants.length > 0) {
        result(participants)
      }
    }
  })
}

// Wait until the participants panel is open
setTimeout(async function waitParticipantsPanel() {
  participantsList = await getParticipantsList()
  if (document.querySelector(participantsSelector)) {
      const participants = document.querySelector(participantsSelector).getElementsByClassName(participantClassName)
      participants.forEach(element => {
          const splited = element.innerHTML.split(participantNameSeparator)[0]
          participantsList.forEach(translation => {
              if(splited === translation.Phone) {
                  element.innerHTML = `${translation.Phone}${participantNameSeparator}${translation.Name}`
              }
          })
      })
      setTimeout(waitParticipantsPanel, 5000)
  } else {
      setTimeout(waitParticipantsPanel, 1000)
  }
}, 5000)

setTimeout(async function waitSpeaker() {
    if (document.querySelector(speakerSelector)) {
        const speaker = document.querySelector(speakerSelector).getElementsByClassName(speakerClassName)[0]
        participantsList.forEach(translation => {
            const splited = speaker.innerHTML.split(speakerNameSeparator)[0]
            if(splited === translation.Phone) {
                speaker.innerHTML = `${translation.Phone}${speakerNameSeparator}${translation.Name}`
            }
        })
        setTimeout(waitSpeaker, 900)
    } else {
        setTimeout(waitSpeaker, 800)
    }
}, 5200)
