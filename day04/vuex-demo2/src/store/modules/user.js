/**
 * 用户模块
 */
 import types from '../types.js'

const state={
	count:6
}

var getters={
	count(state){
		return state.count;
	}
}

// 定义actions，要执行的操作
const actions = {
	increment({commit,state}){
		//提交一个名为increment的变化，名称可以随便取
		commit(types.INCREMENT);
	},
	reduce({commit,state}){
		if(state.count>10){
			commit(types.REDUCE);
		}
	}
}

//定义mutations，处理状态（数据）的改变
const mutations = {
	[types.INCREMENT](state){
		state.count++;
	},
	[types.REDUCE](state){
		state.count--;
	}
}

export default{
	state,
	getters,
	actions,
	mutations
}