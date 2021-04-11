<template>
<v-container fluid class="teal lighten-5" >
	<v-row justify="center" class="mt-6" >
	<v-card width="400" class="mx-auto ">
		<v-card-title>
			<h3>WELCOME!</h3>
		</v-card-title>
		<p class="mx-6 brown--text">Hola! Enter your details to Sign in.</p>
		<v-card-text>
			<v-form class="mt-n4">
				<v-text-field label="Username" prepend-icon="mdi-account-circle" />
				<v-text-field
					:type="showPassword ? 'text' : 'password'"
					label="Password"
					prepend-icon="mdi-lock"
					:append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
					@click:append="showPassword = !showPassword"
				/>
			</v-form>
		</v-card-text>
		<v-divider></v-divider>
		<v-card-actions>
			<v-btn color="info">Login</v-btn>
			 
		</v-card-actions>
	</v-card>
	</v-row>

<v-row justify="center ma-8">
	<p>You don't have an account yet? 	<v-btn color="success" to="/signup">Sign Up</v-btn></p>

</v-row>
    </v-container>
</template>

<script>
export default {
	name: "Login",
	data() {
		return {
			showPassword: false
		}
	}
}
</script>



<style scoped>
.body{
 background-color: rgb(120, 221, 204);
}


</style>