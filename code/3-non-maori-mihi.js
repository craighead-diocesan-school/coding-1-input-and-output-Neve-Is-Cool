// ####################################
// #### ----- Non-Maori Mihi ----- ####
// ####################################

function nonMaoriMihi() {
  alert('Non-Māori Mihi')
  alert('This program will help you build a basic mihi.')
  alert("First, you'll be asked a series of questions, then your mihi will be ready.")

  alert('What is your name?')
  let name = prompt('What is your name?')
  let mountain = prompt ('What mountain shelters you?')
  let river = prompt ('What is your favourite river?')
  let town = prompt ('Where would you consider your home town?')

  alert('Your mihi:')
  alert ('Tēnā koutou,')
  alert ('Kei te mihi au ki a ' + mountain + ',')
  alert ('Kei te mihi au ki a ' + river + ',')
  alert ('Ko Te Tiriti o Waitanga te waka,')
  alert ('Ko Aotearoa te iwi')
  alert ('Nō ' + town + ' au,')
  alert('Ko ' + name + ' tōku ingoa,')
  alert('Tēnā koutou,')
  alert('Tēnā koutou,')
  alert('Tēnā koutou, katoa.')
}