!function(){var a=Handlebars.template,n=Handlebars.templates=Handlebars.templates||{};n["product-details"]=a({1:function(a,n,l,r,e){var i,s,o=l.helperMissing,t="function",d=a.escapeExpression;return'					<div class="item '+(null!=(i=(l.ifCond||n&&n.ifCond||o).call(n,e&&e.index,"==",0,{name:"ifCond",hash:{},fn:a.program(2,e,0),inverse:a.noop,data:e}))?i:"")+' thumb-image">\r\n						<img src="'+d((s=null!=(s=l.large||(null!=n?n.large:n))?s:o,typeof s===t?s.call(n,{name:"large",hash:{},data:e}):s))+'" data-imagezoom="'+d((s=null!=(s=l.large||(null!=n?n.large:n))?s:o,typeof s===t?s.call(n,{name:"large",hash:{},data:e}):s))+'" data-zoomviewsize="[360,360]" data-magnification="3" alt="">\r\n					</div>\r\n'},2:function(a,n,l,r,e){return"active"},4:function(a,n,l,r,e){return'					<a href="javascript:void(0)" onclick="ThumbnailScroll(\'left\')" class="thumbnail-arrow"><i class="fa fa-angle-left text-primary"></i></a>\r\n'},6:function(a,n,l,r,e){var i,s,o=l.helperMissing,t="function",d=a.escapeExpression;return'							<li data-target="#product-gallery" data-slide-to="'+d((s=null!=(s=l.index||e&&e.index)?s:o,typeof s===t?s.call(n,{name:"index",hash:{},data:e}):s))+'" class="'+(null!=(i=(l.ifCond||n&&n.ifCond||o).call(n,e&&e.index,"==",0,{name:"ifCond",hash:{},fn:a.program(2,e,0),inverse:a.noop,data:e}))?i:"")+' ">\r\n								<img src="'+d((s=null!=(s=l.small||(null!=n?n.small:n))?s:o,typeof s===t?s.call(n,{name:"small",hash:{},data:e}):s))+'" alt="">\r\n							</li>\r\n'},8:function(a,n,l,r,e){return'					<a href="javascript:void(0)" onclick="ThumbnailScroll(\'right\')" class="thumbnail-arrow"><i class="fa fa-angle-right text-primary"></i></a>\r\n'},10:function(a,n,l,r,e){var i,s,o=l.helperMissing,t="function",d=a.escapeExpression;return'					<button tag-id="'+d((s=null!=(s=l.id||(null!=n?n.id:n))?s:o,typeof s===t?s.call(n,{name:"id",hash:{},data:e}):s))+'" type="button" class="btn '+d((l.colorTag||n&&n.colorTag||o).call(n,null!=(i=null!=n?n.category:n)?i.id:i,{name:"colorTag",hash:{},data:e}))+' tag">#'+d(a.lambda(null!=(i=null!=n?n.category:n)?i.name:i,n))+": "+d((s=null!=(s=l.name||(null!=n?n.name:n))?s:o,typeof s===t?s.call(n,{name:"name",hash:{},data:e}):s))+"</button>\r\n"},compiler:[7,">= 4.0.0"],main:function(a,n,l,r,e){var i,s,o=l.helperMissing,t=a.escapeExpression,d=a.lambda;return'\ufeff<div id="product-popup" class="product-popup white-popup mfp-with-anim">\r\n	<div class="row">\r\n		<div class="col-sm-12 col-md-5 col-lg-4">\r\n			<div id="product-gallery" class="carousel slide mb10" data-ride="carousel" data-interval="false">\r\n				<!-- Wrapper for slides -->\r\n				<div class="carousel-inner" role="listbox">\r\n'+(null!=(i=l.each.call(n,null!=n?n.images:n,{name:"each",hash:{},fn:a.program(1,e,0),inverse:a.noop,data:e}))?i:"")+'				</div>\r\n				<!-- Indicators -->\r\n				<div class="thumbnail-container">\r\n'+(null!=(i=(l.isLengthOf||n&&n.isLengthOf||o).call(n,null!=n?n.images:n,">",3,{name:"isLengthOf",hash:{},fn:a.program(4,e,0),inverse:a.noop,data:e}))?i:"")+'					<div class="thumbnail-scroll">\r\n						<ol class="carousel-indicators">\r\n'+(null!=(i=l.each.call(n,null!=n?n.images:n,{name:"each",hash:{},fn:a.program(6,e,0),inverse:a.noop,data:e}))?i:"")+"						</ol>\r\n					</div>\r\n"+(null!=(i=(l.isLengthOf||n&&n.isLengthOf||o).call(n,null!=n?n.images:n,">",3,{name:"isLengthOf",hash:{},fn:a.program(8,e,0),inverse:a.noop,data:e}))?i:"")+'				</div>\r\n			</div>\r\n		</div>\r\n		<div class="col-sm-12 col-md-7 col-lg-8">\r\n			<div id="product-popup-right-column" style="position:relative">\r\n				<div class="product-name">\r\n					'+t((l.titleCase||n&&n.titleCase||o).call(n,null!=n?n.name:n,{name:"titleCase",hash:{},data:e}))+'\r\n				</div>\r\n				<div class="product-tags">\r\n'+(null!=(i=l.each.call(n,null!=n?n.tags:n,{name:"each",hash:{},fn:a.program(10,e,0),inverse:a.noop,data:e}))?i:"")+'				</div>\r\n				<div class="mt20 fs30 fw700" style="color:black;">\r\n					$'+t((s=null!=(s=l.price||(null!=n?n.price:n))?s:o,"function"==typeof s?s.call(n,{name:"price",hash:{},data:e}):s))+'\r\n				</div>\r\n				<div class="product-popup-buttons">\r\n					<div class="row">\r\n						<div class="col-xs-12 col-sm-6 mt20">\r\n							<div class="popup-buy">\r\n								<a id="btn-buy" href="'+t(d(null!=(i=null!=n?n.purchase_urls:n)?i[0]:i,n))+'" target="_blank" class="btn btn-primary btn-lg" onclick="trackOutboundLink(\''+t(d(null!=(i=null!=n?n.purchase_urls:n)?i[0]:i,n))+'\'); return true;"><i class="fa fa-shopping-cart"></i> Buy <span class="hidden-xs">It</span> From Amazon<span class="hidden-xs">.com</span></a>\r\n							</div>\r\n						</div>\r\n						<div class="col-xs-12 col-sm-6 mt20">\r\n							<div class="popup-social-share">\r\n								<div class="dropup dropdown inline-block">\r\n									<button class="btn bgm-indigo btn-lg dropdown-toggle social-share-button" type="button" id="social-share-dropdown1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">\r\n										<i class="fa fa-facebook"></i>\r\n									</button>\r\n									<ul class="dropdown-menu pull-right social-dropdown" aria-labelledby="social-share-dropdown1">\r\n										<li><a href="javascript:void(0);" onclick="ShareLink(\'facebook\', \'product\');"><i class="fa fa-shopping-bag text-primary"></i>&nbsp;&nbsp;Share this Bag</a></li>\r\n										<li><a href="javascript:void(0);" onclick="ShareLink(\'facebook\', \'search\');"><i class="fa fa-search text-primary"></i>&nbsp;&nbsp;Share this search</a></li>\r\n									</ul>\r\n								</div>\r\n								<div class="dropup dropdown  inline-block">\r\n									<button class="btn bgm-lightblue btn-lg dropdown-toggle social-share-button twitter" type="button" id="social-share-dropdown1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">\r\n										<i class="fa fa-twitter"></i>\r\n									</button>\r\n									<ul class="dropdown-menu pull-right social-dropdown " aria-labelledby="social-share-dropdown1">\r\n										<li><a href="javascript:void(0);" onclick="ShareLink(\'twitter\', \'product\');"><i class="fa fa-shopping-bag text-primary"></i>&nbsp;&nbsp;Share this Bag</a></li>\r\n										<li><a href="javascript:void(0);" onclick="ShareLink(\'twitter\', \'search\');"><i class="fa fa-search text-primary"></i>&nbsp;&nbsp;Share this search</a></li>\r\n									</ul>\r\n								</div>\r\n								<div class="dropup dropdown  inline-block">\r\n									<button class="btn btn-danger btn-lg dropdown-toggle social-share-button googleplus" type="button" id="social-share-dropdown1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">\r\n										<i class="fa fa-google-plus"></i>\r\n									</button>\r\n									<ul class="dropdown-menu pull-right social-dropdown" aria-labelledby="social-share-dropdown1">\r\n										<li><a href="javascript:void(0);" onclick="ShareLink(\'googleplus\', \'product\');"><i class="fa fa-shopping-bag text-primary"></i>&nbsp;&nbsp;Share this Bag</a></li>\r\n										<li><a href="javascript:void(0);" onclick="ShareLink(\'googleplus\', \'search\');"><i class="fa fa-search text-primary"></i>&nbsp;&nbsp;Share this search</a></li>\r\n									</ul>\r\n								</div>\r\n							</div>\r\n						</div>\r\n					</div>\r\n				</div>\r\n			</div>\r\n		</div>\r\n	</div>\r\n</div>'},useData:!0}),n.product=a({1:function(a,n,l,r,e,i,s){var o;return null!=(o=(l.isLengthOf||n&&n.isLengthOf||l.helperMissing).call(n,null!=n?n.images:n,">",0,{name:"isLengthOf",hash:{},fn:a.program(2,e,0,i,s),inverse:a.noop,data:e}))?o:""},2:function(a,n,l,r,e,i,s){var o,t,d=l.helperMissing,c="function",p=a.escapeExpression;return'		<div class="col-xs-12 col-sm-4">\r\n			<div class="card product-card">\r\n				<div class="card-header">\r\n					<div class="card-body">\r\n						<div id="product-'+p((t=null!=(t=l.id||(null!=n?n.id:n))?t:d,typeof t===c?t.call(n,{name:"id",hash:{},data:e}):t))+'" class="carousel slide" data-ride="carousel" data-interval="false">\r\n							<!-- Indicators -->\r\n							<ol class="carousel-indicators">\r\n'+(null!=(o=l.each.call(n,null!=n?n.images:n,{name:"each",hash:{},fn:a.program(3,e,0,i,s),inverse:a.noop,data:e}))?o:"")+'							</ol>\r\n\r\n							<!-- Wrapper for slides -->\r\n							<div class="carousel-inner" role="listbox">\r\n'+(null!=(o=l.each.call(n,null!=n?n.images:n,{name:"each",hash:{},fn:a.program(6,e,0,i,s),inverse:a.noop,data:e}))?o:"")+'							</div>\r\n\r\n							<!-- Controls -->\r\n							<a class="left carousel-control" href="#product-'+p((t=null!=(t=l.id||(null!=n?n.id:n))?t:d,typeof t===c?t.call(n,{name:"id",hash:{},data:e}):t))+'" role="button" data-slide="prev">\r\n								<span class="zmdi zmdi-chevron-left" aria-hidden="true"></span>\r\n								<span class="sr-only">Previous</span>\r\n							</a>\r\n							<a class="right carousel-control" href="#product-'+p((t=null!=(t=l.id||(null!=n?n.id:n))?t:d,typeof t===c?t.call(n,{name:"id",hash:{},data:e}):t))+'" role="button" data-slide="next">\r\n								<span class="zmdi zmdi-chevron-right" aria-hidden="true"></span>\r\n								<span class="sr-only">Next</span>\r\n							</a>\r\n						</div>\r\n					</div>\r\n				</div>\r\n				<div class="card-body product-details">\r\n					<div class="fs26 text-black fw700">$'+p((t=null!=(t=l.price||(null!=n?n.price:n))?t:d,typeof t===c?t.call(n,{name:"price",hash:{},data:e}):t))+'</div>\r\n					<div class="tags-container">\r\n'+(null!=(o=l["if"].call(n,null!=n?n.tags:n,{name:"if",hash:{},fn:a.program(8,e,0,i,s),inverse:a.noop,data:e}))?o:"")+"					</div>\r\n				</div>\r\n			</div>\r\n		</div>\r\n"},3:function(a,n,l,r,e){var i,s,o=l.helperMissing,t="function",d=a.escapeExpression;return'									<li data-target="#product-'+d((s=null!=(s=l.id||(null!=n?n.id:n))?s:o,typeof s===t?s.call(n,{name:"id",hash:{},data:e}):s))+'" data-slide-to="'+d((s=null!=(s=l.index||e&&e.index)?s:o,typeof s===t?s.call(n,{name:"index",hash:{},data:e}):s))+'" class="'+(null!=(i=(l.ifCond||n&&n.ifCond||o).call(n,e&&e.index,"==",0,{name:"ifCond",hash:{},fn:a.program(4,e,0),inverse:a.noop,data:e}))?i:"")+'"></li>\r\n'},4:function(a,n,l,r,e){return"active"},6:function(a,n,l,r,e,i,s){var o,t,d=a.escapeExpression,c=l.helperMissing;return'									<a href="javascript:void(0)" onclick="TriggerProductPopup(\''+d(a.lambda(null!=s[1]?s[1].id:s[1],n))+'\')" class="item '+(null!=(o=(l.ifCond||n&&n.ifCond||c).call(n,e&&e.index,"==",0,{name:"ifCond",hash:{},fn:a.program(4,e,0,i,s),inverse:a.noop,data:e}))?o:"")+'">\r\n										<img src="'+d((t=null!=(t=l.medium||(null!=n?n.medium:n))?t:c,"function"==typeof t?t.call(n,{name:"medium",hash:{},data:e}):t))+'" alt="">\r\n									</a>\r\n'},8:function(a,n,l,r,e){var i;return(null!=(i=l.each.call(n,null!=n?n.tags:n,{name:"each",hash:{},fn:a.program(9,e,0),inverse:a.noop,data:e}))?i:"")+(null!=(i=(l.isLengthOf||n&&n.isLengthOf||l.helperMissing).call(n,null!=n?n.tags:n,">",5,{name:"isLengthOf",hash:{},fn:a.program(12,e,0),inverse:a.noop,data:e}))?i:"")},9:function(a,n,l,r,e){var i;return null!=(i=(l.ifCond||n&&n.ifCond||l.helperMissing).call(n,e&&e.index,"<",5,{name:"ifCond",hash:{},fn:a.program(10,e,0),inverse:a.noop,data:e}))?i:""},10:function(a,n,l,r,e){var i,s,o=l.helperMissing,t="function",d=a.escapeExpression;return'									<button index="'+d((s=null!=(s=l.index||e&&e.index)?s:o,typeof s===t?s.call(n,{name:"index",hash:{},data:e}):s))+'" tag-id="'+d((s=null!=(s=l.id||(null!=n?n.id:n))?s:o,typeof s===t?s.call(n,{name:"id",hash:{},data:e}):s))+'" type="button" class="btn '+d((l.colorTag||n&&n.colorTag||o).call(n,null!=(i=null!=n?n.category:n)?i.id:i,{name:"colorTag",hash:{},data:e}))+' tag">#'+d(a.lambda(null!=(i=null!=n?n.category:n)?i.name:i,n))+": "+d((s=null!=(s=l.name||(null!=n?n.name:n))?s:o,typeof s===t?s.call(n,{name:"name",hash:{},data:e}):s))+"</button>\r\n"},12:function(a,n,l,r,e){var i;return'								<div class="dropdown dropup inline-block">\r\n									<a href="#" class="dropdown-toggle btn btn-sm tag-more btn-default mt10" data-toggle="dropdown" aria-expanded="true">+'+a.escapeExpression((l.countMoreLength||n&&n.countMoreLength||l.helperMissing).call(n,null!=n?n.tags:n,{name:"countMoreLength",hash:{},data:e}))+'</a>\r\n									<ul class="dropdown-menu tags-popup">\r\n'+(null!=(i=l.each.call(n,null!=n?n.tags:n,{name:"each",hash:{},fn:a.program(13,e,0),inverse:a.noop,data:e}))?i:"")+"									</ul>\r\n								</div>\r\n"},13:function(a,n,l,r,e){var i;return null!=(i=(l.ifCond||n&&n.ifCond||l.helperMissing).call(n,e&&e.index,">=",5,{name:"ifCond",hash:{},fn:a.program(14,e,0),inverse:a.noop,data:e}))?i:""},14:function(a,n,l,r,e){var i,s,o=l.helperMissing,t="function",d=a.escapeExpression;return'												<li>\r\n													<button tag-id="'+d((s=null!=(s=l.id||(null!=n?n.id:n))?s:o,typeof s===t?s.call(n,{name:"id",hash:{},data:e}):s))+'" type="button" class="btn '+d((l.colorTag||n&&n.colorTag||o).call(n,null!=(i=null!=n?n.category:n)?i.id:i,{name:"colorTag",hash:{},data:e}))+' tag">#'+d(a.lambda(null!=(i=null!=n?n.category:n)?i.name:i,n))+": "+d((s=null!=(s=l.name||(null!=n?n.name:n))?s:o,typeof s===t?s.call(n,{name:"name",hash:{},data:e}):s))+"</button>\r\n												</li>\r\n"},compiler:[7,">= 4.0.0"],main:function(a,n,l,r,e,i,s){var o;return"\ufeff"+(null!=(o=l.each.call(n,null!=n?n.products:n,{name:"each",hash:{},fn:a.program(1,e,0,i,s),inverse:a.noop,data:e}))?o:"")},useData:!0,useDepths:!0}),n["show-more"]=a({compiler:[7,">= 4.0.0"],main:function(a,n,l,r,e){return'\ufeff<div id="show-more-panel" class="col-xs-12">\r\n	<button class="btn btn-lg btn-primary" type="button" onclick="ShowMore();">Show More Bags</button>\r\n</div>'},useData:!0})}();
