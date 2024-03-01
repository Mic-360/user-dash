const data = [
    {
        date: 'Nov 24, 2023',
        GOOG: 156.2,
        AMZN: 68.5,
        SPOT: 71.8,
        MSFT: 205.3,
        TSLA: 1050.6,
    },
    {
        date: 'Nov 25, 2023',
        GOOG: 152.5,
        AMZN: 69.3,
        SPOT: 67.2,
        MSFT: 223.1,
        TSLA: 945.8,
    },
    {
        date: 'Nov 26, 2023',
        GOOG: 148.7,
        AMZN: 69.8,
        SPOT: 61.5,
        MSFT: 240.9,
        TSLA: 839.4,
    },
    {
        date: 'Nov 27, 2023',
        GOOG: 155.3,
        AMZN: 73.5,
        SPOT: 57.9,
        MSFT: 254.7,
        TSLA: 830.2,
    },
    {
        date: 'Nov 28, 2023',
        GOOG: 160.1,
        AMZN: 75.2,
        SPOT: 59.6,
        MSFT: 308.5,
        TSLA: 845.7,
    },
    {
        date: 'Nov 29, 2023',
        GOOG: 175.6,
        AMZN: 89.2,
        SPOT: 57.3,
        MSFT: 341.4,
        TSLA: 950.2,
    },
    {
        date: 'Nov 30, 2023',
        GOOG: 180.2,
        AMZN: 92.7,
        SPOT: 59.8,
        MSFT: 378.1,
        TSLA: 995.9,
    },
    {
        date: 'Dec 01, 2023',
        GOOG: 185.5,
        AMZN: 95.3,
        SPOT: 62.4,
        MSFT: 320.3,
        TSLA: 1060.4,
    },
    {
        date: 'Dec 02, 2023',
        GOOG: 182.3,
        AMZN: 93.8,
        SPOT: 60.7,
        MSFT: 356.5,
        TSLA: 965.8,
    },
    {
        date: 'Dec 03, 2023',
        GOOG: 180.7,
        AMZN: 91.6,
        SPOT: 58.9,
        MSFT: 340.7,
        TSLA: 970.3,
    },
    {
        date: 'Dec 04, 2023',
        GOOG: 178.5,
        AMZN: 89.7,
        SPOT: 56.2,
        MSFT: 365.9,
        TSLA: 975.9,
    },
    {
        date: 'Dec 05, 2023',
        GOOG: 176.2,
        AMZN: 87.5,
        SPOT: 54.8,
        MSFT: 375.1,
        TSLA: 964.6,
    },
    {
        date: 'Dec 06, 2023',
        GOOG: 174.8,
        AMZN: 85.3,
        SPOT: 53.4,
        MSFT: 340.3,
        TSLA: 960.4,
    },
    {
        date: 'Dec 07, 2023',
        GOOG: 178.0,
        AMZN: 88.2,
        SPOT: 55.2,
        MSFT: 335.5,
        TSLA: 955.3,
    },
    {
        date: 'Dec 08, 2023',
        GOOG: 180.6,
        AMZN: 90.5,
        SPOT: 56.8,
        MSFT: 310.7,
        TSLA: 950.3,
    },
    {
        date: 'Dec 09, 2023',
        GOOG: 182.4,
        AMZN: 92.8,
        SPOT: 58.4,
        MSFT: 300.9,
        TSLA: 845.4,
    },
    {
        date: 'Dec 10, 2023',
        GOOG: 179.7,
        AMZN: 90.2,
        SPOT: 57.0,
        MSFT: 290.1,
        TSLA: 1011.6,
    },
    {
        date: 'Dec 11, 2023',
        GOOG: 154.2,
        AMZN: 88.7,
        SPOT: 55.6,
        MSFT: 291.3,
        TSLA: 1017.9,
    },
    {
        date: 'Dec 12, 2023',
        GOOG: 151.9,
        AMZN: 86.5,
        SPOT: 53.9,
        MSFT: 293.5,
        TSLA: 940.3,
    },
    {
        date: 'Dec 13, 2023',
        GOOG: 149.3,
        AMZN: 83.7,
        SPOT: 52.1,
        MSFT: 301.7,
        TSLA: 900.8,
    },
    {
        date: 'Dec 14, 2023',
        GOOG: 148.8,
        AMZN: 81.4,
        SPOT: 50.5,
        MSFT: 321.9,
        TSLA: 780.4,
    },
    {
        date: 'Dec 15, 2023',
        GOOG: 145.5,
        AMZN: 79.8,
        SPOT: 48.9,
        MSFT: 328.1,
        TSLA: 765.1,
    },
    {
        date: 'Dec 16, 2023',
        GOOG: 140.2,
        AMZN: 84.5,
        SPOT: 50.2,
        MSFT: 331.3,
        TSLA: 745.9,
    },
    {
        date: 'Dec 17, 2023',
        GOOG: 143.8,
        AMZN: 82.1,
        SPOT: 49.6,
        MSFT: 373.5,
        TSLA: 741.8,
    },
    {
        date: 'Dec 18, 2023',
        GOOG: 157.5,
        AMZN: 86.9,
        SPOT: 51.3,
        MSFT: 381.7,
        TSLA: 739.8,
    },
];

