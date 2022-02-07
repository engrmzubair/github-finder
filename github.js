
class GitHub {
  constructor() {
    this.client_id = '06f89ee43ec2d146850b';
    this.client_secret = '919e640f6a277997775910a8acdb3e334a5edec9';
  }

  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await profileResponse.json();

    return {
      profile
    }
  }
}