const categories = [
  {
    title: 'Sci-Fi Stuff',
    clues: [
      {
        text: `The latex prosthetic ears worn by this 'Star Trek' actor in the late '60s even have some residual makeup left on them`,
        value: 200,
        answer: `Who is Leonard Nimoy`
      },
      {
        text: `The piece here is really green cast resin in crystal form, but in 'Superman III', it was called this, & appeared onscreen with Christopher Reeve`,
        value: 400,
        answer: `What is Kryptonite`
      },
      {
        text: `Seen in Dr. Zaius' private chambers, the Lawgiver statue from this 1968 film looks to be stone, but is actually made of cast & carved rigid polyfoam`,
        value: 600,
        answer: `What is Planet of the Apes`
      }
    ]
  },
  {
    title: 'TV Shows By Couple',
    clues: [
      {
        text: `Monica & Chandler`,
        value: 200,
        answer: `What is Friends`
      },
      {
        text: `Carrie & Mr. Big`,
        value: 400,
        answer: `What is Sex and the City`
      },
      {
        text: `Jim Halpert & Pam Beesly, who hooked up at work`,
        value: 600,
        answer: `What is The Office`
      }
    ]
  },
  {
    title: 'Mother Goose',
    clues: [
      {
        text: `They were the 'Three Men in a Tub'`,
        value: 200,
        answer: `Who is the butcher, the baker, the candlestick maker`
      },
      {
        text: `March winds & April showers brings forth these`,
        value: 400,
        answer: `What is May Flowers`
      },
      {
        text: `After 'Jack fell down and broke his crown', he 'went to bed to mend his head' using brown paper & this liquid`,
        value: 600,
        answer: `What is Vinegar`
      }
    ]
  }
]

// let $titleBox = document.querySelectorAll('.title')

// for (let i = 0; i <= 2; i++) {
//   $titleBox[i].textContent = categories[i].title
//   console.log(categories[i].title)
// }

let $board = document.getElementById('board')
let $categoryData = []
$board.innerHTML = ''

for (const category of categories) {
  $categoryData.push(`<div class="category">`)
  $categoryData.push(`<div class="title">${category.title}</div>`)

  let clues = category.clues

  for (const clue of clues) {
    $categoryData.push(`<div class="cell" data-clue="${clue.text}" data-answer="${clue.answer}">${clue.value}</div>`)
  }
  $categoryData.push(`</div>`)
}

$board.innerHTML = $categoryData.join(' ')

let $cells = document.querySelectorAll('.cell')
let $overlay = document.getElementById('overlay')
let $clue = document.getElementById('clue')
let $answer = document.getElementById('answer')
let $close = document.getElementById('close')

for (const $cell of $cells) {
  $cell.addEventListener('click', function (e) {
    let $dataClue = $cell.dataset.clue
    let $dataAnswer = $cell.dataset.answer
    $overlay.classList.add('show')
    $clue.textContent = $dataClue
    $answer.textContent = $dataAnswer
  })

  $close.addEventListener('click', function (e) {
    if ($answer.classList.contains('show')) {
      $close.textContent = 'Show Answer'
      $answer.classList.toggle('show')
      $overlay.classList.toggle('show')
    } else {
      $close.textContent = 'Close'
      $answer.classList.toggle('show')
    }
  })
}
