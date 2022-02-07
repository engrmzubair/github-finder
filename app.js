//create new http object from GitHub
const http = new GitHub;
//search input
const searchUser = document.querySelector('#searchUser');

// search input event listener
searchUser.addEventListener('keyup', (e) => {
  //get input text
  const userText = e.target.value;

  if (userText !== '') {
    //make http call
    http.getUser(userText)
      .then(data => {
        if (data.profile.message === 'Not Found') {
          //show an alert

        }
        else {
          //show profile

        }
      })
  }
  else {
    //clear profile
  }
})