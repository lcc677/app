(() => {
  const webpack_modules = {
    './src/index.js': ((a, b, c) => { eval(); }),
    './src/name.js': ((a, b, c) => { eval(); }),
  };
  const cache = {};

  function webpack_require(moduleID) {}
  (()=>{
    webpack_require.d = (a,b) = >{
      
    }
  })()
  (()=>{
    webpack_require.o = (a,b) = >{
      
    }
  })()
  (()=>{
    webpack_require.r = (a,b) = >{
      
    }
  })()
  var webpack_exports = __webpack_require__("./src/index.js");

})();


/**
 * 最外层是一个立即执行函数
 * 定义一个包含所有模块的对象,key代表路径,value代表模块内容
 * 定义一个缓存模块对象
 * 定义一个加载模块方法
 * 在加载模块方法上添加一个d函数,
 * 在加载模块方法上添加一个o函数,用于判断对象是否存在某种属性
 * 在加载模块方法上添加一个r函数,定义模块????
 * 
 */
