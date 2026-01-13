// export interface UserData {
//   accountType: string
//   businessId: string | null
//   fullName: string
//   role: string
//   token: string
//   userId: number
// }

// Client-side cookie methods
export const authCookies = {
  store: (userData: any) => {
    document.cookie = `accountType=${userData.accountType}; path=/; max-age=86400`
    document.cookie = `businessId=${userData.businessId || ''}; path=/; max-age=86400`
    document.cookie = `fullName=${encodeURIComponent(userData.fullName)}; path=/; max-age=86400`
    document.cookie = `role=${userData.role}; path=/; max-age=86400`
    document.cookie = `token=${userData.token}; path=/; max-age=86400`
    document.cookie = `userId=${userData.userId}; path=/; max-age=86400`
  },

  get: (): any | null => {
    if (typeof document === 'undefined') return null
    
    const getCookie = (name: string) => {
      const value = `; ${document.cookie}`
      const parts = value.split(`; ${name}=`)
      if (parts.length === 2) return parts.pop()?.split(';').shift()
      return null
    }

    const token = getCookie('token')
    if (!token) return null

    return {
      accountType: getCookie('accountType') || '',
      businessId: getCookie('businessId') || null,
      fullName: decodeURIComponent(getCookie('fullName') || ''),
      role: getCookie('role') || '',
      token,
      userId: parseInt(getCookie('userId') || '0')
    }
  },

  delete: () => {
    const cookieNames = ['accountType', 'businessId', 'fullName', 'role', 'token', 'userId']
    cookieNames.forEach(name => {
      document.cookie = `${name}=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT`
    })
    window.dispatchEvent(new Event('authChange'))
  }
}
