import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
	    iterator: 0,
	    showMyAnswers: false,
	    answers: [],
	    rightAnswers: [["a", "span"], ["div"], ["a"], ["img"]],
	    questions: [
	        {
                type: 'checkbox',
                title: 'Какие из  этих тегов строчные?',
                answers: [
                    'a',    /*true*/
                    'div',
                    'span', /*true*/
                    'img'
                ]
            },
            {
                type: 'radio',
                title: 'Какие из  этих тегов блочные?',
                answers: [
                    'a',
                    'div',  /*true*/
                    'span',
                    'img'
                ]
            },
            {
                type: 'radio',
                title: 'Какой тег задаёт ссылку?',
                answers: [
                    'a',    /*true*/
                    'div',
                    'span',
                    'img'
                ]
            },
            {
                type: 'radio',
                title: 'Какой тег задаёт картинку?',
                answers: [
                    'a',
                    'div',
                    'span',
                    'img'   /*true*/
                ]
            }  
	    ]
	},
	getters: {
		finalPage(state){
			return state.iterator >= state.questions.length;
		},
		iterator(state){
			return state.iterator;
		},
		questions(state){
			return state.questions;
		},
		answers(state){
			return state.questions[state.iterator].answers;
		},
		type(state){
			return state.questions[state.iterator].type;
		},
		title(state){
			return state.questions[state.iterator].title;
		},
		myAnswers(state){
			return state.answers;
		},
		rightAnswers(state){
			return state.rightAnswers;
		}
	},
	mutations: {
		testAgain(state){
			state.iterator = 0;
		},
		increment(state){
			state.iterator++;
		},
		setAnswer(state, data){
			state.answers.splice(state.iterator, 1, data);
		}
	},
	actions: {

	}
})
