let a = []

for(let i = 0; i < Infinity; i++){
  let command = prompt('Type a command add, then type anything');
  command = command.split(' ')
  if(command[0] == 'add'){
    a.push(command[1])
    console.log('Added: ' + command[1]);
  }
  else if(command[0] == 'del'){
    a.splice(command[1], 1)
    console.log('Deleted: ' + command[1]);
  }
  else if(command == 'stop'){
    break
  }
 console.log(a);
}