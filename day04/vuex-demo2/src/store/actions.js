import types from './types.js'
const actions={
	incrementAsync({commit,state}){
		var p=new Promise((resolve,reject)=>{
			setTimeout(()=>{
				resolve();
			},3000);
		});
		p.then(()=>{
			commit(types.INCREMENT);
		});
		p.catch(()=>{
			console.log("异步操作失败");
		});
	}
}
export default actions;