const summary = [
    {
        ticker: 'AMZN',
        description: 'Amazon',
        value: '$86.9',
        change: '+0.92%',
        changeType: 'positive',
    },
    {
        ticker: 'TSLA',
        description: 'Tesla, Inc.',
        value: '$739.8',
        change: '-2.12%',
        changeType: 'negative',
    },
    {
        ticker: 'GOOG',
        description: 'Alphabet, Inc',
        value: '$157.5',
        change: '+0.38%',
        changeType: 'positive',
    },
    {
        ticker: 'SPOT',
        description: 'Spotify',
        value: '$51.3',
        change: '−0.25%',
        changeType: 'negative',
    },
    {
        ticker: 'MSFT',
        description: 'Microsoft',
        value: '$381.7',
        change: '+2.45%',
        changeType: 'positive',
    },
];

import type { Color } from '@tremor/react';
interface Tracker {
    color: Color;
    tooltip: string;
}

const trackerColors: Tracker[] = [
    { color: 'emerald', tooltip: 'Operational' },
    { color: 'emerald', tooltip: 'Operational' },
    { color: 'emerald', tooltip: 'Operational' },
    { color: 'emerald', tooltip: 'Operational' },
    { color: 'emerald', tooltip: 'Operational' },
    { color: 'emerald', tooltip: 'Operational' },
    { color: 'emerald', tooltip: 'Operational' },
    { color: 'emerald', tooltip: 'Operational' },
    { color: 'emerald', tooltip: 'Operational' },
    { color: 'emerald', tooltip: 'Operational' },
    { color: 'emerald', tooltip: 'Operational' },
    { color: 'emerald', tooltip: 'Operational' },
    { color: 'emerald', tooltip: 'Operational' },
    { color: 'emerald', tooltip: 'Operational' },
    { color: 'rose', tooltip: 'Downtime' },
    { color: 'emerald', tooltip: 'Operational' },
    { color: 'emerald', tooltip: 'Operational' },
    { color: 'emerald', tooltip: 'Operational' },
    { color: 'emerald', tooltip: 'Operational' },
    { color: 'gray', tooltip: 'Maintenance' },
    { color: 'emerald', tooltip: 'Operational' },
    { color: 'emerald', tooltip: 'Operational' },
    { color: 'emerald', tooltip: 'Operational' },
    { color: 'yellow', tooltip: 'Degraded' },
    { color: 'emerald', tooltip: 'Operational' },
];

const KPIdata = [
    {
        name: 'Daily active users',
        stat: '3,450',
        change: '+12.1%',
        changeType: 'positive',
    },
    {
        name: 'Weekly sessions',
        stat: '1,342',
        change: '-9.8%',
        changeType: 'negative',
    },
    {
        name: 'Duration',
        stat: '5.2min',
        change: '+7.7%',
        changeType: 'positive',
    },
];


