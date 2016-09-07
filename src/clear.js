//clear.js
audioEngine = cc.audioEngine;
var num = 0;
var Layer2 = cc.Layer.extend({
    ctor: function() {
        this._super();
        var size = cc.director.getWinSize();

        var label = cc.LabelTTF.create("Game Clear!!", "Arial", 26);
        label.setPosition(size.width / 2, size.height / 2);
        this.addChild(label, 1);
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
      if (audioEngine.isMusicPlaying()) {
        audioEngine.stopMusic();
      }
      //if(num == 0) cc.director.runScene(new gameScene1);
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
