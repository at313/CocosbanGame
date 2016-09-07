var res = {
    spritesheet_plist : "res/img/spritesheet.plist",
    spritesheet_png : "res/img/spritesheet.png",
    game_bgm:"res/bgm/game_maoudamashii_6_dangeon07.mp3",
    bgm_clear:"res/bgm/game_maoudamashii_7_event08.mp3",
    se_clear:"res/se/se_maoudamashii_onepoint15.mp3",
    se_move:"res/se/se_maoudamashii_se_door02.mp3"
};

var g_resources = [];
for (var i in res) {
    g_resources.push(res[i]);
}
