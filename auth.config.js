export const authConfig = {
  providers: [],
  pages: {
    signIn: '/login'
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user
      const isOnDashboard = nextUrl.pathname.startsWith('/admin')

      if (isOnDashboard) {
        if (isLoggedIn) return true
        return true // Redirect unathenticated users to login page
      }
      return true
    }
  }
}
