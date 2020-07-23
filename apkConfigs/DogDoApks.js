var DogConfig = require("./DogConfig")
var BaseDoApks = require("./../OneClickPackageApk/BaseDoApks")
class DogDoApks extends BaseDoApks
{
    constructor()
    {
        super();
        this.cfg = new DogConfig();
    };
    // 替换文件参数
    replaceFile(callBack)
    {
        this.needReplaceParams = this.cfg.getNeedParmsList();
        this.needReplaceFiles = this.cfg.getNeedReplaceFiles();
        super.replaceFile(callBack)
    }
    doApk(callBack)
    {
        super.doApk(callBack)
    }
}
module.exports = DogDoApks;