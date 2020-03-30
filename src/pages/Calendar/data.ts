const MONTH = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const DAY = [
  '星期日',
  '星期一',
  '星期二',
  '星期三',
  '星期四',
  '星期五',
  '星期六'
]

/** @description leap year 为 true 代表 闰年 */
let isLeapYear = (d: any) => {
  const year = new Date(d).getFullYear();
  if ((year % 4 === 0 && year % 100 !== 0) || year / 400 === 0) {
    return true;
  } else {
    return false;
  }
};

/** @description 区分31/30天, 29/28天的月份 */
const getMonthDate = (month: any, date: any) => {
  const BIG_MONTH = 31;
  const SMALL_MONTH = 30;
  const LEAP_YEAR_2 = 29;
  const AVERAGE_YEAR_2 = 28;
  if (month > 2) {
    if ((month <= 7 && month % 2 !== 0) || (month >= 8 && month % 2 === 0)) {
      /** @description 在7月(包括7月)以前的月份，奇数月是 31 天, 在8月（包括8月）以后的的月份，偶数月是 31 天 */
      return BIG_MONTH;
    } else {
      /** @description 在7月(包括7月)以前的月份，偶数月是 30 天，在8月（包括8月）以后的的月份，奇数月是 30 天  */
      return SMALL_MONTH;
    }
  } else if (month === 2) {
    /** @description 2月的天数，受闰年（29天）/平年（28天）的影响 */
    return isLeapYear(date) ? LEAP_YEAR_2 : AVERAGE_YEAR_2;
  } else {
    /** @description 1月份总是31天 */
    return BIG_MONTH;
  }
}

/** @description 构造每个月的原始数据 */
function getPerMonthData(date: any, _date: any) {
  let today = `${new Date().getFullYear()}/${new Date().getMonth() + 1}/${new Date().getDate()}`
  const _day = new Date(_date).getDay()
  return {
    date, // 具体的日期
    day: DAY[_day], // 具体的星期几
    _day, // 星期几的原始数据
    _date, // 年月日原始数据
    today: _date === today
  }
}

/** @description 获得每个月的天数，以及具体的日期，星期 */
function getDatePickData(date = new Date()) {
  let monthDateList: any[] = []
  const year = new Date(date).getFullYear()
  MONTH.map((month/* 月份 */, _index: any) => {
    /** @description 获得月份天数 */
    const dates = getMonthDate(month, date)
    const dateDetail = new Array(dates).fill(null).map((_item: any, index) => {
      return getPerMonthData(index + 1, `${year}/${month}/${index + 1}`)
    })

    monthDateList.push({
      year, // 年
      month, // 月
      dates, // 每月天数
      dateDetail // 每月天的具体日期，和星期几
    })
  })

  return monthDateList
}

/** @description 构造日历的数据结构 */
function getDatePickDateInstance(currentTime: any) {
  const initList = getDatePickData(currentTime || new Date())
  const outData: any = {}
  initList.map((item, index) => {
    let count = 0;
    let innerDate: any = {}
    item.dateDetail.map((innerItem: any, _innerIndex: any) => {
      if (!innerDate[count]) {
        innerDate[count] = []
      }
      innerDate[count][innerItem._day] = innerItem
      if (innerDate[count].length >= 7) {
        count++
      }
    })

    const innerList = Object.keys(innerDate)
    const diff = 6 - innerList.length
    // 为了对齐需要填充剩下没有数据的行
    if (diff) {
      for (let i = innerList.length + 1; i <= 6; i++) {
        innerDate[i] = new Array(7).fill({})
      }
    }
    outData[index] = innerDate
  })

  return outData
}

export {
  isLeapYear,
  getDatePickData,
  getDatePickDateInstance,
  DAY,
  MONTH
}