const trendData = [
    {
        date: 'Aug 01',
        'ETF Shares Vital': 2100.2,
        'Vitainvest Core': 4434.1,
        'iShares Tech Growth': 7943.2,
    },
    {
        date: 'Aug 02',
        'ETF Shares Vital': 2943.0,
        'Vitainvest Core': 4954.1,
        'iShares Tech Growth': 8954.1,
    },
    {
        date: 'Aug 03',
        'ETF Shares Vital': 4889.5,
        'Vitainvest Core': 6100.2,
        'iShares Tech Growth': 9123.7,
    },
    {
        date: 'Aug 04',
        'ETF Shares Vital': 3909.8,
        'Vitainvest Core': 4909.7,
        'iShares Tech Growth': 7478.4,
    },
    {
        date: 'Aug 05',
        'ETF Shares Vital': 5778.7,
        'Vitainvest Core': 7103.1,
        'iShares Tech Growth': 9504.3,
    },
    {
        date: 'Aug 06',
        'ETF Shares Vital': 5900.9,
        'Vitainvest Core': 7534.3,
        'iShares Tech Growth': 9943.4,
    },
    {
        date: 'Aug 07',
        'ETF Shares Vital': 4129.4,
        'Vitainvest Core': 7412.1,
        'iShares Tech Growth': 10112.2,
    },
    {
        date: 'Aug 08',
        'ETF Shares Vital': 6021.2,
        'Vitainvest Core': 7834.4,
        'iShares Tech Growth': 10290.2,
    },
    {
        date: 'Aug 09',
        'ETF Shares Vital': 6279.8,
        'Vitainvest Core': 8159.1,
        'iShares Tech Growth': 10349.6,
    },
    {
        date: 'Aug 10',
        'ETF Shares Vital': 6224.5,
        'Vitainvest Core': 8260.6,
        'iShares Tech Growth': 10415.4,
    },
    {
        date: 'Aug 11',
        'ETF Shares Vital': 6380.6,
        'Vitainvest Core': 8965.3,
        'iShares Tech Growth': 10636.3,
    },
    {
        date: 'Aug 12',
        'ETF Shares Vital': 6414.4,
        'Vitainvest Core': 7989.3,
        'iShares Tech Growth': 10900.5,
    },
    {
        date: 'Aug 13',
        'ETF Shares Vital': 6540.1,
        'Vitainvest Core': 7839.6,
        'iShares Tech Growth': 11040.4,
    },
    {
        date: 'Aug 14',
        'ETF Shares Vital': 6634.4,
        'Vitainvest Core': 7343.8,
        'iShares Tech Growth': 11390.5,
    },
    {
        date: 'Aug 15',
        'ETF Shares Vital': 7124.6,
        'Vitainvest Core': 6903.7,
        'iShares Tech Growth': 11423.1,
    },
    {
        date: 'Aug 16',
        'ETF Shares Vital': 7934.5,
        'Vitainvest Core': 6273.6,
        'iShares Tech Growth': 12134.4,
    },
    {
        date: 'Aug 17',
        'ETF Shares Vital': 10287.8,
        'Vitainvest Core': 5900.3,
        'iShares Tech Growth': 12034.4,
    },
    {
        date: 'Aug 18',
        'ETF Shares Vital': 10323.2,
        'Vitainvest Core': 5732.1,
        'iShares Tech Growth': 11011.7,
    },
    {
        date: 'Aug 19',
        'ETF Shares Vital': 10511.4,
        'Vitainvest Core': 5523.1,
        'iShares Tech Growth': 11834.8,
    },
    {
        date: 'Aug 20',
        'ETF Shares Vital': 11043.9,
        'Vitainvest Core': 5422.3,
        'iShares Tech Growth': 12387.1,
    },
    {
        date: 'Aug 21',
        'ETF Shares Vital': 6700.7,
        'Vitainvest Core': 5334.2,
        'iShares Tech Growth': 11032.2,
    },
    {
        date: 'Aug 22',
        'ETF Shares Vital': 6900.8,
        'Vitainvest Core': 4943.4,
        'iShares Tech Growth': 10134.2,
    },
    {
        date: 'Aug 23',
        'ETF Shares Vital': 7934.5,
        'Vitainvest Core': 4812.1,
        'iShares Tech Growth': 9921.2,
    },
    {
        date: 'Aug 24',
        'ETF Shares Vital': 9021.0,
        'Vitainvest Core': 2729.1,
        'iShares Tech Growth': 10549.8,
    },
    {
        date: 'Aug 25',
        'ETF Shares Vital': 9198.2,
        'Vitainvest Core': 2178.0,
        'iShares Tech Growth': 10968.4,
    },
    {
        date: 'Aug 26',
        'ETF Shares Vital': 9557.1,
        'Vitainvest Core': 2158.3,
        'iShares Tech Growth': 11059.1,
    },
    {
        date: 'Aug 27',
        'ETF Shares Vital': 9959.8,
        'Vitainvest Core': 2100.8,
        'iShares Tech Growth': 11903.6,
    },
    {
        date: 'Aug 28',
        'ETF Shares Vital': 10034.6,
        'Vitainvest Core': 2934.4,
        'iShares Tech Growth': 12143.3,
    },
    {
        date: 'Aug 29',
        'ETF Shares Vital': 10243.8,
        'Vitainvest Core': 3223.4,
        'iShares Tech Growth': 12930.1,
    },
    {
        date: 'Aug 30',
        'ETF Shares Vital': 10078.5,
        'Vitainvest Core': 3779.1,
        'iShares Tech Growth': 13420.5,
    },
    {
        date: 'Aug 31',
        'ETF Shares Vital': 11134.6,
        'Vitainvest Core': 4190.3,
        'iShares Tech Growth': 14443.2,
    },
    {
        date: 'Sep 01',
        'ETF Shares Vital': 12347.2,
        'Vitainvest Core': 4839.1,
        'iShares Tech Growth': 14532.1,
    },
    {
        date: 'Sep 02',
        'ETF Shares Vital': 12593.8,
        'Vitainvest Core': 5153.3,
        'iShares Tech Growth': 14283.5,
    },
    {
        date: 'Sep 03',
        'ETF Shares Vital': 12043.4,
        'Vitainvest Core': 5234.8,
        'iShares Tech Growth': 14078.9,
    },
    {
        date: 'Sep 04',
        'ETF Shares Vital': 12144.9,
        'Vitainvest Core': 5478.4,
        'iShares Tech Growth': 13859.7,
    },
    {
        date: 'Sep 05',
        'ETF Shares Vital': 12489.5,
        'Vitainvest Core': 5741.1,
        'iShares Tech Growth': 13539.2,
    },
    {
        date: 'Sep 06',
        'ETF Shares Vital': 12748.7,
        'Vitainvest Core': 6743.9,
        'iShares Tech Growth': 13643.2,
    },
    {
        date: 'Sep 07',
        'ETF Shares Vital': 12933.2,
        'Vitainvest Core': 7832.8,
        'iShares Tech Growth': 14629.2,
    },
    {
        date: 'Sep 08',
        'ETF Shares Vital': 13028.8,
        'Vitainvest Core': 8943.2,
        'iShares Tech Growth': 13611.2,
    },
    {
        date: 'Sep 09',
        'ETF Shares Vital': 13412.4,
        'Vitainvest Core': 9932.2,
        'iShares Tech Growth': 12515.2,
    },
    {
        date: 'Sep 10',
        'ETF Shares Vital': 13649.0,
        'Vitainvest Core': 10139.2,
        'iShares Tech Growth': 11143.8,
    },
    {
        date: 'Sep 11',
        'ETF Shares Vital': 13748.5,
        'Vitainvest Core': 10441.2,
        'iShares Tech Growth': 8929.2,
    },
    {
        date: 'Sep 12',
        'ETF Shares Vital': 13148.1,
        'Vitainvest Core': 10933.8,
        'iShares Tech Growth': 8943.2,
    },
    {
        date: 'Sep 13',
        'ETF Shares Vital': 12839.6,
        'Vitainvest Core': 11073.4,
        'iShares Tech Growth': 7938.3,
    },
    {
        date: 'Sep 14',
        'ETF Shares Vital': 12428.2,
        'Vitainvest Core': 11128.3,
        'iShares Tech Growth': 7533.4,
    },
    {
        date: 'Sep 15',
        'ETF Shares Vital': 12012.8,
        'Vitainvest Core': 11412.3,
        'iShares Tech Growth': 7100.4,
    },
    {
        date: 'Sep 16',
        'ETF Shares Vital': 11801.3,
        'Vitainvest Core': 10501.1,
        'iShares Tech Growth': 6532.1,
    },
    {
        date: 'Sep 17',
        'ETF Shares Vital': 10102.9,
        'Vitainvest Core': 8923.3,
        'iShares Tech Growth': 4332.8,
    },
    {
        date: 'Sep 18',
        'ETF Shares Vital': 12132.5,
        'Vitainvest Core': 10212.1,
        'iShares Tech Growth': 7847.4,
    },
    {
        date: 'Sep 19',
        'ETF Shares Vital': 12901.1,
        'Vitainvest Core': 10101.7,
        'iShares Tech Growth': 7223.3,
    },
    {
        date: 'Sep 20',
        'ETF Shares Vital': 13132.6,
        'Vitainvest Core': 12132.3,
        'iShares Tech Growth': 6900.2,
    },
    {
        date: 'Sep 21',
        'ETF Shares Vital': 14132.2,
        'Vitainvest Core': 13212.5,
        'iShares Tech Growth': 5932.2,
    },
    {
        date: 'Sep 22',
        'ETF Shares Vital': 14245.8,
        'Vitainvest Core': 12163.4,
        'iShares Tech Growth': 5577.1,
    },
    {
        date: 'Sep 23',
        'ETF Shares Vital': 14328.3,
        'Vitainvest Core': 10036.1,
        'iShares Tech Growth': 5439.2,
    },
    {
        date: 'Sep 24',
        'ETF Shares Vital': 14949.9,
        'Vitainvest Core': 8985.1,
        'iShares Tech Growth': 4463.1,
    },
    {
        date: 'Sep 25',
        'ETF Shares Vital': 15967.5,
        'Vitainvest Core': 9700.1,
        'iShares Tech Growth': 4123.2,
    },
    {
        date: 'Sep 26',
        'ETF Shares Vital': 17349.3,
        'Vitainvest Core': 10943.4,
        'iShares Tech Growth': 3935.1,
    },
];

