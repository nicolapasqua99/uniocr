<template>
	<div id="app">
		<ion-app>
			<ion-vue-router />
		</ion-app>
	</div>
</template>

<script>
	export default {
		name: "app"
	};
</script>

<style>
	:root {
		--ion-color-primary: #2E86AB;
		--ion-color-primary-rgb: 0,102,0;
		--ion-color-primary-contrast: #ffffff;
		--ion-color-primary-contrast-rgb: 255,255,255;
		--ion-color-primary-shade: #005a00;
		--ion-color-primary-tint: #1a751a;

		--ion-color-secondary: #F2F2F2;
		--ion-color-secondary-rgb: 0,102,0;
		--ion-color-secondary-contrast: #ffffff;
		--ion-color-secondary-contrast-rgb: 255,255,255;
		--ion-color-secondary-shade: #005a00;
		--ion-color-secondary-tint: #1a751a;
	
		--ion-color-tertiary: #EFEEEE;
		--ion-color-tertiary-rgb: 0,102,0;
		--ion-color-tertiary-contrast: #ffffff;
		--ion-color-tertiary-contrast-rgb: 255,255,255;
		--ion-color-tertiary-shade: #005a00;
		--ion-color-tertiary-tint: #1a751a;
	}

	:root {
		--ion-color-newcolor: #FFFFFF;
		--ion-color-newcolor-rgb: 255,255,255;
		--ion-color-newcolor-contrast: #000000;
		--ion-color-newcolor-contrast-rgb: 0,0,0;
		--ion-color-newcolor-shade: #e0e0e0;
		--ion-color-newcolor-tint: #ffffff;
	}

	.ion-color-newcolor {
		--ion-color-base: var(--ion-color-newcolor);
		--ion-color-base-rgb: var(--ion-color-newcolor-rgb);
		--ion-color-contrast: var(--ion-color-newcolor-contrast);
		--ion-color-contrast-rgb: var(--ion-color-newcolor-contrast-rgb);
		--ion-color-shade: var(--ion-color-newcolor-shade);
		--ion-color-tint: var(--ion-color-newcolor-tint);
	}

	ion-icon.action-sheet-icon.sc-ion-action-sheet-md{
		font-size: 20px;
		padding: 2px 0px 2px 2px;
	}
	.action-sheet-group.action-sheet-group-cancel.sc-ion-action-sheet-md ion-icon.action-sheet-icon.sc-ion-action-sheet-md{
		font-size: 24px;
		padding: 0px 0px 4px 0px;
	}
</style>