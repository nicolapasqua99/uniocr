<template>
    <ion-col>
        <div>
            <ion-card v-if="name != ''" >
                <ion-card-header>
                    <ion-icon 
                        v-if="type == 'folder'" 
                        :name=type 
                        @click="$router.push({ name: 'folder', params: { fold: name } })"
                    />
                    <ion-icon 
                        v-else 
                        :name=type 
                        @click="$router.push({ name: 'document', params: { fold: back, doc: name } })"
                    />
                    <ion-card-subtitle >
                        {{ name }}
                    </ion-card-subtitle>
                </ion-card-header>
            </ion-card>
        </div>
    </ion-col>
</template>

<script>
	export default {
        name: "Card",
		props: {
            type: String,
            back: String,
            name: String,
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
        transition: all .2s ease;
	}
	ion-card-subtitle{
		width: 100%;
		text-align: center;
		font-size: 14px;
	}
    ion-card:hover ion-icon {
        color: var(--ion-color-primary);
    }
</style>
