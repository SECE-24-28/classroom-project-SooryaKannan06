// Mock API Service for Mobile Recharge Application

class MockAPI {
    constructor() {
        this.baseURL = 'https://api.mobilerecharge.com'; // Mock base URL
        this.users = JSON.parse(localStorage.getItem('mockUsers') || '[]');
        this.transactions = JSON.parse(localStorage.getItem('mockTransactions') || '[]');
    }

    // Simulate API delay
    delay(ms = 1000) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    // Generate random transaction ID
    generateTransactionId() {
        return 'TXN' + Date.now() + Math.floor(Math.random() * 1000);
    }

    // User Registration API
    async registerUser(userData) {
        await this.delay(1500);
        
        // Check if user already exists
        const existingUser = this.users.find(user => 
            user.email === userData.email || user.mobile === userData.mobile
        );
        
        if (existingUser) {
            throw new Error('User already exists with this email or mobile number');
        }

        const newUser = {
            id: Date.now(),
            ...userData,
            createdAt: new Date().toISOString()
        };

        this.users.push(newUser);
        localStorage.setItem('mockUsers', JSON.stringify(this.users));

        return {
            success: true,
            message: 'User registered successfully',
            user: { id: newUser.id, name: newUser.name, email: newUser.email }
        };
    }

    // User Login API
    async loginUser(credentials) {
        await this.delay(1200);
        
        const user = this.users.find(u => 
            (u.name === credentials.username || u.mobile === credentials.username) && 
            u.password === credentials.password
        );

        if (!user) {
            throw new Error('Invalid credentials');
        }

        return {
            success: true,
            message: 'Login successful',
            user: { id: user.id, name: user.name, email: user.email },
            token: 'mock_jwt_token_' + Date.now()
        };
    }

    // Get Mobile Operator API
    async getMobileOperator(mobileNumber) {
        await this.delay(800);
        
        const operators = {
            '9': ['airtel', 'vi'],
            '8': ['jio', 'airtel'],
            '7': ['jio', 'vi'],
            '6': ['bsnl', 'airtel']
        };
        
        const firstDigit = mobileNumber.charAt(0);
        const possibleOperators = operators[firstDigit] || ['airtel'];
        const detectedOperator = possibleOperators[Math.floor(Math.random() * possibleOperators.length)];

        return {
            success: true,
            operator: detectedOperator,
            circle: 'Karnataka',
            plans: this.getOperatorPlans(detectedOperator)
        };
    }

