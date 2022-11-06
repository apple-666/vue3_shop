import {
  useCookies
} from '@vueuse/integrations/useCookies'

const TokenKey = 'user_token'
const all_cookies = useCookies()

function getToken() {
  return all_cookies.get(TokenKey)
}

function setToken(token) {
  return all_cookies.set(TokenKey, token)
}

function remToken() {
  all_cookies.remove(TokenKey)
}

export {
  getToken,
  setToken,
  remToken
}