jQuery(function($) {
    $.fn.live = function(event,callback) {
        $(document).on(event,this.selector,callback);
        return this;
    };
});