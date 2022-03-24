const user = {
  username: 'jessjelly',
  email: 'jessjelly@yahoo.com',
  avatarUrl: './profile_pic.jpeg',
  'form answers': {
    environmentalRating: 4,
    socialRating: 3,
    governanceRating: 2,
  },
  portfolios: {
    porfolio1: ['COST', 'ABT', 'ANET', 'FR', 'A'],
    portfolio2: ['WM', 'DHR', 'DAR', 'KEYS', 'GS'],
    portfolio3: ['FB', 'WCC', 'XLNX', 'CDNS', 'SMTC'],
  },
  achievements: [],
  newUser: false,
  theme: 'light',
};

const { portfolios } = user;

console.log(portfolios);

for (let key in portfolios) {
  const companyList = portfolios[key];
  console.log(companyList);
}
