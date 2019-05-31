import * as cookie from 'react-cookies';

export const getCookie = key => {
  return cookie.load(key)
}

export const setCookie = (name, value) => {
  const now = new Date()
  now.setDate(now.getDate() + 14)

  return cookie.save(name, value, {
    expires: now,
    path: '/'
  })
}

export const logout = (name) => {
  return cookie.remove(name, { path: '/' })
}
