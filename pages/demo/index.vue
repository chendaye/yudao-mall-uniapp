<template>
	<view>
		<text>{{ state.val }}</text><!-- 这里演示了组件值的绑定 -->
		<button :type="buttontype" @click="changetextvalue()">修改{{textvalue}}</button><!-- 这里演示了属性和事件的绑定 -->
		<button :type="buttontype" @click="demoTest()">接口</button>
		<button :type="buttontype" @click="cheageval()">{{ state.val }}</button>
	</view>
</template>
<script setup>
	import { computed, reactive, ref, unref } from 'vue';
	import DemoApi from '@/sheep/api/demo/demo';


	const count = ref(0)

	const textvalue = "12345";
	const buttontype = "primary";

	const state = reactive({
	  val: "111"
	});
	
	function cheageval(){
		state.val = "777"
	}

	const changetextvalue = () => {
		textvalue = "789" //这里修改textvalue的值
	};
	

	const demoTest = () => {
		DemoApi.getDemoTest().then((ret) => {
			console.log(ret)
		}).catch((err) => {
			console.log(err)
		})
	};
</script>

<style>
</style>