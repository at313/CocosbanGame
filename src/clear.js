//clear.js
var stage_num = 0;
audioEngine = cc.audioEngine;
var Layer2 = cc.Layer.extend({
    ctor: function() {
        this._super();
        var size = cc.director.getWinSize();

        var label = cc.LabelTTF.create("Game Clear!!", "Arial", 48);
        label.setPosition(size.width * 0.5, size.height * 0.6);
        this.addChild(label, 1);

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

        var label2 = cc.LabelTTF.create("Click on NextStage", "Arial", 24);
        label2.setPosition(size.width * 0.5, size.height * 0.2);
        this.addChild(label2, 1);

        return true;
    },
});


var Layer1 = cc.Layer.extend({
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
      stage_num++;
      if (audioEngine.isMusicPlaying()) {
        audioEngine.stopMusic();
      }
    cc.director.runScene(new gameScene1);
    },
});

var clearScene = cc.Scene.extend({
    onEnter: function() {
        this._super();

        // 背景レイヤーをその場で作る
        var backgroundLayer = new cc.LayerColor(new cc.Color(255, 200, 0, 180));
        this.addChild(backgroundLayer);

        var layer1 = new Layer1();
        this.addChild(layer1);

        var layer2 = new Layer2();
        this.addChild(layer2);

        if (!audioEngine.isMusicPlaying()) {
          audioEngine.playMusic(res.bgm_clear, true);
        }
    }
});
