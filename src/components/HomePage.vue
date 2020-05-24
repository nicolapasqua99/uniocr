<template>
	<ion-page>
		<ion-header>
			<ion-toolbar color="primary">
				<ion-title>Your documents</ion-title>
			</ion-toolbar>
		</ion-header>
		<ion-content padding color="secondary">
			<ion-grid>
				<ion-row>
					<Card :name=n type="folder" v-bind:key="index" v-for="(n, index) in names" />
				</ion-row>
			</ion-grid>
			<ion-fab vertical="bottom" horizontal="end" slot="fixed">
				<ion-fab-button @click="$router.push({ name: 'new-item' })">
					<ion-icon size="large" name="add" />
				</ion-fab-button>
			</ion-fab>
		</ion-content>
	</ion-page>
</template>

<script>
	import Card from '@/components/Card.vue'
    
	export default {
		name: "HomePage",
		components: {
            Card
		},
		data() {
            return {
				oldnames: [ 
					{ name:"Logica", docs:"5" },
					{ name:"Info", docs:"3" },
					{ name:"Generale", docs:"9" },
					{ name:"Statistica", docs:"6" },
				],
				names: ["Logica", "Info", "Generale", "Statistica", "", "", "", "", "", "", "", ""]
            };
        },
	};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	ion-card{
		/*background: var(--ion-color-tertiary);*/
		background: transparent;
		box-shadow: none;
	}
	ion-card ion-icon {
		color: #383838;
		font-size: 64px;
		text-align: center;
		width: 100%;
	}
	ion-card-subtitle{
		width: 100%;
		text-align: center;
		font-size: 14px;
	}
</style>
