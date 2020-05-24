<template>
    <ion-page>
        <ion-header>
            <ion-toolbar color="primary">
                <ion-buttons slot="start">
                    <ion-back-button default-href="/"></ion-back-button>
                </ion-buttons>
                <ion-title>{{ $route.params.fold }}</ion-title>
            </ion-toolbar>
		</ion-header>
		<ion-content padding color="secondary">
			<ion-grid>
				<ion-row>
					<Card :name=i :back=$route.params.fold type="document" v-bind:key="index" v-for="(i, index)  in names[$route.params.fold]" />
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
		name: "Folder",
		components: {
            Card
        },
        data() {
            return {
                names: { 
                    Logica: ["First","Second","Third", "Fourth", "Fifth", "Sixth", "", "", "", "", "", ""],
					Info: ["First","Second","Third", "Fourth", "", "", "", "", "", "", "", ""],
					Generale: ["First","Second","Third", "Fourth", "", "", "", "", "", "", "", ""],
					Statistica: ["First","Second","Third", "Fourth", "", "", "", "", "", "", "", ""],
                }
            }
        },
        props: {
            type: String
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
