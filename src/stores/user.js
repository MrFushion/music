import { defineStore } from 'pinia'
import { auth, userCollection } from '@/includes/firebase'

export default defineStore('user', {
  state: () => ({
    userLoggedIn: false,
  }),
  actions: {
    async register(values) {
      const userCred = await auth.createUserWithEmailAndPassword(values.email, values.password)
      await userCollection.doc(userCred.user.uid).set({
        name: values.name,
        email: values.email,
        age: values.age,
        country: values.country,
        musictype: values.musictype,
      })
      await userCred.user.updateProfile({
        displayName: values.name,
      })

      this.userLoggedIn = true
    },
  },
})
