var BaseConfig = require('./../OneClickPackageApk/BaseConfig.js');
var _ = require("underscore")
class DogConfig extends BaseConfig
{
    // 应用包名
    getAppPackageName()
    {
        super.getAppPackageName();
        //子类自己实现
        return "com.jxy.dong";
    };
    getAppName()
    {
        super.getAppName();
        //子类自己实现
        return "七号养狗场"
    };

    // 需要替换的文件
    getNeedReplaceFiles()
    {
        var selfData = ["a/abc.file"];
        return this.mergeReplaceFile(selfData, super.getNeedReplaceFiles())
    };

    //需要替换的参数
    getNeedParmsList()
    {
        var selfData = [
        {
            key: "-sdk-",
            value: "sdkInfo"
        }];
        return this.mergeReplaceParams(selfData, super.getNeedParmsList())
    };
}
module.exports = DogConfig;