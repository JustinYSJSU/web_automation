# Sauce Demo Test Automation Suite

## Objective
- Implement an automated test suite for [Sauce Demo](https://www.saucedemo.com/), handling frontend / UI testing

## File Structure 
```
root/
├── pages/                    # Page Object Model (POM) classes
│   ├── sauce-demo-cart-page.ts 
│   ├── sauce-demo-inventory-page.ts
│   └── sauce-demo-login-page.ts
├── tests/                  
│   ├── checkout.spec.ts          
│   ├── inventory.spec.ts         
│   └── login.spec.ts
|── data/ # Holding test data for authentication
    |──login_data.json
├── fixtures/                 # Test fixture for re-use
└── README.md                 # Project documentation
```
  
