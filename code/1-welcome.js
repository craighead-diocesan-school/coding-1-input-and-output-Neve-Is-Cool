// ####################################
// ######## ----- Welcome ----- #######
// ####################################

function welcome() {

  let name = prompt('What is your name?')

  alert('We want to know if you like programming!')

  let answer = prompt ('Do you like programming ' + name + ' ?'
  )

  alert('Great, you said ' + answer + '!')
  alert("Let's learn some code today.")
}

function questionnaire() {
  let name = prompt ('What is your name')
  alert ('Hello ' + name + '!')

  let breakfast = prompt ('What did you have for breakfast this morning')
  alert ('Yum, I love having ' + breakfast + ' for breakfast')

  let colour = prompt ('Finally, what is your favourite colour?')
  alert ('Oooh I like the colour ' + colour + '!')
}