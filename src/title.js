//title.js
audioEngine = cc.audioEngine;
var Layer4 = cc.Layer.extend({
    ctor: function() {
        this._super();
        var size = cc.director.getWinSize();

        var back_img = cc.Sprite.create(res.back_png);
        back_img.getTexture().setAliasTexParameters();
        back_img.setPosition(240, 160);
        back_img.setScale(5);
        this.addChild(back_img);

        var pl_img = cc.Sprite.create(res.player_png);
        pl_img.getTexture().setAliasTexParameters();
        pl_img.setPosition(size.width * 0.5, size.height * 0.4);
        pl_img.setScale(10);
        this.addChild(pl_img);

        var label4 = cc.LabelTTF.create("Click on GameStart!", "Arial", 24);
        label4.setPosition(size.width * 0.5, size.height * 0.2);
        this.addChild(label4, 1);

        return true;
    },
});


var Layer3 = cc.Layer.extend({
    sprite: null,
    ctor: function() {
        this._super();
        var size = cc.director.getWinSize();

        // タップイベントリスナーを登録する
        cc.eventManager.addListener({
            event: cc.EventListener.TOUCH_ONE_BY_ONE,
            swallowTouches: true,
            onTouchBegan: this.onTouchBegan,
            onTouchMoved: this.onTouchMoved,
            onTouchEnded: this.onTouchEnded
        }, this);
        return true;
    },
    onTouchBegan: function(touch, event) {
        return true;
    },
    onTouchMoved: function(touch, event) {},
    onTouchEnded: function(touch, event) {
      if (audioEngine.isMusicPlaying()) {
        audioEngine.stopMusic();
      }
    var s = cc.TransitionFadeDown.create(0.3, new gameScene1());
    cc.director.runScene(s);
    },
});

var titleScene = cc.Scene.extend({
    onEnter: function() {
        this._super();

        var layer3 = new Layer3();
        this.addChild(layer3);

        var layer4 = new Layer4();
        this.addChild(layer4);

        if (!audioEngine.isMusicPlaying()) {
          audioEngine.playMusic(res.bgm_clear, true);
        }
    }
});
