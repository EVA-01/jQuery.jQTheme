jQuery.theme=function(options, name) {
 ret={
  themes:[],
  ids:[],
  name:name,
  retThNa:function(na) {
   ret=false;
   jQuery.each(this.themes, function() {
    if(this.name==na) {
	 ret=this;
	 return false;
	}
   });
   return ret;
  },
  addTheme:function(sm) {
   ret=this;
   adyen=ret.themes.length;
   if(jQuery.type(sm)=="array") {
    jQuery.each(sm, function(i) {
     ret.themes[adyen+i]=jQuery.extend({name:(adyen+i), src:false, style:false, active:false}, this);
    });
   } else if(jQuery.type(sm)=="object") {
    ret.themes[adyen]=jQuery.extend({name:adyen, src:false, style:false, active:false}, sm);
   }
   return ret;
  },
  construct:function(t) {
   if(this.ids.length==0) {
    id=0;
   } else {
    id=(this.ids[this.ids.length-1]+1);
   }
   if(t.src) {
    jQuery('head').append('<link type="text/css" class="jQTheme" rel="stylesheet" data-identifier="'+id+'"></link>');
    fe=jQuery('link.jQTheme').last().attr('data-name', this.name).attr('data-locName', t.name);
    t.active=fe;
    fe.attr('href', t.src);
   }
   if(!t.src && t.style) {
    jQuery('head').append('<style type="text/css" class="jQTheme" data-identifier="'+id+'"></style>');
    fe=jQuery('style.jQTheme').last().attr('data-name', this.name).attr('data-locName', t.name);
    t.active=fe;
    fe.html(t.style);
   } else if(t.src && t.style) {
    fe.after('<style type="text/css" class="jQTheme brother" data-identifier="'+id+'">'+t.style+'</style>');
	fe.next('style[data-identifier='+id+']').attr('data-name', this.name).attr('data-locName', t.name);
	t.active=t.active.add(fe.next('style[data-identifier='+id+']'));
   }
   this.ids.push(id);
   return t.active;
  },
  append:function(n) {
   if(jQuery.type(n)=="array") {
    reti=this;
	jQuery.each(n, function() {
	 theme=reti.retThNa(this);
	 if(theme.active==false) {
	  reti.construct(theme);
	 }
	});
   } else if(jQuery.type(n)=="string" || jQuery.type(n)=="number") {
    theme=this.retThNa(n);
	if(theme.active==false) {
	 this.construct(theme);
	}
   }
  },
  detach:function(or) {
   if(jQuery.type(or)=="array") {
    reti=this;
	jQuery.each(or, function() {
     fe=reti.retThNa(this);
	 if(fe.active!=false) {
	  reti.ids.splice(reti.ids.indexOf(parseFloat(fe.active.data('identification'))), 1);
	  fe.active.remove();
	  fe.active=false;
	 }
	});
   } else if(jQuery.type(or)=="string" || jQuery.type(or)=="number") {
    fe=this.retThNa(or);
	if(fe.active!=false) {
	 this.ids.splice(this.ids.indexOf(parseFloat(fe.active.data('identification'))), 1);
     fe.active.remove();
	 fe.active=false;
	}
   }
  },
  replace:function(or, nu) {
   this.detach(or);
   this.append(nu);
  }
 };
 ret.addTheme(options);
 return ret;
}
