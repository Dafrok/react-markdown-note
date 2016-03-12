import Wilddog from 'wilddog'

let wilddog = new Wilddog('https://wild-tiger-8739.wilddogio.com/')

export const auth = (email, password) => {
  wilddog.authWithPassword({
    email    : this.state.account,
    password : this.state.password
  }, (error, authData) => {
    if (error) {
        switch (error.code) {
          case "INVALID_EMAIL":
            console.log("The specified user account email is invalid.")
            break;
          default:
            console.log("Error logging user in:", error)
        }
      } else {
        console.log("Authenticated successfully with payload:", authData)
      }
  })
}

export default wilddog
