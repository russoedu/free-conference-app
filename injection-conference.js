const Http = new XMLHttpRequest()
const config = require('./config')

let participantsList = []

function getParticipantsList() {
  const Http = new XMLHttpRequest()
  const usersCSV = `${config.conferenceUrl}&_=${new Date().getTime()}`
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
  if (document.querySelector(config.participantsSelector)) {
      const participants = document.querySelector(config.participantsSelector).getElementsByClassName(config.participantClassName)
      participants.forEach(element => {
          const splited = element.innerHTML.split(config.participantSeparator)[0]
          participantsList.forEach(translation => {
              if(splited === translation.Phone) {
                  element.innerHTML = `${translation.Phone}${config.participantSeparator}${translation.Name}`
              }
          })
      })
      setTimeout(waitParticipantsPanel, 4000)
  } else {
      setTimeout(waitParticipantsPanel, 1000)
  }
}, 5000)

setTimeout(async function waitSpeaker() {
    if (document.querySelector(config.speakerSelector)) {
        const speaker = document.querySelector(config.speakerSelector).getElementsByClassName(config.speakerClassName)[0]
        participantsList.forEach(translation => {
            const splited = speaker.innerHTML.split(config.speakerSeparator)[0]
            if(splited === translation.Phone) {
                speaker.innerHTML = `${translation.Phone}${config.speakerSeparator}${translation.Name}`
            }
        })
        setTimeout(waitSpeaker, 900)
    } else {
        setTimeout(waitSpeaker, 800)
    }
}, 5200)
