<template>
	<div>
		<div class="form-check" v-for="(answer, index) in question">
			<input class="form-check-input"
				   :id="index"
				   :type="type"
				   :value="answer"
				   :name="selected"
				   @change="onChange(index, $event.target)">
			<label class="form-check-label" :for="index">{{ answer }}
			</label>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				selected: {},
				question: this.$store.getters.answers,
				type: this.$store.getters.type
			}
		},
		methods: {
			onChange(index, event){
				this.selected = {};
				this.$set(this.selected, event.value, event.checked);

				this.$emit('full', this.selected);

				this.$store.commit('setAnswer', {
					title: this.$store.getters.title,
					checked: this.selected
				});
			}
		},
		computed: {}
	}
</script>