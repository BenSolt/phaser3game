import Phaser from 'phaser'

// import HelloWorldScene from './scenes/HelloWorldScene'
import GameScene from './scenes/GameScene'

const config = {
	type: Phaser.AUTO,
	width: 600,
	height: 400,
	// width: 800,
	// height: 600,
	physics: {
		default: 'arcade',
		arcade: {
			gravity: { y: 500 }
		}
	},
	scene: [GameScene]
}

export default new Phaser.Game(config)
