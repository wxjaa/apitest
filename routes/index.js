var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express'});
});
router.get('/components', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("Content-Type", "application/json;charset=utf-8");
    var json = {
        "title": "test",
        "description": "说明",
        "icon": "//gw.alicdn.com/tps/TB1jjpoOpXXXXbHXXXXXXXXXXXX-102-102.png",
        "components": [
            {
                "label": true,
                "placeholder": true,
                "required": true,
                "important": true,
                "print": true,
                "name": "单行输入框",
                "defaultLable": "单行输入框",
                "defaultProps": "请输入",
                "defaultImportant": true,
                "defaultPrint": false,
                "componentName": "textfield",
                "supportSetting": [
                    "label",
                    "placeholder",
                    "required",
                    "important",
                    "print"
                ],
                "idx": 0,
                "InTableCanvas": null,
                "selected": null
            },
            {
                "name": "单选框",
                "defaultLable": "单选框",
                "defaultProps": "请选择",
                "defaultImportant": false,
                "defaultSync": false,
                "defaultPrint": false,
                "defaultOptions": [
                    {
                        "idx": 1,
                        "text": "选项1"
                    },
                    {
                        "idx": 2,
                        "text": "选项2"
                    },
                    {
                        "idx": 3,
                        "text": "选项3"
                    }
                ],
                "componentName": "ddselectfield",
                "supportSetting": [
                    "label",
                    "placeholder",
                    "options",
                    "sync",
                    "required",
                    "important",
                    "print"
                ],
                "idx": 1,
                "InTableCanvas": null,
                "selected": null
            },
            {
                "name": "多行输入框",
                "defaultLable": "多行输入框",
                "defaultProps": "请输入",
                "defaultImportant": false,
                "defaultPrint": false,
                "componentName": "textareafield",
                "supportSetting": [
                    "label",
                    "placeholder",
                    "required",
                    "important",
                    "print"
                ],
                "idx": 2,
                "selected": null,
                "InTableCanvas": null
            },
            {
                "name": "明细",
                "defaultLable": "明细",
                "defaultAction": "增加明细",
                "components": [
                    {
                        "name": "日期区间",
                        "defaultLable": "开始时间",
                        "defaultLable2": "结束时间",
                        "defaultProps": "请选择",
                        "defaultProps2": "请选择",
                        "defaultImportant": false,
                        "defaultPrint": false,
                        "defaultAutorekonTime": false,
                        "defaultFormat": "YYYY-MM-DD",
                        "defaultSubtitle": "时长",
                        "componentName": "dddaterangefield",
                        "supportSetting": [
                            "label",
                            "label2",
                            "placeholder",
                            "placeholder2",
                            "dateformat",
                            "required",
                            "important",
                            "autorekonTime",
                            "subtitle",
                            "print"
                        ],
                        "idx": 4
                    }
                ],
                "selected": null,
                "defaultPrint": false,
                "InTableCanvas": null,
                "componentName": "tablefield",
                "supportSetting": [
                    "label",
                    "action",
                    "required"
                ],
                "idx": 3
            }
        ]

    }
    res.send(json)
    //res.render('index', {title: 'Express'});
});
module.exports = router;
