import Wilddog from 'wilddog'

let wilddog = new Wilddog('https://wild-tiger-8739.wilddogio.com/')

export const getUid = () => wilddog.getAuth()
export const login = (email, password, callback) => {
  wilddog.authWithPassword({
    email    : this.state.account,
    password : this.state.password
  }, (error, authData) => {
    callback(error, authData)
    // if (error) {
    //     switch (error.code) {
    //       case "INVALID_EMAIL":
    //         console.log("The specified user account email is invalid.")
    //         break;
    //       default:
    //         console.log("Error logging user in:", error)
    //     }
    //   } else {
    //     console.log("Authenticated successfully with payload:", authData)
    //   }
  })
}
export const signUp = (email, password) => {

}
export const changePassword = (email, oldPwd, newPwd) => {

}
export const resetPassword = email => {

}

export default wilddog
