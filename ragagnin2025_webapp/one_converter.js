var $B = __BRYTHON__;
var _b_ = __BRYTHON__.builtins;
var $locals = $locals___main__
$locals___main__.__package__ = ""
$locals.__annotations__ = $B.empty_dict()
var $top_frame = ["__main__", $locals___main__, "__main__", $locals___main__]
$locals.$f_trace = $B.enter_frame($top_frame)
var $stack_length = $B.frames_stack.length;
try{
    ;$locals.$line_info = "1,__main__";if($locals.$f_trace !== _b_.None){$B.trace_line()};_b_.None;
    $B.$call(_b_.print)('one_converter.py loading');
    ;$locals.$line_info = "2,__main__";if($locals.$f_trace !== _b_.None){$B.trace_line()};_b_.None;
    $B.$import("hydro_mc", [],{},$locals___main__, true);_b_.None;;
    ;$locals.$line_info = "3,__main__";if($locals.$f_trace !== _b_.None){$B.trace_line()};_b_.None;
    var module = $B.$import("browser",["$$document","$$window"], {}, {}, true);
$locals["$$document"] = $B.$getattr($B.imported["browser"], "$$document");
$locals["$$window"] = $B.$getattr($B.imported["browser"], "$$window");
_b_.None;;
    ;$locals.$line_info = "9,__main__";if($locals.$f_trace !== _b_.None){$B.trace_line()};_b_.None;
    $locals___main__["$$alert"] = $B.$getattr($locals___main__["$$window"],"$$alert");
    ;$locals.$line_info = "12,__main__";if($locals.$f_trace !== _b_.None){$B.trace_line()};_b_.None;
    var module = $B.$import("browser.local_storage",["storage"], {}, {}, true);
$locals["storage"] = $B.$getattr($B.imported["browser.local_storage"], "storage");
_b_.None;;
    ;$locals.$line_info = "16,__main__";if($locals.$f_trace !== _b_.None){$B.trace_line()};_b_.None;
    var store$193 = function($defaults){function store193(){
        var $locals___main___store_116 = {},
            $locals = $locals___main___store_116;
        var $len = arguments.length;
        if($len > 0 && arguments[$len - 1].$nat !== undefined){
            $locals___main___store_116 = $locals = $B.args("store", 0, {}, [], arguments, $defaults, null, null);
        }
        else{
            if($len == 0){
                $locals___main___store_116 = $locals = {}
            }
            else if($len > 0){$B.wrong_nb_args("store", $len, 0, [])}
        }
        $locals.$line_info = "16,__main__"
        var $top_frame = ["__main___store_116", $locals,"__main__", $locals___main__, store193]
        $locals.$f_trace = $B.enter_frame($top_frame)
        var $stack_length = $B.frames_stack.length;
        try{
            $B.js_this = this;
            ;$locals.$line_info = "18,__main__";if($locals.$f_trace !== _b_.None){$B.trace_line()};_b_.None;
            var $iter194 = $B.$call(_b_.enumerate)($B.$call($B.$getattr($locals___main__["$$document"],"select"))('input, select'));$locals["$next194"] = $B.$getattr($B.$iter($iter194),"__next__")
            while(true){
                try{
                    var $right202 = $B.$getattr($B.$iter($locals["$next194"]()), "__next__");
                    var $rlist203=[], $pos=0;while(1){try{$rlist203[$pos++] = $right202()}catch(err){break}}
                    if($rlist203.length<2){throw _b_.ValueError.$factory("need more than " +$rlist203.length + " value" + ($rlist203.length > 1 ? "s" : "") + " to unpack")}
                    if($rlist203.length>2){throw _b_.ValueError.$factory("too many values to unpack (expected 2)")}
                    $locals___main___store_116["i"] = $rlist203[0];
                    $locals___main___store_116["e"] = $rlist203[1];
                }
                catch($err){if($B.is_exc($err, [_b_.StopIteration])){break;}else{throw($err)}}
                ;$locals.$line_info = "19,__main__";if($locals.$f_trace !== _b_.None){$B.trace_line()};_b_.None;
                $locals___main___store_116["k"] = $B.rich_op("mod", '%s_%d', $B.fast_tuple([$B.$getattr($B.$check_def_local("e",$locals["e"]),"name"),$B.$check_def_local("i",$locals["i"])]));
                ;$locals.$line_info = "20,__main__";if($locals.$f_trace !== _b_.None){$B.trace_line()};_b_.None;
                var $temp217 = $locals___main__["storage"]
if(Array.isArray($temp217) && !$temp217.__class__){$B.set_list_key($temp217,$B.$check_def_local("k",$locals["k"]),$B.$getattr($B.$check_def_local("e",$locals["e"]),"value"))
}else{$B.$setitem($locals___main__["storage"],$B.$check_def_local("k",$locals["k"]),$B.$getattr($B.$check_def_local("e",$locals["e"]),"value"))};_b_.None;;
                $locals.$line_info = "18,__main__";if($locals.$f_trace !== _b_.None){$B.trace_line()};_b_.None;
            }
            if($locals.$f_trace !== _b_.None){
                $B.trace_return(_b_.None)
                }
                $B.leave_frame({$locals});return _b_.None
        }
        catch(err){
            $B.set_exc(err)
            if($locals.$f_trace !== _b_.None){$locals.$f_trace = $B.trace_exception()}
            $B.leave_frame({$locals});throw err
        }
    }
    store193.$is_func = true
    store193.$infos = {
        __name__:"store",
        __qualname__:"store",
        __defaults__ : _b_.None,
        __kwdefaults__ : _b_.None,
        __annotations__: {},
        __dict__: $B.empty_dict(),
        __doc__: _b_.None,
        __module__ : "__main__",
        __code__:{
            co_argcount:0,
            co_filename:$locals___main__["__file__"] || "<string>",
            co_firstlineno:16,
            co_flags:67,
            co_freevars: ["$$document","storage"],
            co_kwonlyargcount:0,
            co_name: "store",
            co_nlocals: 0,
            co_posonlyargcount: 0,
            co_varnames: $B.fast_tuple([])
        }
    };_b_.None;
    return store193}
    $locals___main__["store"] = store$193({})
    $locals___main__["store"].$set_defaults = function(value){return $locals___main__["store"] = store$193(value)}
    ;$locals.$line_info = "22,__main__";if($locals.$f_trace !== _b_.None){$B.trace_line()};_b_.None;
    var restore$195 = function($defaults){function restore195(default_values){
        var $locals___main___restore_117 = {},
            $locals = $locals___main___restore_117;
        var $len = arguments.length;
        if($len > 0 && arguments[$len - 1].$nat !== undefined){
            $locals___main___restore_117 = $locals = $B.args("restore", 1, {default_values:null}, ["default_values"], arguments, $defaults, null, null);
        }
        else{
            if($len == 1){
                $locals___main___restore_117 = $locals = {default_values:default_values}
            }
            else if($len > 1){$B.wrong_nb_args("restore", $len, 1, ["default_values"])}
            else if($len + Object.keys($defaults).length < 1){$B.wrong_nb_args("restore", $len, 1, ["default_values"])}
            else{
                $locals___main___restore_117 = $locals = {default_values:default_values}
                var defparams = ["default_values"]
                for(var i = $len; i < defparams.length; i++){$locals[defparams[i]] = $defaults[defparams[i]]}
            }
        }
        $locals.$line_info = "22,__main__"
        var $top_frame = ["__main___restore_117", $locals,"__main__", $locals___main__, restore195]
        $locals.$f_trace = $B.enter_frame($top_frame)
        var $stack_length = $B.frames_stack.length;
        try{
            $B.js_this = this;
            ;$locals.$line_info = "24,__main__";if($locals.$f_trace !== _b_.None){$B.trace_line()};_b_.None;
            var $iter196 = $B.$call(_b_.enumerate)($B.$call($B.$getattr($locals___main__["$$document"],"select"))('input, select'));$locals["$next196"] = $B.$getattr($B.$iter($iter196),"__next__")
            while(true){
                try{
                    var $right205 = $B.$getattr($B.$iter($locals["$next196"]()), "__next__");
                    var $rlist206=[], $pos=0;while(1){try{$rlist206[$pos++] = $right205()}catch(err){break}}
                    if($rlist206.length<2){throw _b_.ValueError.$factory("need more than " +$rlist206.length + " value" + ($rlist206.length > 1 ? "s" : "") + " to unpack")}
                    if($rlist206.length>2){throw _b_.ValueError.$factory("too many values to unpack (expected 2)")}
                    $locals___main___restore_117["i"] = $rlist206[0];
                    $locals___main___restore_117["e"] = $rlist206[1];
                }
                catch($err){if($B.is_exc($err, [_b_.StopIteration])){break;}else{throw($err)}}
                ;$locals.$line_info = "25,__main__";if($locals.$f_trace !== _b_.None){$B.trace_line()};_b_.None;
                $locals___main___restore_117["k"] = $B.rich_op("mod", '%s_%d', $B.fast_tuple([$B.$getattr($B.$check_def_local("e",$locals["e"]),"name"),$B.$check_def_local("i",$locals["i"])]));
                ;$locals.$line_info = "26,__main__";if($locals.$f_trace !== _b_.None){$B.trace_line()};_b_.None;
                if($B.$bool($B.$is_member('result',$B.$getattr($B.$check_def_local("e",$locals["e"]),"class_name")))){
                    ;$locals.$line_info = "27,__main__";if($locals.$f_trace !== _b_.None){$B.trace_line()};_b_.None;
                    continue;
                }
                ;$locals.$line_info = "28,__main__";if($locals.$f_trace !== _b_.None){$B.trace_line()};_b_.None;
                if($B.$bool($B.$is_member($B.$check_def_local("k",$locals["k"]),$locals___main__["storage"]))){
                    ;$locals.$line_info = "29,__main__";if($locals.$f_trace !== _b_.None){$B.trace_line()};_b_.None;
                    var $temp218 = $B.$getitem($locals___main__["storage"],$B.$check_def_local("k",$locals["k"]));
$B.$setattr($B.$check_def_local("e",$locals["e"]),"value",$temp218);_b_.None;;
                }
                else if($B.$bool(($B.set_line("30,__main___restore_117")) && $B.$is_member($B.$check_def_local("k",$locals["k"]),$locals["default_values"]))){
                    ;$locals.$line_info = "31,__main__";if($locals.$f_trace !== _b_.None){$B.trace_line()};_b_.None;
                    var $temp219 = $B.$getitem($locals["default_values"],$B.$check_def_local("k",$locals["k"]));
$B.$setattr($B.$check_def_local("e",$locals["e"]),"value",$temp219);_b_.None;;
                }
                $locals.$line_info = "24,__main__";if($locals.$f_trace !== _b_.None){$B.trace_line()};_b_.None;
            }
            if($locals.$f_trace !== _b_.None){
                $B.trace_return(_b_.None)
                }
                $B.leave_frame({$locals});return _b_.None
        }
        catch(err){
            $B.set_exc(err)
            if($locals.$f_trace !== _b_.None){$locals.$f_trace = $B.trace_exception()}
            $B.leave_frame({$locals});throw err
        }
    }
    restore195.$is_func = true
    restore195.$infos = {
        __name__:"restore",
        __qualname__:"restore",
        __defaults__ : _b_.None,
        __kwdefaults__ : _b_.None,
        __annotations__: {},
        __dict__: $B.empty_dict(),
        __doc__: _b_.None,
        __module__ : "__main__",
        __code__:{
            co_argcount:1,
            co_filename:$locals___main__["__file__"] || "<string>",
            co_firstlineno:22,
            co_flags:67,
            co_freevars: ["$$document","storage"],
            co_kwonlyargcount:0,
            co_name: "restore",
            co_nlocals: 1,
            co_posonlyargcount: 0,
            co_varnames: $B.fast_tuple(["default_values"])
        }
    };_b_.None;
    return restore195}
    $locals___main__["restore"] = restore$195({})
    $locals___main__["restore"].$set_defaults = function(value){return $locals___main__["restore"] = restore$195(value)}
    ;$locals.$line_info = "35,__main__";if($locals.$f_trace !== _b_.None){$B.trace_line()};_b_.None;
    var put_exponent$197 = function($defaults){function put_exponent197(s){
        var $locals___main___put_exponent_118 = {},
            $locals = $locals___main___put_exponent_118;
        var $len = arguments.length;
        if($len > 0 && arguments[$len - 1].$nat !== undefined){
            $locals___main___put_exponent_118 = $locals = $B.args("put_exponent", 1, {s:null}, ["s"], arguments, $defaults, null, null);
        }
        else{
            if($len == 1){
                $locals___main___put_exponent_118 = $locals = {s:s}
            }
            else if($len > 1){$B.wrong_nb_args("put_exponent", $len, 1, ["s"])}
            else if($len + Object.keys($defaults).length < 1){$B.wrong_nb_args("put_exponent", $len, 1, ["s"])}
            else{
                $locals___main___put_exponent_118 = $locals = {s:s}
                var defparams = ["s"]
                for(var i = $len; i < defparams.length; i++){$locals[defparams[i]] = $defaults[defparams[i]]}
            }
        }
        $locals.$line_info = "35,__main__"
        var $top_frame = ["__main___put_exponent_118", $locals,"__main__", $locals___main__, put_exponent197]
        $locals.$f_trace = $B.enter_frame($top_frame)
        var $stack_length = $B.frames_stack.length;
        try{
            $B.js_this = this;
            ;$locals.$line_info = "36,__main__";if($locals.$f_trace !== _b_.None){$B.trace_line()};_b_.None;
            " convert floating point to string with html exponent (es. 2e3 -> '2 \\cdot 10<sup>3</sup>')";
            ;$locals.$line_info = "37,__main__";if($locals.$f_trace !== _b_.None){$B.trace_line()};_b_.None;
            if($B.$bool(!$B.$is_member('e',$locals["s"]))){
                ;$locals.$line_info = "38,__main__";if($locals.$f_trace !== _b_.None){$B.trace_line()};_b_.None;
                var $res = $locals["s"];
                            if($locals.$f_trace !== _b_.None){$B.trace_return($res)}
                            $B.leave_frame({$locals});
                            return $res;
            }
            ;$locals.$line_info = "39,__main__";if($locals.$f_trace !== _b_.None){$B.trace_line()};_b_.None;
            if($B.$bool($B.$is_member('e',$locals["s"]))){
                ;$locals.$line_info = "40,__main__";if($locals.$f_trace !== _b_.None){$B.trace_line()};_b_.None;
                var $right208 = $B.$getattr($B.$iter($B.$call($B.$getattr($locals["s"],"split"))('e')), "__next__");
                var $rlist209=[], $pos=0;while(1){try{$rlist209[$pos++] = $right208()}catch(err){break}}
                if($rlist209.length<2){throw _b_.ValueError.$factory("need more than " +$rlist209.length + " value" + ($rlist209.length > 1 ? "s" : "") + " to unpack")}
                if($rlist209.length>2){throw _b_.ValueError.$factory("too many values to unpack (expected 2)")}
                ;$locals.$line_info = "40,__main__";if($locals.$f_trace !== _b_.None){$B.trace_line()};_b_.None;
                $locals___main___put_exponent_118["base"] = $rlist209[0];
                ;$locals.$line_info = "40,__main__";if($locals.$f_trace !== _b_.None){$B.trace_line()};_b_.None;
                $locals___main___put_exponent_118["exponent"] = $rlist209[1];
                ;$locals.$line_info = "41,__main__";if($locals.$f_trace !== _b_.None){$B.trace_line()};_b_.None;
                if($B.$bool($B.rich_comp("__eq__",$B.$getitem($locals["exponent"],0),'+'))){
                    ;$locals.$line_info = "42,__main__";if($locals.$f_trace !== _b_.None){$B.trace_line()};_b_.None;
                    $locals___main___put_exponent_118["exponent"] = $B.getitem_slice($locals["exponent"], _b_.slice.$factory(1,_b_.None));
                }
                ;$locals.$line_info = "43,__main__";if($locals.$f_trace !== _b_.None){$B.trace_line()};_b_.None;
                if($B.$bool($B.rich_comp("__eq__",$B.$getitem($locals["exponent"],0),'0'))){
                    ;$locals.$line_info = "44,__main__";if($locals.$f_trace !== _b_.None){$B.trace_line()};_b_.None;
                    $locals___main___put_exponent_118["exponent"] = $B.getitem_slice($locals["exponent"], _b_.slice.$factory(1,_b_.None));
                }
                ;$locals.$line_info = "45,__main__";if($locals.$f_trace !== _b_.None){$B.trace_line()};_b_.None;
                var $res = $B.add($B.add($B.add($locals["base"], ' &middot; 10<sup>'), $locals["exponent"]), '</sup>');
                            if($locals.$f_trace !== _b_.None){$B.trace_return($res)}
                            $B.leave_frame({$locals});
                            return $res;
            }
            if($locals.$f_trace !== _b_.None){
                $B.trace_return(_b_.None)
                }
                $B.leave_frame({$locals});return _b_.None
        }
        catch(err){
            $B.set_exc(err)
            if($locals.$f_trace !== _b_.None){$locals.$f_trace = $B.trace_exception()}
            $B.leave_frame({$locals});throw err
        }
    }
    put_exponent197.$is_func = true
    put_exponent197.$infos = {
        __name__:"put_exponent",
        __qualname__:"put_exponent",
        __defaults__ : _b_.None,
        __kwdefaults__ : _b_.None,
        __annotations__: {},
        __dict__: $B.empty_dict(),
        __doc__: " convert floating point to string with html exponent (es. 2e3 -> '2 \\cdot 10<sup>3</sup>')",
        __module__ : "__main__",
        __code__:{
            co_argcount:1,
            co_filename:$locals___main__["__file__"] || "<string>",
            co_firstlineno:35,
            co_flags:67,
            co_freevars: [],
            co_kwonlyargcount:0,
            co_name: "put_exponent",
            co_nlocals: 1,
            co_posonlyargcount: 0,
            co_varnames: $B.fast_tuple(["s"])
        }
    };_b_.None;
    return put_exponent197}
    $locals___main__["put_exponent"] = put_exponent$197({})
    $locals___main__["put_exponent"].$set_defaults = function(value){return $locals___main__["put_exponent"] = put_exponent$197(value)}
    ;$locals.$line_info = "48,__main__";if($locals.$f_trace !== _b_.None){$B.trace_line()};_b_.None;
    var on_change$198 = function($defaults){function on_change198(ev){
        var $locals___main___on_change_119 = {},
            $locals = $locals___main___on_change_119;
        var $len = arguments.length;
        if($len > 0 && arguments[$len - 1].$nat !== undefined){
            $locals___main___on_change_119 = $locals = $B.args("on_change", 1, {ev:null}, ["ev"], arguments, $defaults, null, null);
        }
        else{
            if($len == 1){
                $locals___main___on_change_119 = $locals = {ev:ev}
            }
            else if($len > 1){$B.wrong_nb_args("on_change", $len, 1, ["ev"])}
            else if($len + Object.keys($defaults).length < 1){$B.wrong_nb_args("on_change", $len, 1, ["ev"])}
            else{
                $locals___main___on_change_119 = $locals = {ev:ev}
                var defparams = ["ev"]
                for(var i = $len; i < defparams.length; i++){$locals[defparams[i]] = $defaults[defparams[i]]}
            }
        }
        $locals.$line_info = "48,__main__"
        var $top_frame = ["__main___on_change_119", $locals,"__main__", $locals___main__, on_change198]
        $locals.$f_trace = $B.enter_frame($top_frame)
        var $stack_length = $B.frames_stack.length;
        try{
            $B.js_this = this;
            ;$locals.$line_info = "49,__main__";if($locals.$f_trace !== _b_.None){$B.trace_line()};_b_.None;
            $locals___main___on_change_119["form"] = _b_.dict.$factory([]);
            ;$locals.$line_info = "50,__main__";if($locals.$f_trace !== _b_.None){$B.trace_line()};_b_.None;
            $B.$setattr($B.$getitem($locals___main__["$$document"],'a'),"html",'');_b_.None;;
            ;$locals.$line_info = "51,__main__";if($locals.$f_trace !== _b_.None){$B.trace_line()};_b_.None;
            $B.$setattr($B.$getitem($locals___main__["$$document"],'c_delta1'),"html",'');_b_.None;;
            ;$locals.$line_info = "52,__main__";if($locals.$f_trace !== _b_.None){$B.trace_line()};_b_.None;
            $B.$setattr($B.$getitem($locals___main__["$$document"],'M_delta2'),"html",'');_b_.None;;
            ;$locals.$line_info = "53,__main__";if($locals.$f_trace !== _b_.None){$B.trace_line()};_b_.None;
            $B.$setattr($B.$getitem($locals___main__["$$document"],'c_delta2'),"html",'');_b_.None;;
            ;$locals.$line_info = "57,__main__";if($locals.$f_trace !== _b_.None){$B.trace_line()};_b_.None;
            var $iter199 = $B.$call($B.$getattr($locals___main__["$$document"],"select"))('form [name]');$locals["$next199"] = $B.$getattr($B.$iter($iter199),"__next__")
            while(true){
                try{
                    $locals___main___on_change_119["e"] = $locals["$next199"]();
                }
                catch($err){if($B.is_exc($err, [_b_.StopIteration])){break;}else{throw($err)}}
                ;$locals.$line_info = "58,__main__";if($locals.$f_trace !== _b_.None){$B.trace_line()};_b_.None;
                $locals___main___on_change_119["k"] = $B.$getitem($B.$getattr($B.$check_def_local("e",$locals["e"]),"attrs"),'name');
                ;$locals.$line_info = "59,__main__";if($locals.$f_trace !== _b_.None){$B.trace_line()};_b_.None;
                $locals___main___on_change_119["v_str"] = $B.$getattr($B.$check_def_local("e",$locals["e"]),"value");
                ;$locals.$line_info = "60,__main__";if($locals.$f_trace !== _b_.None){$B.trace_line()};_b_.None;
                if($B.$bool((typeof $B.$check_def_local("v_str",$locals["v_str"]) == "string" ? $B.$check_def_local("v_str",$locals["v_str"])=='' : $B.rich_comp("__eq__",$B.$check_def_local("v_str",$locals["v_str"]),'')))){
                    ;$locals.$line_info = "61,__main__";if($locals.$f_trace !== _b_.None){$B.trace_line()};_b_.None;
                    $B.$raise($B.$call(_b_.Exception)('Some fields are empty'));
                }
                ;$locals.$line_info = "65,__main__";if($locals.$f_trace !== _b_.None){$B.trace_line()};_b_.None;
                if($B.$bool(!$B.$bool($B.$test_expr($B.$test_item($B.$test_expr($B.$test_item($B.$is_member('c',$B.$check_def_local("v_str",$locals["v_str"])))||$B.$test_item($B.$is_member('v',$B.$check_def_local("v_str",$locals["v_str"])))))||$B.$test_item($B.$is_member('m',$B.$check_def_local("v_str",$locals["v_str"]))))))){
                    ;$locals.$line_info = "66,__main__";if($locals.$f_trace !== _b_.None){$B.trace_line()};_b_.None;
                    $locals.$failed212 = false;
                try{
                        ;$locals.$line_info = "67,__main__";if($locals.$f_trace !== _b_.None){$B.trace_line()};_b_.None;
                        $locals___main___on_change_119["v"] = $B.$call(_b_.float)($B.$check_def_local("v_str",$locals["v_str"]));
                    }
                    catch($err211){
                        $B.set_exc($err211)
                        if($locals.$f_trace !== _b_.None){$locals.$f_trace = $B.trace_exception()}
                        $locals.$failed212 = true;$B.pmframe = $B.last($B.frames_stack);if(false){}
                        else{
                            ;$locals.$line_info = "68,__main__";if($locals.$f_trace !== _b_.None){$B.trace_line()};_b_.None;
                            void(0)
                            ;$locals.$line_info = "69,__main__";if($locals.$f_trace !== _b_.None){$B.trace_line()};_b_.None;
                            $B.$raise($B.$call(_b_.Exception)($B.rich_op("mod", 'Unable to convert "%s" value "%s" to float', $B.fast_tuple([$B.$check_def_local("k",$locals["k"]),$B.$check_def_local("v_str",$locals["v_str"])]))));
                            $B.del_exc()
                        }
                    }
                    ;$locals.$line_info = "70,__main__";if($locals.$f_trace !== _b_.None){$B.trace_line()};_b_.None;
                    if($B.$bool($B.rich_comp("__eq__",$B.$check_def_local("v_str",$locals["v_str"]),(new Number(0.))))){
                        ;$locals.$line_info = "71,__main__";if($locals.$f_trace !== _b_.None){$B.trace_line()};_b_.None;
                        $B.$raise($B.$call(_b_.Exception)($B.rich_op("mod", 'The value of "%s" cannot be zero', $B.$check_def_local("k",$locals["k"]))));
                    }
                }
                else{
                    ;$locals.$line_info = "73,__main__";if($locals.$f_trace !== _b_.None){$B.trace_line()};_b_.None;
                    $locals___main___on_change_119["v"] = $B.$check_def_local("v_str",$locals["v_str"]);
                }
                ;$locals.$line_info = "75,__main__";if($locals.$f_trace !== _b_.None){$B.trace_line()};_b_.None;
                var $temp224 = $locals["form"]
if(Array.isArray($temp224) && !$temp224.__class__){$B.set_list_key($temp224,$B.$check_def_local("k",$locals["k"]),$B.$check_def_local("v",$locals["v"]))
}else{$B.$setitem($locals["form"],$B.$check_def_local("k",$locals["k"]),$B.$check_def_local("v",$locals["v"]))};_b_.None;;
                ;$locals.$line_info = "79,__main__";if($locals.$f_trace !== _b_.None){$B.trace_line()};_b_.None;
                if($B.$bool((typeof $B.$check_def_local("k",$locals["k"]) == "string" ? $B.$check_def_local("k",$locals["k"])=='z' : $B.rich_comp("__eq__",$B.$check_def_local("k",$locals["k"]),'z')))){
                    ;$locals.$line_info = "80,__main__";if($locals.$f_trace !== _b_.None){$B.trace_line()};_b_.None;
                    var $temp225 = $locals["form"]
if(Array.isArray($temp225) && !$temp225.__class__){$B.set_list_key($temp225,'a',$B.rich_op("truediv", (new Number(1.)), $B.add((new Number(1.)), $B.$getitem($locals["form"],'z'))))
}else{$B.$setitem($locals["form"],'a',$B.rich_op("truediv", (new Number(1.)), $B.add((new Number(1.)), $B.$getitem($locals["form"],'z'))))};_b_.None;;
                    ;$locals.$line_info = "81,__main__";if($locals.$f_trace !== _b_.None){$B.trace_line()};_b_.None;
                    $B.$setattr($B.$getitem($locals___main__["$$document"],'a'),"html",$B.rich_op("mod", '(a = %.3f)', $B.$getitem($locals["form"],'a')));_b_.None;;
                }
                $locals.$line_info = "57,__main__";if($locals.$f_trace !== _b_.None){$B.trace_line()};_b_.None;
            }
            ;$locals.$line_info = "83,__main__";if($locals.$f_trace !== _b_.None){$B.trace_line()};_b_.None;
            $B.$call(_b_.print)($locals["form"]);
            ;$locals.$line_info = "84,__main__";if($locals.$f_trace !== _b_.None){$B.trace_line()};_b_.None;
            $B.$call($locals___main__["store"])();
            ;$locals.$line_info = "89,__main__";if($locals.$f_trace !== _b_.None){$B.trace_line()};_b_.None;
            $locals___main___on_change_119["c_delta1"] = $B.$call($B.$getattr($locals___main__["hydro_mc"],"concentration_from_mc_relation"))($B.$getitem($locals["form"],'delta1'), $B.$getitem($locals["form"],'M'), $B.$getitem($locals["form"],'a'), $B.$getitem($locals["form"],'omega_m'), $B.$getitem($locals["form"],'omega_b'), $B.$getitem($locals["form"],'sigma8'), $B.$getitem($locals["form"],'h0'));
            ;$locals.$line_info = "90,__main__";if($locals.$f_trace !== _b_.None){$B.trace_line()};_b_.None;
            $B.$call(_b_.print)('c_Delta1', $locals["c_delta1"]);
            ;$locals.$line_info = "91,__main__";if($locals.$f_trace !== _b_.None){$B.trace_line()};_b_.None;
            $B.$setattr($B.$getitem($locals___main__["$$document"],'c_delta1'),"html",$B.rich_op("mod", 'c<sub>%s</sub> = %.3f', $B.fast_tuple([$B.$getitem($locals["form"],'delta1'),$locals["c_delta1"]])));_b_.None;;
            ;$locals.$line_info = "93,__main__";if($locals.$f_trace !== _b_.None){$B.trace_line()};_b_.None;
            if($B.$bool($B.rich_comp("__eq__",$B.$getitem($locals["form"],'delta1'),$B.$getitem($locals["form"],'delta2')))){
                ;$locals.$line_info = "94,__main__";if($locals.$f_trace !== _b_.None){$B.trace_line()};_b_.None;
                $B.$raise($B.$call(_b_.Exception)('To convert masses, &Delta;1 must be different than &Delta;2'));
            }
            ;$locals.$line_info = "99,__main__";if($locals.$f_trace !== _b_.None){$B.trace_line()};_b_.None;
            $locals___main___on_change_119["M_delta2"] = $B.$call($B.$getattr($locals___main__["hydro_mc"],"mass_from_mm_relation"))($B.$getitem($locals["form"],'delta1'), $B.$getitem($locals["form"],'delta2'), $B.$getitem($locals["form"],'M'), $B.$getitem($locals["form"],'a'), $B.$getitem($locals["form"],'omega_m'), $B.$getitem($locals["form"],'omega_b'), $B.$getitem($locals["form"],'sigma8'), $B.$getitem($locals["form"],'h0'));
            ;$locals.$line_info = "100,__main__";if($locals.$f_trace !== _b_.None){$B.trace_line()};_b_.None;
            $locals___main___on_change_119["c_delta2"] = $B.$call($B.$getattr($locals___main__["hydro_mc"],"concentration_from_mc_relation"))($B.$getitem($locals["form"],'delta2'), $locals["M_delta2"], $B.$getitem($locals["form"],'a'), $B.$getitem($locals["form"],'omega_m'), $B.$getitem($locals["form"],'omega_b'), $B.$getitem($locals["form"],'sigma8'), $B.$getitem($locals["form"],'h0'));
            ;$locals.$line_info = "102,__main__";if($locals.$f_trace !== _b_.None){$B.trace_line()};_b_.None;
            $B.$call(_b_.print)('Mdelta2', $locals["M_delta2"]);
            ;$locals.$line_info = "103,__main__";if($locals.$f_trace !== _b_.None){$B.trace_line()};_b_.None;
            $B.$call(_b_.print)('cdelta2', $locals["c_delta2"]);
            ;$locals.$line_info = "104,__main__";if($locals.$f_trace !== _b_.None){$B.trace_line()};_b_.None;
            $B.$setattr($B.$getitem($locals___main__["$$document"],'M_delta2'),"html",$B.rich_op("mod", 'M<sub>%s</sub> = %s M<sub><small>&#x2299;</small></sub>;', $B.fast_tuple([$B.$getitem($locals["form"],'delta2'),$B.$call($locals___main__["put_exponent"])($B.rich_op("mod", '%.3e', $locals["M_delta2"]))])));_b_.None;;
            ;$locals.$line_info = "105,__main__";if($locals.$f_trace !== _b_.None){$B.trace_line()};_b_.None;
            $B.$setattr($B.$getitem($locals___main__["$$document"],'c_delta2'),"html",$B.rich_op("mod", 'c<sub>%s</sub> = %.3f', $B.fast_tuple([$B.$getitem($locals["form"],'delta2'),$locals["c_delta2"]])));_b_.None;;
            if($locals.$f_trace !== _b_.None){
                $B.trace_return(_b_.None)
                }
                $B.leave_frame({$locals});return _b_.None
        }
        catch(err){
            $B.set_exc(err)
            if($locals.$f_trace !== _b_.None){$locals.$f_trace = $B.trace_exception()}
            $B.leave_frame({$locals});throw err
        }
    }
    on_change198.$is_func = true
    on_change198.$infos = {
        __name__:"on_change",
        __qualname__:"on_change",
        __defaults__ : _b_.None,
        __kwdefaults__ : _b_.None,
        __annotations__: {},
        __dict__: $B.empty_dict(),
        __doc__: _b_.None,
        __module__ : "__main__",
        __code__:{
            co_argcount:1,
            co_filename:$locals___main__["__file__"] || "<string>",
            co_firstlineno:48,
            co_flags:67,
            co_freevars: ["$$document","store","hydro_mc","put_exponent"],
            co_kwonlyargcount:0,
            co_name: "on_change",
            co_nlocals: 1,
            co_posonlyargcount: 0,
            co_varnames: $B.fast_tuple(["ev"])
        }
    };_b_.None;
    return on_change198}
    $locals___main__["on_change"] = on_change$198({})
    $locals___main__["on_change"].$set_defaults = function(value){return $locals___main__["on_change"] = on_change$198(value)}
    ;$locals.$line_info = "106,__main__";if($locals.$f_trace !== _b_.None){$B.trace_line()};_b_.None;
    $B.$call(_b_.print)('6');
    ;$locals.$line_info = "108,__main__";if($locals.$f_trace !== _b_.None){$B.trace_line()};_b_.None;
    var on_change_try$200 = function($defaults){function on_change_try200(ev){
        var $locals___main___on_change_try_120 = {},
            $locals = $locals___main___on_change_try_120;
        var $len = arguments.length;
        if($len > 0 && arguments[$len - 1].$nat !== undefined){
            $locals___main___on_change_try_120 = $locals = $B.args("on_change_try", 1, {ev:null}, ["ev"], arguments, $defaults, null, null);
        }
        else{
            if($len == 1){
                $locals___main___on_change_try_120 = $locals = {ev:ev}
            }
            else if($len > 1){$B.wrong_nb_args("on_change_try", $len, 1, ["ev"])}
            else if($len + Object.keys($defaults).length < 1){$B.wrong_nb_args("on_change_try", $len, 1, ["ev"])}
            else{
                $locals___main___on_change_try_120 = $locals = {ev:ev}
                var defparams = ["ev"]
                for(var i = $len; i < defparams.length; i++){$locals[defparams[i]] = $defaults[defparams[i]]}
            }
        }
        $locals.$line_info = "108,__main__"
        var $top_frame = ["__main___on_change_try_120", $locals,"__main__", $locals___main__, on_change_try200]
        $locals.$f_trace = $B.enter_frame($top_frame)
        var $stack_length = $B.frames_stack.length;
        try{
            $B.js_this = this;
            ;$locals.$line_info = "109,__main__";if($locals.$f_trace !== _b_.None){$B.trace_line()};_b_.None;
            $B.$setattr($B.$getitem($locals___main__["$$document"],'error'),"html",'');_b_.None;;
            ;$locals.$line_info = "110,__main__";if($locals.$f_trace !== _b_.None){$B.trace_line()};_b_.None;
            $locals.$failed215 = false;
        try{
                ;$locals.$line_info = "111,__main__";if($locals.$f_trace !== _b_.None){$B.trace_line()};_b_.None;
                $B.$call($locals___main__["on_change"])($locals["ev"]);
            }
            catch($err214){
                $B.set_exc($err214)
                if($locals.$f_trace !== _b_.None){$locals.$f_trace = $B.trace_exception()}
                $locals.$failed215 = true;$B.pmframe = $B.last($B.frames_stack);if(false){}
                else if(($locals.$line_info = "112,__main__") && $B.is_exc($err214,[_b_.Exception])){
                    ;$locals.$line_info = "112,__main__";if($locals.$f_trace !== _b_.None){$B.trace_line()};_b_.None;
                    void(0)
                    $locals["e"] = $B.exception($err214)
                    ;$locals.$line_info = "113,__main__";if($locals.$f_trace !== _b_.None){$B.trace_line()};_b_.None;
                    $B.$call(_b_.print)($locals["e"], $B.$call(_b_.str)($locals["e"]));
                    ;$locals.$line_info = "114,__main__";if($locals.$f_trace !== _b_.None){$B.trace_line()};_b_.None;
                    $B.$setattr($B.$getitem($locals___main__["$$document"],'error'),"html",$B.rich_op("mod", 'Warning: %s', $B.$call(_b_.str)($locals["e"])));_b_.None;;
                    $B.del_exc()
                }
                else{
                    throw $err214
                }
            }
            if($locals.$f_trace !== _b_.None){
                $B.trace_return(_b_.None)
                }
                $B.leave_frame({$locals});return _b_.None
        }
        catch(err){
            $B.set_exc(err)
            if($locals.$f_trace !== _b_.None){$locals.$f_trace = $B.trace_exception()}
            $B.leave_frame({$locals});throw err
        }
    }
    on_change_try200.$is_func = true
    on_change_try200.$infos = {
        __name__:"on_change_try",
        __qualname__:"on_change_try",
        __defaults__ : _b_.None,
        __kwdefaults__ : _b_.None,
        __annotations__: {},
        __dict__: $B.empty_dict(),
        __doc__: _b_.None,
        __module__ : "__main__",
        __code__:{
            co_argcount:1,
            co_filename:$locals___main__["__file__"] || "<string>",
            co_firstlineno:108,
            co_flags:67,
            co_freevars: ["$$document","on_change"],
            co_kwonlyargcount:0,
            co_name: "on_change_try",
            co_nlocals: 1,
            co_posonlyargcount: 0,
            co_varnames: $B.fast_tuple(["ev"])
        }
    };_b_.None;
    return on_change_try200}
    $locals___main__["on_change_try"] = on_change_try$200({})
    $locals___main__["on_change_try"].$set_defaults = function(value){return $locals___main__["on_change_try"] = on_change_try$200(value)}
    ;$locals.$line_info = "117,__main__";if($locals.$f_trace !== _b_.None){$B.trace_line()};_b_.None;
    var $iter201 = $B.$call($B.$getattr($locals___main__["$$document"],"select"))('[name]');$locals["$next201"] = $B.$getattr($B.$iter($iter201),"__next__")
    while(true){
        try{
            $locals___main__["e"] = $locals["$next201"]();
        }
        catch($err){if($B.is_exc($err, [_b_.StopIteration])){break;}else{throw($err)}}
        ;$locals.$line_info = "118,__main__";if($locals.$f_trace !== _b_.None){$B.trace_line()};_b_.None;
        $B.$call($B.$getattr($B.$check_def("e",$locals___main__["e"]),"bind"))("change", $B.$check_def("on_change_try",$locals___main__["on_change_try"]));
        $locals.$line_info = "117,__main__";if($locals.$f_trace !== _b_.None){$B.trace_line()};_b_.None;
    }
    ;$locals.$line_info = "121,__main__";if($locals.$f_trace !== _b_.None){$B.trace_line()};_b_.None;
    $locals___main__["_default_values"] = _b_.dict.$factory([["delta1_5","500c"],["M_6","3e14"],["delta2_7","200m"],["omega_b_1",".04"],["z_4","1."],["h0_3",".704"],["sigma8_2",".8"],["omega_m_0",".301"]]);
    ;$locals.$line_info = "122,__main__";if($locals.$f_trace !== _b_.None){$B.trace_line()};_b_.None;
    $B.$call($locals___main__["restore"])($locals___main__["_default_values"]);
    ;$locals.$line_info = "125,__main__";if($locals.$f_trace !== _b_.None){$B.trace_line()};_b_.None;
    $B.$setattr($B.$getattr($B.$getitem($locals___main__["$$document"],'loading'),"style"),"display",'none');_b_.None;;
    ;$locals.$line_info = "127,__main__";if($locals.$f_trace !== _b_.None){$B.trace_line()};_b_.None;
    $B.$call($locals___main__["on_change_try"])(_b_.None);
    ;$locals.$line_info = "128,__main__";if($locals.$f_trace !== _b_.None){$B.trace_line()};_b_.None;
    $B.$call(_b_.print)('one_converter.py loaded');
    $B.leave_frame({$locals, value: _b_.None})
}
catch(err){
    $B.leave_frame({$locals, value: _b_.None})
    throw err
}
