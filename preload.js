var preload = function(game){}

preload.prototype= {
    preload: function(){
        var loadingBg = this.add.sprite(0, 0, "loading");
        this.game.load.image("play", "Startbanner.png", 100, 100);
        this.game.load.image("title", "Inheritancebanner.jpg", 100, 100);
    },
    create: function(){
        this.game.state.start("GameTitle");
    }
}