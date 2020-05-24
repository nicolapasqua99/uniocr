<template>
    <ion-page>
        <ion-header>
            <ion-toolbar color="tertiary">
                <ion-buttons slot="start">
                    <ion-back-button  color="primary" :default-href=$route.params.fold></ion-back-button>
                </ion-buttons>
				<ion-title color="primary">{{ $route.params.doc }}</ion-title>
			</ion-toolbar>
			<ion-toolbar color="tertiary">
                <ion-buttons slot="start">
					<ion-button color="tertiary" v-on:click="asFonts()">
						<span>Times New Roman</span>
						<ion-icon name="caret-down"></ion-icon>
					</ion-button>
					<ion-button color="tertiary" v-on:click="asSize()">
						<span>Size</span>
						<ion-icon name="caret-down"></ion-icon>
					</ion-button>
					<ion-button color="tertiary" v-on:click="command('bold')">
						<ion-icon name="bold"></ion-icon>
					</ion-button>
					<ion-button color="tertiary" v-on:click="command('italic')">
						<ion-icon name="italic"></ion-icon>
					</ion-button>
					<ion-button color="tertiary" v-on:click="command('underline')">
						<ion-icon name="underline"></ion-icon>
					</ion-button>
					<ion-button color="tertiary" v-on:click="command('strikeThrough')">
						<ion-icon name="strikethrough"></ion-icon>
					</ion-button>
					<ion-button color="tertiary" v-on:click="command('subscript')">
						<ion-icon name="subscript"></ion-icon>
					</ion-button>
					<ion-button color="tertiary" v-on:click="command('superscript')">
						<ion-icon name="superscript"></ion-icon>
					</ion-button>
					<ion-button color="tertiary">
						<ion-icon name="textcolor"></ion-icon>
					</ion-button>
					<ion-button color="tertiary">
						<ion-icon name="highlight"></ion-icon>
					</ion-button>
					<ion-button color="tertiary" v-on:click="command('insertOrderedList')">
						<ion-icon name="olist"></ion-icon>
					</ion-button>
					<ion-button color="tertiary" v-on:click="command('insertUnorderedList')">
						<ion-icon name="ulist"></ion-icon>
					</ion-button>
					<ion-button color="tertiary" v-on:click="command('indent')">
						<ion-icon name="indent"></ion-icon>
					</ion-button>
					<ion-button color="tertiary" v-on:click="command('outdent')">
						<ion-icon name="outdent"></ion-icon>
					</ion-button>
					<ion-button color="tertiary" v-on:click="command('justifyLeft')">
						<ion-icon name="left-align"></ion-icon>
					</ion-button>
					<ion-button color="tertiary" v-on:click="command('justifyRight')">
						<ion-icon name="right-align"></ion-icon>
					</ion-button>
					<ion-button color="tertiary" v-on:click="command('justifyCenter')">
						<ion-icon name="center-align"></ion-icon>
					</ion-button>
					<ion-button color="tertiary" v-on:click="command('justifyFull')">
						<ion-icon name="justify"></ion-icon>
					</ion-button>
					<ion-button color="tertiary" v-on:click="command('superscript')">
						<ion-icon name="text-width"></ion-icon>
					</ion-button>
					<ion-button color="tertiary" v-on:click="command('superscript')">
						<ion-icon name="text-height"></ion-icon>
					</ion-button>
					<ion-button color="tertiary">
						<ion-icon name="link"></ion-icon>
					</ion-button>
					<ion-button color="tertiary">
						<ion-icon name="image"></ion-icon>
					</ion-button>
					<ion-button color="tertiary">
						<ion-icon name="video"></ion-icon>
					</ion-button>
					<ion-button color="tertiary">
						<ion-icon name="quote"></ion-icon>
					</ion-button>
					<ion-button color="tertiary">
						<ion-icon name="code"></ion-icon>
					</ion-button>
                </ion-buttons>
            </ion-toolbar>
		</ion-header>
		<ion-content padding color="secondary">
			<div contentEditable>
			</div>
		</ion-content>
    </ion-page>
