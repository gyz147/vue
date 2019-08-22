<template>
	<div class="user">
		<h2>用户列表</h2>
		<ul>
			<li v-for="user in users">{{user}}</li>
		</ul>
	</div>
</template>

<script>
	export default {
		data(){
			return{
				users:['tom','jack','alice','mark']
			}
		},
		methods:{
			change(){
				this.name = '汤姆';
			}
		}
	}
</script>

<style scoped> /* scoped表示该样式只在当前组件中有效 */
	.user h2{
		color: blue;
	}
</style>