const trendSummary = [
    {
        name: 'ETF Shares Vital',
        value: '$21,349.36',
        invested: '$19,698.65',
        cashflow: '$14,033.74',
        gain: '+$11,012.39',
        realized: '+$177.48',
        dividends: '+$490.97',
        bgColor: 'bg-blue-500',
        changeType: 'positive',
    },
    {
        name: 'Vitainvest Core',
        value: '$25,943.43',
        invested: '$23,698.65',
        cashflow: '$11,033.74',
        gain: '+$3,012.39',
        realized: '+$565.41',
        dividends: '+$290.97',
        bgColor: 'bg-violet-500',
        changeType: 'positive',
    },
    {
        name: 'iShares Tech Growth',
        value: '$9,443.46',
        invested: '$14,698.65',
        cashflow: '$2,033.74',
        gain: '-$5,012.39',
        realized: '-$634.42',
        dividends: '-$990.97',
        bgColor: 'bg-fuchsia-500',
        changeType: 'negative',
    },
];


const designData = [
    {
        name: 'Jeans',
        image: 'https://upload.wikimedia.org/wikipedia/commons/7/75/Levi%27s_logo.svg',
        bgColor: 'bg-fuchsia-100 dark:bg-fuchsia-500/20',
        brand: 'Levi\'s',
        href: '#',
        details: [
            {
                type: 'Type',
                value: 'Jeans',
            },
            {
                type: 'Active Time',
                value: '2h',
            },
        ],
    },
    {
        name: 'Cargo',
        image: 'https://upload.wikimedia.org/wikipedia/commons/9/95/Nike_Logo.png',
        bgColor: 'bg-blue-100 dark:bg-blue-500/20',
        brand: 'Nike',
        href: '#',
        details: [
            {
                type: 'Type',
                value: 'Cargo',
            },
            {
                type: 'Active Time',
                value: '1h',
            },
        ],
    },
    {
        name: 'Shirt',
        image: 'https://upload.wikimedia.org/wikipedia/commons/2/20/Adidas_Logo.svg',
        bgColor: 'bg-pink-100 dark:bg-pink-500/20',
        brand: 'Adidas',
        href: '#',
        details: [
            {
                type: 'Type',
                value: 'Shirt',
            },
            {
                type: 'Active Time',
                value: '2m',
            },
        ],
    },
    {
        name: 'T-shirt',
        image: 'https://upload.wikimedia.org/wikipedia/commons/8/88/Puma-Logo.png',
        bgColor: 'bg-emerald-100 dark:bg-emerald-500/20',
        brand: 'Puma',
        href: '#',
        details: [
            {
                type: 'Type',
                value: 'T-shirt',
            },
            {
                type: 'Active Time',
                value: '18m',
            },
        ],
    },
    {
        name: 'Trousers',
        image: 'https://upload.wikimedia.org/wikipedia/commons/2/2e/Gucci_Logo.svg',
        bgColor: 'bg-orange-100 dark:bg-orange-500/20',
        brand: 'Gucci',
        href: '#',
        details: [
            {
                type: 'Type',
                value: 'Trousers',
            },
            {
                type: 'Active Time',
                value: '3h',
            },
        ],
    },
    {
        name: 'Hoodies',
        image: 'https://upload.wikimedia.org/wikipedia/commons/e/e2/Calvin_klein_logo.svg',
        bgColor: 'bg-indigo-100 dark:bg-indigo-500/20',
        brand: 'Calvin Klein',
        href: '#',
        details: [
            {
                type: 'Type',
                value: 'Hoodies',
            },
            {
                type: 'Active Time',
                value: '4h',
            },
        ],
    },
    {
        name: 'Jeans',
        image: 'https://upload.wikimedia.org/wikipedia/commons/4/43/Tommy_Hilfiger_Logo.png',
        bgColor: 'bg-yellow-100 dark:bg-yellow-500/20',
        brand: 'Tommy Hilfiger',
        href: '#',
        details: [
            {
                type: 'Type',
                value: 'Jeans',
            },
            {
                type: 'Active Time',
                value: '12m',
            },
        ],
    },
    {
        name: 'Jeans',
        image: 'https://upload.wikimedia.org/wikipedia/commons/7/75/Levi%27s_logo.svg',
        bgColor: 'bg-fuchsia-100 dark:bg-fuchsia-500/20',
        brand: 'Levi\'s',
        href: '#',
        details: [
            {
                type: 'Type',
                value: 'Jeans',
            },
            {
                type: 'Active Time',
                value: '20s',
            },
        ],
    },
    {
        name: 'Cargo',
        image: 'https://upload.wikimedia.org/wikipedia/commons/9/95/Nike_Logo.png',
        bgColor: 'bg-blue-100 dark:bg-blue-500/20',
        brand: 'Nike',
        href: '#',
        details: [
            {
                type: 'Type',
                value: 'Cargo',
            },
            {
                type: 'Active Time',
                value: '1h',
            },
        ],
    },
    {
        name: 'Shirt',
        image: 'https://upload.wikimedia.org/wikipedia/commons/2/20/Adidas_Logo.svg',
        bgColor: 'bg-pink-100 dark:bg-pink-500/20',
        brand: 'Adidas',
        href: '#',
        details: [
            {
                type: 'Type',
                value: 'Shirt',
            },
            {
                type: 'Active Time',
                value: '2m',
            },
        ],
    },
    {
        name: 'T-shirt',
        image: 'https://upload.wikimedia.org/wikipedia/commons/8/88/Puma-Logo.png',
        bgColor: 'bg-emerald-100 dark:bg-emerald-500/20',
        brand: 'Puma',
        href: '#',
        details: [
            {
                type: 'Type',
                value: 'T-shirt',
            },
            {
                type: 'Active Time',
                value: '61s',
            },
        ],
    },
].map((item) => {
    const activeTime = item.details.find((detail) => {
        if (detail.type === 'Active Time') {
            return detail;
        }
    });

    if (activeTime) {
        const timeValue = activeTime.value;
        const timeUnit = timeValue.slice(-1);
        const timeNumber = parseInt(timeValue.slice(0, -1));
        let minutes = 0;
        let seconds = 0;
        let hours = 0;
        if (timeUnit === 'h') {
            hours = timeNumber;
        } else if (timeUnit === 'm') {
            minutes = timeNumber;
        } else if (timeUnit === 's') {
            seconds = timeNumber;
        }
        if (seconds > 60) {
            minutes += Math.floor(seconds / 60);
            seconds = seconds % 60;
        }
        if (minutes > 60) {
            hours += Math.floor(minutes / 60);
            minutes = minutes % 60;
        }
        activeTime.value = `${hours}h ${minutes}min ${seconds}s`;
    }
    return item;
});

