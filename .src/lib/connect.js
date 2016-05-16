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
export const signUp = (option, callback) => {
  wilddog.createUser({
    email: option.email,
    password: option.password
  }, err => {
    callback && callback(err)
  })
}
export const changePassword = (email, oldPwd, newPwd) => {

}
export const resetPassword = (email, callback) => {
  wilddog.resetPassword({
    email: email
  }, err => {
    callback && callback(err)
  })
}

export default wilddog
