$(function () {
    'use strict';

    window.Input = function (selector) {
        var $ele,
            $warning_ele,
            rule = 
            {
                required: true
            },
            me = this,
            val;

        this.load_validator = function () {
            this.get_val();
            this.validator = new Validator (val, rule);
        }

        this.get_val = function () {
            val = $ele.val();
        }


        function init () {

            /* 获取并传输input的选择器 */
    
            /* 解析input的rule */

            /* 检查input是否的合法性 */
            find_ele();
            get_warning_ele();
            parse_rule();
            me.load_validator();
            listen();
        }

        function find_ele () {
            if (selector instanceof jQuery) {
                $ele = selector;      
            } else {
                $ele = $(selector);
            }
        }

        function parse_rule () {
            var rule_str = $ele.data('rule');
            if (!rule_str) return;
            var rule_arr = rule_str.split('|'),
                i;

            for (i = 0; i < rule_arr.length; i++) {
                var item_str = rule_arr[i],
                    item_arr = item_str.split(':');
                rule[item_arr[0]] = JSON.parse(item_arr[1]);
            } 
        }

        function listen () {
            $ele.on('blur',function () {
                me.get_val();
                var valid = me.validator.is_valid(val);
                if (valid) {
                    $warning_ele.hide();
                } else {
                    $warning_ele.show();
                }
            });
        }
        
        function get_warning_ele () {
            $warning_ele = $(get_warning_selector());
        }

        function get_warning_selector () {
            return '#' + $ele.attr('name') + '-warning';
        }

        init();
    }
});