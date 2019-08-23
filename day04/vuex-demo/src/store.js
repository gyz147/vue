/**
 * VueX的配置
 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

var state={
	count:6
}

var getters={
	count(state){
		return state.count;
	},
	isEveOrOdd(state){
		return state.count%2 == 0?'偶数':'奇数';
	}
}

// 定义actions，要执行的操作
const actions = {
	increment({commit,state}){
		//提交一个名为increment的变化，名称可以随便取
		commit('increment');
	},
	reduce({commit,state}){
		if(state.count>10){
			commit('reduce');
		}
	},
	incrementAsync({commit,state}){
		var p=new Promise((resolve,reject)=>{
			setTimeout(()=>{
				resolve();
			},3000);
		});
		p.then(()=>{
			commit('increment');
		});
		p.catch(()=>{
			console.log("异步操作失败");
		});
	}
}

//定义mutations，处理状态（数据）的改变
const mutations = {
	increment(state){
		state.count++;
	},
	reduce(state){
		state.count--;
	}
}

const store = new Vuex.Store({
	state,
	getters,
	actions,
	mutations
})

export default store;