const graphData = [
    {
        ViewsOn: 'Jan 23',
        Current: 232,
        Previous: 0,
    },
    {
        ViewsOn: 'Feb 23',
        Current: 241,
        Previous: 0,
    },
    {
        ViewsOn: 'Mar 23',
        Current: 291,
        Previous: 0,
    },
    {
        ViewsOn: 'Apr 23',
        Current: 101,
        Previous: 0,
    },
    {
        ViewsOn: 'May 23',
        Current: 318,
        Previous: 0,
    },
    {
        ViewsOn: 'Jun 23',
        Current: 205,
        Previous: 0,
    },
    {
        ViewsOn: 'Jul 23',
        Current: 372,
        Previous: 0,
    },
    {
        ViewsOn: 'Aug 23',
        Current: 341,
        Previous: 0,
    },
    {
        ViewsOn: 'Sep 23',
        Current: 387,
        Previous: 120,
    },
    {
        ViewsOn: 'Oct 23',
        Current: 220,
        Previous: 0,
    },
    {
        ViewsOn: 'Nov 23',
        Current: 372,
        Previous: 0,
    },
    {
        ViewsOn: 'Dec 23',
        Current: 321,
        Previous: 0,
    },
];


export { KPIdata, data, designData, summary, trackerColors, trendData, trendSummary, graphData };
