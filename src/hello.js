import _ from 'loadsh'

function getString(){
  return new Promise((resolve,reject)=>{
    setInterval(() => {
      resolve('hello world')
    }, 2000);
  })
}


async function helloWrold(){
  const st = await getString()
  console.log(st)
  console.log(_.join(["hello","index","loadsh"],' '))
  // console.log('hello world!!')
}

export default helloWrold