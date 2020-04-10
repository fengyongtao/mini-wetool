/**
 * 打赏二维码
 */
var moneyUrl ="https://6d69-mini-wetool-1259281818.tcb.qcloud.la/admire-wetool.jpg?sign=4dddb32d6478f0716a0723356adb31e3&t=1586517238"

/**
 * 公众号二维码
 */
var wechatUrl ="https://6d69-mini-wetool-1259281818.tcb.qcloud.la/wechat-wetool.jpg?sign=dd0d38db23d5ff49575547aab04401a9&t=1586497420"

/**
 * 云开发环境
 */
//var env ="product-raeub"
var env ="mini-wetool"
/**
 * 个人文章操作枚举
 */
var postRelatedType = {
    COLLECTION: 1,
    ZAN: 2,
    properties: {
        1: {
            desc: "收藏"
        },
        2: {
            desc: "点赞"
        }
    }
};

var subcributeTemplateId="JezsTBoFkapqLDEHjNJKVGhsRcn-GJcCjSGQmcSdVn8"

module.exports = {
    postRelatedType: postRelatedType,
    moneyUrl:moneyUrl,
    wechatUrl:wechatUrl,
    env:env,
    subcributeTemplateId:subcributeTemplateId
}