function randomIndex(box) {
  return Math.floor(Math.random() * box.length)
}

function trashTalker(options) {
  //data
  const task = {
    engineer: ['加個按鈕', '加新功能', '切個版', '改一點 code'],
    designer: ['畫一張圖', '改個 logo', '順便幫忙設計一下', '隨便換個設計'],
    entrepreneur: ['週末加班', '要能賺錢', '想個 business model', '找 VC 募錢']
  }
  const phrase = ['很簡單', '很容易', '很快', '很正常', '不會花很多時間']
  const pragmatic = ['吧', '啊', '嘛', '啦', '～']

  let role = ''
  let taskBox = []
  // put tasks in taskBox by role
  if (options.role === 'engineer') {
    taskBox = task.engineer
    role = '工程師'
  }

  if (options.role === 'designer') {
    taskBox = task.designer
    role = '設計師'
  }

  if (options.role === 'entrepreneur') {
    taskBox = task.entrepreneur
    role = '創業家'
  }

  //assemble trash talk and return
  let trashTalk = `${role}～～${taskBox[randomIndex(taskBox)]}，${phrase[randomIndex(phrase)]}${pragmatic[randomIndex(pragmatic)]}`
  return trashTalk
}

module.exports = trashTalker