
/**
 * @param {any[]} array
 */
export function linearRegression(array) {
    const dates = array.map((item) => item.date);
    const counts = array.map((item) => item.count);
    const dateshourly = transformDatesToHours(dates);

    const regression = linearRegressionCalculating(dateshourly, counts);

    // @ts-ignore
    const projectedCounts = projectFutureCounts(regression, dateshourly[dateshourly.length - 1]);

    return projectedCounts;
}

/**
 * @param {string | any[]} x
 * @param {any[]} y
 */
function linearRegressionCalculating(x, y) {
    const n = x.length;
    let sumX = 0,
        sumY = 0,
        sumXY = 0,
        sumXX = 0;

    for (let i = 0; i < n; i++) {
        sumX += x[i];
        sumY += y[i];
        sumXY += x[i] * y[i];
        sumXX += x[i] * x[i];
    }

    const slope = (n * sumXY - sumX * sumY) / (n * sumXX - sumX * sumX);
    const intercept = (sumY - slope * sumX) / n;

  return { slope, intercept,};
}


/**
 * @param {{ slope: any; intercept: any; }} model
 * @param {number} base
 */
function projectFutureCounts(model, base) {
    const { slope, intercept } = model;
    /**
     * @type {never[]}
     */
    const projectedCounts = [];
    for(let i = 1; i <= 7; i += 1) {
        // @ts-ignore
        projectedCounts.push(Math.round(slope * (base + i * 24) + intercept))
    }

    return projectedCounts;
}

/**
 * @param {string | any[]} data
 */
function transformDatesToHours(data) {
    const transformedData = [];
    const [day, month, year] = data[0].split(".");
    const referenceday = day;
    const referencemonth = month;
    transformedData.push(0);
  
    for (let i = 1; i < data.length; i++) {
        let [days, month, year] = data[i].split(".");
        if(month > referencemonth)
        {
            // @ts-ignore
            transformedData.push((parseInt((((month - referencemonth) * 30 - referenceday))) + parseInt(days)) * 24);
        }
        else {
            // @ts-ignore
            transformedData.push(parseInt((days - referenceday)) * 24);
        }
    }
    return transformedData;
}