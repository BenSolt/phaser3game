import Phaser from 'phaser'

const GROUND_KEY = 'ground'
const DUDE_KEY = 'dude'

export default class GameScene extends Phaser.Scene
{
	constructor()
	{
		super('game-scene')
	}

	preload()
	{
        this.load.image('sky', 'assets/sky.png')
		this.load.image(GROUND_KEY, 'assets/platform.png')
		this.load.image('star', 'assets/star.png')
		this.load.image('bomb', 'assets/bomb.png')

		this.load.spritesheet('dude', 
			'assets/dude.png',
			{ frameWidth: 32, frameHeight: 48 }
		)
	}

	create()
	{
		this.add.image(400, 300, 'sky')
    	this.add.image(400, 300, 'star')
	}

    createPlatforms()
    {
        const platforms = this.physics.add.staticGroup() 
        platforms.create(400, 568, GROUND_KEY).setScale(2).refreshBody()
	
		platforms.create(600, 400, GROUND_KEY)
		platforms.create(50, 250, GROUND_KEY)
		platforms.create(750, 220, GROUND_KEY)
    }
}