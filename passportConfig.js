const passport = require('passport')
const User = require('./models/User')

passport.use(
  'local-login',
  new LocalStrategy(
    {
      usernameField: 'username',
      passwordField: 'password',
      passReqToCallback: true
    },
    async function (req, login, password, done) {
      const result = await User.find({
        where: {
          username: req.body.username
        }
      })
      if (result) {
        console.log('O usuário existe.')
        done(null, result)
      } else {
        console.log('O usuário não existe.')
        done(null, false, { message: 'Usário ou senha incorretos. ' })
      }
    }
  )
)
