/**
 * 打赏二维码
 */
var moneyUrl ="http://wetools.store/others/admire-wetool.jpg"

/**
 * 公众号二维码
 */
var wechatUrl ="http://wetools.store/others/wechat-wetool.jpg"

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