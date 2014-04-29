app.run(['$templateCache', function($templateCache) {  'use strict';

  $templateCache.put('./index/AddModalContent.html',
    "<style type=\"text/css\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "</style>\r" +
    "\n" +
    "\r" +
    "\n" +
    "<div class=\"AddModal\">\r" +
    "\n" +
    "\t<div class=\"modal-header\">\r" +
    "\n" +
    "\t\t<h3 translate>Add a stream source</h3>\r" +
    "\n" +
    "\t</div>\r" +
    "\n" +
    "\t<div class=\"modal-body\">\r" +
    "\n" +
    "\t\t<table>\r" +
    "\n" +
    "\t\t\t<tbody>\r" +
    "\n" +
    "\t\t\t\t<tr>\r" +
    "\n" +
    "\t\t\t\t\t<th><span translate>Name</span>:</th>\r" +
    "\n" +
    "\t\t\t\t\t<td><input ng-model=\"result.name\"/></td>\r" +
    "\n" +
    "\t\t\t\t</tr>\r" +
    "\n" +
    "\t\t\t\t<tr>\r" +
    "\n" +
    "\t\t\t\t\t<th><span translate>URL</span>:</th>\r" +
    "\n" +
    "\t\t\t\t\t<td><input ng-model=\"result.url\"/></td>\r" +
    "\n" +
    "\t\t\t\t</tr>\r" +
    "\n" +
    "\t\t\t\t<tr>\r" +
    "\n" +
    "\t\t\t\t\t<th><span translate>Embed URL</span>:</th>\r" +
    "\n" +
    "\t\t\t\t\t<td><input ng-model=\"result.embed\"/></td>\r" +
    "\n" +
    "\t\t\t\t</tr>\r" +
    "\n" +
    "\t\t\t</tbody>\r" +
    "\n" +
    "\t\t</table>\r" +
    "\n" +
    "\t</div>\r" +
    "\n" +
    "\t<div class=\"modal-footer\">\r" +
    "\n" +
    "\t\t<button class=\"btn btn-primary\" ng-click=\"ok()\" translate>OK</button>\r" +
    "\n" +
    "\t\t<button class=\"btn btn-warning\" ng-click=\"cancel()\" translate>Cancel</button>\r" +
    "\n" +
    "\t</div>\r" +
    "\n" +
    "</div>\r" +
    "\n"
  );
}]);