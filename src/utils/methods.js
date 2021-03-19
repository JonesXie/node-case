/**
 * 非空验证  undefined,null,'',{},[]
 * @param {*} 验证的值
 */
const isTrue = (val) => {
  let temp = true;
  if (typeof val === "object" && val !== null) {
    temp = !["{}", "[]"].includes(JSON.stringify(val));
  } else {
    temp = !!val;
  }
  return temp;
};

/**
 * 时间转化 建议使用moment.js/day.js
 * @param {Date} 时间
 */
const getTime = (val) => {
  let now = new Date();
  val && (now = new Date(val));
  let year = now.getFullYear(),
    month = now.getMonth() + 1,
    date = now.getDate(),
    hour = now.getHours(),
    minute = now.getMinutes(),
    second = now.getSeconds();
  const add0 = (m) => {
    return m < 10 ? "0" + m : m;
  };
  return year + "-" + add0(month) + "-" + add0(date) + " " + add0(hour) + ":" + add0(minute) + ":" + add0(second);
};

/**
 * 隐藏电话
 * @param {Number} 手机号
 */
const hideTel = (val) => {
  let arr = val.split("");
  if (arr.length === 11) {
    return `${arr[0]}${arr[1]}${arr[2]}****${arr[7]}${arr[8]}${arr[9]}${arr[10]}`;
  }
  return false;
};

/**
 * 深拷贝
 * @param {*} 拷贝内容
 */
const deepClone = (obj) => {
  if (typeof obj !== "object" || obj == null || obj instanceof RegExp || obj instanceof Date) {
    // obj不是数据/对象，或者为 null/undefined,正则,日期,直接返回
    return obj;
  }
  let result = {};
  obj instanceof Array && (result = []);
  for (let key in obj) {
    // if (obj.hasOwnProperty(key)) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      // **递归调用**
      result[key] = deepClone(obj[key]);
    }
  }
  return result;
};

/**
 * 验证手机号
 * @param {*} rule
 * @param {Number} 手机号
 * @param {*} 回调函数
 */
const validTel = (rule, value, callback) => {
  const reg = /^1[3-9]\d{9}$/;
  reg.test(value) ? callback() : callback(new Error("请输入正确手机号码"));
};

/**
 * 验证身份证
 * @param {*} rule
 * @param {*} 身份证号
 * @param {*} 回调函数
 */
const checkID = (rule, IDNumber, callback) => {
  let reg15 = /^\d{8}(0\d|10|11|12)([0-2]\d|30|31)\d{3}$/g; //15位
  let reg18 = /(^\d{8}(0\d|10|11|12)([0-2]\d|30|31)\d{3}$)|(^\d{6}(18|19|20)\d{2}(0\d|10|11|12)([0-2]\d|30|31)\d{3}(\d|X|x)$)/g; //18位
  //判断15位
  if (reg15.test(IDNumber)) {
    callback();
  }
  //判断第18位校验值
  if (reg18.test(IDNumber)) {
    let IDArr = IDNumber.split("");
    let factor = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];
    let parity = [1, 0, "X", 9, 8, 7, 6, 5, 4, 3, 2];
    let code = IDNumber.substring(17);
    let sum = 0;
    for (let i = 0; i < 17; i++) {
      sum += IDArr[i] * factor[i];
    }
    if (parity[sum % 11] == code.toUpperCase()) {
      callback();
    } else {
      callback(new Error("非法身份证号，请仔细检查！"));
    }
  } else {
    callback(new Error("非法身份证号，请仔细检查！"));
  }
};

/**
 *  将对象拼接成url中的query
 * @param {*} 对象
 */
const joinAllQuery = (query) => {
  let queryArr = [];
  for (let key in query) {
    queryArr.push(`${key}=${query[key]}`);
  }
  return queryArr.join("&");
};

/**
 * 返回当前时间戳
 */
const getExpireTime = () => {
  return new Date().getTime();
};

