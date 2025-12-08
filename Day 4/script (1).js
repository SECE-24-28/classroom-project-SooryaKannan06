// Professional Mobile Recharge App - JavaScript
// Application State
let currentUser = null;
let selectedOperator = '';
let selectedPlan = null;
let selectedPaymentMethod = '';
let transactions = [];

// Comprehensive Plan Data with OTT Benefits
const planData = {
    airtel: {
        popular: [
            { 
                price: '₹299', 
                validity: '28 days', 
                data: '2GB/day', 
                benefits: ['Unlimited calls', '100 SMS/day', 'Disney+ Hotstar Mobile', 'Airtel Thanks benefits'],
                ott: ['hotstar'],
                popular: true 
            },
            { 
                price: '₹199', 
                validity: '28 days', 
                data: '1.5GB/day', 
                benefits: ['Unlimited calls', '100 SMS/day', 'Airtel Thanks benefits'],
                ott: []
            },
            { 
                price: '₹449', 
                validity: '56 days', 
                data: '2GB/day', 
                benefits: ['Unlimited calls', '100 SMS/day', 'Amazon Prime Video Mobile'],
                ott: ['prime']
            }
        ],
        unlimited: [
            { 
                price: '₹599', 
                validity: '84 days', 
                data: '2GB/day', 
                benefits: ['Unlimited calls', '100 SMS/day', 'Netflix Mobile + Disney+ Hotstar'],
                ott: ['netflix', 'hotstar']
            },
            { 
                price: '₹719', 
                validity: '84 days', 
                data: '1.5GB/day', 
                benefits: ['Unlimited calls', '100 SMS/day', 'Amazon Prime + Netflix'],
                ott: ['prime', 'netflix']
            }
        ],
        data: [
            { 
                price: '₹19', 
                validity: '1 day', 
                data: '1GB', 
                benefits: ['Full speed data', 'No calls included'],
                ott: []
            },
            { 
                price: '₹48', 
                validity: '3 days', 
                data: '3GB', 
                benefits: ['Full speed data', 'No calls included'],
                ott: []
            }
        ],
        annual: [
            { 
                price: '₹2999', 
                validity: '365 days', 
                data: '2GB/day', 
                benefits: ['Unlimited calls', '100 SMS/day', 'All OTT apps included'],
                ott: ['netflix', 'hotstar', 'prime', 'sony']
            }
        ],
        ott: [
            { 
                price: '₹401', 
                validity: '28 days', 
                data: '3GB/day', 
                benefits: ['Unlimited calls', '100 SMS/day', 'Disney+ Hotstar + Amazon Prime'],
                ott: ['hotstar', 'prime']
            }
        ],
        talktime: [
            { 
                price: '₹10', 
                validity: '7 days', 
                data: 'No data', 
                benefits: ['₹7.47 talktime', 'Local/STD calls'],
                ott: []
            }
        ]
    },
    jio: {
        popular: [
            { 
                price: '₹239', 
                validity: '28 days', 
                data: '1.5GB/day', 
                benefits: ['Unlimited calls', '100 SMS/day', 'JioCinema Premium', 'JioApps'],
                ott: [],
                popular: true 
            },
            { 
                price: '₹149', 
                validity: '24 days', 
                data: '1GB/day', 
                benefits: ['Unlimited calls', '100 SMS/day', 'JioApps subscription'],
                ott: []
            }
        ],
        unlimited: [
            { 
                price: '₹719', 
                validity: '84 days', 
                data: '1.5GB/day', 
                benefits: ['Unlimited calls', '100 SMS/day', 'Netflix + Amazon Prime'],
                ott: ['netflix', 'prime']
            }
        ],
        data: [
            { 
                price: '₹15', 
                validity: '1 day', 
                data: '1GB', 
                benefits: ['High speed data', 'JioApps access'],
                ott: []
            }
        ],
        annual: [
            { 
                price: '₹2879', 
                validity: '365 days', 
                data: '2GB/day', 
                benefits: ['Unlimited calls', '100 SMS/day', 'Complete OTT package'],
                ott: ['netflix', 'hotstar', 'prime']
            }
        ],
        ott: [
            { 
                price: '₹449', 
                validity: '28 days', 
                data: '2GB/day', 
                benefits: ['Unlimited calls', '100 SMS/day', 'JioCinema + Disney+ Hotstar'],
                ott: ['hotstar']
            }
        ],
        talktime: [
            { 
                price: '₹12', 
                validity: '7 days', 
                data: 'No data', 
                benefits: ['₹9.12 talktime', 'Local/STD calls'],
                ott: []
            }
        ]
    },
    vi: {
        popular: [
            { 
                price: '₹269', 
                validity: '28 days', 
                data: '1.5GB/day', 
                benefits: ['Unlimited calls', '100 SMS/day', 'Vi Movies & TV'],
                ott: [],
                popular: true 
            }
        ],
        unlimited: [
            { 
                price: '₹699', 
                validity: '84 days', 
                data: '1.5GB/day', 
                benefits: ['Unlimited calls', '100 SMS/day', 'Disney+ Hotstar Mobile'],
                ott: ['hotstar']
            }
        ],
        data: [
            { 
                price: '₹17', 
                validity: '1 day', 
                data: '1GB', 
                benefits: ['High speed data', 'Vi services'],
                ott: []
            }
        ],
        annual: [
            { 
                price: '₹3099', 
                validity: '365 days', 
                data: '1.5GB/day', 
                benefits: ['Unlimited calls', '100 SMS/day', 'Annual benefits'],
                ott: []
            }
        ],
        ott: [
            { 
                price: '₹475', 
                validity: '28 days', 
                data: '2GB/day', 
                benefits: ['Unlimited calls', '100 SMS/day', 'Vi Movies & TV + Disney+ Hotstar'],
                ott: ['hotstar']
            }
        ],
        talktime: [
            { 
                price: '₹11', 
                validity: '7 days', 
                data: 'No data', 
                benefits: ['₹8.36 talktime', 'Local/STD calls'],
                ott: []
            }
        ]
    },
    bsnl: {
        popular: [
            { 
                price: '₹247', 
                validity: '30 days', 
                data: '1.5GB/day', 
                benefits: ['Unlimited calls', '100 SMS/day', 'BSNL Tunes'],
                ott: [],
                popular: true 
            }
        ],
        unlimited: [
            { 
                price: '₹797', 
                validity: '160 days', 
                data: '1GB/day', 
                benefits: ['Unlimited calls', '100 SMS/day', 'Maximum validity'],
                ott: []
            }
        ],
        data: [
            { 
                price: '₹22', 
                validity: '1 day', 
                data: '1GB', 
                benefits: ['Data only plan', 'Government network'],
                ott: []
            }
        ],
        annual: [
            { 
                price: '₹2399', 
                validity: '365 days', 
                data: '1GB/day', 
                benefits: ['Unlimited calls', '100 SMS/day', 'Annual plan'],
                ott: []
            }
        ],
        ott: [],
        talktime: [
            { 
                price: '₹10', 
                validity: '7 days', 
                data: 'No data', 
                benefits: ['₹7.50 talktime', 'Local/STD calls'],
                ott: []
            }
        ]
    }
};

// Operator Detection Patterns
const operatorPatterns = {
    airtel: ['70', '80', '81', '82', '83', '84', '85', '86', '87', '88', '89'],
    jio: ['60', '61', '62', '63', '64', '65', '66', '67', '68', '69'],
    vi: ['90', '91', '92', '93', '94', '95', '96', '97', '98', '99'],
    bsnl: ['94', '95', '96', '97', '98', '99']
};