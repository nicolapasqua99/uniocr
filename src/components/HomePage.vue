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
					<ion-col>
						<div>
							<ion-card>
								<ion-card-header>
									<ion-icon name="folder" />
									<ion-card-subtitle>Corso 1</ion-card-subtitle>
								</ion-card-header>
							</ion-card>
						</div>
					</ion-col>
					<ion-col>
						<div>
							<ion-card>
								<ion-card-header>
									<ion-icon name="folder" />
									<ion-card-subtitle>Corso 1</ion-card-subtitle>
								</ion-card-header>
							</ion-card>
						</div>
					</ion-col>
					<ion-col>
						<div>
							<ion-card>
								<ion-card-header>
									<ion-icon name="folder" />
									<ion-card-subtitle>Corso 1</ion-card-subtitle>
								</ion-card-header>
							</ion-card>
						</div>
					</ion-col>
					<ion-col>
						<div>
							<ion-card>
								<ion-card-header>
									<ion-icon name="folder" />
									<ion-card-subtitle>Corso 1</ion-card-subtitle>
								</ion-card-header>
							</ion-card>
						</div>
					</ion-col>
					<ion-col>
						<div>
							<ion-card>
								<ion-card-header>
									<ion-icon name="folder" />
									<ion-card-subtitle>Corso 1</ion-card-subtitle>
								</ion-card-header>
							</ion-card>
						</div>
					</ion-col>
					<ion-col>
						<div>
							<ion-card>
								<ion-card-header>
									<ion-icon name="folder" />
									<ion-card-subtitle>Corso 1</ion-card-subtitle>
								</ion-card-header>
							</ion-card>
						</div>
					</ion-col>
					<ion-col>
						<div>
							<ion-card>
								<ion-card-header>
									<ion-icon name="folder" />
									<ion-card-subtitle>Corso 1</ion-card-subtitle>
								</ion-card-header>
							</ion-card>
						</div>
					</ion-col>
					<ion-col>
						<div>
							<ion-card>
								<ion-card-header>
									<ion-icon name="folder" />
									<ion-card-subtitle>Corso 1</ion-card-subtitle>
								</ion-card-header>
							</ion-card>
						</div>
					</ion-col>
					<ion-col>
						<div>
							<ion-card>
								<ion-card-header>
									<ion-icon name="folder" />
									<ion-card-subtitle>Corso 1</ion-card-subtitle>
								</ion-card-header>
							</ion-card>
						</div>
					</ion-col>
					<ion-col>
						<div>
							<ion-card>
								<ion-card-header>
									<ion-icon name="folder" />
									<ion-card-subtitle>Corso 1</ion-card-subtitle>
								</ion-card-header>
							</ion-card>
						</div>
					</ion-col>
					<ion-col>
						<div>
							<ion-card>
								<ion-card-header>
									<ion-icon name="folder" />
									<ion-card-subtitle>Corso 1</ion-card-subtitle>
								</ion-card-header>
							</ion-card>
						</div>
					</ion-col>
					<ion-col>
						<div>
							<ion-card>
								<ion-card-header>
									<ion-icon name="folder" />
									<ion-card-subtitle>Corso 1</ion-card-subtitle>
								</ion-card-header>
							</ion-card>
						</div>
					</ion-col>
				</ion-row>
			</ion-grid>
			<ion-fab vertical="bottom" horizontal="end" slot="fixed">
				<ion-fab-button @click="$router.push({ name: 'new-item' })">
					<ion-icon name="add" />
				</ion-fab-button>
			</ion-fab>
		</ion-content>
	</ion-page>
</template>

<script>
	export default {
		name: "HomePage",
		props: {
			msg: String
		}
	};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.sc-ion-card-md-h, .sc-ion-card-ios-h{
		background: var(--ion-color-tertiary);
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
