Vue.use(vuelidate.default)
const pizzaOrBurger = value => value === 'pizza' || value=== 'burger' || !validators.helpers.req(value)
const oldEnoughAndAlive = validators.between(12,120)
new Vue({
  el: '#app',

  data () {
    return {
      form: {
        name: null,
        age: null
      }
    }
  },
  validations: {
    form: {
      name: {
        required : validators.required
      },
      age: {
        required : validators.required,
        integer: validators.integer,
        oldEnoughAndAlive
      },
      email: {
        email: validators.email
      },
      food: {
        pizzaOrBurger
      }
    }
  },

  methods: {
    shouldAppendValidClass(field){
      return !field.$invalid && field.$model && field.$dirty
    },
    shouldAppendErrorClass(field){
      return field.$error
    },
    submitForm () {
      this.$v.form.$touch()
      if(!this.$v.form.$invalid){
        console.log('📝 Form Submitted', this.form)
      }
      else{
        console.log('❌ Invalid form')
      }
    }
  }
}) 