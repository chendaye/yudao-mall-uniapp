<template>
		<view>
			<text>{{textvalue}}</text><!-- 这里演示了组件值的绑定 -->
			<button :type="buttontype" @click="changetextvalue()">修改为789</button><!-- 这里演示了属性和事件的绑定 -->
			<button :type="buttontype" @click="changetextvalue()">测试前端接口</button>
		</view>
	</template>
<script setup>
	import DemoApi from '@/sheep/api/demo/demo';
	
	const textvalue = "123";
	const buttontype = "primary";
	const changetextvalue = () => {
				this.textvalue="789"//这里修改textvalue的值
			};
	
	const demoTest = () => {
		console.log(DemoApi.getDemoTest())
	};
</script>

<style>
</style>