class Scene2 extends Phaser.Scene {
    constructor() {
        super("weatherLoad");
        this.weather;
        this.city;
    }

  async create() {

    console.log("test");

    var that = this; 
    var currentWeather = new CityWeather();
    await currentWeather.getCityWeather(function () {
        that.weather = currentWeather.weather;
        that.city = currentWeather.city;

    });

    console.log("weather: " + this.weather);
    console.log("City: " + this.city);

    


    if (this.weather.match(/Rain.*/))
    {
        this.background = this.add.tileSprite(0, 0, config.width, config.height, "rain");
        this.background.setOrigin(0, 0);

    }
    else{

        this.background = this.add.tileSprite(0, 0, config.width, config.height, "background");
        this.background.setOrigin(0, 0);
    }
   

    //display user's current city and weather 
    this.cityText = this.add.text(5, 5, 'city:'+this.city, { fontSize: '15px', fill: '#800813' });
    this.weatherText = this.add.text(5, 20, 'Weather:'+this.weather, { fontSize: '15px', fill: '#800813' });


}
}

 