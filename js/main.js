$(function() {
    'use strict';
    /* 获取页面中的所有input */
    var $inputs = $('[data-rule]');
    var inputs = [];
    $inputs.each(function (_index, node) {
        var tmp = new Input(node);
        inputs.push(tmp);
    });

    /* 测试input接口 */
    /* 
    // 获取并传输input的选择器
    // 解析input的rule
    var test = new Input('#test');
    // 检查input是否的合法性
    var valid = test.validator.is_valid();
    console.log(valid);
    */



    /* 测试validator接口 */
    /* var validator = new Validator('JGJU757dsf', 
    {
        max:100,
        min:18,
        maxlength:7,
        minlength:2,
        pattern:"^[0-9A-Z]+$"
    });

    // var result = validator.validator_max();
    // var result = validator.validator_min();
    // var result = validator.validator_maxlength();
    // var result = validator.validata_minlength();
    // var result = validator.validata_numeric();
    // var result = validator.validata_required();
    // var result = validator.validata_pattern();
    console.log(result); */
})