</template>

<script>

    export default {
		name: "DocumentEditor",
		methods: {
			command: function(command) {
				if (command == 'Arial' || command == 'Sans-Serif' || command == 'p') {
					document.execCommand('fontName', false, command);
				}
				document.execCommand(command, false, null);
			},
			asFonts() {
			return this.$ionic.actionSheetController
				.create({
				header: 'Albums',
				buttons: [
					{
						text: 'Arial',
						icon: 'trash',
						handler: () => {
							this.command('bold')
						},
					},
					{
						text: 'Arial Black',
						icon: 'share',
						handler: () => {
							console.log('Share clicked')
						},
					},
					{
						text: 'Comic Sans',
						icon: 'arrow-dropright-circle',
						handler: () => {
							console.log('Play clicked')
						},
					},
					{
						text: 'Courier New',
						icon: 'heart',
						handler: () => {
							console.log('Favorite clicked')
						},
					},
					{
						text: 'Helvetica',
						icon: 'close',
						role: 'cancel',
						handler: () => {
							console.log('Cancel clicked')
						},
					},
					{
						text: 'Impact',
						icon: 'arrow-dropright-circle',
						handler: () => {
							console.log('Play clicked')
						},
					},
					{
						text: 'Times New Roman',
						icon: 'checkmark',
						handler: () => {
							console.log('Favorite clicked')
						},
					},
					{
						text: 'Verdana',
						icon: 'ciao',
						handler: () => {
							console.log('Cancel clicked')
						},
					},
					{
						text: 'Cancel',
						icon: 'close',
						role: 'cancel',
						handler: () => {
							console.log('Cancel clicked')
						},
					},
				],
				})
				.then(a => a.present())
			},
			asSize() {
			return this.$ionic.actionSheetController
				.create({
				header: 'Albums',
				buttons: [
					{
					text: 'Little',
					icon: 'trash',
					handler: () => {
						this.command('bold')
					},
					},
					{
					text: 'Medium',
					icon: 'share',
					handler: () => {
						console.log('Share clicked')
					},
					},
					{
					text: 'Large',
					icon: 'arrow-dropright-circle',
					handler: () => {
						console.log('Play clicked')
					},
					},
					{
					text: 'Largest',
					icon: 'heart',
					handler: () => {
						console.log('Favorite clicked')
					},
					},
					{
					text: 'Cancel',
					icon: 'close',
					role: 'cancel',
					handler: () => {
						console.log('Cancel clicked')
					},
					},
				],
				})
				.then(b => b.present())
			},
		}
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	ion-content div{
		width: 100%;
		height: 100%;
		padding: 28px 72px 28px 72px;
		color: black;
		overflow-y: scroll;
	}
	ion-button{
		margin-left: 8px;
		border-radius: 4px;
		/*box-shadow: -6px -6px 10px rgb(255, 255, 255, .5), 6px 6px 10px rgb(209, 205, 199, .5);*/
	}
	ion-button:nth-of-type(1), ion-button:nth-of-type(5), ion-button:nth-of-type(7), ion-button:nth-of-type(9), ion-button:nth-of-type(13), ion-button:nth-of-type(17), ion-button:nth-of-type(19){
		margin-left: 60px;
	}
	ion-button:nth-of-type(1), ion-button:nth-of-type(2){
		border: 2px solid #383838;
	}
	ion-icon{
		color: #383838;
		font-size: 20px;
	}	
	ion-button:nth-of-type(1) ion-icon, ion-button:nth-of-type(2) ion-icon{
		margin-left: 4px;
	}
	ion-button span{
		color: #383838;
	}
	ion-button:hover ion-icon, ion-button:hover span{
		color: var(--ion-color-primary);
	}
	ion-button:nth-of-type(1):hover, ion-button:nth-of-type(2):hover{
		border: 2px solid var(--ion-color-primary);
	}
</style>
