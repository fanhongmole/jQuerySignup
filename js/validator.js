$(function() {
    'use strict';

    window.Validator = function(val ,rule) {

        this.is_valid = function (new_val) {
            var key;
            
            val = new_val || val;

            if (!rule.required && !val) 
                return true;
            
            for (key in rule) {
                if (key === 'required') 
                    continue;
                var r = this['validata_' + key]();
                if (!r) return false;
            }
            return true;
        }

        this.validata_maxlength = function() {
            pre_length();
            return val.length <= rule.maxlength;
        }

        this.validata_minlength = function() {
            pre_length();
            return val.length >= rule.minlength;
        }

        this.validata_max = function() {
            pre_max_min();
            return val <= rule.max;
        }

        this.validata_min = function() {
            pre_max_min();
            return val >= rule.min;
        }

        this.validata_numeric = function() {
            return $.isNumeric(val);
        }

        this.validata_required = function() {
            var real = $.trim(val);
            if(!real && real !== 0)
                return false;
            return true;
        }

        this.validata_pattern = function() {
            var reg = new RegExp(rule.pattern);
            return reg.test(val);
        }

        /* 完成validata_maxlength或validata_minlength的前置工作 */
        function pre_length() {
            val = val.toString();
        }

        /* 完成validata_max或validata_min的前置工作 */
        function pre_max_min() {
            val = parseFloat(val);
        }
    }
});