/**
 * 去除字符串的空格
 * @param {*} 字符串
 */
const trim = (str) => {
  return str.replace(/\s|\xA0/g, "");
};

/**
 * 比较两个数组内的值是否相同 1.一维数组，2.不在乎顺序
 * @param {*} 数组一
 * @param {*} 数组二
 */
const compareArr = (arra, arrb) => {
  let temp = true;
  arra.length === arrb.length &&
    arra.forEach((v) => {
      !arrb.includes(v) && (temp = false);
    });
  return temp;
};

// 防抖 --搜索框/滚动条  短时间内大量触发同一事件，只会执行一次函数
// 实现原理:设置一个定时器，约定在xx毫秒后再触发事件处理，每次触发事件都会重新设置计时器，直到xx毫秒内无第二次操作
/**
 * 防抖-搜索框/滚动条
 * @param {*} 延迟执行函数
 * @param {*} 等待时间
 * @param  {...any} 携带参数
 */
const debounce = (func, wait, ...rest) => {
  let timeout = null;
  return (e) => {
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => {
      func(e, ...rest);
    }, wait);
  };
};
let debounceTimeout = null;
/**
 * 防抖-搜索框/滚动条-传递参数
 * @param {*} 延迟执行函数
 * @param {*} 等待时间
 * @param  {...any} 携带参数
 */
const debounceParams = (func, wait, ...rest) => {
  if (debounceTimeout) clearTimeout(debounceTimeout);
  debounceTimeout = setTimeout(() => {
    func(...rest);
  }, wait);
};

// 节流 每隔一段时间就执行一次
//设置一个定时器，约定xx毫秒后执行事件，如果时间到了，那么执行函数并重置定时器
/**
 * 节流 每隔一段时间就执行一次
 * @param {*} 延迟执行函数
 * @param {*} 等待时间
 */
const throttle = (func, wait, ...rest) => {
  let timeout = null;
  return (e) => {
    if (!timeout) {
      timeout = setTimeout(() => {
        timeout = null;
        func(e, ...rest);
      }, wait);
    }
  };
};
let throttleTimeout = null;
/**
 * 节流 每隔一段时间就执行一次
 * @param {*} 延迟执行函数
 * @param {*} 等待时间
 * @param {*} 携带参数
 */
const throttleParams = (func, wait, ...rest) => {
  if (!throttleTimeout) {
    throttleTimeout = setTimeout(() => {
      func(...rest);
    }, wait);
  }
};

/**
 *  延迟执行函数
 * @param {fn}  需执行的函数
 * @param {wait}  延迟时间
 * @param  {...any} args
 */
const delay = (fn, wait, ...args) => setTimeout(fn, wait, ...args);

/**
 *  数组对象排序
 * @param {Array} 数组
 * @param {prop} 数组对象中需要比较的属性
 */
const sortArrObj = (arr, prop) => {
  let newArr = deepClone(arr);
  let sortedArr = newArr.sort(ArrCompare(prop));
  return Promise.resolve(sortedArr);
};
const ArrCompare = function (prop) {
  return function (obj1, obj2) {
    let val1 = Number(obj1[prop]);
    let val2 = Number(obj2[prop]);
    isNaN(val1) && (val1 = Number.MAX_SAFE_INTEGER);
    isNaN(val2) && (val2 = Number.MAX_SAFE_INTEGER);
    if (val1 < val2) {
      return -1; // 返回小于0的值，val1 排序在前
    } else if (val1 > val2) {
      return 1; // 返回大于0的值，val1 排序在后
    } else {
      return 0; // 返回0，val1 等于 val2
    }
  };
};

module.exports = {
  isTrue,
  getTime,
  hideTel,
  deepClone,
  validTel,
  checkID,
  joinAllQuery,
  getExpireTime,
  trim,
  compareArr,
  debounce,
  debounceParams,
  throttle,
  throttleParams,
  delay,
  sortArrObj,
};
