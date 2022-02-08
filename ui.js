class UI {
  constructor() {
    this.profile = document.querySelector('#profile');
  }

  showProfile(user) {
    this.profile.innerHTML = `
    <div class="card card-body mb-3">
    <div class="row">
      <div class="col-md-3">
        <img src="${user.avatar_url}" alt="avatar" class="img-fluid mb-2">
        <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-3 rounded">View Profile</a>
      </div>
      <div class="col-md-9">
        <div class = "badgeParent">
        <span class="badge badge-primary mr-2 mb-2">Public Repos: ${user.public_repos}</span>
        <span class="badge badge-secondary mr-2 mb-2">Public Gists: ${user.public_gists}</span>
        <span class="badge badge-success mr-2 mb-2">Followers: ${user.followers}</span>
        <span class="badge badge-info mr-2 mb-2">Following: ${user.following}</span>
        </div>

        <br><br>
        <ul class="list-group">
          <li class="list-group-item">Company: ${user.company}</li>
          <li class="list-group-item">Website/Blog: ${user.blog}</li>
          <li class="list-group-item">Location: ${user.location}</li>
          <li class="list-group-item">Member Since: ${user.created_at}</li>
        </ul>
      </div>
    </div>
  </div>
  <h3 class="page-heading mb-3 p-4">Latest Repos</h3>
  <div id="repos" class = "card card-body" style="background-color: #343a40"></div>

`
  }

  //show user repos
  showRepos(repos) {
    let output = '';
    repos.forEach(repo => {
      output += `
      <li class="list-group-item m-2">
      <div class="row">
        <div class="col-md-6">
          <a href="${repo.html_url}" target="_blank">${repo.name}</a>
        </div>
        <div class="col-md-6">
          <span class="badge badge-primary mr-2 mb-2">Stars: ${repo.stargazers_count}</span>
          <span class="badge badge-secondary mr-2 mb-2">Watchers: ${repo.watchers_count}</span>
          <span class="badge badge-success mr-2 mb-2">Forks: ${repo.forks_count}</span>
        </div>
      </div>
    </li>
      `;
      //output repos
      document.querySelector('#repos').innerHTML = output;
    })
  }

  //show alert message
  showAlert(message, className) {
    //clear any remaining alert
    this.clearAlert();
    //create div
    const div = document.createElement('div');
    //add classes
    div.className = className;
    //add text
    div.appendChild(document.createTextNode(message));
    //get parent
    const container = document.querySelector('.searchContainer');
    //get search box
    const search = document.querySelector('.search');
    //insert alert
    container.insertBefore(div, search);
    //set time out after 3 secondyy
    setTimeout(() => {
      this.clearAlert();
    }, 3000)

  }

  //clear Alert
  clearAlert() {
    const currentAlert =
      document.querySelector('.alert');
    if (currentAlert)
      currentAlert.remove();
  }

  //clear profile
  clearProfile() {
    this.profile.innerHTML = '';
  }

}