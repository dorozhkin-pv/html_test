<template>
	<div class="mt-5">
		<h2>Итого</h2>

		<table class="table">
		  <thead class="thead-dark">
		    <tr>
		      <th scope="col">Вопрос</th>
		      <th scope="col">Ответ</th>
		      <th scope="col">Ошибки</th>
		    </tr>
		  </thead>
		  <tbody>
		    <tr v-for="(answer, index) in answers">
		        <td>{{ answer.title }}</td>
		        <td>
		        	<span v-for="(itm, name) in answer.checked">{{ itm === true ? name : ''}} </span>
		        </td>
		        <td>{{ errors[index] }}</td>
		    </tr>
		  </tbody>
		</table>
		<router-link tag="h6" class="mt-5 text-right" :to="{ name: 'test' }">
			<hr class="mt-5">
		    <a>Пройти тест еще раз</a>
		</router-link>
	</div>
</template>

<script>
export default {
	data() {
		return {
			errors: [],
			answers: this.$store.getters.myAnswers,
			rightAnswers: this.$store.getters.rightAnswers
		}
	},
	methods: {
		equal(a, b){
			return a >= b ? true : false;
		}
	},
	created() {
		let arr = this.rightAnswers;
		for (let i = 0; i < arr.length; i++) {
			let temp = [];
			for (let j = 0; j < arr[i].length; j++) {
				if( this.answers[i].checked.hasOwnProperty(arr[i][j]) ) {

					if (this.answers[i].checked[arr[i][j]]) temp.splice(j, 0, true);
					else temp.splice(j, 0, false);

				}else {
					temp.splice(j, 0, false);
				}
			}

			let isCorrect = temp.every(item => item === true);
			isCorrect ? this.errors.push('ok') : this.errors.push('error');
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
	//@import url('../css/font-awesome.min.css');
</style>