    // Get Operator Plans
    getOperatorPlans(operator) {
        const plans = {
            airtel: [
                { amount: 155, validity: '24 days', data: '1GB/day', description: 'Smart Recharge' },
                { amount: 199, validity: '28 days', data: '2GB/day', description: 'Popular Plan' },
                { amount: 265, validity: '30 days', data: '1.5GB/day', description: 'Data Booster' },
                { amount: 399, validity: '56 days', data: '2.5GB/day', description: 'Long Validity' },
                { amount: 479, validity: '56 days', data: '1.5GB/day', description: 'Entertainment Pack' },
                { amount: 599, validity: '84 days', data: '2GB/day', description: 'Super Saver' },
                { amount: 719, validity: '84 days', data: '1.5GB/day', description: 'Premium Plan' },
                { amount: 999, validity: '84 days', data: '2.5GB/day', description: 'Ultimate Pack' },
                { amount: 1799, validity: '365 days', data: '24GB', description: 'Annual Plan' }
            ],
            jio: [
                { amount: 149, validity: '24 days', data: '1GB/day', description: 'Basic Plan' },
                { amount: 199, validity: '23 days', data: '2GB/day', description: 'Popular Choice' },
                { amount: 239, validity: '28 days', data: '1.5GB/day', description: 'Monthly Pack' },
                { amount: 349, validity: '56 days', data: '2GB/day', description: 'Long Term' },
                { amount: 449, validity: '56 days', data: '2GB/day', description: 'Entertainment' },
                { amount: 549, validity: '84 days', data: '1.5GB/day', description: 'Quarterly Plan' },
                { amount: 719, validity: '84 days', data: '1.5GB/day', description: 'Premium Pack' },
                { amount: 999, validity: '84 days', data: '2.5GB/day', description: 'Max Plan' },
                { amount: 2999, validity: '365 days', data: '2.5GB/day', description: 'Annual Unlimited' }
            ],
            vi: [
                { amount: 179, validity: '28 days', data: '1GB/day', description: 'Starter Pack' },
                { amount: 219, validity: '28 days', data: '1GB/day', description: 'Value Plan' },
                { amount: 299, validity: '28 days', data: '1.5GB/day', description: 'Smart Choice' },
                { amount: 379, validity: '56 days', data: '1.5GB/day', description: 'Double Validity' },
                { amount: 479, validity: '56 days', data: '1.5GB/day', description: 'Entertainment Plus' },
                { amount: 579, validity: '84 days', data: '1.5GB/day', description: 'Long Duration' },
                { amount: 699, validity: '84 days', data: '1.5GB/day', description: 'Premium Choice' },
                { amount: 899, validity: '84 days', data: '2GB/day', description: 'Max Value' },
                { amount: 1799, validity: '365 days', data: '24GB', description: 'Yearly Plan' }
            ],
            bsnl: [
                { amount: 99, validity: '28 days', data: '1GB/day', description: 'Budget Plan' },
                { amount: 153, validity: '35 days', data: '1GB/day', description: 'Extended Validity' },
                { amount: 187, validity: '28 days', data: '2GB/day', description: 'Data Rich' },
                { amount: 199, validity: '56 days', data: '1GB/day', description: 'Long Term Basic' },
                { amount: 297, validity: '54 days', data: '1GB/day', description: 'Value Pack' },
                { amount: 399, validity: '84 days', data: '1GB/day', description: 'Quarterly Basic' },
                { amount: 485, validity: '90 days', data: '1GB/day', description: 'Extended Quarter' },
                { amount: 797, validity: '160 days', data: '1GB/day', description: 'Long Duration' },
                { amount: 1499, validity: '300 days', data: '1GB/day', description: 'Almost Annual' }
            ]
        };
        return plans[operator] || plans.airtel;
    }

    // Process Recharge API
    async processRecharge(rechargeData) {
        await this.delay(2000);
        
        // Simulate random success/failure (95% success rate)
        const isSuccess = Math.random() > 0.05;
        
        if (!isSuccess) {
            throw new Error('Recharge failed due to operator network issue. Please try again.');
        }

        const transaction = {
            id: this.generateTransactionId(),
            ...rechargeData,
            status: 'Success',
            timestamp: new Date().toISOString(),
            operatorRef: 'OP' + Date.now()
        };

        this.transactions.push(transaction);
        localStorage.setItem('mockTransactions', JSON.stringify(this.transactions));

        return {
            success: true,
            message: 'Recharge completed successfully',
            transaction: transaction
        };
    }

    // Get Transaction History API
    async getTransactionHistory(userId, filters = {}) {
        await this.delay(600);
        
        let userTransactions = this.transactions.filter(t => t.userId === userId);
        
        if (filters.status) {
            userTransactions = userTransactions.filter(t => t.status === filters.status);
        }
        
        if (filters.operator) {
            userTransactions = userTransactions.filter(t => t.operator === filters.operator);
        }
        
        if (filters.fromDate) {
            userTransactions = userTransactions.filter(t => new Date(t.timestamp) >= new Date(filters.fromDate));
        }

        return {
            success: true,
            transactions: userTransactions.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp))
        };
    }

    // Check Transaction Status API
    async checkTransactionStatus(transactionId) {
        await this.delay(500);
        
        const transaction = this.transactions.find(t => t.id === transactionId);
        
        if (!transaction) {
            throw new Error('Transaction not found');
        }

        return {
            success: true,
            transaction: transaction
        };
    }

    // Get Available Offers API
    async getOffers() {
        await this.delay(700);
        
        return {
            success: true,
            offers: [
                {
                    id: 1,
                    title: '10% Cashback',
                    description: 'Get 10% cashback on recharges above ₹200',
                    minAmount: 200,
                    maxCashback: 50,
                    validTill: '2024-12-31'
                },
                {
                    id: 2,
                    title: 'First Recharge Bonus',
                    description: 'Get ₹25 bonus on your first recharge',
                    minAmount: 100,
                    maxCashback: 25,
                    validTill: '2024-12-31'
                }
            ]
        };
    }
}

// Create global instance
window.mockAPI = new MockAPI();