window.app = angular.module('mean', 
                            ['ngCookies', 
                            'ngResource', 
                            'ui.bootstrap', 
                            'ui.route', 
                            'mean.system', 
                            'mean.articles', 
                            'mean.projects', 
                            'mean.contacts', 
                            'mean.components', 
                            'mean.filters']);

angular.module('mean.system', []);
angular.module('mean.articles', []);
angular.module('mean.projects', []);
angular.module('mean.contacts', []);
angular.module('mean.components', []);
angular.module('mean.filters', []); 
