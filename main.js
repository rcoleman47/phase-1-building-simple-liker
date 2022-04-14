// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
document.getElementById('modal').className = 'hidden'

const likePost  = ()=>{
  const like = document.querySelectorAll('.like-glyph');
  like.forEach(like => {
    like.addEventListener('click', () =>{
    if(mimicServerCall().then((res)=>res) === "Random server error. Try again."){
        document.getElementById('modal').className=""
        setTimeout(document.getElementById('modal').className = 'hidden', 3000)
    }else
      like.innerText= FULL_HEART
      like.className = 'activated-heart'
    
  })
  })
}
const unlikePost =()=>{
  if(document.getElementsByClassName('activated heart')){

  }
}

mimicServerCall().then(res=>console.log(res))
 
//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}

//function calls
likePost()
