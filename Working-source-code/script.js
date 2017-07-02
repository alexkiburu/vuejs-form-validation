Vue.component('signupForm',{
	template:'#signupForm',
	data(){
		return{
			password:'',
			confirmPassword:'',
			email:'',
			msg:[],
			disableSubmitButton:true,
		}
	},
	watch:{
		email: function(val) {
			this.getEventTargetName();
			this.email = val;
		  	this.check_email(this.email,fieldName);
		},
		password(val){
			this.getEventTargetName();
			this.password = val;
			this.passwordLengthCheck(val,fieldName);
		},
		confirmPassword(val){
			this.getEventTargetName();
			this.confirmPassword = val;
			this.confirmPasswordCheck(val,this.password,fieldName);
		}
	},
	methods:{
		gototnc(){
			this.$emit('change','tnc');
		},
		check_email(email){
			{
			if (/^\w+([\.-]?\ w+)*@\w+([\.-]?\ w+)*(\.\w{2,3})+$/.test(email))
			{
				this.msg[fieldName] = '';
				return true;
			}
				this.msg[fieldName] = 'Waiting for correct email.Keep Typing...';
				return true;
			}
		},
		passwordLengthCheck(password){
			this.lengthCheck(password,'password');
		},
		confirmPasswordCheck(confirmPassword,password,fieldName){
			if(this.lengthCheck(confirmPassword,'confirmPassword')){
				if(confirmPassword !== password) {
					this.msg[fieldName]='Your Passwords does not match'
				}else{
					this.msg[fieldName] = '';
					this.enableSubmitButton()
				}
			}
		},
		submit(){
			alert('Great You have done this, Keep Learning');
		},
		lengthCheck(passwordToCheck){
			message = `Password must contain 6 characters. Still ${6 - passwordToCheck.length} to go..` 
			if (passwordToCheck.length < 6) {
				this.msg[fieldName]= message;
			}else{
				this.msg[fieldName] = '';
				return true;
			}
		},
		getEventTargetName(){
			fieldName = event.target.name;
		},
		enableSubmitButton(){
			if (this.msg.length == 0){
				this.disableSubmitButton = false;
			}
		}
	},
});
Vue.component('tnc',{
	template:'#tnc',
	methods:{
		back_to_signup(){
			this.$emit('change','signupForm');
		}
	}
});
new Vue({
	el:'#app',
	data:{
		componame:'signupForm'
	},
	methods:{
		change(newComp){
			this.componame = newComp
		}
	}
});