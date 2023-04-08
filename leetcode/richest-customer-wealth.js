const maximumWealth = (accounts) => {
    let wealth = [];
    for (let i = 0; i < accounts.length; i++) {
        wealth[i] = accounts[i][0];
        for (let j = 1; j < accounts[i].length; j++) {
            wealth[i] = wealth[i] + accounts[i][j];
        }
    }
    return Math.max(...wealth)
};