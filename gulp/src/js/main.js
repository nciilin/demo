 requirejs.config({
          baseUrl: "src/js",
          paths: {
              'jquery': 'lib/bower_components/jquery/jquery.min'
           }
      });
       // 加载入口模块
      requirejs(['app/index']);
  